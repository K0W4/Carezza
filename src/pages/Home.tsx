import { Hero } from '../components/Hero'
import { Catalog } from '../components/Catalog'
import { Decants } from '../components/Decants'
import { Brand } from '../components/Brand'

export function Home() {
  return (
    <main>
      <Hero />
      <Catalog />
      <Decants />
      <Brand />
    </main>
  )
}
