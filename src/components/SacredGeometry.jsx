import React from 'react'

const sq3 = Math.sqrt(3)

// ── BACKGROUNDS ──────────────────────────────────────────────────────────────

export function FlowerOfLife({ size = 280, color = '#8855ff', opacity = 0.12 }) {
  const r = size * 0.21
  const cx = size / 2
  const cy = size / 2
  const circles = [
    [cx, cy],
    [cx + r, cy], [cx - r, cy],
    [cx + r / 2, cy + r * sq3 / 2], [cx - r / 2, cy + r * sq3 / 2],
    [cx + r / 2, cy - r * sq3 / 2], [cx - r / 2, cy - r * sq3 / 2],
    // outer ring
    [cx + r * 2, cy], [cx - r * 2, cy],
    [cx + r * 3/2, cy + r * sq3 / 2], [cx - r * 3/2, cy + r * sq3 / 2],
    [cx + r * 3/2, cy - r * sq3 / 2], [cx - r * 3/2, cy - r * sq3 / 2],
    [cx + r, cy + r * sq3], [cx - r, cy + r * sq3],
    [cx + r, cy - r * sq3], [cx - r, cy - r * sq3],
    [cx, cy + r * sq3], [cx, cy - r * sq3],
  ]
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ opacity }}>
      <defs>
        <clipPath id="fol-clip">
          <circle cx={cx} cy={cy} r={cx * 0.96} />
        </clipPath>
      </defs>
      <g stroke={color} fill="none" strokeWidth="0.9" clipPath="url(#fol-clip)">
        {circles.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={r} />)}
      </g>
    </svg>
  )
}

export function MetatronCube({ size = 320, color = '#d4a843', opacity = 0.09 }) {
  const r = size * 0.115
  const cx = size / 2
  const cy = size / 2
  const R = r * 2
  const centers = [
    [cx, cy],
    [cx + R, cy], [cx - R, cy],
    [cx + R/2, cy + R*sq3/2], [cx - R/2, cy + R*sq3/2],
    [cx + R/2, cy - R*sq3/2], [cx - R/2, cy - R*sq3/2],
    [cx + R*2, cy], [cx - R*2, cy],
    [cx + R*3/2, cy + R*sq3/2], [cx - R*3/2, cy + R*sq3/2],
    [cx + R*3/2, cy - R*sq3/2], [cx - R*3/2, cy - R*sq3/2],
  ]
  const lines = []
  for (let i = 0; i < centers.length; i++)
    for (let j = i + 1; j < centers.length; j++)
      lines.push([centers[i], centers[j]])
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ opacity }}>
      <defs>
        <clipPath id="met-clip">
          <circle cx={cx} cy={cy} r={cx * 0.94} />
        </clipPath>
      </defs>
      <g clipPath="url(#met-clip)">
        {lines.map(([[x1,y1],[x2,y2]], i) =>
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={color} strokeWidth="0.35" opacity="0.55" />)}
        {centers.map(([x,y],i) =>
          <circle key={i} cx={x} cy={y} r={r}
            fill="none" stroke={color} strokeWidth="0.55" />)}
      </g>
    </svg>
  )
}

export function SriYantra({ size = 220, color = '#ff6688', opacity = 0.13 }) {
  const cx = size / 2, cy = size / 2, r = size * 0.42
  const up = s => {
    const h = r * s * sq3 / 2
    return `${cx},${cy - r*s} ${cx - r*s*0.866},${cy + h*0.5} ${cx + r*s*0.866},${cy + h*0.5}`
  }
  const down = s => {
    const h = r * s * sq3 / 2
    return `${cx},${cy + r*s} ${cx - r*s*0.866},${cy - h*0.5} ${cx + r*s*0.866},${cy - h*0.5}`
  }
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ opacity }}>
      <g fill="none" stroke={color} strokeWidth="1.1">
        {[1, 0.82, 0.64, 0.46].map(s => (
          <React.Fragment key={s}>
            <polygon points={up(s)} />
            <polygon points={down(s)} />
          </React.Fragment>
        ))}
        <circle cx={cx} cy={cy} r={r * 1.04} />
        <circle cx={cx} cy={cy} r={r * 1.12} />
        {Array.from({length: 8}, (_, i) => (
          <line key={i}
            x1={cx + r*1.04*Math.cos(i*Math.PI/4)}
            y1={cy + r*1.04*Math.sin(i*Math.PI/4)}
            x2={cx + r*1.12*Math.cos(i*Math.PI/4)}
            y2={cy + r*1.12*Math.sin(i*Math.PI/4)}
          />
        ))}
      </g>
    </svg>
  )
}

