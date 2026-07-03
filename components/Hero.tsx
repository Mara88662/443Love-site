'use client';

import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#070508]">

      {/* Background */}
     <div
  className="absolute inset-0"
  style={{
    background: `
      radial-gradient(
        circle at 50% 15%,
        rgba(190,55,120,0.50) 0%,
        rgba(120,25,75,0.30) 35%,
        rgba(45,10,30,0.15) 65%,
        #070508 100%
      )
    `,
  }}
/>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.03),transparent_45%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-20 px-8 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.35em] text-rose-200">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">

  <div className="h-3 w-3 rounded-full bg-pink-400 shadow-[0_0_12px_rgba(255,90,170,0.9)]" />

  <span className="text-xs tracking-[0.45em] uppercase text-white/90">
    Solana • Culture • Utility
  </span>

</div>
          </div>

          <h1 className="mt-6 leading-[0.88] font-serif">

            <span className="block text-7xl lg:text-[6.7rem]">
              LOVE
            </span>

            <span className="block text-7xl lg:text-[6.7rem]">
              ALWAYS
            </span>

            <span className="block text-7xl lg:text-[6.7rem]">
              WINS
            </span>

          </h1>

          <p className="mt-8 max-w-[520px] text-[22px] leading-9 text-white/90 text-zinc-300">
            Inspired by one of the internet's most unforgettable rooftop
            moments.
          </p>

          <div className="mt-12 flex items-center gap-4">

            <button className="rounded-full border border-white/80 bg-transparent px-9 py-4 text-lg font-medium text-white transition hover:bg-white hover:text-black">
  Play 443 Climb
</button>

            <button className="rounded-full border border-white bg-transparent px-9 py-4 text-lg font-medium text-white transition duration-300 hover:bg-white hover:text-black">
  Buy L443
</button>

          </div>

        </div>

       {/* RIGHT */}

<div className="flex justify-center lg:justify-end">

  <motion.div
    animate={{
  y: [0, -10, 0],
  rotate: [-4, 4, -4],
}}

transition={{
  y: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  },
  rotate: {
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  },
}}
    className="relative flex h-[540px] w-[540px] items-center justify-center rounded-[42px]
           border border-white/5
           bg-gradient-to-br
           from-white/[0.03]
           to-white/[0.015]
           backdrop-blur-3xl
           shadow-[0_0_80px_rgba(255,120,170,0.10)]"
           >

{/* Glass reflection */}
<div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[38px]">
  <motion.div
    animate={{
      x: ["-160%", "180%"],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatDelay: 3,
      ease: "easeInOut",
    }}
    className="absolute left-0 top-0 h-full w-20
               -skew-x-12
               bg-gradient-to-r
               from-transparent
               via-white/10
               to-transparent"
  />
</div>
  

    {/* Coin */}
    <motion.img
      src="/assets/443love-coin.png"
      alt="443 Coin"
      className="relative z-10 w-[420px]"
    />

  </motion.div>

</div>

      </div>

    </section>
  );
}