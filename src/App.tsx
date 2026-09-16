function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <img src="/img/logo.webp" alt="Logo de Mauro Lucero" className="h-16 w-16" />
      <h1 className="text-3xl font-semibold text-text">Mauro Lucero</h1>
      <p className="max-w-md text-text-muted">
        Soporte IT · Microsoft 365 &amp; Active Directory · Desarrollo de Software
      </p>
      <button
        type="button"
        className="rounded-md bg-accent px-5 py-2.5 font-medium text-white transition-colors hover:bg-primary-600"
      >
        Base del proyecto lista
      </button>
    </main>
  )
}

export default App
