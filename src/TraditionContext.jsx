import React, { createContext, useContext, useState } from 'react'

const TraditionContext = createContext(null)

const ALL_TRADITIONS = [
  'Egyptisk', 'Sumerisk', 'Nordisk', 'Maya', 'Zoroastrisk',
  'Islam', 'Kristendom', 'Jødedom', 'Hinduisme', 'Buddhisme',
  'Taoisme', 'Sikhisme', 'Hermetisme', 'Kabbalah', 'Gnostisk',
]

export function TraditionProvider({ children }) {
  const [myTradition, setMyTradition] = useState(
    () => localStorage.getItem('myTradition') || null
  )

  const choose = (t) => {
    setMyTradition(t)
    if (t) localStorage.setItem('myTradition', t)
    else localStorage.removeItem('myTradition')
  }

  return (
    <TraditionContext.Provider value={{ myTradition, choose, ALL_TRADITIONS }}>
      {children}
    </TraditionContext.Provider>
  )
}

export function useTradition() {
  return useContext(TraditionContext)
}
