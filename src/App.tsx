import Experiencia from "./components/Experiencia"
import Hero from "./components/Hero"
import ParticlesBackground from "./components/ParticlesBackground"
import Proyectos from "./components/Proyectos"
import SobreMi from "./components/SobreMi"

function App() {
  return (
    <>
      <ParticlesBackground />
      <main className="relative z-10">
        <Hero />
        <SobreMi />
        <Experiencia />
        <Proyectos />
      </main>
    </>
  )
}

export default App
