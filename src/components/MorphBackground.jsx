import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const COUNT = 900;

function makeShapes() {
  const sphere = new Float32Array(COUNT * 3);
  const helix = new Float32Array(COUNT * 3);
  const grid = new Float32Array(COUNT * 3);

  for (let i = 0; i < COUNT; i++) {
    const i3 = i * 3;
    const y = 1 - (i / (COUNT - 1)) * 2;
    const radius = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = Math.PI * (3 - Math.sqrt(5)) * i;
    sphere[i3] = Math.cos(theta) * radius * 2.15;
    sphere[i3 + 1] = y * 2.15;
    sphere[i3 + 2] = Math.sin(theta) * radius * 2.15;

    const t = (i / COUNT) * Math.PI * 12;
    const strand = i % 2 === 0 ? 0 : Math.PI;
    helix[i3] = Math.cos(t + strand) * 1.55;
    helix[i3 + 1] = (i / COUNT - 0.5) * 4.5;
    helix[i3 + 2] = Math.sin(t + strand) * 1.55;

    const side = Math.ceil(Math.sqrt(COUNT));
    grid[i3] = ((i % side) / (side - 1) - 0.5) * 5;
    grid[i3 + 1] = (Math.floor(i / side) / (side - 1) - 0.5) * 5;
    grid[i3 + 2] = Math.sin(i * 0.35) * 0.3;
  }
  return [sphere, helix, grid];
}

function MorphParticles() {
  const points = useRef();
  const geometry = useRef();
  const shapes = useMemo(makeShapes, []);
  const current = useMemo(() => new Float32Array(shapes[0]), [shapes]);

  useFrame((state, delta) => {
    if (!geometry.current || !points.current) return;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    const scaled = progress * (shapes.length - 1);
    const from = Math.floor(scaled);
    const to = Math.min(shapes.length - 1, from + 1);
    const mix = scaled - from;

    for (let i = 0; i < current.length; i++) {
      const target = THREE.MathUtils.lerp(shapes[from][i], shapes[to][i], mix);
      current[i] = THREE.MathUtils.damp(current[i], target, 6, delta);
    }
    geometry.current.attributes.position.needsUpdate = true;
    points.current.rotation.y += delta * 0.035;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.08;
  });

  return (
    <points ref={points}>
      <bufferGeometry ref={geometry}>
        <bufferAttribute attach="attributes-position" args={[current, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#00d4ff" size={0.035} transparent opacity={0.55} sizeAttenuation depthWrite={false} />
    </points>
  );
}

export default function MorphBackground() {
  return (
    <div className="morph-canvas" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6.5], fov: 55 }} gl={{ alpha: true, antialias: true }}>
        <MorphParticles />
      </Canvas>
    </div>
  );
}
