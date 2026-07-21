"use client";
import Climbers from "./Climbers";
import EmpireState from "./EmpireState";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function PhoneMockup() {
  const [height, setHeight] = useState(287);

useEffect(() => {
  const interval = setInterval(() => {
    setHeight((prev) => (prev >= 443 ? 287 : prev + 1));
  }, 120);

  return () => clearInterval(interval);
}, []);
  return (
    <div
  className="
    relative
    h-[680px]
    w-[340px]
    rounded-[58px]
    bg-[#0b0b0c]
    p-[8px]
    shadow-[0_30px_80px_rgba(0,0,0,.55)]
  "
>

      {/* Notch */}
      <div className="absolute left-1/2 top-4 z-30 h-8 w-36 -translate-x-1/2 rounded-full bg-black border border-white/5" />

      {/* Screen */}
     <div
  className="
    relative
    h-full
    w-full
    overflow-hidden
    rounded-[50px]
    border
    border-white/10
    bg-black
    pt-16
    px-6
    pb-6
  "
>

        {/* Header */}
        <div>

  <div className="flex items-center justify-between">

    <div>
      <p className="text-[11px] uppercase tracking-[0.35em] text-rose-300/80">
        443 CLIMB
      </p>

      <h3 className="mt-1 text-lg font-semibold">
        Daily Climb
      </h3>
    </div>

    <div className="rounded-full border border-rose-400/20 bg-rose-500/10 px-3 py-1 text-sm text-rose-200">
      Lv.4
    </div>

  </div>

  <div className="mt-6 h-[1px] w-full bg-white/10"></div>

  <div className="mt-5 flex items-center justify-between">

    <div>

      <p className="text-xs uppercase tracking-[0.3em] text-white/40">
        Hearts
      </p>

      <p className="mt-1 text-2xl font-semibold">
        ❤️ 1,250
      </p>

    </div>

    <div className="text-right">

      <p className="text-xs uppercase tracking-[0.3em] text-white/40">
        Rank
      </p>

      <p className="mt-1 text-2xl font-semibold">
        #182
      </p>

    </div>

  </div>

</div>

        {/* Center */}
  <div className="relative flex flex-1 items-center justify-center">

  <div className="relative">

  <EmpireState />

  <div className="absolute inset-0">
    <Climbers />
  </div>

</div>

  <div className="absolute right-[-18px] top-44 ...">
    ...
  </div>


  <div className="absolute right-[-18px] top-44 flex flex-col items-center">

    {/* metri + săgeată */}

  </div>

</div>

        {/* Button */}
        <button
  className="
    mt-auto
    w-full
    rounded-full
    bg-white
    py-3
    text-lg
    font-semibold
    text-black
    transition
    hover:scale-[1.03]
  "
>
  PLAY
</button>

      </div>

  
    </div>
  );
}