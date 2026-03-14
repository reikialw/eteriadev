export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-xl">
          Empresa
        </h1>

        <nav className="flex gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#sobre" className="hover:text-blue-600">Sobre</a>
          <a href="#contato" className="hover:text-blue-600">Contato</a>
        </nav>

      </div>
    </header>
  )
}