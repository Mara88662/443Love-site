export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#070508] py-20">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-8 lg:flex-row">

        <div>

          <h2 className="font-serif text-3xl">
            443LOVE
          </h2>

          <p className="mt-3 text-white/50">
            Love Always Wins.
          </p>

        </div>

        <div className="flex gap-8 text-white/60">

          <a href="#">Twitter</a>

          <a href="#">Telegram</a>

          <a href="#">Discord</a>

          <a href="#">GitHub</a>

        </div>

      </div>

    </footer>
  );
}