// ── TRADITION SYMBOLS ─────────────────────────────────────────────────────────

export function Ankh({ size = 72, color = '#ffcc44' }) {
  const cx = size/2, cy = size/2
  const lw = size * 0.11
  const lr = size * 0.24
  const sh = size * 0.35
  const bw = size * 0.38
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <ellipse cx={cx} cy={cy - sh*0.28} rx={lr} ry={lr*0.82}
        fill="none" stroke={color} strokeWidth={lw * 0.85} />
      <rect x={cx - lw/2} y={cy + lr*0.28} width={lw} height={sh}
        rx={lw/4} fill={color} />
      <rect x={cx - bw/2} y={cy - lw/2 + lr*0.18} width={bw} height={lw}
        rx={lw/4} fill={color} />
    </svg>
  )
}

export function StarOfIshtar({ size = 72, color = '#ffe066' }) {
  const cx = size/2, cy = size/2
  const r1 = size * 0.44, r2 = size * 0.18
  const pts = Array.from({length: 16}, (_, i) => {
    const a = i * Math.PI / 8 - Math.PI / 16
    const r = i % 2 === 0 ? r1 : r2
    return `${cx + r*Math.cos(a)},${cy + r*Math.sin(a)}`
  }).join(' ')
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <polygon points={pts} fill={color} opacity="0.9" />
      <circle cx={cx} cy={cy} r={size*0.09} fill="#050510" opacity="0.7" />
    </svg>
  )
}

export function Valknut({ size = 72, color = '#aaddff' }) {
  const cx = size/2, cy = size/2
  const tri = (offset, scale) => Array.from({length: 3}, (_, i) => {
    const a = offset + i * 2 * Math.PI / 3 - Math.PI / 2
    return `${cx + size*scale*Math.cos(a)},${cy + size*scale*Math.sin(a)}`
  }).join(' ')
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <g fill="none" stroke={color} strokeWidth="2.5">
        <polygon points={tri(0, 0.43)} />
        <polygon points={tri(Math.PI/3, 0.33)} />
        <polygon points={tri(2*Math.PI/3, 0.23)} />
      </g>
    </svg>
  )
}

export function MayaSun({ size = 72, color = '#ff8833' }) {
  const cx = size/2, cy = size/2
  const r = size * 0.34
  const rays = Array.from({length: 20}, (_, i) => {
    const a = i * Math.PI / 10
    return {
      x1: cx + r*1.06*Math.cos(a), y1: cy + r*1.06*Math.sin(a),
      x2: cx + r*1.28*Math.cos(a), y2: cy + r*1.28*Math.sin(a)
    }
  })
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {rays.map((ray, i) =>
        <line key={i} x1={ray.x1} y1={ray.y1} x2={ray.x2} y2={ray.y2}
          stroke={color} strokeWidth="2" opacity="0.7" />)}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth="2.5" />
      <circle cx={cx} cy={cy} r={r*0.5} fill={color} opacity="0.7" />
      {Array.from({length: 8}, (_, i) => {
        const a = i * Math.PI / 4
        return <line key={i}
          x1={cx + r*0.5*Math.cos(a)} y1={cy + r*0.5*Math.sin(a)}
          x2={cx + r*0.95*Math.cos(a)} y2={cy + r*0.95*Math.sin(a)}
          stroke={color} strokeWidth="1.5" opacity="0.6" />
      })}
    </svg>
  )
}

export function Faravahar({ size = 72, color = '#ffaa55' }) {
  const cx = size/2, cy = size/2
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy*0.52} r={size*0.12}
        fill="none" stroke={color} strokeWidth="2.2" />
      <path d={`M${cx-2} ${cy*0.4} L${cx-2} ${cy*0.88} L${cx-10} ${cy*1.1} L${cx} ${cy} L${cx+10} ${cy*1.1} L${cx+2} ${cy*0.88} L${cx+2} ${cy*0.4}`}
        fill={color} opacity="0.8" />
      {[-1,0,1,2,3].map(i => (
        <React.Fragment key={i}>
          <line x1={cx-size*0.13-i*size*0.07} y1={cy*0.56}
            x2={cx-size*0.38-i*size*0.04} y2={cy*0.72+i*3}
            stroke={color} strokeWidth="1.5" opacity="0.7" />
          <line x1={cx+size*0.13+i*size*0.07} y1={cy*0.56}
            x2={cx+size*0.38+i*size*0.04} y2={cy*0.72+i*3}
            stroke={color} strokeWidth="1.5" opacity="0.7" />
        </React.Fragment>
      ))}
    </svg>
  )
}

