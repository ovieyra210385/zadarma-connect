
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NetworkNode = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.3} />
    </mesh>
  );
};

const NetworkConnection = ({ start, end }: { start: [number, number, number]; end: [number, number, number] }) => {
  const lineRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (lineRef.current && lineRef.current.material) {
      const material = lineRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  const geometry = new THREE.TubeGeometry(
    new THREE.CatmullRomCurve3(points),
    20,
    0.01,
    8,
    false
  );

  return (
    <mesh ref={lineRef} geometry={geometry}>
      <meshBasicMaterial color="#22d3ee" transparent opacity={0.3} />
    </mesh>
  );
};

const NetworkVisualization = () => {
  const nodes = useMemo(() => [
    [-4, 2, 0] as [number, number, number],
    [4, -1, 0] as [number, number, number],
    [0, 3, -2] as [number, number, number],
    [-2, -2, 1] as [number, number, number],
    [3, 1, -1] as [number, number, number],
    [-1, 0, 2] as [number, number, number],
  ], []);

  const connections = useMemo(() => [
    { start: nodes[0], end: nodes[1] },
    { start: nodes[1], end: nodes[2] },
    { start: nodes[2], end: nodes[3] },
    { start: nodes[3], end: nodes[4] },
    { start: nodes[4], end: nodes[5] },
    { start: nodes[5], end: nodes[0] },
    { start: nodes[0], end: nodes[3] },
    { start: nodes[1], end: nodes[4] },
  ], [nodes]);

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={0.5} />
      
      {nodes.map((position, index) => (
        <NetworkNode key={index} position={position} />
      ))}
      
      {connections.map((connection, index) => (
        <NetworkConnection key={index} start={connection.start} end={connection.end} />
      ))}
    </Canvas>
  );
};

export default NetworkVisualization;
