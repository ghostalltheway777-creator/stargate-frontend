import React from 'react'
import { useNavigate } from 'react-router-dom'
import FloatingRunes from './FloatingRunes'
import SectionDivider from './SectionDivider'
import './Hub.css'

const ITEMS = [
  { path:'/search',         icon:'⊕',  name:'Søg',                  desc:'Søg i hellige tekster med AI', color:'#6090d0' },
  { path:'/decode',         icon:'⊗',  name:'Dekod',                 desc:'Fortolk symboler og drømme', color:'#9060c0' },
  { path:'/quantum',        icon:'⚛',  name:'Quantum Mechanics',     desc:'Videnskab møder mystik · Tesla · Hologram', color:'#8055ff' },
  { path:'/courses',        icon:'🎓', name:'Kursus',                desc:'Strukturerede studieprogrammer', color:'#c07030' },
  { path:'/billy',          icon:'👁️', name:'Billy Carson',          desc:'4biddenknowledge · Anunnaki · Smaragdtavlerne', color:'#9060c0' },
  { path:'/freemasonry',    icon:'🔺', name:'Frimureri',             desc:'33 grader · Symboler · Den skjulte orden', color:'#e0c050' },
  { path:'/system',         icon:'⬛', name:'3D Magten',             desc:'Hemmelige selskaber · Vatikanet · Pallavicini', color:'#cc3333' },
  { path:'/declassified',   icon:'⬛', name:'Declassified',          desc:'Pentagon UAP videoer · Archon forbindelsen', color:'#cc3333' },
  { path:'/reconstruct',    icon:'🔬', name:'Rekonstruer',           desc:'Fjern censur · 4K upscaling · Deblurring af UAP billeder', color:'#50c880' },
  { path:'/epstein',        icon:'🕸', name:'Deep State',            desc:'Epstein netværk · Gates · Musk · Baal ritualer', color:'#dd3333' },
  { path:'/vortex',         icon:'∞',  name:'Vortex Matematik',      desc:'Marko Rodin · Tesla 3-6-9 · Torus · Universets skjulte kode', color:'#4080ff' },
  { path:'/hidden-history', icon:'🏰', name:'Skjult Historie',       desc:'Tartaria · Mud Flood · Fri Energi · Phantom Tid · Elektrisk Univers', color:'#c8a040' },
  { path:'/food-scanner',   icon:'📱', name:'Food Scanner',          desc:'Scan stregkode · Seed oils · E-numre · Dr. Sebi analyse', color:'#50cc80' },
  { path:'/ancient-medicine',icon:'🌿',name:'Ancient Medicine',       desc:'AI Natur Doctor · Dr. Sebi · CIA kure · Body & Mind · Healing', color:'#50aa50' },
  { path:'/wwii-bankers',   icon:'⚔️', name:'Krig som Forretning',   desc:'Wall Street · Bolsjevikker · Operation Paperclip · CIA', color:'#cc9944' },
  { path:'/propaganda',     icon:'📺', name:'Se Gennem Systemet',    desc:'Propaganda · COVID Scam · Problem-Løsning · Mockingbird', color:'#cc4444' },
  { path:'/money-system',   icon:'💰', name:'Penge Systemet',        desc:'Fiat valuta · Federal Reserve · BlackRock · Rothschild · CBDC', color:'#d4a843' },
  { path:'/psych-control',  icon:'🧠', name:'Psykologi & Kontrol',   desc:'Big Pharma · ADHD myten · Freud · Social medie afhængighed', color:'#8060cc' },
  { path:'/transhumanism',  icon:'🤖', name:'Transhumanisme',        desc:'Neuralink · AI Agenda · Digital Twin · Singularity', color:'#60c0ff' },
  { path:'/avatar2045',    icon:'✨', name:'Project 2045',          desc:'Dmitry Itskov · Digital udødelighed · Avatar teknologi · Bevidsthed uden krop', color:'#8070ff' },
  { path:'/agenda2030',     icon:'🌐', name:'Agenda 2030',           desc:'CBDC · Digital ID · 15-Min Byer · Du Ejer Intet', color:'#3366cc' },
  { path:'/network',        icon:'🕸', name:'Netværks Diagram',      desc:'Interaktivt diagram · Deep State netværk', color:'#884444' },
  { path:'/alien-search',   icon:'🔍', name:'Declassified Søg',      desc:'Søg i 2000+ dokumenter · UAP · Epstein · Pentagon · CIA', color:'#4466aa' },
]

export default function ExploreHub() {
  const nav = useNavigate()
  return (
    <div className="hub-page" style={{ position: 'relative' }}>
      <FloatingRunes count={12} color="rgba(136,85,255,0.05)" />
      <div className="hub-header">
        <h2 className="hub-title">Udforsk</h2>
        <p className="hub-sub">Research · Declassified · Skjult viden · Systemer & Magt</p>
      </div>
      <SectionDivider />
      <div className="hub-grid" style={{ position: 'relative', zIndex: 1 }}>
        {ITEMS.map(item => (
          <button key={item.path} className="hub-card" onClick={() => nav(item.path)}
            style={{ '--card-color': item.color }}>
            <span className="hub-icon">{item.icon}</span>
            <span className="hub-name">{item.name}</span>
            <span className="hub-desc">{item.desc}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
