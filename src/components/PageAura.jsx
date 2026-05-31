import { useLocation } from 'react-router-dom'
import './PageAura.css'

const AURAS = {
  '/':            { tl: '#8855ff', br: '#d4a843' },
  '/explore':     { tl: '#3388cc', br: '#8855ff' },
  '/mystik':      { tl: '#d4a843', br: '#6633aa' },
  '/search':      { tl: '#5588ff', br: '#aa44ff' },
  '/tarot':       { tl: '#c050a0', br: '#6633aa' },
  '/chakra':      { tl: '#50c080', br: '#3388cc' },
  '/birthchart':  { tl: '#9060e0', br: '#d4a843' },
  '/numerology':  { tl: '#d4a843', br: '#aa5500' },
  '/freemasonry': { tl: '#d4a843', br: '#888800' },
  '/dreams':      { tl: '#7050c0', br: '#3020a0' },
  '/ritual':      { tl: '#d06020', br: '#d4a843' },
  '/maya':        { tl: '#40b080', br: '#206040' },
  '/higherself':  { tl: '#9050d0', br: '#5020a0' },
  '/intentions':  { tl: '#5070d0', br: '#3050a0' },
  '/quantum':     { tl: '#8055ff', br: '#3344cc' },
  '/consciousness':{ tl: '#50b0d0', br: '#2060a0' },
  '/origins':     { tl: '#d4a843', br: '#884400' },
  '/torah':       { tl: '#4caf6a', br: '#226633' },
  '/community':   { tl: '#5080d0', br: '#3355aa' },
  '/profile':     { tl: '#aa77ff', br: '#6633cc' },
}

function getAura(path) {
  if (AURAS[path]) return AURAS[path]
  for (const key of Object.keys(AURAS)) {
    if (key !== '/' && path.startsWith(key)) return AURAS[key]
  }
  return { tl: '#8855ff', br: '#d4a843' }
}

export default function PageAura() {
  const { pathname } = useLocation()
  const { tl, br } = getAura(pathname)

  return (
    <>
      <div className="page-aura page-aura-tl" style={{ background: tl }} />
      <div className="page-aura page-aura-br" style={{ background: br }} />
    </>
  )
}
