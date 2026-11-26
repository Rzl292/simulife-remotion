
import React from "react";
import { ThreeCanvas } from "@remotion/three";
import { useCurrentFrame, useVideoConfig } from "remotion";

const buildings = [
  { x: -7, height: 4, width: 2.5, color: "#7894aa" },
  { x: -3.5, height: 6, width: 2.7, color: "#91aabd" },
  { x: 0, height: 4.5, width: 2.8, color: "#718ba3" },
  { x: 3.7, height: 5.5, width: 2.7, color: "#849fb4" },
  { x: 7.2, height: 4, width: 2.5, color: "#718ba3" },
];

export const Scene3D: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const cameraZ = 14 - frame * 0.008;

  return (
    <ThreeCanvas
      width={width}
      height={height}
      camera={{
        position: [0, 5, cameraZ],
        fov: 42,
      }}
      shadows
      style={{ backgroundColor: "#9bc5e2" }}
    >
      <color attach="background" args={["#9bc5e2"]} />

      {/* Pencahayaan */}
      <ambientLight intensity={1.1} />

      <directionalLight
        position={[-5, 10, 8]}
        intensity={2}
        castShadow
      />

      {/* Tanah kota */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.5, 0]}
        receiveShadow
      >
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#a9b2b5" />
      </mesh>

      {/* Jalan raya */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.47, 3]}
      >
        <planeGeometry args={[100, 7]} />
        <meshStandardMaterial color="#626d76" />
      </mesh>

      {/* Garis jalan */}
      <mesh position={[0, -1.44, 3]}>
        <boxGeometry args={[100, 0.025, 0.12]} />
        <meshStandardMaterial color="#eee9d9" />
      </mesh>

      {/* Gedung kota */}
      {buildings.map((building, index) => {
        const h = building.height;

        return (
          <group
            key={index}
            position={[building.x, -1.5 + h / 2, -5]}
          >
            <mesh castShadow receiveShadow>
              <boxGeometry
                args={[building.width, h, 2]}
              />
              <meshStandardMaterial
                color={building.color}
                flatShading
              />
            </mesh>

            {/* Jendela gedung */}
            {Array.from({ length: 4 }).map((_, row) =>
              Array.from({ length: 2 }).map((_, col) => (
                <mesh
                  key={`${row}-${col}`}
                  position={[
                    (col - 0.5) * building.width * 0.5,
                    -h / 2 + 0.8 + row * 0.85,
                    1.015,
                  ]}
                >
                  <boxGeometry args={[0.42, 0.38, 0.04]} />
                  <meshStandardMaterial color="#dceaf0" />
                </mesh>
              ))
            )}
          </group>
        );
      })}
    </ThreeCanvas>
  );
};
