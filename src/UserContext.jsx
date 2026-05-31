import React, { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext(null)

function genUUID() {
  return crypto.randomUUID ? crypto.randomUUID()
    : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
      })
}

const DEFAULT_PROFILE = {
  displayName: '', birthdate: '', city: 'Copenhagen',
  nation: 'DK', tradition: '', email: '',
}

export function UserProvider({ children }) {
  const [uuid] = useState(() => {
    let id = localStorage.getItem('sg_uuid')
    if (!id) { id = genUUID(); localStorage.setItem('sg_uuid', id) }
    return id
  })

  const [profile, setProfile] = useState(() => {
    try {
      const s = localStorage.getItem('sg_profile')
      return s ? JSON.parse(s) : DEFAULT_PROFILE
    } catch { return DEFAULT_PROFILE }
  })

  const [personalDay, setPersonalDay] = useState(null)

  useEffect(() => {
    if (!profile.birthdate) return
    fetch(`/api/personal-day/${profile.birthdate}`)
      .then(r => r.json())
      .then(setPersonalDay)
      .catch(() => {})
  }, [profile.birthdate])

  const [uuidState, setUuidState] = useState(uuid)

  function saveProfile(updates, pin) {
    const next = { ...profile, ...updates }
    setProfile(next)
    localStorage.setItem('sg_profile', JSON.stringify(next))
    const body = {
      uuid: uuidState,
      display_name: next.displayName,
      birthdate: next.birthdate,
      city: next.city,
      nation: next.nation,
      tradition: next.tradition,
      email: next.email,
    }
    if (pin) body.pin = pin
    fetch('/api/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }).catch(() => {})
    return next
  }

  async function loginWithPin(displayName, pin) {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ display_name: displayName, pin }),
    })
    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw new Error(err.detail || 'Login fejlede')
    }
    const data = await res.json()
    // restore uuid and profile
    localStorage.setItem('sg_uuid', data.uuid)
    setUuidState(data.uuid)
    const restored = {
      displayName: data.display_name || displayName,
      birthdate:   data.birthdate   || '',
      city:        data.city        || 'Copenhagen',
      nation:      data.nation      || 'DK',
      tradition:   data.tradition   || '',
      email:       data.email       || '',
    }
    setProfile(restored)
    localStorage.setItem('sg_profile', JSON.stringify(restored))
    return restored
  }

  async function signupWithPin(displayName, pin, existingUuid) {
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ display_name: displayName, pin, uuid: existingUuid }),
    })
    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw new Error(err.detail || 'Oprettelse fejlede')
    }
    return await res.json()
  }

  function logout() {
    const newId = genUUID()
    localStorage.setItem('sg_uuid', newId)
    localStorage.removeItem('sg_profile')
    setUuidState(newId)
    setProfile(DEFAULT_PROFILE)
    setPersonalDay(null)
  }

  const isSetup = Boolean(profile.displayName && profile.birthdate)

  const [isPremium, setIsPremium] = useState(false)

  useEffect(() => {
    if (!uuidState) return
    fetch(`/api/stripe/status/${uuidState}`)
      .then(r => r.json())
      .then(d => setIsPremium(Boolean(d.premium)))
      .catch(() => {})
  }, [uuidState])

  return (
    <UserContext.Provider value={{
      uuid: uuidState, profile, saveProfile, personalDay, isSetup,
      loginWithPin, signupWithPin, logout, isPremium,
    }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
