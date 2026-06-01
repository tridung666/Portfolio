import { motion } from 'framer-motion';
import backgroundImage from '../assets/portfolio-background.png';

export function AnimatedBackground(): React.ReactElement {
  return (
    <div aria-hidden="true" className="fixed left-1/2 top-0 -z-10 h-screen w-screen -translate-x-1/2 overflow-hidden bg-[#050505]">
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/42 via-[#050505]/18 to-[#050505]/78" />
      <motion.div
        className="absolute inset-x-[-22%] top-[-26%] h-[44rem] rotate-[-8deg] opacity-35 blur-3xl [background:linear-gradient(105deg,transparent_8%,rgba(20,184,166,0.22)_34%,rgba(248,250,252,0.11)_50%,rgba(244,114,182,0.14)_66%,transparent_92%)]"
        animate={{ x: ['-4%', '4%', '-4%'], y: ['0%', '3%', '0%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-x-[-18%] bottom-[-30%] h-[42rem] rotate-[7deg] opacity-35 blur-3xl [background:linear-gradient(95deg,transparent_10%,rgba(34,211,238,0.18)_36%,rgba(52,211,153,0.14)_58%,transparent_88%)]"
        animate={{ x: ['5%', '-3%', '5%'], y: ['0%', '-4%', '0%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 [background:radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_42%),linear-gradient(180deg,transparent,rgba(5,5,5,0.48)_78%,#050505)]" />
    </div>
  );
}
