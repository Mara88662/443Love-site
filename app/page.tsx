'use client';

import { motion } from 'framer-motion';

const sections = [
  { title: 'About', content: '443LOVE is a cultural movement fused with Solana speed, meme energy, and a luxury-native community identity.' },
  { title: 'Coinomics', content: 'Fair launch, community-first tokenomics, and a long-term rewards flywheel built around Hearts and climbing.' },
  { title: '443 Climb', content: 'A cinematic social game where every climb unlocks new meaning, status, and utility for the community.' }
];

const faqs = [
  { q: 'What is 443LOVE?', a: 'It is a premium meme coin experience blending culture, utility, and community storytelling on Solana.' },
  { q: 'How do Hearts work?', a: 'Hearts are earned through participation, climbing, and community missions that amplify your status.' },
  { q: 'When is the game live?', a: 'The 443 Climb preview is live now, with broader rollout planned in phases.' }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-20 sm:px-10 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,70,140,0.22),_rgba(0,0,0,0)_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.04),_transparent_40%)]" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="mb-6 inline-flex rounded-full border border-rose-400/30 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-rose-200/90">Solana • Meme • Luxury</p>
            <h1 className="text-5xl font-black uppercase tracking-[0.3em] text-white sm:text-6xl lg:text-8xl">
              LOVE <span className="text-rose-300">ALWAYS</span> WINS
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-300 sm:text-xl">
              Inspired by one of the internet’s most unforgettable rooftop moments, 443LOVE turns emotion into a premium crypto experience.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#climb" className="rounded-full border border-rose-300/40 bg-rose-500/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-rose-100 shadow-glow transition hover:bg-rose-500/35">Play 443 Climb</a>
              <a href="#buy" className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-rose-300/40 hover:text-rose-200">Buy L443</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative mx-auto flex aspect-square w-full max-w-[480px] items-center justify-center">
            <div className="absolute inset-8 rounded-full border border-rose-400/20" />
            <motion.div animate={{ rotateY: [0, 360], rotateX: [8, -8, 8] }} transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }} className="relative h-72 w-72 rounded-[2rem] border border-rose-300/30 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.2),_transparent_35%),linear-gradient(135deg,_rgba(255,255,255,0.12),_rgba(255,76,140,0.16))] p-8 shadow-[0_0_80px_rgba(255,54,120,0.25)] backdrop-blur-xl">
              <div className="absolute inset-5 rounded-[1.5rem] border border-white/20" />
              <div className="flex h-full items-center justify-center rounded-[1.4rem] bg-black/70 text-center text-5xl font-black uppercase tracking-[0.3em] text-rose-100">
                443
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-luxe backdrop-blur-2xl lg:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-rose-200/80">About</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A cultural token with cinematic conviction.</h2>
          <p className="mt-6 max-w-3xl text-lg text-zinc-300">443LOVE is more than a coin. It is a movement shaped by iconic internet lore, luxury energy, and a community built to climb together.</p>
        </motion.div>
      </section>

      <section id="coinomics" className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['Community First', 'A fair launch and an ecosystem designed around long-term utility.'],
            ['Hearts Economy', 'Hearts drive status, missions, and rewards within the 443 experience.'],
            ['Solana Native', 'Fast, cheap, and built for the speed of modern culture.']
          ].map(([title, text]) => (
            <motion.div key={title} whileHover={{ y: -6, scale: 1.01 }} className="rounded-[1.5rem] border border-rose-300/20 bg-gradient-to-br from-white/10 to-rose-500/10 p-8 backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-zinc-300">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="climb" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-rose-200/80">443 Climb</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Preview the game</h2>
          </div>
          <a href="#faq" className="text-sm uppercase tracking-[0.25em] text-rose-200/80">See FAQ</a>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <motion.div key={item} whileHover={{ y: -8, scale: 1.01 }} className="h-64 rounded-[1.6rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(255,255,255,0.08),_rgba(255,60,130,0.14))] p-6 backdrop-blur-xl">
              <div className="flex h-full items-end rounded-[1.2rem] border border-white/10 bg-black/40 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-rose-100">Screen {item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="hearts" className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-20">
        <div className="rounded-[2rem] border border-rose-300/20 bg-black/50 p-8 backdrop-blur-2xl lg:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-rose-200/80">Hearts</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">The heartbeat of the ecosystem.</h2>
          <p className="mt-6 max-w-3xl text-lg text-zinc-300">Hearts are the social currency of 443LOVE. Earn them through participation, unlock premium status, and shape the future of the climb.</p>
        </div>
      </section>

      <section id="leaderboard" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl lg:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-rose-200/80">Leaderboard</p>
          <div className="mt-6 space-y-4">
            {[
              ['Aurelia', '14,200 Hearts'],
              ['Rooftop', '12,980 Hearts'],
              ['Vanta', '10,540 Hearts']
            ].map(([name, score]) => (
              <div key={name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
                <span className="font-medium text-white">{name}</span>
                <span className="text-rose-200">{score}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-20">
        <div className="grid gap-6 md:grid-cols-3">
          {['Phase I • Launch', 'Phase II • Climb', 'Phase III • Expansion'].map((phase) => (
            <div key={phase} className="rounded-[1.5rem] border border-rose-300/20 bg-gradient-to-br from-rose-500/10 to-white/5 p-8 backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-white">{phase}</h3>
              <p className="mt-3 text-zinc-300">Luxury storytelling, growing utility, and high-signal community experiences.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl lg:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-rose-200/80">FAQ</p>
          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <h3 className="font-semibold text-white">{item.q}</h3>
                <p className="mt-2 text-zinc-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="buy" className="border-t border-white/10 px-6 py-12 text-center text-zinc-400 sm:px-10 lg:px-20">
        <p className="text-sm uppercase tracking-[0.35em] text-rose-200/80">443LOVE</p>
        <p className="mt-3 text-lg text-zinc-300">Love always wins. Join the climb.</p>
      </footer>
    </main>
  );
}
