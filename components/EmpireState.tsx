export default function EmpireState() {
  return (
    <svg
      width="210"
      height="360"
      viewBox="0 0 210 360"
      fill="none"
    >
      <defs>
        <linearGradient
  id="body"
  x1="0"
  y1="0"
  x2="1"
  y2="1"
>
  <stop offset="0%" stopColor="#9b96a7" />
  <stop offset="18%" stopColor="#b9b3c3" />
  <stop offset="42%" stopColor="#7d7688" />
  <stop offset="72%" stopColor="#55505d" />
  <stop offset="100%" stopColor="#2b2731" />
</linearGradient>

        <linearGradient id="highlight" x1="52" y1="0" x2="74" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,.18)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="20" />
        </filter>
      </defs>

      {/* Glow */}
      <ellipse
        cx="90"
cy="185"
rx="82"
ry="170"
        fill="#ff6aa8"
        opacity=".18"
        filter="url(#glow)"
      />
{/* Antenna */}

<line
  x1="90"
  y1="0"
  x2="90"
  y2="22"
  stroke="#ffd9e7"
  strokeWidth="2"
  strokeLinecap="round"
/>

<circle
  cx="90"
  cy="0"
  r="2.5"
  fill="#ff77b8"
/>
{/* Crown light */}

<rect
  x="82"
  y="22"
  width="16"
  height="6"
  rx="2"
  fill="rgba(255,255,255,.18)"
/>
      {/* Building */}
      <path
        d="
        M90 8
        L90 32
        L86 32
        L86 46
        L80 46
        L80 64
        L72 64
        L72 86
        L62 86
        L62 114
        L48 114
       L46 145
L30 145
L30 340
L150 340
L150 145
L134 145
        L132 114
        L118 114
        L118 86
        L108 86
        L108 64
        L100 64
        L100 46
        L94 46
        L94 32
        L90 32
        Z
        "
        fill="url(#body)"
        stroke="rgba(255,255,255,.18)"
        strokeWidth="1.3"
      />

      {/* Left highlight */}
      <path
        d="
        M50 114
        L62 114
        L62 340
        L50 340
        Z
        "
        fill="url(#highlight)"
      />

      {/* Right shadow */}
      <path
        d="
        M118 114
        L130 114
        L130 340
        L118 340
        Z
        "
        fill="black"
        opacity=".08"
      />
      {/* Left facade */}

<rect
  x="82"
  y="40"
  width="10"
  height="300"
  rx="5"
  fill="white"
  opacity=".08"
/>

{/* Right facade */}

<rect
  x="140"
  y="145"
  width="10"
  height="195"
  fill="rgba(255,255,255,.05)"
/>
      {/* Windows */}

{Array.from({ length: 11 }).map((_, row) =>
  Array.from({ length: 5 }).map((_, col) => (
    <rect
      key={`${row}-${col}`}
     x={58 + col * 15}
y={140 + row * 16}
    width="5.5"
height="10"
      rx="1.2"
      fill={
  ((row * 17 + col * 31) % 100) > 88
    ? "#ffd4ea"
    : ((row * 17 + col * 31) % 100) > 65
    ? "rgba(255,255,255,.30)"
    : ((row * 17 + col * 31) % 100) > 35
    ? "rgba(255,255,255,.16)"
    : "rgba(255,255,255,.05)"
}
    />

  ))
)}
{/* Vertical lines */}

<line
  x1="72"
  y1="120"
  x2="72"
  y2="340"
  stroke="rgba(255,255,255,.08)"
/>

<line
  x1="90"
  y1="120"
  x2="90"
  y2="340"
  stroke="rgba(255,255,255,.10)"
/>

<line
  x1="108"
  y1="120"
  x2="108"
  y2="340"
  stroke="rgba(255,255,255,.08)"
/>
    </svg>
  );
}