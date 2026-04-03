import React from 'react'
import img from "../components/img/imagens/sede.jpg"
import { FaRegCircle } from 'react-icons/fa'
import { LuCircleDashed } from 'react-icons/lu'
import { motion } from "framer-motion";
import bgImage from "../components/img/imagens/Hero_img.jpg";
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 bg-cover bg-center w-full
      max-sm:pt-20
      "
      style={{
        backgroundImage: `url(${bgImage})`,
      
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left max-w-xl"
        >
          <h2 className="text-cyan-400 uppercase tracking-widest text-sm md:text-base">
            Aquacultura & Serviços
          </h2>

          <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight mt-2">
            Aquafish Lda
          </h1>

          <p className="text-gray-200 mt-4 text-sm md:text-lg">
            Produzimos peixe de alta qualidade com foco em frescura, saúde e valor nutricional.
            Atuamos também na pesca, procurement e fornecimento de soluções para o setor aquícola.
          </p>

          {/* BOTÕES */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
           <Link to='contactos'>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold transition max-sm:mt-[-40px]">
              Comprar Agora
            </button></Link>

          <Link to='about'>
            <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition max-sm:mt-[-40px]">
              Saber Mais
            </button></Link>
          </div>
        </motion.div>

        {/* CARD DE DESTAQUE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white
       max-w-sm
        max-sm:mt-[-25px]"
        >
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">
            Porquê escolher a Aquafish?
          </h3>

          <ul className="space-y-2 text-sm">
            <li>✔ 100% Saudável</li>
            <li>✔ Sem Cheiro</li>
            <li>✔ Rico em valor nutricional</li>
            <li>✔ Produção sustentável</li>
          </ul>
        </motion.div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 w-full text-center text-white border-t border-white/20 py-3 text-sm md:text-base">
        Piscicultura • Procurement • Pesca
      </div>
    </div>
  );
};

export default Hero;