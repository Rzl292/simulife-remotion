import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";

export const MyComposition: React.FC = () => {
  const frame = useCurrentFrame();

  const zoom = interpolate(frame, [0, 89], [1, 1.12], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#b9d9ed" }}>
      <svg
        viewBox="0 0 1920 1080"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="sky" x2="0" y2="1">
            <stop offset="0%" stopColor="#7faed4" />
            <stop offset="100%" stopColor="#e5eef4" />
          </linearGradient>
        </defs>

        <g transform={`translate(960 610) scale(${zoom}) translate(-960 -610)`}>
          <rect width="1920" height="1080" fill="url(#sky)" />

          {/* Gedung kota */}
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const x = i * 340 - 80;
            const h = 230 + (i % 3) * 85;
            const y = 700 - h;

            return (
              <g key={i}>
                <rect
                  x={x}
                  y={y}
                  width="240"
                  height={h}
                  fill="#7894aa"
                  stroke="#35485a"
                  strokeWidth="5"
                />
                <polygon
                  points={`${x + 240},${y} ${x + 275},${y - 22} ${x + 275},678 ${x + 240},700`}
                  fill="#526b80"
                />
                {Array.from({ length: 5 }).map((_, r) =>
                  Array.from({ length: 3 }).map((_, c) => (
                    <rect
                      key={`${r}-${c}`}
                      x={x + 25 + c * 65}
                      y={y + 25 + r * 40}
                      width="35"
                      height="20"
                      fill="#d9e8ef"
                    />
                  ))
                )}
              </g>
            );
          })}

          {/* Jalan dan trotoar */}
          <rect y="700" width="1920" height="380" fill="#a6a9aa" />
          <path
            d="M0 810 L1920 750 L1920 1080 L0 1080 Z"
            fill="#737a80"
          />
          <path
            d="M0 810 L1920 750"
            stroke="#e4e2d8"
            strokeWidth="12"
          />

          {/* Bayangan karakter */}
          <ellipse
            cx="960"
            cy="962"
            rx="115"
            ry="23"
            fill="#41464a"
            opacity="0.35"
          />

          {/* Karakter stickman */}
          <g
            stroke="#171717"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M930 825 L915 940" fill="none" />
            <path d="M990 825 L1005 940" fill="none" />
            <ellipse cx="903" cy="949" rx="42" ry="17" fill="white" />
            <ellipse cx="1017" cy="949" rx="42" ry="17" fill="white" />

            <path d="M900 682 L852 785" fill="none" />
            <path d="M1020 682 L1068 785" fill="none" />

            <path
              d="M895 650 Q960 625 1025 650
                 L1040 835 L880 835 Z"
              fill="#ef8a32"
            />

            <ellipse
              cx="960"
              cy="560"
              rx="95"
              ry="105"
              fill="white"
            />

            <circle cx="930" cy="550" r="7" fill="#171717" stroke="none" />
            <circle cx="990" cy="550" r="7" fill="#171717" stroke="none" />
            <path
              d="M945 590 Q960 602 975 590"
              fill="none"
              strokeWidth="6"
            />
          </g>
        </g>
      </svg>
    </AbsoluteFill>
  );
};
