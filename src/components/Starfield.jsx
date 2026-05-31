import { useEffect, useRef } from 'react'

export default function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const STARS = 160
    const stars = []

    function resize() {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }

    function init() {
      stars.length = 0
      for (let i = 0; i < STARS; i++) {
        stars.push({
          x:     Math.random() * canvas.width,
          y:     Math.random() * canvas.height,
          r:     Math.random() * 1.4 + 0.3,
          speed: Math.random() * 0.18 + 0.04,
          alpha: Math.random(),
          da:    (Math.random() - 0.5) * 0.008,
          gold:  Math.random() < 0.12,
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const s of stars) {
        s.alpha += s.da
        if (s.alpha <= 0 || s.alpha >= 1) s.da *= -1
        s.alpha = Math.max(0, Math.min(1, s.alpha))
        s.y += s.speed
        if (s.y > canvas.height) { s.y = 0; s.x = Math.random() * canvas.width }

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        if (s.gold) {
          ctx.fillStyle = `rgba(212,168,67,${s.alpha * 0.8})`
        } else {
          ctx.fillStyle = `rgba(200,190,255,${s.alpha * 0.7})`
        }
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    init()
    draw()

    window.addEventListener('resize', () => { resize(); init() })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.7,
      }}
    />
  )
}
