import Experiencia from "./components/Experiencia"
import Formacion from "./components/Formacion"
import Habilidades from "./components/Habilidades"
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
        <Habilidades />
        <Formacion />
      </main>
    </>
  )
}

export default App
