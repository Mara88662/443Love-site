export default function Roadmap() {
  return (
    <section className="relative overflow-hidden bg-[#070508] py-40">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.45em] text-rose-300/70">
            05 · ROADMAP
          </p>

          <h2 className="mt-8 font-serif text-6xl leading-[0.95] lg:text-7xl">
            Building the future,
            <br />
            one phase at a time.
          </h2>

        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-4">

          <div className="rounded-[32px] border border-white/5 bg-white/[0.03] p-8">
            <p className="text-rose-300">PHASE 1</p>
            <h3 className="mt-4 font-serif text-3xl">Launch</h3>

            <ul className="mt-6 space-y-3 text-white/65">
              <li>✓ Website</li>
              <li>✓ Community</li>
              <li>✓ Token Launch</li>
            </ul>
          </div>

          <div className="rounded-[32px] border border-white/5 bg-white/[0.03] p-8">
            <p className="text-rose-300">PHASE 2</p>
            <h3 className="mt-4 font-serif text-3xl">443 Climb</h3>

            <ul className="mt-6 space-y-3 text-white/65">
              <li>✓ Multiplayer</li>
              <li>✓ Hearts</li>
              <li>✓ Missions</li>
            </ul>
          </div>

          <div className="rounded-[32px] border border-white/5 bg-white/[0.03] p-8">
            <p className="text-rose-300">PHASE 3</p>
            <h3 className="mt-4 font-serif text-3xl">Expansion</h3>

            <ul className="mt-6 space-y-3 text-white/65">
              <li>✓ Marketplace</li>
              <li>✓ Leaderboards</li>
              <li>✓ Partnerships</li>
            </ul>
          </div>

          <div className="rounded-[32px] border border-white/5 bg-white/[0.03] p-8">
            <p className="text-rose-300">PHASE 4</p>
            <h3 className="mt-4 font-serif text-3xl">Global</h3>

            <ul className="mt-6 space-y-3 text-white/65">
              <li>✓ Events</li>
              <li>✓ Rewards</li>
              <li>✓ Ecosystem</li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
}