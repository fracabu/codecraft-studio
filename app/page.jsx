export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-6 text-gradient bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          CodeCraft Studio
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          Migrazione a Next.js 14 in corso...
        </p>
        <div className="animate-pulse">
          <div className="inline-block h-12 w-12 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin"></div>
        </div>
      </div>
    </div>
  )
}
