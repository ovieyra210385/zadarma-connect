
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NetworkNode = ({ position, color = '#3b82f6', size = 0.1 }: {
  position: [number, number, number];
  color?: string;
  size?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
    </mesh>
  );
};

const NetworkConnection = ({ start, end, color = '#8b5cf6' }: {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
}) => {
  const lineRef = useRef<THREE.BufferGeometry>(null);

  const points = useMemo(() => {
    const startVec = new THREE.Vector3(...start);
    const endVec = new THREE.Vector3(...end);
    return [startVec, endVec];
  }, [start, end]);

  return (
    <line>
      <bufferGeometry ref={lineRef}>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={color} transparent opacity={0.6} />
    </line>
  );
};

const AnimatedNetwork = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const nodes = useMemo(() => [
    { pos: [0, 0, 0] as [number, number, number], color: '#3b82f6', size: 0.15 },
    { pos: [2, 1, 0] as [number, number, number], color: '#10b981', size: 0.1 },
    { pos: [-2, -1, 0] as [number, number, number], color: '#f59e0b', size: 0.1 },
    { pos: [1, -2, 1] as [number, number, number], color: '#ef4444', size: 0.1 },
    { pos: [-1, 2, -1] as [number, number, number], color: '#8b5cf6', size: 0.1 },
    { pos: [2, -1, -1] as [number, number, number], color: '#06b6d4', size: 0.1 },
    { pos: [-2, 1, 1] as [number, number, number], color: '#f97316', size: 0.1 },
  ], []);

  const connections = useMemo(() => [
    { start: [0, 0, 0] as [number, number, number], end: [2, 1, 0] as [number, number, number] },
    { start: [0, 0, 0] as [number, number, number], end: [-2, -1, 0] as [number, number, number] },
    { start: [0, 0, 0] as [number, number, number], end: [1, -2, 1] as [number, number, number] },
    { start: [0, 0, 0] as [number, number, number], end: [-1, 2, -1] as [number, number, number] },
    { start: [0, 0, 0] as [number, number, number], end: [2, -1, -1] as [number, number, number] },
    { start: [0, 0, 0] as [number, number, number], end: [-2, 1, 1] as [number, number, number] },
    { start: [2, 1, 0] as [number, number, number], end: [1, -2, 1] as [number, number, number] },
    { start: [-2, -1, 0] as [number, number, number], end: [-1, 2, -1] as [number, number, number] },
  ], []);

  return (
    <group ref={groupRef}>
      {connections.map((connection, index) => (
        <NetworkConnection
          key={`connection-${index}`}
          start={connection.start}
          end={connection.end}
        />
      ))}
      {nodes.map((node, index) => (
        <NetworkNode
          key={`node-${index}`}
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
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <AnimatedNetwork />
      </Canvas>
    </div>
  );
};

export default NetworkVisualization;
