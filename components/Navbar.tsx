'use client';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">

      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">


        {/* Logo */}

        <div className="text-2xl font-semibold tracking-[0.28em] text-white">
          443LOVE
        </div>

        {/* Links */}

        <nav className="hidden gap-10 lg:flex">

          <a
  href="#about"
  className="group relative text-white/70 transition-colors duration-300 hover:text-white"
>
  About

  <span
    className="absolute -bottom-2 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"
  />
</a>

          <a
  href="#token"
  className="group relative text-white/70 transition-colors duration-300 hover:text-white"
>
  Token

  <span
    className="absolute -bottom-2 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"
  />
</a>

          <a
  href="#token"
  className="group relative text-white/70 transition-colors duration-300 hover:text-white"
>
  Game

  <span
    className="absolute -bottom-2 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"
  />
</a>

          <a
  href="#token"
  className="group relative text-white/70 transition-colors duration-300 hover:text-white"
>
  Hearts

  <span
    className="absolute -bottom-2 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"
  />
</a>

         <a
  href="#token"
  className="group relative text-white/70 transition-colors duration-300 hover:text-white"
>
  FAQ

  <span
    className="absolute -bottom-2 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"
  />
</a>

        </nav>

        {/* Right */}

        <div className="flex items-center gap-5">

          <a
            href="#"
            className="text-white/70 transition hover:text-white"
          >
            X
          </a>

          <a
            href="#"
            className="text-white/70 transition hover:text-white"
          >
            Telegram
          </a>

          <button className="rounded-full border border-white px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-white hover:text-white">
  Connect
</button>

        </div>

      </div>

    </header>
  );
}