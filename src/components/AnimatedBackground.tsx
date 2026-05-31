import { motion } from 'framer-motion';

export function AnimatedBackground(): React.ReactElement {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 opacity-[0.28] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />
      <motion.div
        className="absolute inset-x-[-22%] top-[-26%] h-[44rem] rotate-[-8deg] opacity-50 blur-3xl [background:linear-gradient(105deg,transparent_8%,rgba(20,184,166,0.22)_34%,rgba(248,250,252,0.11)_50%,rgba(244,114,182,0.14)_66%,transparent_92%)]"
        animate={{ x: ['-4%', '4%', '-4%'], y: ['0%', '3%', '0%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-x-[-18%] bottom-[-30%] h-[42rem] rotate-[7deg] opacity-45 blur-3xl [background:linear-gradient(95deg,transparent_10%,rgba(34,211,238,0.18)_36%,rgba(52,211,153,0.14)_58%,transparent_88%)]"
        animate={{ x: ['5%', '-3%', '5%'], y: ['0%', '-4%', '0%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 [background:radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_42%),linear-gradient(180deg,transparent,rgba(5,5,5,0.72)_78%,#050505)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.55)_48%,transparent_52%)] [background-size:240px_240px]" />
    </div>
  );
}
