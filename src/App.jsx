import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wifi, 
  Copy, 
  Check, 
  Instagram, 
  Facebook, 
  MapPin, 
  Star, 
  MessageCircle, 
  CreditCard,
  ExternalLink,
  ShieldCheck,
  QrCode,
  ArrowRight,
  ChevronRight,
  X
} from 'lucide-react';

/**
 * BRANDING & ASSETS
 * Cores extraídas do logo: Dourado Premium e Branco Neve.
 */
const BRAND = {
  logoUrl: 'https://i.postimg.cc/Gp1wxPjn/a9b811cf-4d7b-489e-971f-e1c708fd645c-1-removebg-preview.png',
  colors: {
    gold: '#D1A358', // Dourado refinado do logo
    dark: '#050505',
    carbon: 'rgba(20, 20, 20, 0.8)'
  }
};

// Componente de Notificação (Toast) Premium
const Toast = ({ message, isVisible }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 10 }}
        className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 bg-white text-black px-8 py-3 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-3 font-bold"
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
  <div className="flex items-center gap-3 mb-6 px-2">
    <div className="p-2 bg-[#D1A358]/10 rounded-lg border border-[#D1A358]/20 flex items-center justify-center">
      <Icon size={16} className="text-[#D1A358]" />
    </div>
    <div>
      <h3 className="text-[10px] font-black text-[#D1A358] uppercase tracking-[0.3em] leading-none mb-1">{title}</h3>
      <p className="text-xs text-zinc-500 font-medium">{subtitle}</p>
    </div>
  </div>
);

