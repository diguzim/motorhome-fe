import Link from "next/link";
import Image from "next/image";

export default function SobrePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/hero.jpeg"
          alt="Sobre nossa fábrica de motorhomes"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Nossa
            <span className="block text-green-400">História</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Mais de uma década criando lares sobre rodas e realizando sonhos de
            liberdade
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Quem Somos
              </h2>
              <div className="w-24 h-1 bg-green-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  A Paixão Que Nos Move
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Fundada em 2014, nossa fábrica nasceu do sonho de democratizar
                  a liberdade de viajar. Começamos como uma pequena oficina com
                  uma grande visão: criar motorhomes que fossem verdadeiros
                  lares sobre rodas, onde cada família pudesse viver suas
                  aventuras com conforto e segurança.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Ao longo dos anos, evoluímos de um projeto familiar para uma
                  das principais referências no segmento de motorhomes no
                  Brasil, sempre mantendo nossos valores de qualidade,
                  personalização e relacionamento próximo com nossos clientes.
                </p>
              </div>
              <div className="relative">
                <div className="bg-green-100 rounded-lg p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        10+
                      </div>
                      <div className="text-sm text-gray-600">
                        Anos de Experiência
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        150+
                      </div>
                      <div className="text-sm text-gray-600">
                        Motorhomes Entregues
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        98%
                      </div>
                      <div className="text-sm text-gray-600">
                        Satisfação do Cliente
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        15
                      </div>
                      <div className="text-sm text-gray-600">Especialistas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Os princípios que guiam cada projeto e cada relacionamento
            </p>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Paixão pelo Que Fazemos
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Cada motorhome é construído com amor e dedicação. Nossa paixão
                por viajar e por criar está presente em cada detalhe dos nossos
                projetos.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Qualidade Incomparável
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Utilizamos apenas materiais premium e técnicas artesanais. Cada
                componente é cuidadosamente selecionado para garantir
                durabilidade e conforto.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Relacionamento Duradouro
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Construímos relacionamentos que vão além da entrega. Somos
                parceiros dos nossos clientes em todas as suas aventuras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nosso Processo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Do sonho à realidade em etapas bem definidas
            </p>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-6"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Consulta Inicial
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Conversamos sobre seus sonhos, necessidades e orçamento para
                  entender exatamente o que você precisa.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Projeto Personalizado
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Criamos um projeto único baseado em suas especificações, com
                  plantas detalhadas e visualização 3D.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Construção Artesanal
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Nossa equipe especializada constrói seu motorhome com precisão
                  e cuidado em cada detalhe.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Entrega e Suporte
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Entregamos seu novo lar sobre rodas e oferecemos suporte
                  contínuo para suas aventuras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossa Equipe</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Profissionais apaixonados e experientes dedicados à excelência
            </p>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Engenharia e Design
                </h3>
                <p className="text-gray-300 text-sm">
                  Especialistas em estruturas veiculares e design de interiores
                  que transformam ideias em projetos viáveis e funcionais.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Produção e Montagem
                </h3>
                <p className="text-gray-300 text-sm">
                  Artesãos especializados com anos de experiência em marcenaria,
                  elétrica, hidráulica e acabamentos de alta qualidade.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Atendimento e Suporte
                </h3>
                <p className="text-gray-300 text-sm">
                  Equipe dedicada ao relacionamento com o cliente, desde o
                  primeiro contato até o suporte pós-venda contínuo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Vamos Construir Seu Sonho Juntos?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar sua
            visão em realidade com um motorhome único e personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Fale Conosco
            </Link>
            <Link
              href="/trabalhos"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
            >
              Ver Nossos Trabalhos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
