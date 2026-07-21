"use client";

import GameCharacter from "./GameCharacter";

export default function Climbers() {
  return (
    <>
      {/* Boy */}
      <div
        className="
          absolute
          left-[31%]
          top-[49%]
          -translate-x-1/2
          -translate-y-1/2
          z-20
        "
      >
        <GameCharacter color="#181818" />
      </div>

      {/* Girl */}
      <div
        className="
          absolute
          left-[66%]
          top-[61%]
          -translate-x-1/2
          -translate-y-1/2
          z-20
        "
      >
        <GameCharacter
          color="#F48FC3"
          mirrored
        />
      </div>
    </>
  );
}