export function IslamicStar({ size = 72, color = '#55aaff' }) {
  const cx = size/2, cy = size/2
  const r1 = size*0.42, r2 = size*0.2
  const pts = Array.from({length: 16}, (_, i) => {
    const a = i * Math.PI / 8 - Math.PI / 16
    const r = i % 2 === 0 ? r1 : r2
    return `${cx + r*Math.cos(a)},${cy + r*Math.sin(a)}`
  }).join(' ')
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <polygon points={pts} fill="none" stroke={color} strokeWidth="2" />
      <circle cx={cx} cy={cy} r={size*0.13} fill="none" stroke={color} strokeWidth="1.5" opacity="0.7" />
    </svg>
  )
}

export function VesicaPiscis({ size = 72, color = '#ff9944' }) {
  const cx = size/2, cy = size/2, r = size*0.29
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx - r*0.42} cy={cy} r={r} fill="none" stroke={color} strokeWidth="2.2" />
      <circle cx={cx + r*0.42} cy={cy} r={r} fill="none" stroke={color} strokeWidth="2.2" />
      <circle cx={cx} cy={cy} r={size*0.08} fill={color} opacity="0.6" />
    </svg>
  )
}

export function StarOfDavid({ size = 72, color = '#d4a843' }) {
  const cx = size/2, cy = size/2, r = size*0.39
  const up = Array.from({length:3},(_,i) => {
    const a = i*2*Math.PI/3 - Math.PI/2
    return `${cx+r*Math.cos(a)},${cy+r*Math.sin(a)}`
  }).join(' ')
  const down = Array.from({length:3},(_,i) => {
    const a = i*2*Math.PI/3 + Math.PI/2
    return `${cx+r*Math.cos(a)},${cy+r*Math.sin(a)}`
  }).join(' ')
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <g fill="none" stroke={color} strokeWidth="2.4">
        <polygon points={up} />
        <polygon points={down} />
      </g>
      <circle cx={cx} cy={cy} r={size*0.09} fill={color} opacity="0.5" />
    </svg>
  )
}

export function OmSymbol({ size = 72, color = '#ff6688' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 72 72">
      <text x="50%" y="60%" textAnchor="middle" fontSize="46"
        fill={color} fontFamily="serif" dominantBaseline="middle">ॐ</text>
    </svg>
  )
}

export function DharmaWheel({ size = 72, color = '#44ddbb' }) {
  const cx = size/2, cy = size/2, r = size*0.41
  const hub = size*0.09
  const spoke = size*0.34
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth="2.8" />
      <circle cx={cx} cy={cy} r={r*0.55} fill="none" stroke={color} strokeWidth="1.2" opacity="0.5" />
      <circle cx={cx} cy={cy} r={hub} fill={color} />
      {Array.from({length:8},(_,i) => {
        const a = i*Math.PI/4
        return <line key={i}
          x1={cx+hub*Math.cos(a)} y1={cy+hub*Math.sin(a)}
          x2={cx+spoke*Math.cos(a)} y2={cy+spoke*Math.sin(a)}
          stroke={color} strokeWidth="2.2" />
      })}
    </svg>
  )
}

export function YinYang({ size = 72, color = '#88ffdd' }) {
  const cx = size/2, cy = size/2, r = size*0.41
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <clipPath id={`yy-${size}`}>
          <rect x={0} y={0} width={size} height={cy} />
        </clipPath>
      </defs>
      <circle cx={cx} cy={cy} r={r} fill="#1a1a2e" />
      <circle cx={cx} cy={cy} r={r} fill={color} opacity="0.6" clipPath={`url(#yy-${size})`} />
      <circle cx={cx} cy={cy - r/2} r={r/4} fill={color} opacity="0.7" />
      <circle cx={cx} cy={cy + r/2} r={r/4} fill="#1a1a2e" />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth="1.8" />
      <path d={`M ${cx} ${cy-r} A ${r/2} ${r/2} 0 0 1 ${cx} ${cy} A ${r/2} ${r/2} 0 0 0 ${cx} ${cy+r}`}
        fill="none" stroke={color} strokeWidth="0.5" opacity="0.4" />
    </svg>
  )
}

