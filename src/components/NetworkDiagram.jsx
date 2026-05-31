import React, { useEffect, useRef, useState } from 'react'
import './NetworkDiagram.css'

const NODES = [
  { id: 'epstein',   label: 'Jeffrey\nEpstein',   x: 200, y: 200, r: 32, color: '#cc2222', ring: true },
  { id: 'maxwell',   label: 'Ghislaine\nMaxwell',  x: 100, y: 100, r: 24, color: '#cc3333' },
  { id: 'clinton',   label: 'Bill\nClinton',        x: 320, y: 100, r: 22, color: '#4488cc' },
  { id: 'gates',     label: 'Bill\nGates',          x: 340, y: 200, r: 24, color: '#2277cc' },
  { id: 'andrew',    label: 'Prins\nAndrew',        x: 60,  y: 200, r: 22, color: '#8844cc' },
  { id: 'barak',     label: 'Ehud\nBarak',          x: 100, y: 310, r: 20, color: '#338844' },
  { id: 'wexner',    label: 'Les\nWexner',          x: 200, y: 340, r: 22, color: '#cc8844' },
  { id: 'musk',      label: 'Elon\nMusk',           x: 320, y: 310, r: 20, color: '#2277cc' },
  { id: 'dershowitz',label: 'Alan\nDershowitz',     x: 60,  y: 310, r: 18, color: '#cc8844' },
  { id: 'brunel',    label: 'Jean-Luc\nBrunel',     x: 200, y: 80,  r: 18, color: '#cc2222' },
  { id: 'cia',       label: 'CIA /\nMossad',        x: 350, y: 140, r: 20, color: '#445566' },
  { id: 'bilderberg',label: 'Bilderberg',           x: 350, y: 260, r: 18, color: '#554466' },
  { id: 'giuffre',   label: 'Virginia\nGiuffre',    x: 50,  y: 140, r: 18, color: '#50aa50' },
]

const EDGES = [
  { from: 'epstein', to: 'maxwell',    label: 'Partner', strength: 3 },
  { from: 'epstein', to: 'clinton',    label: '26 fly',  strength: 2 },
  { from: 'epstein', to: 'gates',      label: '10+ møder',strength: 2 },
  { from: 'epstein', to: 'andrew',     label: 'Offer',   strength: 2 },
  { from: 'epstein', to: 'wexner',     label: 'Bagmand', strength: 3 },
  { from: 'epstein', to: 'barak',      label: '$2.3M',   strength: 2 },
  { from: 'epstein', to: 'musk',       label: 'Black book',strength: 1 },
  { from: 'epstein', to: 'cia',        label: 'Asset',   strength: 2 },
  { from: 'epstein', to: 'bilderberg', label: 'Netværk', strength: 1 },
  { from: 'maxwell', to: 'andrew',     label: 'Intro',   strength: 2 },
  { from: 'maxwell', to: 'giuffre',    label: 'Offer',   strength: 2 },
  { from: 'maxwell', to: 'brunel',     label: 'Rekrut',  strength: 2 },
  { from: 'maxwell', to: 'cia',        label: 'MI6/Mossad',strength: 2 },
  { from: 'epstein', to: 'dershowitz', label: 'Advokat', strength: 2 },
  { from: 'epstein', to: 'brunel',     label: 'Modeller',strength: 2 },
  { from: 'gates',   to: 'bilderberg', label: 'Deltager',strength: 1 },
  { from: 'wexner',  to: 'bilderberg', label: 'Netværk', strength: 1 },
]

function getNode(id) { return NODES.find(n => n.id === id) }

export default function NetworkDiagram() {
  const svgRef = useRef()
  const [selected, setSelected] = useState(null)
  const [tooltip, setTooltip] = useState(null)

  const sel = selected ? NODES.find(n => n.id === selected) : null
  const selEdges = selected ? EDGES.filter(e => e.from === selected || e.to === selected) : []

  return (
    <div className="nd-page">
      <div className="nd-hero">
        <h2 className="nd-title">🕸 Netværks Diagram</h2>
        <p className="nd-sub">Klik på en person for at se forbindelser</p>
      </div>

      <div className="nd-svg-wrap">
        <svg ref={svgRef} viewBox="0 0 400 420" className="nd-svg">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {/* Edges */}
          {EDGES.map((e, i) => {
            const a = getNode(e.from), b = getNode(e.to)
            if (!a || !b) return null
            const isActive = selected && (e.from === selected || e.to === selected)
            return (
              <g key={i}>
                <line
                  x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                  stroke={isActive ? '#ffd700' : 'rgba(255,255,255,0.1)'}
                  strokeWidth={isActive ? e.strength * 1.5 : e.strength * 0.8}
                  strokeDasharray={isActive ? 'none' : '4,4'}
                />
                {isActive && (
                  <text
                    x={(a.x+b.x)/2} y={(a.y+b.y)/2 - 5}
                    fill="#ffd700" fontSize="8" textAnchor="middle"
                    style={{pointerEvents:'none'}}
                  >{e.label}</text>
                )}
              </g>
            )
          })}

          {/* Nodes */}
          {NODES.map(n => {
            const isSelected = selected === n.id
            const isConnected = selected && selEdges.some(e => e.from === n.id || e.to === n.id)
            const opacity = selected && !isSelected && !isConnected ? 0.3 : 1
            return (
              <g key={n.id} onClick={() => setSelected(selected === n.id ? null : n.id)}
                style={{cursor:'pointer', opacity}}>
                {n.ring && (
                  <circle cx={n.x} cy={n.y} r={n.r + 8}
                    fill="none" stroke={n.color} strokeWidth="1.5"
                    strokeDasharray="4,3" opacity="0.5"/>
                )}
                <circle cx={n.x} cy={n.y} r={n.r}
                  fill={isSelected ? n.color : `${n.color}44`}
                  stroke={n.color}
                  strokeWidth={isSelected ? 2.5 : 1.5}
                  filter={isSelected ? 'url(#glow)' : 'none'}
                />
                {n.label.split('\n').map((line, li) => (
                  <text key={li} x={n.x} y={n.y + (li - 0.3) * 10}
                    fill="#fff" fontSize={n.r > 25 ? 9 : 8}
                    textAnchor="middle" dominantBaseline="middle"
                    style={{pointerEvents:'none', fontWeight: isSelected ? 700 : 400}}
                  >{line}</text>
                ))}
              </g>
            )
          })}
        </svg>
      </div>

      {sel && (
        <div className="nd-detail" style={{'--nc': sel.color}}>
          <h3 className="nd-detail-name">{sel.label.replace('\n', ' ')}</h3>
          <div className="nd-connections">
            {selEdges.map((e, i) => {
              const other = getNode(e.from === selected ? e.to : e.from)
              return (
                <div key={i} className="nd-conn-item">
                  <span className="nd-conn-arrow">→</span>
                  <span className="nd-conn-name">{other?.label.replace('\n',' ')}</span>
                  <span className="nd-conn-label">{e.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      <div className="nd-legend">
        <div className="nd-legend-item"><span style={{background:'#cc2222'}} />Kernen</div>
        <div className="nd-legend-item"><span style={{background:'#4488cc'}} />Politikere</div>
        <div className="nd-legend-item"><span style={{background:'#2277cc'}} />Tech Elite</div>
        <div className="nd-legend-item"><span style={{background:'#8844cc'}} />Royale</div>
        <div className="nd-legend-item"><span style={{background:'#50aa50'}} />Whistleblower</div>
      </div>
    </div>
  )
}
