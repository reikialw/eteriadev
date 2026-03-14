export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">

      <div className="max-w-6xl mx-auto px-6 text-center text-sm">
        © {new Date().getFullYear()} Empresa. Todos os direitos reservados.
      </div>

    </footer>
  )
}