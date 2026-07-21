"use client";

type Props = {
  color: string;
  mirrored?: boolean;
};

export default function GameCharacter({
  color,
  mirrored = false,
}: Props) {
  return (
   <svg
  width="34"
  height="46"
  viewBox="0 0 34 46"
  style={{
    overflow: "visible",
    transform: mirrored ? "scaleX(-1)" : "none",
  }}
>
  {/* Hood (back) */}
  <ellipse
    cx="17"
    cy="10"
    rx="8"
    ry="8"
    fill="rgba(255,255,255,.10)"
  />

  {/* Head */}
  <circle
    cx="17"
    cy="9"
    r="6"
    fill={color}
  />

  {/* Eye opening */}
  <rect
    x="11"
    y="7.3"
    width="12"
    height="3"
    rx="2"
    fill="#FFD9C8"
  />

  {/* Neck */}
  <rect
    x="15"
    y="14"
    width="4"
    height="3"
    rx="2"
    fill={color}
  />

  {/* Hoodie */}
  <rect
    x="10"
    y="16"
    width="14"
    height="16"
    rx="6"
    fill={color}
  />
  {/* Left Arm */}
<g id="leftArm">
  <rect
    x="7"
    y="17"
    width="10"
    height="4"
    rx="2"
    fill={color}
    transform="rotate(-40 7 17)"
  />
</g>

{/* Right Arm */}
<g id="rightArm">
  <rect
    x="18"
    y="22"
    width="10"
    height="4"
    rx="2"
    fill={color}
    transform="rotate(35 18 22)"
  />
</g>
</svg>
  );
}