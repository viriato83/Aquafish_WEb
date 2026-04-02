import React from 'react';
import img from "../components/img/imagens/prod2.jpg";
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const About = () => {

  const paragraphVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay }
    })
  };

  return (
    <section id="about" className="py-20 px-6 md:px-16 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* TEXTO */}
        <motion.div
          className="flex-1 text-white"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-cyan-400 text-4xl md:text-6xl font-bold mb-6">
            Sobre Nós
          </h1>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 text-gray-300 leading-relaxed"
          >
            <motion.p variants={paragraphVariant} custom={0}>
              A Aquafish Sociedade Unipessoal, Lda é uma empresa moçambicana localizada em Quissico, Inhambane, especializada na produção e comercialização de tilápia e pesca marítima. Nosso compromisso é garantir produtos frescos, de alta qualidade e sustentáveis.
            </motion.p>

            <motion.p variants={paragraphVariant} custom={0.3}>
              Utilizamos incubadoras modernas para assegurar a melhor criação de tilápias, produzindo alevinos saudáveis e resistentes, garantindo um ciclo produtivo eficiente e sustentável.
            </motion.p>

            <motion.p variants={paragraphVariant} custom={0.6}>
              Atuamos também no fornecimento de equipamentos e insumos para aquacultura e pesca, além de oferecer consultoria técnica especializada, apoiando desde o planeamento até a implementação de projetos.
            </motion.p>

            <Link to="produtos" smooth={true} duration={500}>
              <motion.button
                variants={paragraphVariant}
                custom={0.9}
                className="mt-6 px-6 py-3 border border-cyan-400 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Nossos Produtos
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* IMAGEM */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="relative group">
            <img
              src={img}
              alt="Aquafish"
              className="w-full h-[250px] md:h-[350px] object-cover rounded-3xl shadow-lg transform group-hover:scale-105 transition duration-500"
            />

            {/* overlay elegante */}
            <div className="absolute inset-0 bg-cyan-500/10 rounded-3xl"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;