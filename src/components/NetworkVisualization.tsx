
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
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
      <pointLight color={color} intensity={0.5} distance={2} />
    </mesh>
  );
};

const FloatingIcon = ({ position, icon, color = '#10b981' }: {
  position: [number, number, number];
  icon: 'whatsapp' | 'bot' | 'message' | 'users';
  color?: string;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current && groupRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh ref={meshRef}>
        <boxGeometry args={[0.3, 0.3, 0.1]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[0.2, 0.2]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
      </mesh>
    </group>
  );
};

const NetworkConnection = ({ start, end, color = '#8b5cf6' }: {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
}) => {
  const lineRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (lineRef.current) {
      lineRef.current.material.opacity = 0.4 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  const { geometry, position, rotation } = useMemo(() => {
    const startVec = new THREE.Vector3(...start);
    const endVec = new THREE.Vector3(...end);
    const distance = startVec.distanceTo(endVec);
    const midpoint = new THREE.Vector3().addVectors(startVec, endVec).multiplyScalar(0.5);
    
    const direction = new THREE.Vector3().subVectors(endVec, startVec).normalize();
    const up = new THREE.Vector3(0, 1, 0);
    const quaternion = new THREE.Quaternion().setFromUnitVectors(up, direction);
    
    const geom = new THREE.CylinderGeometry(0.01, 0.01, distance, 8);
    
    return {
      geometry: geom,
      position: [midpoint.x, midpoint.y, midpoint.z] as [number, number, number],
      rotation: [quaternion.x, quaternion.y, quaternion.z, quaternion.w] as [number, number, number, number]
    };
  }, [start, end]);

  return (
    <mesh ref={lineRef} position={position} quaternion={rotation}>
      <primitive object={geometry} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
};

const Particles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const { positions, colors } = useMemo(() => {
    const count = 100;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      const color = new THREE.Color(Math.random() > 0.5 ? '#10b981' : '#3b82f6');
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} vertexColors transparent opacity={0.8} />
    </points>
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
    { pos: [0, 0, 0] as [number, number, number], color: '#10b981', size: 0.15 },
    { pos: [2, 1, 0] as [number, number, number], color: '#3b82f6', size: 0.1 },
    { pos: [-2, -1, 0] as [number, number, number], color: '#8b5cf6', size: 0.1 },
    { pos: [1, -2, 1] as [number, number, number], color: '#06b6d4', size: 0.1 },
    { pos: [-1, 2, -1] as [number, number, number], color: '#f59e0b', size: 0.1 },
    { pos: [2, -1, -1] as [number, number, number], color: '#ef4444', size: 0.1 },
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

  const floatingIcons = useMemo(() => [
    { pos: [3, 2, 2] as [number, number, number], icon: 'whatsapp' as const, color: '#25d366' },
    { pos: [-3, -2, 2] as [number, number, number], icon: 'bot' as const, color: '#10b981' },
    { pos: [3, -2, -2] as [number, number, number], icon: 'message' as const, color: '#3b82f6' },
    { pos: [-3, 2, -2] as [number, number, number], icon: 'users' as const, color: '#8b5cf6' },
  ], []);

  return (
    <group ref={groupRef}>
      <Particles />
      {connections.map((connection, index) => (
        <NetworkConnection
          key={`connection-${index}`}
          start={connection.start}
          end={connection.end}
          color={index % 2 === 0 ? '#10b981' : '#3b82f6'}
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
      {floatingIcons.map((icon, index) => (
        <FloatingIcon
          key={`icon-${index}`}
          position={icon.pos}
          icon={icon.icon}
          color={icon.color}
        />
      ))}
    </group>
  );
};

const NetworkVisualization = () => {
  return (
    <div className="w-full h-full">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#10b981" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        <spotLight position={[0, 10, 0]} intensity={0.5} color="#8b5cf6" angle={0.3} />
        <AnimatedNetwork />
        <fog attach="fog" args={['#1e3a8a', 5, 15]} />
      </Canvas>
    </div>
  );
};

export default NetworkVisualization;
