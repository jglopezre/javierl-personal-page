import React, { FC, useRef } from 'react';
import { Canvas, useFrame, Vector3 } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Definimos las props de la burbuja
interface BubbleProps {
  position: Vector3; // Posición inicial de la burbuja
  color: string; // Color de la burbuja
}

// Componente para una burbuja animada
const Bubble: FC<BubbleProps> = ({ position, color }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.y += 0.005; // Movimiento hacia arriba
      ref.current.material.opacity = 1; // Desvanecerse
      if (ref.current.position.y > 5) {
        ref.current.position.y = -5; // Reiniciar posición
      }
    }
  });

  return (
    <Sphere ref={ref} args={[0.5, 32, 32]} position={position}>
      <meshStandardMaterial
        attach="material"
        color={color}
        transparent
        opacity={0.8}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </Sphere>
  );
};

// Fondo animado con múltiples burbujas
const AnimatedBackground: FC = () => {
  const colors = ["#ff7e5f", "#feb47b", "#ff6b6b"];

  // Generamos las burbujas con posiciones y colores aleatorios
  const bubbles = Array.from({ length: 50 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 10,
      -5 + Math.random() * 5,
      (Math.random() - 0.5) * 5,
    ] as Vector3,
    color: colors[i % colors.length],
  }));

  return (
    <>
      {bubbles.map((bubble, index) => (
        <Bubble
          key={index}
          position={bubble.position}
          color={bubble.color}
        />
      ))}
    </>
  );
};

// Hero con fondo animado
export const FireSphereBackgorund: React.FC = () => (
  <Canvas
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 0,
    }}
    camera={{ position: [0, 0, 10], fov: 75 }}
  >
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    <AnimatedBackground />
  </Canvas>
);
