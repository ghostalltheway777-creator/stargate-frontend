import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import './PageTransition.css'

export default function PageTransition() {
  const location = useLocation()
  const overlayRef = useRef(null)
  const prevPath = useRef(location.pathname)

  useEffect(() => {
    if (prevPath.current === location.pathname) return
    prevPath.current = location.pathname
    const el = overlayRef.current
    if (!el) return
    el.classList.remove('transit-active')
    void el.offsetWidth
    el.classList.add('transit-active')
  }, [location.pathname])

  return (
    <div ref={overlayRef} className="page-transit">
      <div className="transit-ring t-r1" />
      <div className="transit-ring t-r2" />
      <div className="transit-ring t-r3" />
      <div className="transit-core" />
    </div>
  )
}
