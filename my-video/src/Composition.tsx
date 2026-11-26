
import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { Scene3D } from "./Scene3D";

export const MyComposition: React.FC = () => {
  const frame = useCurrentFrame();

  const zoom = interpolate(frame, [0, 89], [1, 1.04], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#9bc5e2" }}>
      {/* Lingkungan kota 3D */}
      <AbsoluteFill>
        <Scene3D />
      </AbsoluteFill>

      {/* Karakter stickman 2D di depan lingkungan 3D */}
      <AbsoluteFill>
        <svg
          viewBox="0 0 1920 1080"
          width="100%"
          height="100%"
        >
          <g
            transform={`translate(960 610) scale(${zoom}) translate(-960 -610)`}
          >
            {/* Bayangan karakter */}
            <ellipse
              cx="960"
              cy="962"
              rx="115"
              ry="23"
              fill="#171717"
              opacity="0.3"
            />

            {/* Karakter utama */}
            <g
              stroke="#171717"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Kaki */}
              <path d="M930 825 L915 940" fill="none" />
              <path d="M990 825 L1005 940" fill="none" />

              <ellipse
                cx="903"
                cy="949"
                rx="42"
                ry="17"
                fill="white"
              />

              <ellipse
                cx="1017"
                cy="949"
                rx="42"
                ry="17"
                fill="white"
              />

              {/* Tangan */}
              <path d="M900 682 L852 785" fill="none" />
              <path d="M1020 682 L1068 785" fill="none" />

              {/* Tubuh oranye */}
              <path
                d="M895 650 Q960 625 1025 650
                   L1040 835 L880 835 Z"
                fill="#ef8a32"
              />

              {/* Kepala */}
              <ellipse
                cx="960"
                cy="560"
                rx="95"
                ry="105"
                fill="white"
              />

              {/* Mata */}
              <circle
                cx="930"
                cy="550"
                r="7"
                fill="#171717"
                stroke="none"
              />

              <circle
                cx="990"
                cy="550"
                r="7"
                fill="#171717"
                stroke="none"
              />

              {/* Senyum */}
              <path
                d="M945 590 Q960 602 975 590"
                fill="none"
                strokeWidth="6"
              />
            </g>
          </g>
        </svg>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
