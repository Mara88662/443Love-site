export default function FAQ() {
  return (
    <section className="relative overflow-hidden bg-[#070508] py-40">

      <div className="mx-auto max-w-5xl px-8">

        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.45em] text-rose-300/70">
            06 · FAQ
          </p>

          <h2 className="mt-8 font-serif text-6xl leading-[0.95] lg:text-7xl">
            Frequently
            <br />
            Asked Questions
          </h2>

        </div>

        <div className="mt-24 space-y-6">

          <div className="rounded-[28px] border border-white/5 bg-white/[0.03] p-8">
            <h3 className="font-serif text-2xl">
              What is 443LOVE?
            </h3>

            <p className="mt-4 text-white/65">
              443LOVE is a community-driven ecosystem built around gaming,
              rewards and meaningful connections.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/5 bg-white/[0.03] p-8">
            <h3 className="font-serif text-2xl">
              What are Hearts?
            </h3>

            <p className="mt-4 text-white/65">
              Hearts are earned through participation and will unlock future
              experiences, rewards and exclusive features.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/5 bg-white/[0.03] p-8">
            <h3 className="font-serif text-2xl">
              How do I start?
            </h3>

            <p className="mt-4 text-white/65">
              Connect your wallet, join the community and begin your first climb.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}