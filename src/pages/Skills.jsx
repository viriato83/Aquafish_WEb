import React from "react";
import { motion } from "framer-motion";

// Imagens
import footerImg from "../components/img/imagens/banner_aquafish.png";
import img1 from "../components/img/imagens/tilapia.jpg";
import img2 from "../components/img/imagens/TilapiaV.png";
import img3 from "../components/img/imagens/Garoupa2.png";
import img4 from "../components/img/imagens/Pedra.png";
import img5 from "../components/img/imagens/serra.jpg";
import img6 from "../components/img/imagens/corvina.png";
import img7 from "../components/img/imagens/Vermelhao.png";
import img8 from "../components/img/imagens/Xereu.png";

const Skills = () => {
  const produtos = [
    { img: img1, nome: "Tilápia", desc: "Produção própria, fresca e saudável" },
    { img: img2, nome: "Tilápia Vermelha", desc: "Alta qualidade e sabor premium" },
    { img: img3, nome: "Garoupa", desc: "Peixe do mar selecionado" },
    { img: img4, nome: "Peixe Pedra", desc: "Captura artesanal controlada" },
    { img: img5, nome: "Peixe Serra", desc: "Ideal para grelhados" },
    { img: img6, nome: "Corvina", desc: "Carne macia e saborosa" },
    { img: img7, nome: "Peixe Vermelho", desc: "Fresco e altamente nutritivo" },
    { img: img8, nome: "Xereu", desc: "Muito procurado no mercado" },
  ];

  return (
    <section
      id="produtos"
      className="py-20 px-6  text-white"
    >
      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold">
          Nossos <span className="text-cyan-400">Produtos</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Peixes frescos, selecionados e fornecidos com padrão premium para
          clientes exigentes.
        </p>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {produtos.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400 hover:shadow-cyan-500/20 shadow-lg transition-all"
          >
            {/* IMAGEM */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={item.img}
                alt={item.nome}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* BADGE */}
              

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
            </div>

            {/* CONTEÚDO */}
            <div className="p-4">
              <h3 className="text-lg font-semibold group-hover:text-cyan-400 transition">
                {item.nome}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {item.desc}
              </p>

              {/* BOTÃO */}
              <a
                href="https://wa.me/258853038699"
                target="_blank"
                className="mt-4 inline-block text-sm bg-cyan-500 hover:bg-cyan-600 px-4 py-1 rounded-full transition"
              >
                Encomendar
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* BANNER FINAL */}
      <div className="mt-24 relative h-40 rounded-2xl overflow-hidden max-w-6xl mx-auto shadow-xl">
        <img
          src={footerImg}
          alt="Aquafish"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-2xl md:text-4xl font-bold">
            Qualidade que você pode confiar
          </h2>
          <p className="text-gray-300 mt-2">
            Aquafish — Peixe fresco direto para o seu negócio
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;