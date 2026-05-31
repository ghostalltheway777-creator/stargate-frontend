import React, { useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'
import Courses from './components/Courses'
import Chapter from './components/Chapter'
import Traditions from './components/Traditions'
import Consciousness from './components/Consciousness'
import Decode from './components/Decode'
import Quantum from './components/Quantum'
import Books from './components/Books'
import TorahTalmud from './components/TorahTalmud'
import Origins from './components/Origins'
import StudyPlan from './components/StudyPlan'
import BirthChart from './components/BirthChart'
import Numerology from './components/Numerology'
import Profile from './components/Profile'
import Community from './components/Community'
import Freemasonry from './components/Freemasonry'
import ExploreHub from './components/ExploreHub'
import MystikHub from './components/MystikHub'
import Chakra from './components/Chakra'
import Tarot from './components/Tarot'
import DreamJournal from './components/DreamJournal'
import RitualTracker from './components/RitualTracker'
import MayaCalendar from './components/MayaCalendar'
import HigherSelf from './components/HigherSelf'
import Intentions from './components/Intentions'
import InnerPath from './components/InnerPath'
import AliveUniverse from './components/AliveUniverse'
import BillyCarson from './components/BillyCarson'
import SystemPower from './components/SystemPower'
import FrequencyPlayer from './components/FrequencyPlayer'
import Premium from './components/Premium'
import UniversalQuote from './components/UniversalQuote'
import Declassified from './components/Declassified'
import Reconstruct from './components/Reconstruct'
import Epstein from './components/Epstein'
import VortexMath from './components/VortexMath'
import MoonCalendar13 from './components/MoonCalendar13'
import HiddenHistory from './components/HiddenHistory'
import AncientMedicine from './components/AncientMedicine'
import PinealThirdEye from './components/PinealThirdEye'
import Manifestation from './components/Manifestation'
import Propaganda from './components/Propaganda'
import Agenda2030 from './components/Agenda2030'
import ReligionDivisions from './components/ReligionDivisions'
import FoodScanner from './components/FoodScanner'
import AncientConnections from './components/AncientConnections'
import Vision5D from './components/Vision5D'
import MoneySystem from './components/MoneySystem'
import PsychControl from './components/PsychControl'
import Transhumanism from './components/Transhumanism'
import Avatar2045 from './components/Avatar2045'
import PrivacyPolicy from './components/PrivacyPolicy'
import FrequencyConverter from './components/FrequencyConverter'
import CovidScam from './components/CovidScam'
import WorldOrder from './components/WorldOrder'
import WWIIBankers from './components/WWIIBankers'
import SacredSexuality from './components/SacredSexuality'
import DailyMeditation from './components/DailyMeditation'
import NetworkDiagram from './components/NetworkDiagram'
import AlienSearch from './components/AlienSearch'
import Starfield from './components/Starfield'
import HealingPlayer from './components/HealingPlayer'
import PageTransition from './components/PageTransition'
import PageAura from './components/PageAura'
import { UserProvider, useUser } from './UserContext'
import AccessibilityPanel from './components/AccessibilityPanel'
import { useOnlineStatus } from './useOfflineCache'
import IntroAnimation from './components/IntroAnimation'
import Onboarding from './components/Onboarding'
import { AccessibilityProvider, useAccessibility } from './AccessibilityContext'
import { useTradition } from './TraditionContext'
import './App.css'

const TABS = [
  { path: '/',          label: '✦',  name: 'Hjem' },
  { path: '/explore',   label: '⊕',  name: 'Udforsk' },
  { path: '/mystik',    label: '🌀', name: 'Mystik' },
  { path: '/community', label: '⬡',  name: 'Fælles' },
  { path: '/profile',   label: '◎',  name: 'Mig' },
]

// Wrapper der viser sløret preview til ikke-premium brugere
function P({ children, title }) {
  const { isPremium } = useUser()
  if (!isPremium) {
    return (
      <div style={{
        minHeight:'80vh', display:'flex', flexDirection:'column',
        alignItems:'center', justifyContent:'center',
        padding:'40px 24px', textAlign:'center',
        background:'radial-gradient(ellipse at 50% 30%, rgba(212,168,67,0.06) 0%, transparent 70%)',
      }}>
        <div style={{fontSize:'48px', marginBottom:'16px', opacity:0.9}}>✦</div>
        <div style={{
          width:'60px', height:'1px',
          background:'linear-gradient(90deg, transparent, rgba(212,168,67,0.5), transparent)',
          margin:'0 auto 24px',
        }}/>
        <h2 style={{color:'#fff', margin:'0 0 10px', fontSize:'22px', fontWeight:'700', letterSpacing:'1px'}}>
          {title || 'Stargate Premium'}
        </h2>
        <p style={{color:'rgba(255,255,255,0.5)', fontSize:'13px', margin:'0 0 6px', lineHeight:'1.7', maxWidth:'280px'}}>
          Dette indhold er låst.
        </p>
        <p style={{color:'rgba(212,168,67,0.75)', fontSize:'13px', margin:'0 0 32px', lineHeight:'1.7', maxWidth:'280px'}}>
          Start din <strong style={{color:'#d4a843'}}>3 dages gratis prøveperiode</strong> og få adgang til alle sektioner — ingen kort nødvendig med promo kode.
        </p>
        <a href="/premium" style={{
          display:'inline-block',
          background:'linear-gradient(135deg, rgba(212,168,67,0.2), rgba(212,168,67,0.08))',
          border:'1px solid rgba(212,168,67,0.45)',
          color:'#d4a843', padding:'15px 36px',
          borderRadius:'14px', textDecoration:'none',
          fontSize:'15px', fontWeight:'700', letterSpacing:'0.5px',
          boxShadow:'0 0 30px rgba(212,168,67,0.1)',
        }}>
          ✦ Start gratis prøveperiode →
        </a>
        <p style={{color:'rgba(255,255,255,0.2)', fontSize:'11px', marginTop:'16px'}}>
          Allerede premium? <a href="/profile" style={{color:'rgba(212,168,67,0.5)'}}>Log ind</a>
        </p>
      </div>
    )
  }
  return children
}

function AppInner() {
  const navigate = useNavigate()
  const location = useLocation()
  const { myTradition } = useTradition()
  const { settings } = useAccessibility()
  const [showA11y, setShowA11y] = useState(false)
  const online = useOnlineStatus()

  const [showIntro, setShowIntro] = useState(() => !sessionStorage.getItem('sg_intro_seen'))
  function doneIntro() {
    sessionStorage.setItem('sg_intro_seen', '1')
    setShowIntro(false)
  }

  const [showOnboarding, setShowOnboarding] = useState(() => !localStorage.getItem('sg_onboarded'))

  const isActive = (path) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(path)

  return (
    <div className="app">
      <Starfield />
      <PageAura />
      <PageTransition />
      {showIntro && <IntroAnimation onDone={doneIntro} />}
      {!showIntro && showOnboarding && <Onboarding onDone={() => setShowOnboarding(false)} />}
      <header className="app-header">
        {location.pathname !== '/' && (
          <button className="header-back" onClick={() => navigate(-1)}>← Tilbage</button>
        )}
        <div className="logo" onClick={() => navigate('/')}>
          <span className="logo-star">✦</span>
          <span className="logo-eyebrow">P.R.O.J.E.C.T</span>
          <span className="logo-text">STARGATE</span>
        </div>
        {myTradition
          ? <p className="logo-sub">Din tradition: <span className="logo-tradition">{myTradition}</span></p>
          : <p className="logo-sub">The True Spirit of Religion · Welcome to Awareness</p>
        }
        <button className="a11y-btn" onClick={() => setShowA11y(v => !v)} title="Tilgængelighed & Sprog">
          ⚙
        </button>
      </header>

      {!online && (
        <div className="offline-banner">📵 Offline — viser gemte svar</div>
      )}
      {showA11y && <AccessibilityPanel onClose={() => setShowA11y(false)} />}
      {showA11y && <div className="a11y-backdrop" onClick={() => setShowA11y(false)} />}

      <UniversalQuote position="top" />

      <main className="app-main">
        <Routes>
          {/* GRATIS — altid tilgængelig */}
          <Route path="/"               element={<Home />} />
          <Route path="/mystik"         element={<MystikHub />} />
          <Route path="/community"      element={<Community />} />
          <Route path="/profile"        element={<Profile />} />
          <Route path="/premium"        element={<Premium />} />
          <Route path="/privacy"        element={<PrivacyPolicy />} />
          <Route path="/freq-convert"   element={<P><FrequencyConverter /></P>} />
          <Route path="/covid"          element={<P><CovidScam /></P>} />
          <Route path="/world-order"    element={<P><WorldOrder /></P>} />

          {/* PREMIUM — kræver betaling */}
          <Route path="/explore"        element={<ExploreHub />} />
          <Route path="/search"         element={<P><Search /></P>} />
          <Route path="/books"          element={<P><Books /></P>} />
          <Route path="/decode"         element={<P><Decode /></P>} />
          <Route path="/quantum"        element={<P><Quantum /></P>} />
          <Route path="/consciousness"  element={<P><Consciousness /></P>} />
          <Route path="/traditions"     element={<P><Traditions /></P>} />
          <Route path="/courses"        element={<P><Courses /></P>} />
          <Route path="/courses/:num"   element={<P><Chapter /></P>} />
          <Route path="/torah"          element={<P><TorahTalmud /></P>} />
          <Route path="/origins"        element={<P><Origins /></P>} />
          <Route path="/studyplan"      element={<P><StudyPlan /></P>} />
          <Route path="/birthchart"     element={<P><BirthChart /></P>} />
          <Route path="/numerology"     element={<P><Numerology /></P>} />
          <Route path="/freemasonry"    element={<P><Freemasonry /></P>} />
          <Route path="/chakra"         element={<P><Chakra /></P>} />
          <Route path="/tarot"          element={<P><Tarot /></P>} />
          <Route path="/dreams"         element={<P><DreamJournal /></P>} />
          <Route path="/ritual"         element={<P><RitualTracker /></P>} />
          <Route path="/maya"           element={<P><MayaCalendar /></P>} />
          <Route path="/higherself"     element={<P><HigherSelf /></P>} />
          <Route path="/intentions"     element={<P><Intentions /></P>} />
          <Route path="/innerpath"      element={<P><InnerPath /></P>} />
          <Route path="/alive"          element={<P><AliveUniverse /></P>} />
          <Route path="/billy"          element={<P><BillyCarson /></P>} />
          <Route path="/system"         element={<P><SystemPower /></P>} />
          <Route path="/frequency"      element={<P><FrequencyPlayer /></P>} />
          <Route path="/declassified"   element={<P><Declassified /></P>} />
          <Route path="/reconstruct"    element={<P><Reconstruct /></P>} />
          <Route path="/epstein"        element={<P><Epstein /></P>} />
          <Route path="/vortex"         element={<P><VortexMath /></P>} />
          <Route path="/moon13"         element={<P><MoonCalendar13 /></P>} />
          <Route path="/hidden-history"   element={<P><HiddenHistory /></P>} />
          <Route path="/ancient-medicine" element={<P><AncientMedicine /></P>} />
          <Route path="/pineal"           element={<P><PinealThirdEye /></P>} />
          <Route path="/manifestation"    element={<P><Manifestation /></P>} />
          <Route path="/propaganda"       element={<P><Propaganda /></P>} />
          <Route path="/agenda2030"         element={<P><Agenda2030 /></P>} />
          <Route path="/religion-divisions" element={<P><ReligionDivisions /></P>} />
          <Route path="/food-scanner"         element={<P><FoodScanner /></P>} />
          <Route path="/ancient-connections" element={<P><AncientConnections /></P>} />
          <Route path="/vision-5d"           element={<P><Vision5D /></P>} />
          <Route path="/meditation"           element={<P><DailyMeditation /></P>} />
          <Route path="/money-system"         element={<P><MoneySystem /></P>} />
          <Route path="/psych-control"         element={<P><PsychControl /></P>} />
          <Route path="/transhumanism"           element={<P><Transhumanism /></P>} />
          <Route path="/avatar2045"              element={<P><Avatar2045 /></P>} />
          <Route path="/wwii-bankers"            element={<P><WWIIBankers /></P>} />
          <Route path="/sacred-sexuality"      element={<P><SacredSexuality /></P>} />
          <Route path="/network"        element={<P><NetworkDiagram /></P>} />
          <Route path="/alien-search"   element={<P><AlienSearch /></P>} />
        </Routes>
      </main>
      {!showIntro && <UniversalQuote position="bottom" />}
      <HealingPlayer />

      {!showIntro && <nav className="bottom-nav">
        {TABS.map(tab => (
          <button
            key={tab.path}
            className={`nav-btn ${isActive(tab.path) ? 'active' : ''}`}
            onClick={() => navigate(tab.path)}
          >
            <span className="nav-icon">{tab.label}</span>
            <span className="nav-name">{tab.name}</span>
          </button>
        ))}
      </nav>}
    </div>
  )
}

export default function App() {
  return (
    <AccessibilityProvider>
      <UserProvider>
        <AppInner />
      </UserProvider>
    </AccessibilityProvider>
  )
}
