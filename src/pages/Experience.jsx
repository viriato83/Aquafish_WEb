import React from "react";
import { motion } from "framer-motion";
import img from "../components/img/imagens/aquario.jpg";

/* ================= SERVIÇOS AQUAFISH ================= */

const servicos = [
  {
    nome: "Fornecimento  de Equipamentos",
    descricao:
      "A Aquafish fornece  a grosso equipamentos como máquinas semi-industriais, materiais de pesca, material agricola outros.",
  },
  {
    nome: "Comercialização de Peixe Fresco",
    descricao:
      "Venda de peixe fresco e selecionado (tilápia e peixe do mar) para mercados, restaurantes, instituições e clientes finais.",
  },
  {
    nome: "Fornecimento de Alevinos",
    descricao:
      "Disponibilização de alevinos de tilápia de qualidade para produtores locais e projetos de aquacultura.",
  },
  {
    nome: "Consultoria em Aquacultura",
    descricao:
      "Apoio técnico em montagem de viveiros, manejo alimentar, controlo de mortalidade e otimização da produção.",
  },
  {
    nome: "Formação e Capacitação",
    descricao:
      "Treinamentos práticos e teóricos em piscicultura, voltados para produtores iniciantes e comunidades locais.",
  },
  {
    nome: "Pesca e Comercialização de Peixe do Mar",
    descricao:
      "Atuação na pesca artesanal e comercialização de espécies marinhas, respeitando normas ambientais.",
  },
];

/* ================= LINHA DO TEMPO AQUAFISH ================= */

const timeline = [
  { ano: "2019", evento: "Início das atividades em aquacultura e pesca artesanal" },
  { ano: "2020", evento: "Expansão da produção de tilápia e fornecimento local" },
  { ano: "2021", evento: "Estruturação da Aquafish como empresa formal e sustentável" },
];

/* ================= INDICADORES ================= */

const indicadores = [
  { label: "Produção Aquícola", porcentagem: 60 },
  { label: "Pesca do Mar", porcentagem: 25 },
  { label: "Consultoria & Formação", porcentagem: 15 },
];

const Services = () => {
  return (
    <section
      id="servicos"
      className="flex flex-col items-center justify-center mb-20 px-6 max-w-6xl mx-auto"
    >
      {/* TÍTULO */}
      <h1 className="text-4xl md:text-6xl font-bold text-blue-500 py-6">
        Serviços Aquafish
      </h1>

      {/* LINHA DO TEMPO */}
      <section className="w-full mb-14">
        <h2 className="text-2xl text-blue-400 font-semibold mb-6 text-center">
          Nossa Trajetória
        </h2>

        <ul className="border-l-4 border-blue-500 ml-4">
          {timeline.map(({ ano, evento }, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 ml-6 relative"
            >
              <span className="absolute -left-8 top-0 bg-blue-500 rounded-full w-6 h-6"></span>
              <time className="font-bold text-gray-600 text-xl">{ano}</time>
              <p className="text-gray-700/80 mt-1 max-w-xl">{evento}</p>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* SERVIÇOS */}
      <section className="w-full mb-16">
        <h2 className="text-2xl text-blue-400 font-semibold mb-8 text-center">
          O Que Fazemos
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {servicos.map(({ nome, descricao }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-blue-500/20 border-2 border-blue-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-blue-700 text-xl font-bold mb-3">
                {nome}
              </h3>
              <p className="text-gray-800/80 text-sm leading-relaxed">
                {descricao}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INDICADORES
      <section className="w-full mb-16">
        <h2 className="text-2xl text-blue-400 font-semibold mb-6 text-center">
          Áreas de Atuação
        </h2>

        <div className="max-w-xl mx-auto space-y-6">
          {indicadores.map(({ label, porcentagem }) => (
            <div key={label}>
              <div className="flex justify-between mb-1">
                <span className="text-blue-100/80 font-semibold">{label}</span>
                <span className="text-blue-100/80">{porcentagem}%</span>
              </div>
              <div className="w-full bg-blue-900 rounded-full h-4">
                <div
                  className="bg-blue-500 h-4 rounded-full transition-all"
                  style={{ width: `${porcentagem}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* IMAGEM + TEXTO */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        <img
          src={img}
          alt="Aquafish"
          className="rounded-2xl w-72 md:w-96 shadow-lg"
        />
        <p className="max-w-lg text-gray-700/70 text-justify">
          A Aquafish é uma empresa moçambicana focada na produção sustentável,
          fornecimento e comercialização de pescado. Trabalhamos com compromisso,
          qualidade e respeito ao meio ambiente, contribuindo para a segurança
          alimentar e o desenvolvimento local.
        </p>
      </section>

      {/* CALL TO ACTION */}
      <section className="mt-16 text-center">
        <p className="text-blue-100/80 mb-4 text-lg">
          Precisa de peixe fresco ou apoio técnico em aquacultura?
        </p>
        <a
          href="mailto:contato@aquafish.co.mz"
          className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
        >
          Fale Connosco
        </a>
      </section>

      <div className="w-full border-b-4 border-blue-100/30 mt-12"></div>
    </section>
  );
};

export default Services;
