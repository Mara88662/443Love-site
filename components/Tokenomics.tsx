export default function Tokenomics() {
  return (
    <section className="relative overflow-hidden bg-[#070508] py-40">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.45em] text-rose-300/70">
            04 · TOKENOMICS
          </p>

          <h2 className="mt-8 font-serif text-6xl leading-[0.95] lg:text-7xl">
            Built for
            <br />
            long-term growth.
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-white/65">
            A transparent distribution designed to reward the community
            while ensuring sustainable ecosystem growth.
          </p>

        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-[32px] border border-white/5 bg-white/[0.03] p-8">
            <h3 className="font-serif text-3xl">Community</h3>
            <p className="mt-3 text-5xl">40%</p>
          </div>

          <div className="rounded-[32px] border border-white/5 bg-white/[0.03] p-8">
            <h3 className="font-serif text-3xl">Liquidity</h3>
            <p className="mt-3 text-5xl">30%</p>
          </div>

          <div className="rounded-[32px] border border-white/5 bg-white/[0.03] p-8">
            <h3 className="font-serif text-3xl">Rewards</h3>
            <p className="mt-3 text-5xl">20%</p>
          </div>

          <div className="rounded-[32px] border border-white/5 bg-white/[0.03] p-8">
            <h3 className="font-serif text-3xl">Treasury</h3>
            <p className="mt-3 text-5xl">10%</p>
          </div>

        </div>

      </div>

    </section>
  );
}