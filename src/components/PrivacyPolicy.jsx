import React from 'react'
import './PrivacyPolicy.css'

const SECTIONS = [
  {
    title: '1. Hvem vi er',
    text: `Project Stargate er en spirituel uddannelsesapp der samler viden fra verdens religiøse og esoteriske traditioner. Appen drives af en enkeltperson og er registreret under domænet project-stargate.uk.

Kontakt: ghostalltheway777@gmail.com`
  },
  {
    title: '2. Hvilke data vi indsamler',
    text: `Vi indsamler kun det du aktivt giver os:

• Kaldenavn (valgfrit — kan være anonymt)
• Email (valgfrit — kun til PIN-gendannelse og push-notifikationer)
• Fødselsdato (valgfrit — bruges til beregning af personligt tal)
• Fødeby og land (valgfrit — bruges til fødselskort/astrologi)
• Åndelig tradition (valgfrit — personaliserer indhold)
• Søgehistorik i appen (anonymt session-ID)
• Betalingsstatus via Stripe (vi ser kun om du er premium — ikke kortoplysninger)

Vi indsamler IKKE: rigtige navn, IP-adresse, enheds-ID, lokationsdata eller browserhistorik.`
  },
  {
    title: '3. Hvordan vi bruger dine data',
    text: `Dine data bruges udelukkende til:

• At give dig adgang til din profil fra enhver enhed (kaldenavn + PIN)
• At sende dig din daglige personlige tal-notifikation (hvis du vælger det)
• At personalisere indhold baseret på din tradition
• At beregne dit fødselskort og personlige tal (lokalt i appen)
• At verificere din premium-status

Vi sælger, deler eller videregiver aldrig dine data til tredjeparter til markedsføring.`
  },
  {
    title: '4. Tredjeparter',
    text: `Vi bruger følgende tredjepartstjenester:

• Stripe — til betalingsbehandling (de har deres eget privacy policy)
• Groq API — til AI-svar (spørgsmål sendes anonymt til Groq)
• Resend — til at sende reset-emails (kun når du beder om det)
• Railway.app — til server-hosting i USA (San Francisco)

Alle tredjeparter er GDPR-kompatible.`
  },
  {
    title: '5. Dataopbevaring',
    text: `Dine data opbevares på Railway's servere i USA og er krypteret under transport (HTTPS).

Du kan til enhver tid:
• Slette din profil ved at kontakte os på ghostalltheway777@gmail.com
• Se hvilke data vi har om dig ved at sende en anmodning
• Trække dit samtykke tilbage og få alle data slettet inden 30 dage

Betalingsdata opbevares af Stripe i overensstemmelse med PCI-DSS standarder.`
  },
  {
    title: '6. Cookies og lokal lagring',
    text: `Appen bruger browser localStorage til at gemme:

• Dit UUID (anonym profil-ID)
• Din profil (navn, tradition osv.) — kun lokalt på din enhed
• Onboarding status
• Tradition-valg

Vi bruger IKKE tracking-cookies eller annoncerings-cookies.`
  },
  {
    title: '7. Børn',
    text: `Project Stargate er beregnet til brugere over 16 år. Vi indsamler ikke bevidst data fra børn under 16. Hvis du er forælder og tror dit barn har oprettet en profil, kontakt os så sletter vi det straks.`
  },
  {
    title: '8. Dine rettigheder (GDPR)',
    text: `Under GDPR har du ret til:

• Indsigt — se alle data vi har om dig
• Berigtigelse — ret forkerte data
• Sletning — "retten til at blive glemt"
• Begrænsning — begrænse behandling af dine data
• Dataportabilitet — få dine data i et læsbart format
• Indsigelse — mod behandling af dine data

Send en anmodning til: ghostalltheway777@gmail.com
Vi svarer inden 30 dage.`
  },
  {
    title: '9. Ændringer til denne politik',
    text: `Vi kan opdatere denne privatlivspolitik. Væsentlige ændringer meddeles via appen. Fortsat brug af appen efter ændringer udgør accept af den opdaterede politik.`
  },
  {
    title: '10. Kontakt',
    text: `Spørgsmål om privatlivspolitikken:

Email: ghostalltheway777@gmail.com
App: project-stargate.uk

Sidst opdateret: 31. maj 2026`
  },
]

export default function PrivacyPolicy() {
  return (
    <div className="pp-page">
      <div className="pp-hero">
        <div className="pp-icon">🔒</div>
        <h1 className="pp-title">Privatlivspolitik</h1>
        <p className="pp-sub">Project Stargate — project-stargate.uk</p>
        <p className="pp-date">Gyldig fra: 31. maj 2026</p>
      </div>

      <div className="pp-intro">
        <p>Vi respekterer dit privatliv. Denne politik forklarer præcist hvilke data vi indsamler, hvorfor, og hvordan du kan kontrollere dem. Ingen juridisk newspeak — kun klarhed.</p>
      </div>

      {SECTIONS.map(s => (
        <div key={s.title} className="pp-section">
          <h2 className="pp-section-title">{s.title}</h2>
          <p className="pp-section-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
        </div>
      ))}
    </div>
  )
}
