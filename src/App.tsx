import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'
import { Home } from './pages/Home'
import { CatalogPage } from './pages/CatalogPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream font-sans text-sage flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<CatalogPage />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  )
}

export default App