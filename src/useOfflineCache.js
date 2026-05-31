import { useState, useEffect } from 'react'

const CACHE_PREFIX = 'sg_cache_'
const MAX_CACHE_AGE = 7 * 24 * 60 * 60 * 1000 // 7 dage

export function cacheKey(url, body) {
  return CACHE_PREFIX + btoa(url + JSON.stringify(body || '')).slice(0, 40)
}

export function saveToCache(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify({ data, ts: Date.now() }))
  } catch {}
}

export function loadFromCache(key) {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return null
    const { data, ts } = JSON.parse(raw)
    if (Date.now() - ts > MAX_CACHE_AGE) { localStorage.removeItem(key); return null }
    return data
  } catch { return null }
}

export function useOnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine)
  useEffect(() => {
    const on  = () => setOnline(true)
    const off = () => setOnline(false)
    window.addEventListener('online',  on)
    window.addEventListener('offline', off)
    return () => { window.removeEventListener('online', on); window.removeEventListener('offline', off) }
  }, [])
  return online
}

// Fetch wrapper med offline fallback
export async function fetchWithCache(url, options = {}) {
  const key = cacheKey(url, options.body)
  if (!navigator.onLine) {
    const cached = loadFromCache(key)
    if (cached) return { data: cached, fromCache: true }
    throw new Error('offline')
  }
  const res = await fetch(url, options)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const data = await res.json()
  saveToCache(key, data)
  return { data, fromCache: false }
}
