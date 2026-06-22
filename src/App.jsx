import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wifi, 
  Copy, 
  Check, 
  MapPin, 
  CreditCard,
  ShieldCheck,
  ArrowRight,
  X
} from 'lucide-react';

/**
 * BRANDING & ASSETS (MARCA E RECURSOS)
 */
const BRAND = {
  logoUrl: 'https://i.postimg.cc/Gp1wxPjn/a9b811cf-4d7b-489e-971f-e1c708fd645c-1-removebg-preview.png',
  colors: {
    gold: '#D1A358',
    dark: '#050505',
  }
};

// Imagens para o Carrossel do Header (Banner 2 é o degradê/vídeo)
const BANNERS = [
  'https://i.postimg.cc/wjK939yP/IMG-20220819-090100.jpg', 
  'https://i.postimg.cc/nhvHj2JX/OFICINA-MECANICA-ESPECIALIZADA-ATTUALE.jpg'
];

/**
 * ÍCONES OFICIAIS COM CORES DE MARCA (SVGs Personalizados)
 */
const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="#25D366">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <defs>
      <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="25%" stopColor="#e6683c" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="75%" stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm3.98-10.822a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/>
    <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z"/>
    <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09z"/>
    <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0 7.565 0 3.515 2.7 1.545 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/>
  </svg>
);

// Componente de Notificação
const Toast = ({ message, isVisible }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 10 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white text-black px-6 py-3 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-3 font-bold whitespace-nowrap w-[90%] max-w-sm mx-auto justify-center"
      >
        <div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
          <Check size={14} className="text-white" strokeWidth={4} />
        </div>
        <span className="text-sm tracking-tight">{message}</span>
      </motion.div>
    )}
  </AnimatePresence>
);

