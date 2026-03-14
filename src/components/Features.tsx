export default function Features() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <h3 className="text-3xl font-bold text-center mb-12">
          Nossos serviços
        </h3>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="p-6 border rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">Desenvolvimento Web</h4>
            <p className="text-sm text-gray-600">
              Criamos aplicações modernas e escaláveis.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">Consultoria</h4>
            <p className="text-sm text-gray-600">
              Estratégias tecnológicas para seu negócio.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">Automação</h4>
            <p className="text-sm text-gray-600">
              Reduza custos com automação inteligente.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}