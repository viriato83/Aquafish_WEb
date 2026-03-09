import React from "react";
import { motion } from "framer-motion";

// Imagens
import footerImg from "../components/img/imagens/banner_aquafish.png";
import img1 from "../components/img/imagens/tilapia.jpg";
import img2 from "../components/img/imagens/TilapiaV.png";
import img3 from "../components/img/imagens/Garoupa2.png";
import img4 from "../components/img/imagens/Pedra.png";
import img5 from "../components/img/imagens/serra.jpg";
import img6 from "../components/img/imagens/corvina.JFIF";
import img7 from "../components/img/imagens/vermelhao.png";
import img8 from "../components/img/imagens/xereu.png";

const Skills = () => {
  // Animações
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // Produtos
  const produtos = [
    { img: img1, nome: "Tilápia" },
    { img: img2, nome: "Tilápia Vermelha" },
    { img: img3, nome: "Garoupa" },
    { img: img4, nome: "Peixe Pedra" },
    { img: img5, nome: "Peixe Serra" },
    { img: img6, nome: "Corvina" },
    { img: img7, nome: "Peixe Vermelho" },
    { img: img8, nome: "Xereu" },
  ];

  return (
    <section
      id="produtos"
      className="flex flex-col items-center justify-center my-32 px-6"
    >
      {/* Título */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-cyan-500">
          Nossos Produtos
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl">
          Produção e comercialização de peixes frescos e selecionados, com
          qualidade garantida pela Aquafish.
        </p>
      </div>

      {/* GRID DESKTOP */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="hidden md:grid grid-cols-4 gap-10"
      >
        {produtos.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
            className="flex justify-center"
          >
            <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-blue-500 group shadow-lg">
              {/* Imagem */}
              <img
                src={item.img}
                alt={item.nome}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-lg font-semibold tracking-wide">
                  {item.nome}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* GRID MOBILE */}
      {/* GRID MOBILE */}
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-2 gap-8 md:hidden"
>
  {produtos.map((item, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      className="flex flex-col items-center"
    >
      {/* Círculo */}
      <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-blue-500 shadow-md">
        <img
          src={item.img}
          alt={item.nome}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Nome sempre visível */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-3 text-sm font-semibold text-white text-center"
      >
        {item.nome}
      </motion.span>
    </motion.div>
  ))}
</motion.div>

      {/* Footer decorativo */}
      <div className="mt-24 w-full h-24 overflow-hidden">
        <img
          src={footerImg}
          alt="Aquafish footer"
          className="w-full h-full object-cover blur-[1px]"
        />
      </div>
    </section>
  );
};

export default Skills;
