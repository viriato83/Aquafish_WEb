import React from "react";
import { motion } from "framer-motion";
import img from "../components/img/IMG-P.jpg";

const servicos = [
  {
    nome: "Fornecimento de Equipamentos",
    descricao:
      "Distribuição a grosso de equipamentos semi-industriais, materiais de pesca e insumos agrícolas.",
    icon: "⚙️",
  },
  {
    nome: "Peixe Fresco",
    descricao:
      "Comercialização de tilápia e peixe do mar, frescos, selecionados e de alta qualidade.",
    icon: "🐟",
  },
  {
    nome: "Alevinos",
    descricao:
      "Fornecimento de alevinos de tilápia certificados para produção eficiente.",
    icon: "🌱",
  },
  {
    nome: "Consultoria",
    descricao:
      "Assistência técnica completa em aquacultura: viveiros, alimentação e produção.",
    icon: "📊",
  },
  {
    nome: "Formação",
    descricao:
      "Capacitação prática e teórica para produtores e comunidades.",
    icon: "🎓",
  },
  {
    nome: "Pesca Marítima",
    descricao:
      "Pesca artesanal e comercial com responsabilidade ambiental.",
    icon: "🚤",
  },
];

const timeline = [
  { ano: "2019", evento: "Início das atividades em aquacultura e pesca artesanal" },
  { ano: "2020", evento: "Expansão da produção e entrada no mercado local" },
  { ano: "2021", evento: "Formalização da Aquafish e crescimento sustentável" },
];

const Services = () => {
  return (
    <section
      id="servicos"
      className="py-20 px-6  text-white"
    >
      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold">
          Nossos <span className="text-cyan-400">Serviços</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Soluções completas em aquacultura, pesca e fornecimento com foco em
          qualidade, sustentabilidade e crescimento.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl text-cyan-400 text-center mb-8">
          Nossa Trajetória
        </h2>

        <div className="relative border-l border-cyan-500/30 pl-6">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="absolute -left-3 w-6 h-6 bg-cyan-400 rounded-full"></div>
              <h3 className="font-bold text-lg text-cyan-300">{item.ano}</h3>
              <p className="text-gray-400">{item.evento}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SERVIÇOS */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {servicos.map((servico, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-cyan-400 hover:shadow-cyan-500/20 shadow-lg transition-all"
          >
            <div className="text-4xl mb-4">{servico.icon}</div>

            <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition">
              {servico.nome}
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              {servico.descricao}
            </p>

            <div className="w-10 h-1 bg-cyan-400 mt-4 group-hover:w-20 transition-all"></div>
          </motion.div>
        ))}
      </div>

      {/* SOBRE */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto mb-20">
        <img
          src={img}
          alt="Aquafish"
          className="rounded-2xl w-80 shadow-lg"
        />

        <div>
          <h2 className="text-2xl text-cyan-400 mb-4">Sobre a Aquafish</h2>
          <p className="text-gray-400 leading-relaxed">
            A Aquafish é uma empresa moçambicana dedicada à produção e
            comercialização de pescado com padrões elevados de qualidade.
            Apostamos na sustentabilidade, inovação e impacto social,
            contribuindo para o desenvolvimento económico local.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h3 className="text-xl mb-4">
          Precisa de peixe fresco ou soluções em aquacultura?
        </h3>

        <a
          href="mailto:vmubai@aquafish.co.mz"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-full font-semibold transition"
        >
          Solicitar Orçamento
        </a>
      </div>
    </section>
  );
};

export default Services;