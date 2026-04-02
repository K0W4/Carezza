import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Catalog } from './components/Catalog'
import { Decants } from './components/Decants'
import { Brand } from './components/Brand'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-sage flex flex-col">
      <Header />
      <Hero />
      <Catalog />
      <Decants />
      <Brand />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App