function QuickAction({ icon, label, href, highlight = false, color = "" }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative flex flex-col items-center justify-center gap-4 p-7 rounded-[2.2rem] border transition-all duration-500 active:scale-95 group
        ${highlight 
          ? 'bg-gradient-to-br from-[#D1A358] to-[#AA8A2E] border-none text-black shadow-[0_20px_40px_rgba(209,163,88,0.15)]' 
          : `bg-zinc-900/40 border-white/5 text-zinc-400 hover:text-[#D1A358] hover:bg-zinc-900/80 ${color}`}
      `}
    >
      <div className={`${highlight ? 'text-black' : 'text-[#D1A358]'} group-hover:scale-110 transition-transform duration-500`}>
        {icon}
      </div>
      <span className="text-[10px] font-black uppercase tracking-wider">{label}</span>
      {!highlight && <ExternalLink size={10} className="absolute top-5 right-5 text-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity" />}
    </motion.a>
  );
}

export default function App() {
  const [activeToast, setActiveToast] = useState({ show: false, message: '' });
  const [isLoaded, setIsLoaded] = useState(false);
  const [showWifiModal, setShowWifiModal] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
    pass: 'Attuale2245.', // Senha corrigida com o ponto no final
  };

  const pixKey = '32.534.154/0001-50';

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans antialiased overflow-x-hidden selection:bg-[#D1A358]/40">
      
      {/* Background Layer: Carbon Fiber + Gradient Overlay */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[150%] h-[60%] bg-[#D1A358]/10 blur-[140px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-md mx-auto px-6 pt-12 pb-24">
        
        {/* Header Profissional com Logo Attuale */}
        <motion.header 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col items-center mb-16"
        >
          <div className="relative group">
            <div className="absolute inset-0 blur-3xl bg-[#D1A358]/20 rounded-full scale-75 opacity-50 group-hover:opacity-80 transition-opacity" />
            <img 
              src={BRAND.logoUrl} 
              alt="Logo Attuale" 
              className="relative w-64 h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
              onError={(e) => { e.target.style.display = 'none'; document.getElementById('logo-fallback').style.display = 'flex'; }}
            />
            <div id="logo-fallback" className="hidden flex-col items-center">
              <span className="text-4xl font-black tracking-tighter text-[#D1A358]">ATTUALE</span>
              <span className="text-[10px] tracking-[0.5em] text-zinc-500 mt-2">PEÇAS & OFICINA</span>
            </div>
          </div>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-[#D1A358] to-transparent mt-8"
          />
        </motion.header>

        <div className="space-y-10">
          
          {/* Seção Wi-Fi */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader title="Conectividade" subtitle="Wi-Fi de alta velocidade para você" icon={Wifi} />
            <div className="group relative">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-zinc-800 via-[#D1A358]/30 to-zinc-800 rounded-[2rem] opacity-50 transition-opacity group-hover:opacity-100" />
              <div className="relative p-6 rounded-[2rem] bg-zinc-900/80 backdrop-blur-2xl flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest mb-1">Rede</p>
                    <p className="text-lg font-semibold tracking-tight text-white">{wifiConfig.ssid}</p>
                  </div>
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center p-2 shadow-inner border border-white/5">
                    <Wifi size={24} className="text-[#D1A358]" />
                  </div>
                </div>
                
                <button 
                  onClick={() => setShowWifiModal(true)}
                  className="w-full h-14 bg-[#D1A358] text-black hover:bg-[#AA8A2E] rounded-2xl flex items-center justify-center gap-2 px-6 transition-all active:scale-[0.98] font-black uppercase text-xs tracking-wider shadow-[0_10px_30px_rgba(209,163,88,0.2)]"
                >
                  Conectar Agora <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.section>

          {/* Seção PIX */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader title="Pagamento" subtitle="Rapidez e segurança via PIX" icon={CreditCard} />
            <div className="p-1 rounded-[2rem] bg-gradient-to-br from-zinc-800 to-black shadow-2xl">
              <div className="bg-[#0A0A0A] rounded-[1.9rem] p-6 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D1A358]/5 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between bg-zinc-900/50 border border-white/5 rounded-2xl p-4">
                    <div className="flex flex-col text-left">
                      <span className="text-[8px] uppercase text-zinc-500 font-black mb-1">Chave CNPJ</span>
                      <span className="text-sm font-mono text-zinc-200">{pixKey}</span>
                    </div>
                    <ShieldCheck size={20} className="text-zinc-700" />
                  </div>

                  <button 
                    onClick={() => handleCopy(pixKey, 'Chave PIX')}
                    className="w-full h-14 bg-[#D1A358] text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(209,163,88,0.2)] active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    Copiar para pagar <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Atalhos Grid */}
          <div className="grid grid-cols-2 gap-4">
            <QuickAction 
              icon={<MessageCircle size={22} />} 
              label="WhatsApp" 
              href="https://wa.me/553534250028" 
              color="hover:border-green-500/40"
            />
            <QuickAction 
              icon={<Star size={22} />} 
              label="Avaliar" 
              href="https://g.page/r/CWspXntTk5EaEBM/review" 
              highlight
            />
            <QuickAction 
              icon={<Instagram size={22} />} 
              label="Instagram" 
              href="https://www.instagram.com/oficinamecanica.attuale/" 
            />
            <QuickAction 
              icon={<MapPin size={22} />} 
              label="Endereço" 
              href="https://maps.app.goo.gl/ETUPfYVwFw1ki4Xx7" 
            />
          </div>

          {/* Facebook Link */}
          <motion.a 
            href="https://facebook.com/attualepousoalegre"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/20 transition-all group"
          >
            <div className="flex items-center gap-4">
              <Facebook size={20} className="text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">Visite nosso Facebook</span>
            </div>
            <ChevronRight size={14} className="text-zinc-700" />
          </motion.a>

        </div>

        <footer className="mt-20 text-center flex flex-col items-center gap-4">
          <div className="h-[1px] w-24 bg-zinc-900" />
          <p className="text-[8px] text-zinc-600 uppercase tracking-[0.6em] font-black">
            High Precision Service • Attuale © 2024
          </p>
        </footer>

      </main>

      {/* Modal de Conexão Wi-Fi */}
      <AnimatePresence>
        {showWifiModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowWifiModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 w-full max-w-sm flex flex-col items-center relative overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
               <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-full h-[60%] bg-[#D1A358]/20 blur-[80px] rounded-full pointer-events-none" />
               
               <button onClick={() => setShowWifiModal(false)} className="absolute top-4 right-4 p-2 bg-white/5 rounded-full text-zinc-400 hover:text-white transition-colors">
                 <X size={20} />
               </button>

               <div className="bg-white p-4 rounded-2xl mb-6 shadow-[0_10px_40px_rgba(209,163,88,0.2)] mt-2">
                 <img 
                   src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=WIFI%3AS%3AOficina%20Attuale_2.4G%3BT%3AWPA%3BP%3AAttuale2245.%3B%3B`} 
                   alt="QR Code Wi-Fi" 
                   className="w-48 h-48"
                 />
               </div>

               <h3 className="text-xl font-bold text-white mb-2 text-center">Conexão Automática</h3>
               <p className="text-xs text-zinc-400 text-center mb-6 leading-relaxed">
                 Aponte a câmara do celular para o QR Code.<br/><br/>
                 <span className="text-[#D1A358] font-bold">Nota:</span> O navegador de internet bloqueia a conexão automática direta. Se estiver no celular que deseja conectar, copie a senha abaixo:
               </p>

               <button 
                  onClick={() => {
                    handleCopy(wifiConfig.pass, 'Senha');
                    setShowWifiModal(false);
                  }}
                  className="w-full h-12 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] text-sm font-bold text-white"
                >
                  <Copy size={16} /> Copiar Senha
                </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Toast isVisible={activeToast.show} message={activeToast.message} />
    </div>
  );
}
