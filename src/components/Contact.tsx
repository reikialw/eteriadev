export default function Contact() {
  return (
    <section
      id="contato"
      className="py-20 bg-white"
    >
      <div className="max-w-xl mx-auto px-6">

        <h3 className="text-3xl font-bold text-center mb-10">
          Entre em contato
        </h3>

        <form className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Nome"
            className="border p-3 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded"
          />

          <textarea
            placeholder="Mensagem"
            className="border p-3 rounded"
            rows={4}
          />

          <button
            className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Enviar
          </button>

        </form>

      </div>
    </section>
  )
}