const SectionHeader = ({ title, subtitle, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-4 px-2">
    <div className="p-2 bg-[#D1A358]/10 rounded-lg border border-[#D1A358]/20 flex items-center justify-center">
      <Icon size={16} className="text-[#D1A358]" />
    </div>
    <div>
      <h3 className="text-[10px] font-black text-[#D1A358] uppercase tracking-[0.2em] leading-none mb-1">{title}</h3>
      <p className="text-xs text-zinc-500 font-medium">{subtitle}</p>
    </div>
  </div>
);

// Item da Lista de Redes Sociais
function SocialListItem({ icon, title, subtitle, href, colorClass = "" }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-300 group ${colorClass}`}
    >
      <div className="w-11 h-11 flex-shrink-0 bg-black rounded-xl flex items-center justify-center shadow-inner border border-white/5 group-hover:scale-105 transition-transform duration-500">
        {icon}
      </div>
      <div className="flex-1 flex flex-col">
        <span className="text-sm font-bold text-white tracking-tight">{title}</span>
        <span className="text-[11px] text-zinc-400 font-medium">{subtitle}</span>
      </div>
      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:bg-white/10 transition-all">
        <ArrowRight size={14} />
      </div>
    </motion.a>
  );
}

// Botões de Ação Rápida para o Mapa e Google
function QuickAction({ icon, label, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 hover:bg-zinc-900/80 transition-all duration-300 group"
    >
      <div className="group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-wider">{label}</span>
    </motion.a>
  );
}

export default function App() {
  const [activeToast, setActiveToast] = useState({ show: false, message: '' });
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0);

  // Efeito para o carrossel avançar sozinho
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % BANNERS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Bloqueia o deslize da página quando a janela modal da História estiver aberta
  useEffect(() => {
    if (showHistoryModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [showHistoryModal]);

  const handleCopy = (text, label) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setActiveToast({ show: true, message: `${label} copiado!` });
    } catch (err) {
      console.error('Erro ao copiar', err);
    }
    document.body.removeChild(textArea);
    setTimeout(() => setActiveToast({ show: false, message: '' }), 2500);
  };

  const wifiConfig = {
    ssid: 'Oficina Attuale_2.4G',
    pass: 'Attuale2245.',
  };

  const pixKey = '32.534.154/0001-50';

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans antialiased selection:bg-[#D1A358]/40 overflow-x-hidden">
      
      {/* Efeito de Fundo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505] to-[#050505]" />
      </div>

      {/* CABEÇALHO Banners Rotativos */}
      <header className="relative w-full h-[280px] sm:h-[340px] overflow-hidden z-10 flex items-center justify-center">
        
        {/* Camada do Carrossel de Banners */}
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence mode="wait">
            {BANNERS[currentBanner] === 'GRADIENT_PLACEHOLDER' ? (
              <motion.div
                key="gradient-banner"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full bg-gradient-to-br from-[#302d2d] to-[#000000]"
              />
            ) : BANNERS[currentBanner].endsWith('.mp4') ? (
              <motion.video
                key={BANNERS[currentBanner]}
                src={BANNERS[currentBanner]}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover object-center"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <motion.img
                key={BANNERS[currentBanner]}
                src={BANNERS[currentBanner]}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover object-center"
                alt="Banner Attuale"
              />
            )}
          </AnimatePresence>
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#050505]" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>

        {/* Logótipo Attuale centralizado por cima do banner */}
        <div className="relative z-20 flex flex-col items-center px-4">
          <div className="relative group">
            <div className="absolute inset-x-0 -bottom-2 h-12 blur-2xl bg-[#D1A358]/30 rounded-full scale-75 opacity-70" />
            <img 
              src={BRAND.logoUrl} 
              alt="Logo Attuale" 
              className="w-48 sm:w-56 h-auto drop-shadow-[0_10px_15px_rgba(0,0,0,0.7)]"
              onError={(e) => { e.target.style.display = 'none'; document.getElementById('logo-fallback').style.display = 'flex'; }}
            />
            <div id="logo-fallback" className="hidden flex-col items-center">
              <span className="text-3xl font-black tracking-tighter text-[#D1A358]">ATTUALE</span>
              <span className="text-[9px] tracking-[0.4em] text-zinc-500 mt-1">PEÇAS & OFICINA</span>
            </div>
          </div>
        </div>

        {/* Indicadores de diapositivos (bolinhas do banner) */}
        <div className="absolute bottom-6 right-6 z-20 flex gap-1.5 opacity-60">
          {BANNERS.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1 rounded-full transition-all duration-300 ${idx === currentBanner ? 'w-4 bg-[#D1A358]' : 'w-1 bg-white/40'}`} 
            />
          ))}
        </div>
      </header>

      {/* ÁREA DE CONTEÚDO PRINCIPAL */}
      <main className="relative z-20 w-full max-w-[410px] mx-auto px-4 pb-20 -mt-2">
        <div className="space-y-7">
          
          {/* SECÇÃO WI-FI */}
          <motion.section 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader title="Conectividade" subtitle="Wi-Fi de alta velocidade para clientes" icon={Wifi} />
            <div className="p-[1px] rounded-[1.5rem] bg-gradient-to-br from-zinc-800/40 via-zinc-900/20 to-transparent">
              <div className="p-5 rounded-[1.4rem] bg-zinc-900/40 backdrop-blur-md flex flex-col gap-4 relative overflow-hidden border border-white/5">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[9px] uppercase text-zinc-500 font-bold tracking-widest mb-0.5">Rede Cliente</p>
                    <p className="text-sm font-semibold text-white tracking-tight">{wifiConfig.ssid}</p>
                  </div>
                  <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center border border-white/5">
                    <Wifi size={16} className="text-[#D1A358]" />
                  </div>
                </div>
                <button 
                  onClick={() => handleCopy(wifiConfig.pass, 'Senha do Wi-Fi')}
                  className="w-full py-3 bg-[#D1A358] text-black rounded-xl font-bold uppercase text-[10px] tracking-wider shadow-[0_5px_15px_rgba(209,163,88,0.2)] active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
                >
                  <Copy size={14} /> Copiar Senha do Wi-Fi
                </button>
              </div>
            </div>
          </motion.section>

          {/* SECÇÃO PIX */}
          <motion.section 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader title="Pagamento" subtitle="Rapidez e segurança com chave PIX" icon={CreditCard} />
            <div className="p-[1px] rounded-[1.5rem] bg-gradient-to-br from-zinc-800/40 via-zinc-900/20 to-transparent">
              <div className="p-5 rounded-[1.4rem] bg-zinc-900/40 backdrop-blur-md relative overflow-hidden flex flex-col gap-3.5 border border-white/5">
                <div className="flex items-center justify-between bg-black/40 border border-white/5 rounded-xl p-3">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase text-zinc-500 font-bold mb-0.5">Chave CNPJ</span>
                    <span className="text-xs font-mono text-zinc-200 tracking-wide">{pixKey}</span>
                  </div>
                  <ShieldCheck size={20} className="text-[#D1A358]" />
                </div>
                <button 
                  onClick={() => handleCopy(pixKey, 'Chave PIX')}
                  className="w-full py-3 bg-zinc-800/80 hover:bg-zinc-800 text-white rounded-xl font-bold text-[10px] uppercase tracking-wider active:scale-[0.98] transition-all flex items-center justify-center gap-2 border border-white/5"
                >
                  <Copy size={14} /> Copiar Chave PIX
                </button>
              </div>
            </div>
          </motion.section>

          {/* SECÇÃO INSTITUCIONAL */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-[1px] rounded-[1.5rem] bg-gradient-to-br from-[#D1A358]/30 via-zinc-900/40 to-transparent">
              <div className="p-5 rounded-[1.4rem] bg-gradient-to-br from-zinc-900/90 to-black relative overflow-hidden flex flex-col gap-2 border border-white/5 shadow-xl text-center">
                <h4 className="text-[10px] font-black text-[#D1A358] uppercase tracking-[0.25em]">Conheça Nossa História</h4>
                <p className="text-xs text-zinc-400 font-medium px-4 mb-2 leading-relaxed">Descubra os valores e a trajetória de precisão que guiam a oficina Attuale.</p>
                <button 
                  onClick={() => setShowHistoryModal(true)}
                  className="mx-auto px-6 py-2.5 bg-white text-black hover:bg-zinc-200 rounded-xl font-bold text-[10px] uppercase tracking-wider transition-all active:scale-[0.97]"
                >
                  Ler Nossa História
                </button>
              </div>
            </div>
          </motion.section>

          {/* MAPA E AVALIAÇÕES */}
          <motion.section 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3"
          >
            <QuickAction 
              icon={<MapPin size={24} className="text-[#D1A358]" />} 
              label="Como Chegar" 
              href="https://maps.app.goo.gl/ETUPfYVwFw1ki4Xx7" 
            />
            <QuickAction 
              icon={<GoogleIcon />} 
              label="Nossa Oficina" 
              href="https://g.page/r/CWspXntTk5EaEBM/review" 
            />
          </motion.section>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent my-2" />

          {/* REDES SOCIAIS E CONTACTOS */}
          <motion.section 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2.5"
          >
            <div className="px-1"><p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Conecte-se</p></div>
            <SocialListItem 
              icon={<WhatsappIcon />}
              title="Atendimento via WhatsApp"
              subtitle="Agendamentos e orçamentos rápidos"
              href="https://wa.me/553534250028"
              colorClass="hover:border-[#25D366]/20"
            />
            <SocialListItem 
              icon={<InstagramIcon />}
              title="Siga no Instagram"
              subtitle="@oficinamecanica.attuale"
              href="https://www.instagram.com/oficinamecanica.attuale/"
              colorClass="hover:border-[#bc1888]/20"
            />
            <SocialListItem 
              icon={<FacebookIcon />}
              title="Visite nosso Facebook"
              subtitle="Acompanhe novidades e dicas"
              href="https://facebook.com/attualepousoalegre"
              colorClass="hover:border-[#1877F2]/20"
            />
            <SocialListItem 
              icon={<GoogleIcon />}
              title="Avalie-nos no Google"
              subtitle="Sua opinião é muito importante"
              href="https://g.page/r/CWspXntTk5EaEBM/review"
              colorClass="hover:border-[#4285F4]/20"
            />
          </motion.section>

        </div>

        {/* RODAPÉ */}
        <footer className="mt-14 text-center">
          <p className="text-[9px] text-zinc-600 uppercase tracking-[0.4em] font-black">
            ATTUALE © 2026
          </p>
        </footer>
      </main>

      {/* MODAL INSTITUCIONAL (HISTÓRIA) */}
      <AnimatePresence>
        {showHistoryModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl overflow-y-auto"
            onClick={() => setShowHistoryModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#0A0A0A] border border-white/10 rounded-3xl w-full max-w-xl relative my-auto overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Cabeçalho Fixo do Modal */}
              <div className="sticky top-0 z-20 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5 p-4 sm:p-5 flex items-center justify-between">
                <h2 className="text-lg font-black text-white tracking-tight">Nossa História</h2>
                <button 
                  onClick={() => setShowHistoryModal(false)} 
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-zinc-400 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Área do Texto e Fotos (Scrollável) */}
              <div className="p-5 sm:p-6 max-h-[70vh] overflow-y-auto space-y-6 text-sm text-zinc-300 leading-relaxed font-medium custom-scrollbar">
                
                {/* FOTO 1 - FACHADA DA OFICINA */}
                <div className="w-full h-52 rounded-xl overflow-hidden shadow-lg relative border border-white/10 bg-zinc-900">
                  <img 
                    src="https://i.postimg.cc/1tRqTGyd/IMG-1252.avif" 
                    alt="Fachada Attuale Peças e Serviços" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-50" />
                </div>

                <p>
                  Fundada em 2019, em Pouso Alegre, a <span className="text-white font-bold">Attuale</span> nasceu com um propósito muito claro: oferecer uma nova experiência em manutenção automotiva, unindo conhecimento técnico, transparência e um atendimento verdadeiramente próximo de cada cliente.
                </p>
                <p>
                  Desde o início, entendemos que cuidar de um veículo vai muito além de substituir peças ou corrigir falhas. É necessário conhecer suas particularidades, realizar diagnósticos precisos e apresentar soluções responsáveis, respeitando as reais necessidades de cada automóvel e de seu proprietário.
                </p>
                <p>
                  Foi a partir dessa visão que construímos uma oficina especializada, preparada para atender veículos nacionais e importados, com destaque para Peugeot, Citroën e marcas premium. A experiência acumulada por nossos profissionais, aliada ao investimento constante em capacitação, equipamentos e processos, permitiu que a Attuale conquistasse espaço e confiança no mercado automotivo de Pouso Alegre e região.
                </p>

                {/* FOTO 2 - INTERIOR DA OFICINA */}
                <div className="w-full h-52 rounded-xl overflow-hidden shadow-lg relative border border-white/10 bg-zinc-900">
                  <img 
                    src="https://i.postimg.cc/0N8K4Yfs/IMG-20220811-111937-Original.jpg" 
                    alt="Interior da Oficina Attuale com veículos premium" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-50" />
                </div>

                <p>
                  Em uma estrutura completa, desenvolvida para oferecer segurança, organização e eficiência, realizamos desde revisões preventivas e manutenções corretivas até diagnósticos eletrônicos, serviços em freios, suspensão, câmbio automático, motor e outros sistemas fundamentais do veículo.
                </p>
                <p>
                  Ao longo da nossa trajetória, cada atendimento contribuiu para fortalecer aquilo que consideramos o maior patrimônio da Attuale: a confiança dos nossos clientes. São pessoas que encontraram aqui não apenas uma oficina, mas uma equipe disposta a explicar, orientar e cuidar de cada veículo com seriedade e atenção aos detalhes.
                </p>
                <p>
                  Hoje, seguimos evoluindo sem abrir mão dos princípios que deram origem à nossa história: excelência técnica, atendimento humanizado, transparência e compromisso com um serviço bem executado.
                </p>
                <p>
                  Mais do que reparar veículos, trabalhamos para proporcionar segurança, tranquilidade e confiança em cada quilômetro.
                </p>
                
                <div className="pt-4 border-t border-white/5 text-center">
                  <p className="text-[#D1A358] font-black text-base tracking-tight">
                    Attuale. Especialização, precisão e cuidado em cada detalhe.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Toast isVisible={activeToast.show} message={activeToast.message} />
    </div>
  );
}
