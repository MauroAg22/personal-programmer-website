import Hero from "./components/Hero"
import ParticlesBackground from "./components/ParticlesBackground"

function App() {
  return (
    <>
      <ParticlesBackground />
      <main className="relative z-10">
        <Hero />
      </main>
    </>
  )
}

export default App
