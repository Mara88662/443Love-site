export default function Climb() {
  return (
    <section className="relative overflow-hidden bg-[#070508] py-40">

      <div className="mx-auto max-w-7xl px-8">

        <div className="grid items-center gap-24 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <p className="text-sm uppercase tracking-[0.45em] text-rose-300/70">
              02 · 443 CLIMB
            </p>

            <h2 className="mt-8 font-serif text-6xl leading-[0.95] lg:text-7xl">
              Climb together.
              <br />
              Earn Hearts.
              <br />
              Meet real people.
            </h2>

            <p className="mt-10 max-w-lg text-lg leading-8 text-white/65">
              A multiplayer climbing experience where every move
              brings you closer to rewards, friendships and the
              443LOVE community.
            </p>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">
  <PhoneMockup />
</div>

        </div>

      </div>

    </section>
  );
}
import PhoneMockup from "./PhoneMockup";