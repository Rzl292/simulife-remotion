import {
  Composition,
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
} from "remotion";

export const MyComposition = () => (
  <Composition
    id="MyComp"
    component={MyComponent}
    durationInFrames={90}
    fps={30}
    width={1920}
    height={1080}
  />
);

export const MyComponent = () => {
  const frame = useCurrentFrame();
  const x = interpolate(frame, [0, 89], [350, 1450]);

  return (
    <AbsoluteFill style={{backgroundColor: "#bde5ff"}}>
      <svg
        width="1920"
        height="1080"
        viewBox="0 0 1920 1080"
      >
        <rect
          x="0" y="800"
          width="1920" height="280"
          fill="#83bd76"
        />

        <text
          x="90" y="120"
          fontSize="64"
          fontFamily="Arial"
          fontWeight="bold"
          fill="#20334a"
        >
          SimuLife
        </text>

        <g
          transform={`translate(${x} 0)`}
          stroke="#202020"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle
            cx="0" cy="390" r="85"
            fill="white"
          />
          <circle cx="-28" cy="380" r="7" fill="#202020" />
          <circle cx="28" cy="380" r="7" fill="#202020" />
          <path d="M -25 415 Q 0 435 25 415" fill="none" />
          <path
            d="M -65 490 L 65 490 L 85 680 L -85 680 Z"
            fill="#4385d8"
          />
          <path d="M -65 510 L -135 650" fill="none" />
          <path d="M 65 510 L 135 650" fill="none" />
          <path d="M -40 680 L -70 790" fill="none" />
          <path d="M 40 680 L 70 790" fill="none" />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
