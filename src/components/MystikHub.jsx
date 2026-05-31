import React from 'react'
import { useNavigate } from 'react-router-dom'
import FloatingRunes from './FloatingRunes'
import SectionDivider from './SectionDivider'
import './Hub.css'

const ITEMS = [
  { path:'/ancient-connections', icon:'🏛', name:'Ancient Connections',   desc:'Noah=Ziusudra · Jesus=Horus · Moses=Sargon · Alle religioner = sumeriske originaler', color:'#d4a843' },
  { path:'/origins',             icon:'☥', name:'Oldtidens Rødder',       desc:'Anunnaki · Smaragdtavlerne · Fortabte tekster', color:'#c8a040' },
  { path:'/religion-divisions',  icon:'✦', name:'Religion & Divisioner',  desc:'Sufisme vs Shia/Sunni · Gnosis vs Kirke · Torah vs Talmudisme · Neturei Karta', color:'#d4a843' },
  { path:'/traditions',          icon:'⬡', name:'Traditioner',            desc:'Verdens åndelige traditioner', color:'#50a060' },
  { path:'/books',               icon:'📖', name:'Hellige Skrifter',       desc:'53 hellige tekster fra 17 traditioner', color:'#d4a843' },
  { path:'/birthchart',          icon:'♈', name:'Fødselskort',            desc:'Fuld natal-analyse + tidligere liv', color:'#9060e0' },
  { path:'/numerology',          icon:'∞',  name:'Numerologi',             desc:'Livssti · Hellige tal · Frimureri-forbindelsen', color:'#d4a843' },
  { path:'/chakra',              icon:'🌀', name:'Chakraer',               desc:'7 energicentre · Vedisk visdom · Aktivering', color:'#50c080' },
  { path:'/tarot',               icon:'🎴', name:'Tarot',                  desc:'22 Major Arcana · Kabbalah · Dagligt kort', color:'#c050a0' },
  { path:'/dreams',              icon:'☽',  name:'Drømmejournalen',        desc:'AI-fortolkning · Arketyper · Symboler', color:'#7050c0' },
  { path:'/ritual',              icon:'🔥', name:'Daglig Ritual',          desc:'Spor din praksis · Streak · Refleksion', color:'#d06020' },
  { path:'/higherself',          icon:'⊙', name:'Højere Selv',            desc:'Intim dialog med din sjæls sandhed', color:'#9050d0' },
  { path:'/innerpath',           icon:'☥', name:'Den Indre Vej',          desc:'Institutioner · Guds navne · Yoga · Krystaller', color:'#d4a843' },
  { path:'/consciousness',       icon:'◈', name:'3D→5D Bevidsthed',       desc:'Bevidsthedens dimensioner', color:'#50b0d0' },
  { path:'/vision-5d',           icon:'✦', name:'5D Vision',              desc:'Din filosofi · Visdom og poesi om bevidsthed', color:'#d4a843' },
  { path:'/meditation',          icon:'🧘', name:'Daglig Meditation',      desc:'5 guidede meditationer · Solfeggio frekvenser · Timer', color:'#8060cc' },
  { path:'/maya',                icon:'🌎', name:'Maya Kalender',          desc:'Tzolkin · Galaktisk signatur · Haab', color:'#40b080' },
  { path:'/moon13',              icon:'🌙', name:'13 Måne Kalender',       desc:'Naturlig tid · 28 dage × 13 · Galaktisk tid', color:'#6060cc' },
  { path:'/intentions',          icon:'⬡', name:'Intentioner',            desc:'Kollektivt felt · Send energi', color:'#5070d0' },
  { path:'/alive',               icon:'◈', name:'Alt er Levende',         desc:'Panpsychisme · Resonans · Bevidst univers', color:'#f0a040' },
  { path:'/frequency',           icon:'∿', name:'Frekvenser',             desc:'432 Hz · 528 Hz · Schumann · Solfeggio · DNA', color:'#50c090' },
  { path:'/freq-convert',       icon:'⚙', name:'432 Hz Konverter',        desc:'Konverter din musik · YouTube · SoundCloud · MP3 · Rockefeller & 440 Hz historien', color:'#50c890' },
  { path:'/pineal',              icon:'👁', name:'Pineal / Third Eye',     desc:'DMT fabrik · Fluorid · Ancient viden · Hjerte som elektromagnet', color:'#8060cc' },
  { path:'/manifestation',       icon:'✦', name:'Manifestation',          desc:'As Within So Without · 369 · Neville · Se det med lukkede øjne', color:'#d4a843' },
  { path:'/sacred-sexuality',    icon:'🌹', name:'Sacred Sexuality',       desc:'Tantra · Kundalini · Seksuel energi · Healing', color:'#e06080' },
  { path:'/studyplan',           icon:'◎',  name:'Studieplan',             desc:'Din personlige åndelige rejseplan', color:'#5090d0' },
]

export default function MystikHub() {
  const nav = useNavigate()
  return (
    <div className="hub-page" style={{ position: 'relative' }}>
      <FloatingRunes count={14} color="rgba(212,168,67,0.05)" />
      <div className="hub-header">
        <h2 className="hub-title">Mystik</h2>
        <p className="hub-sub">Religion · Spiritualitet · Sjælens kortlægning · Oldtidens hemmeligheder</p>
      </div>
      <SectionDivider variant="rune" />
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
