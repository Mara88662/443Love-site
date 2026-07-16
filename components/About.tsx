export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#070508] py-40">

      <div className="mx-auto max-w-7xl px-8">

        <div className="grid items-center gap-24 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <p className="text-sm uppercase tracking-[0.45em] text-rose-300/70">
              01 · ABOUT
            </p>

            <h2 className="mt-8 font-serif text-6xl leading-[0.95] lg:text-7xl">
              More than
              <br />
              a meme coin.
            </h2>

            <p className="mt-10 max-w-lg text-lg leading-8 text-white/65">
              443LOVE is a social experience built around connection,
              community and shared moments.
              We believe the strongest communities are built on emotion,
              not speculation.
            </p>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <div
              className="
                relative
                h-[520px]
                w-[520px]
                rounded-[42px]
                border
                border-white/5
                bg-gradient-to-br
                from-white/[0.05]
                to-white/[0.02]
                backdrop-blur-3xl
              "
            >
<div className="absolute inset-8 flex flex-col justify-between rounded-[28px] border border-white/5 p-10">

  <div>
    <p className="text-sm uppercase tracking-[0.35em] text-rose-300">
      443LOVE
    </p>

    <h3 className="mt-6 font-serif text-4xl leading-tight">
      Love is
      <br />
      the Utility.
    </h3>
  </div>

  <div className="space-y-5">

    <div className="flex items-center justify-between border-b border-white/5 pb-4">
      <span className="text-white/60">Community</span>
      <span>✓</span>
    </div>

    <div className="flex items-center justify-between border-b border-white/5 pb-4">
      <span className="text-white/60">Games</span>
      <span>✓</span>
    </div>

    <div className="flex items-center justify-between border-b border-white/5 pb-4">
      <span className="text-white/60">Rewards</span>
      <span>✓</span>
    </div>

    <div className="flex items-center justify-between">
      <span className="text-white/60">Real Connections</span>
      <span>✓</span>
    </div>

  </div>

</div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}