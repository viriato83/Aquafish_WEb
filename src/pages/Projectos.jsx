import React from "react";
import img1 from "../components/img/cpt/1.png";
import img2 from "../components/img/cpt/2.png";
import img3 from "../components/img/cpt/3.png";
import img4 from "../components/img/cpt/4.png";
import { motion } from "framer-motion";

const Projectos = () => {
  const projectos = [
    {
      nome: "Sistema Web - Aquafish LDA",
      descricao:
        "Plataforma completa de gestão de stock, vendas e operações com controlo remoto em tempo real.",
      img: img1,
    },
    {
      nome: "Sistema Web - MbChicken",
      descricao:
        "Sistema inteligente para controlo de produção, vendas e análise financeira (lucros e perdas).",
      img: img2,
    },
    {
      nome: "Website - Aquafish",
      descricao:
        "Website moderno, responsivo e optimizado para conversão e experiência do utilizador.",
      img: img3,
    },
    {
      nome: "Website - MozSystems",
      descricao:
        "Website institucional com design premium, performance elevada e foco em branding.",
      img: img4,
    },
  ];

  return (
    <section
      id="projectos"
      className="py-20 px-6 bg-gradient-to-b from-black to-cyan-950"
    >
      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Nossos <span className="text-cyan-400">Projetos</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Soluções digitais desenvolvidas com foco em performance, inovação e
          impacto real nos negócios.
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projectos.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl overflow-hidden shadow-lg"
          >
            {/* IMAGEM */}
            <img
              src={proj.img}
              alt={proj.nome}
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/80 transition duration-500"></div>

            {/* CONTEÚDO */}
            <div className="absolute bottom-0 p-6 text-white">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition">
                {proj.nome}
              </h2>
              <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition duration-500">
                {proj.descricao}
              </p>

              {/* LINHA */}
              <div className="w-12 h-1 bg-cyan-400 mt-3 group-hover:w-20 transition-all duration-500"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projectos;