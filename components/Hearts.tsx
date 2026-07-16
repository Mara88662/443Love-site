export default function Hearts() {
  return (
    <section className="relative overflow-hidden bg-[#070508] py-40">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.45em] text-rose-300/70">
            03 · HEARTS
          </p>

          <h2 className="mt-8 font-serif text-6xl leading-[0.95] lg:text-7xl">
            Earn Hearts.
            <br />
            Unlock more.
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-white/65">
            Every interaction inside the 443LOVE ecosystem rewards you with
            Hearts. The more you participate, the more opportunities you unlock.
          </p>

        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-[32px] border border-white/5 bg-white/[0.03] p-8">
            <h3 className="font-serif text-3xl">Play</h3>
            <p className="mt-4 text-white/60">
              Complete climbs and earn Hearts.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/5 bg-white/[0.03] p-8">
            <h3 className="font-serif text-3xl">Invite</h3>
            <p className="mt-4 text-white/60">
              Grow the community together.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/5 bg-white/[0.03] p-8">
            <h3 className="font-serif text-3xl">Collect</h3>
            <p className="mt-4 text-white/60">
              Build your Hearts balance over time.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/5 bg-white/[0.03] p-8">
            <h3 className="font-serif text-3xl">Unlock</h3>
            <p className="mt-4 text-white/60">
              Access future rewards and experiences.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}