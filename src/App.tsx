import Experiencia from "./components/Experiencia"
import Hero from "./components/Hero"
import ParticlesBackground from "./components/ParticlesBackground"
import SobreMi from "./components/SobreMi"

function App() {
  return (
    <>
      <ParticlesBackground />
      <main className="relative z-10">
        <Hero />
        <SobreMi />
        <Experiencia />
      </main>
    </>
  )
}

export default App
