import React from 'react'
import img1 from "../components/img/cpt/1.png"
import img2 from "../components/img/cpt/2.png"
import img3 from "../components/img/cpt/3.png"
import img4 from "../components/img/cpt/4.png"
import {motion} from "framer-motion"
const Projectos = () => {
  const projectos = [
    {
      nome: "Sistema web desenvolvido para empresa Aquafish LDA",
      descricao: "Sistema de gestão de stock e vendas, com controlo operacional remoto.",
      img: img1
    },
    {
      nome: "Sistema web desenvolvido para empresa Mbchiken",
      descricao: "Sistema de controlo de produção e vendas, incluindo controlo financeiro de lucros e perdas.",
      img: img2
    },
    {
      nome: "Website desenvolvido para empresa Aquafish",
      descricao: "Website super responsivo, pensado 100% para melhor experiência do usuário.",
      img: img3
    },
    {
      nome: "Website desenvolvido para Mozsystems",
      descricao: "Website super responsivo, pensado 100% para melhor experiência do usuário.",
      img: img4
    },
  ]

  return (
    <div id="projectos" className="mt-20 flex flex-col items-center">
      {/* Título */}
      <div className="py-10">
        <h1 className="text-3xl text-cyan-500 py-3 md:text-6xl font-bold">Projetos</h1>
      </div>

      {/* Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projectos.map((e, index) => (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false,amount:0.7 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{duration:0.6}}
           
            key={index}
            className="bg-[#0f172a] rounded-2xl p-5 shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 flex flex-col items-center text-center max-w-sm"
          >
            <img
              src={e.img}
              alt={e.nome}
              className="h-56 w-full object-cover border-2 border-amber-50 rounded-2xl transition-transform duration-500 hover:scale-105"
            />
            <h2 className="text-cyan-500 text-xl font-semibold mt-4">{e.nome}</h2>
            <p className="text-amber-50/80 mt-2">{e.descricao}</p>
            <div className="w-16 border-b-4 border-orange-500/30 mt-4"></div>
          </motion.section>
        ))}
      </div>
    </div>
  )
}

export default Projectos
