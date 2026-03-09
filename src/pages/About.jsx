import React from 'react';
import img from "../components/img/imagens/prod2.jpg"
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const About = () => {
  const paragraphVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay }
    })
  };
  return (
    <div  id="about" className='flex justify-center items-center gap-6 max-md:flex-col'>
      {/* texto */}
      <motion.section
       initial={{opacity:0,x:-100}}
       whileInView={{opacity:1,x:0,}}
       transition={{duration:0.7}}
       viewport={{ once: false, amount: 0.3 }}
      
      >
          <div className='flex items-start flex-col px-8 gap-5 text-white md:float-right'>
            <h1 className="text-cyan-500  text-3xl md:text-6xl">Sobre Nós</h1>
         
        
            <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="md:max-w-2xl text-justify text-black"
    >
      <motion.p
        variants={paragraphVariant}
        custom={0}
      >
       A Aquafish Sociedade Unipessoal, Lda é uma empresa moçambicana localizada em Quissico, Inhambane, especializada na produção e comercialização de peixe tilápia e pesca de peixe do mar. Nosso compromisso é oferecer produtos de alta qualidade, garantindo sustentabilidade e frescor.
      </motion.p>

      <motion.p
        variants={paragraphVariant}
        custom={0.3} // Delay de 0.3s
        className="mt-4"
      >
       Produção de Tilápias
Utilizamos incubadoras modernas para garantir a melhor qualidade na criação de tilápias. Além disso, produzimos alevinos saudáveis e resistentes, proporcionando um ciclo sustentável de produção para atender a demanda do mercado.


      </motion.p>

      <motion.p
        variants={paragraphVariant}
        custom={0.6} // Delay de 0.6s
        className="mt-4"
      >
       A Aquafish atua também na área de procurement e fornecimento de equipamentos, realizando a aquisição e fornecimento de insumos, materiais e equipamentos para aquacultura e pesca, facilitando o acesso a soluções técnicas adequadas às necessidades dos nossos clientes.

Complementarmente, disponibilizamos consultoria e acompanhamento técnico, apoiando projetos aquícolas e pesqueiros, desde a fase de planeamento até a implementação e operação, com foco em eficiência, sustentabilidade e resultados económicos.
      </motion.p>

     <Link to='projectos'>
     <motion.button
        variants={paragraphVariant}
        custom={0.9} // Delay de 0.9s
        className="flex mb-[50px] border border-blue-500 py-2 mt-5 px-3 rounded-full hover:bg-cyan-500 transition-all duration-500"
      >
        Nossos Produtos
      </motion.button>
     </Link>
    </motion.div>
     
     </div>
      </motion.section>
      <motion.section
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0,}}
            transition={{duration:0.7}}
            viewport={{ once: false, amount: 0.3 }}>
          <div className='flex'>
          <img src={img} className='ml-8 flex rounded-4xl h-58  md:h-[300px] mb-10  md:mt-20'>
            </img>
            {/* <div className=' sobra_azul bg-cyan-500 w-2 h-2 absolute  left-[70%] -bottom-[40%] -z-10 animate-pulse' >

              </div>
              <div className=' sobra_laranja bg-orange-500 w-2 h-2 absolute left-[60%] -bottom-[55%] -z-10 animate-pulse' >

          </div> */}
          
        </div>
     </motion.section>
    </div>
  )
}

export default About
