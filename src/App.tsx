import Contacto from "./components/Contacto"
import Entorno from "./components/Entorno"
import Experiencia from "./components/Experiencia"
import Footer from "./components/Footer"
import Formacion from "./components/Formacion"
import Gratitud from "./components/Gratitud"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Perfil from "./components/Perfil"
import Proyectos from "./components/Proyectos"
import Stack from "./components/Stack"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Entorno />
        <Perfil />
        <Experiencia />
        <Proyectos />
        <Stack />
        <Formacion />
        <Gratitud />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
