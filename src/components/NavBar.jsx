import React, { useState } from 'react'
import { FiArrowDownRight } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-scroll';
import img1 from "./img/imagens/logo.png"
const NavBar = () => {
  const links = [
   
    { link: "Produtos", seccion: "produtos" },
    { link: "Serviços", seccion: "servicos" },
 
    { link: "Sobre Nos", seccion: "about" },
    { link: "Contatos", seccion: "contactos" },
  ];
  

  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full flex justify-center fixed z-10">
      <nav className="fixed top-4 flex items-center justify-between px-6 py-4 w-[90%] max-w-8xl rounded-full bg-black/40 backdrop-blur-md border border-blue-500 shadow-md">
        
        {/* Logo / Nome */}
        <div className="nome text-white text-lg sm:text-2xl font-bold grid grid-cols-2 "><img src={img1} width="100px"></img>
        <Link 
              to="home"
              smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Aquafish Lda 
         
            </Link>
                    </div>
 
        {/* Links Desktop */}
        <ul className="hidden lg:flex items-center gap-6 text-white font-semibold">
          
      
        {links.map((e, i) => (
          <li key={i} className="group relative ">
            <Link 
              to={e.seccion}
              smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              {e.link}
            </Link>
            <div className="h-[2px] w-0 bg-cyan-500 group-hover:w-full transition-all duration-300 mx-auto mt-1" />
          </li>
        ))}
    

        </ul>

        {/* Botão principal */}
        <div className="hidden lg:flex">
          <Link to='about'>
          <button className="btn_sobre flex items-center gap-2 px-4 py-2 text-white text-lg font-bold rounded-full border border-cyan-500 bg-gradient-to-r from-cyan-500 to-blue-400 hover:scale-105 hover:border-orange-400 transition">
            Sobre Nós <FiArrowDownRight />
          </button>
          </Link>
        </div>

        {/* Ícone do menu mobile */}
        <button onClick={toggle} className="lg:hidden text-2xl text-white border border-blue-500 p-2 rounded-full hover:scale-110  transition">
          <GiHamburgerMenu />
        </button>
      </nav>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="fadeIn lg:hidden fixed top-24 w-full  bg-black/10 backdrop-blur-3xl rounded-xl py-6 px-6 text-white shadow-2xl animate-fadeIn z-40 transition-all duration-1000   ">
          <ul className="flex flex-col gap-6 text-lg text-center font-semibold">
            {links.filter((e)=>e.seccion!="about").map((e, i) => (
              <li key={i} className="group">
                <Link to={`${e.seccion}`} onClick={() => setMenuOpen(false)} className="block hover:text-cyan-400 transition"
                smooth={true}
                spy={true}

                duration={500}
                offset={-130}
                >
                  {e.link}
                  
                </Link>
                <div className="h-[2px] w-0 bg-cyan-500 group-hover:w-full transition-all duration-300" />
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-center">
            <Link to='about'>
            <button onClick={() => setMenuOpen(false)} className="w-full max-w-md flex items-center justify-center gap-2 px-4 py-2 text-white text-lg font-bold rounded-full border border-cyan-500 bg-gradient-to-r from-cyan-500 to-gray-400 hover:scale-105 hover:border-orange-400 transition">
              Sobre Nós 
            </button></Link>
          </div>
        </div>
      )}
   
    </div>
  );
};

export default NavBar;