export function AllSeeingEye({ size = 72, color = '#aa77ff' }) {
  const cx = size/2, cy = size/2
  const ew = size*0.38, eh = size*0.2
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <polygon
        points={`${cx},${cy-size*0.37} ${cx-size*0.41},${cy+size*0.27} ${cx+size*0.41},${cy+size*0.27}`}
        fill="none" stroke={color} strokeWidth="2" />
      <path d={`M${cx-ew} ${cy} Q${cx} ${cy-eh} ${cx+ew} ${cy} Q${cx} ${cy+eh} ${cx-ew} ${cy}`}
        fill="none" stroke={color} strokeWidth="1.6" />
      <circle cx={cx} cy={cy} r={size*0.065} fill={color} />
      {Array.from({length:8},(_,i) => {
        const a = i*Math.PI/4
        return <line key={i}
          x1={cx+size*0.15*Math.cos(a)} y1={cy+size*0.15*Math.sin(a)}
          x2={cx+size*0.22*Math.cos(a)} y2={cy+size*0.22*Math.sin(a)}
          stroke={color} strokeWidth="1" opacity="0.45" />
      })}
    </svg>
  )
}

export function Ouroboros({ size = 72, color = '#cc88ff' }) {
  const cx = size/2, cy = size/2, r = size*0.36
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={color}
        strokeWidth="6" strokeLinecap="round"
        strokeDasharray={`${r*2*Math.PI*0.88} ${r*2*Math.PI*0.12}`} />
      {/* Head / tail indicator */}
      <circle cx={cx + r} cy={cy} r={size*0.055} fill={color} opacity="0.8" />
      <circle cx={cx} cy={cy} r={size*0.08} fill="none" stroke={color} strokeWidth="1.2" opacity="0.4" />
    </svg>
  )
}

export function Khanda({ size = 72, color = '#ffaa33' }) {
  const cx = size/2, cy = size/2
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={size*0.28} fill="none" stroke={color} strokeWidth="3" opacity="0.8" />
      <rect x={cx-2.5} y={size*0.12} width={5} height={size*0.72} rx={2} fill={color} />
      <path d={`M${cx-size*0.35} ${size*0.22} C${cx-size*0.08} ${cy*0.8} ${cx-size*0.08} ${cy} ${cx} ${size*0.82}`}
        fill="none" stroke={color} strokeWidth="2.5" />
      <path d={`M${cx+size*0.35} ${size*0.22} C${cx+size*0.08} ${cy*0.8} ${cx+size*0.08} ${cy} ${cx} ${size*0.82}`}
        fill="none" stroke={color} strokeWidth="2.5" />
    </svg>
  )
}

export function GnosticCross({ size = 72, color = '#cc77ff' }) {
  const cx = size/2, cy = size/2, r = size*0.38
  const pts = Array.from({length: 4}, (_, i) => {
    const a = i * Math.PI / 2 - Math.PI / 4
    return `${cx + r*Math.cos(a)},${cy + r*Math.sin(a)}`
  }).join(' ')
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <line x1={cx} y1={size*0.06} x2={cx} y2={size*0.94} stroke={color} strokeWidth="2.5" />
      <line x1={size*0.06} y1={cy} x2={size*0.94} y2={cy} stroke={color} strokeWidth="2.5" />
      <circle cx={cx} cy={cy} r={size*0.1} fill={color} opacity="0.5" />
      <polygon points={pts} fill="none" stroke={color} strokeWidth="1.2" opacity="0.5" />
    </svg>
  )
}

export function TreeOfLife({ size = 72, color = '#d4a843' }) {
  const cx = size/2, cy = size/2
  const nodes = [
    [cx, size*0.08],
    [cx-size*0.28, size*0.22], [cx+size*0.28, size*0.22],
    [cx-size*0.34, size*0.44], [cx, size*0.38], [cx+size*0.34, size*0.44],
    [cx-size*0.28, size*0.64], [cx+size*0.28, size*0.64],
    [cx-size*0.18, size*0.8], [cx+size*0.18, size*0.8],
    [cx, size*0.92],
  ]
  const edges = [
    [0,1],[0,2],[0,4],[1,2],[1,3],[1,4],[2,4],[2,5],[3,4],[3,6],[4,5],
    [4,6],[4,7],[5,7],[6,7],[6,8],[7,9],[8,9],[8,10],[9,10]
  ]
  const nr = size*0.055
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {edges.map(([a,b],i) =>
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke={color} strokeWidth="1" opacity="0.45" />)}
      {nodes.map(([x,y],i) =>
        <circle key={i} cx={x} cy={y} r={nr}
          fill="none" stroke={color} strokeWidth="1.5" opacity="0.85" />)}
    </svg>
  )
}
