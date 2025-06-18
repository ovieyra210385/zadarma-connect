
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Line, Text } from '@react-three/drei';
import * as THREE from 'three';

const NetworkNode = ({ position, color = '#3b82f6', size = 0.1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[size]} material-color={color}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
    </Sphere>
  );
};

const NetworkConnection = ({ start, end, color = '#8b5cf6' }) => {
  const points = useMemo(() => [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ], [start, end]);

  return (
    <Line
      points={points}
      color={color}
      lineWidth={2}
      transparent
      opacity={0.6}
    />
  );
};

const AnimatedNetwork = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const nodes = [
    { pos: [0, 0, 0], color: '#3b82f6', size: 0.15 }, // Central node
    { pos: [2, 1, 0], color: '#10b981', size: 0.1 },
    { pos: [-2, -1, 0], color: '#f59e0b', size: 0.1 },
    { pos: [1, -2, 1], color: '#ef4444', size: 0.1 },
    { pos: [-1, 2, -1], color: '#8b5cf6', size: 0.1 },
    { pos: [2, -1, -1], color: '#06b6d4', size: 0.1 },
    { pos: [-2, 1, 1], color: '#f97316', size: 0.1 },
  ];

  const connections = [
    { start: [0, 0, 0], end: [2, 1, 0] },
    { start: [0, 0, 0], end: [-2, -1, 0] },
    { start: [0, 0, 0], end: [1, -2, 1] },
    { start: [0, 0, 0], end: [-1, 2, -1] },
    { start: [0, 0, 0], end: [2, -1, -1] },
    { start: [0, 0, 0], end: [-2, 1, 1] },
    { start: [2, 1, 0], end: [1, -2, 1] },
    { start: [-2, -1, 0], end: [-1, 2, -1] },
  ];

  return (
    <group ref={groupRef}>
      {connections.map((connection, index) => (
        <NetworkConnection
          key={index}
          start={connection.start}
          end={connection.end}
        />
      ))}
      {nodes.map((node, index) => (
        <NetworkNode
          key={index}
          position={node.pos}
          color={node.color}
          size={node.size}
        />
      ))}
    </group>
  );
};

const NetworkVisualization = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <AnimatedNetwork />
      </Canvas>
    </div>
  );
};

export default NetworkVisualization;
