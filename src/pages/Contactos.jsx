import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import img from "../components/img/imagens/whatsapp.png";

export default function Contact() {
  const form = useRef();

  const [ativo, setAtivo] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const nome = formData.get("name");
    const email = formData.get("email");
    const mensagem = formData.get("message");

    // ✅ Validação
    if (!nome || !email || !mensagem) {
      alert("Preencha todos os campos!");
      return;
    }

    setAtivo(true);

    emailjs.sendForm(
      'service_fckvc1g',
      'template_c0o583v',
      form.current,
      't2uo4Vi1pA83QXSjF'
    )
    .then(() => {
        setSucesso(true);
        setAtivo(false);
        form.current.reset();
    })
    .catch(() => {
        alert("Erro ao enviar. Tente novamente.");
        setAtivo(false);
    });
  };

  return (
    <div id="contactos" className="flex items-center justify-center flex-col px-6 py-20 ">
      
      <h2 className="text-4xl font-bold text-white mb-4">
        Entre em Contacto
      </h2>

      <p className="text-gray-300 mb-10 text-center max-w-xl">
        Fale connosco para parcerias, fornecimento de tilápia ou qualquer dúvida.
      </p>

      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-5xl">

        {/* FORM */}
        <form 
          ref={form} 
          onSubmit={sendEmail}
          className="flex-1 bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10"
        >
          <div className="mb-4">
            <label className="text-white">Nome</label>
            <input 
              type="text" 
              name="name"
              className="w-full mt-1 p-2 rounded bg-white/10 text-white outline-none"
              placeholder="Seu nome"
            />
          </div>

          <div className="mb-4">
            <label className="text-white">Email</label>
            <input 
              type="email" 
              name="email"
              className="w-full mt-1 p-2 rounded bg-white/10 text-white outline-none"
              placeholder="Seu email"
            />
          </div>

          <div className="mb-4">
            <label className="text-white">Mensagem</label>
            <textarea 
              name="message"
              rows="4"
              className="w-full mt-1 p-2 rounded bg-white/10 text-white outline-none"
              placeholder="Escreva sua mensagem"
            />
          </div>

          <button 
            type="submit"
            disabled={ativo}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-xl transition-all"
          >
            {ativo ? "A enviar..." : "Enviar Mensagem"}
          </button>

          {sucesso && (
            <p className="text-green-400 mt-4 text-center">
              ✅ Mensagem enviada com sucesso!
            </p>
          )}
        </form>

        {/* INFO */}
        <div className="flex-1 text-white space-y-6">
          <div>
            <h5 className="text-xl text-cyan-400">📍 Endereço</h5>
            <p className="text-gray-300">Machava, Maputo, Moçambique</p>
          </div>

          <div>
            <h5 className="text-xl text-cyan-400">📩 Email</h5>
            <p className="text-gray-300">info@aquafish.co.mz</p>
            <p className="text-gray-300">vmubai@aquafish.co.mz</p>
            <p className="text-gray-300">vendas@aquafish.co.mz</p>
          </div>

          <div>
            <h5 className="text-xl text-cyan-400 flex items-center gap-2">
              <img src={img} width="18" /> WhatsApp
            </h5>
            <a 
              href="https://wa.me/258853038699" 
              target="_blank"
              className="text-gray-300 hover:text-cyan-400"
            >
              +258 85 303 8699
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}