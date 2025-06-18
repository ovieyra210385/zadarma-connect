
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingShape = ({ position, shape, color, scale = 1 }: {
  position: [number, number, number];
  shape: 'sphere' | 'box' | 'torus' | 'octahedron';
  color: string;
  scale?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    }
  });

  const getGeometry = () => {
    switch (shape) {
      case 'sphere':
        return <sphereGeometry args={[0.5, 32, 32]} />;
      case 'box':
        return <boxGeometry args={[0.8, 0.8, 0.8]} />;
      case 'torus':
        return <torusGeometry args={[0.4, 0.2, 16, 100]} />;
      case 'octahedron':
        return <octahedronGeometry args={[0.6]} />;
      default:
        return <sphereGeometry args={[0.5, 32, 32]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {getGeometry()}
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={0.1}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

const FloatingElements = () => {
  const shapes = [
    { pos: [-8, 2, -2] as [number, number, number], shape: 'sphere' as const, color: '#10b981', scale: 0.6 },
    { pos: [8, -1, -3] as [number, number, number], shape: 'box' as const, color: '#3b82f6', scale: 0.4 },
    { pos: [-6, -3, 2] as [number, number, number], shape: 'torus' as const, color: '#8b5cf6', scale: 0.5 },
    { pos: [6, 3, 1] as [number, number, number], shape: 'octahedron' as const, color: '#06b6d4', scale: 0.7 },
    { pos: [0, -4, -4] as [number, number, number], shape: 'sphere' as const, color: '#f59e0b', scale: 0.3 },
    { pos: [-4, 4, 3] as [number, number, number], shape: 'box' as const, color: '#ef4444', scale: 0.4 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={0.5} />
        {shapes.map((shape, index) => (
          <FloatingShape
            key={index}
            position={shape.pos}
            shape={shape.shape}
            color={shape.color}
            scale={shape.scale}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default FloatingElements;
