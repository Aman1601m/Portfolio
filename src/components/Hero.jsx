import { OrbitControls, Sphere, MeshDistortMaterial, RoundedBox } from '@react-three/drei';
import { motion, useInView } from 'framer-motion';
import * as THREE from 'three';
import { useFrame, Canvas } from '@react-three/fiber';
import React, { useRef } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ComputerBoy = ({ isVisible }) => {
  const group = useRef();
  const leftArm = useRef();
  const rightArm = useRef();
  const head = useRef();
  const boyGroup = useRef();
  const note1 = useRef();
  const note2 = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const mouse = state.mouse;
    
    if (group.current) {
      group.current.position.y = -0.8 + Math.sin(t * 1.5) * 0.03;
    }
    
    // Musical notes floating
    if (note1.current) note1.current.position.y = 1.2 + Math.sin(t * 2) * 0.1;
    if (note2.current) note2.current.position.y = 1.4 + Math.sin(t * 2 + 1) * 0.1;

    if (boyGroup.current) {
      if (isVisible) {
        const targetPos = new THREE.Vector3(0, 0.25, 0.95);
        boyGroup.current.position.lerp(targetPos, 1.2 * delta);
        
        boyGroup.current.rotation.x = THREE.MathUtils.lerp(boyGroup.current.rotation.x, 0, 1.5 * delta);
        boyGroup.current.rotation.y = THREE.MathUtils.lerp(boyGroup.current.rotation.y, 0, 1.5 * delta);
        boyGroup.current.rotation.z = THREE.MathUtils.lerp(boyGroup.current.rotation.z, 0, 1.5 * delta);

        const distance = boyGroup.current.position.distanceTo(targetPos);
        
        if (distance < 0.1) {
          if (!boyGroup.current.landedTime) boyGroup.current.landedTime = t;
          const timeSinceLanded = t - boyGroup.current.landedTime;

          if (head.current) {
            if (timeSinceLanded < 2.5) {
              head.current.rotation.y = THREE.MathUtils.lerp(head.current.rotation.y, Math.PI, 5 * delta);
              head.current.rotation.x = THREE.MathUtils.lerp(head.current.rotation.x, 0, 5 * delta);
            } else {
              const targetRotY = (-mouse.x * 0.5); 
              const targetRotX = (mouse.y * 0.3);
              head.current.rotation.y = THREE.MathUtils.lerp(head.current.rotation.y, targetRotY, 5 * delta);
              head.current.rotation.x = THREE.MathUtils.lerp(head.current.rotation.x, targetRotX, 5 * delta);
            }
          }

          if (timeSinceLanded < 2.5) {
            if (rightArm.current) {
              rightArm.current.rotation.x = THREE.MathUtils.lerp(rightArm.current.rotation.x, -2.4, 8 * delta);
              rightArm.current.rotation.z = THREE.MathUtils.lerp(rightArm.current.rotation.z, -1.5 + Math.sin(t * 10) * 0.5, 10 * delta);
            }
          } else {
            if (leftArm.current) leftArm.current.rotation.x = THREE.MathUtils.lerp(leftArm.current.rotation.x, 0.9 + Math.sin(t * 15) * 0.1, 8 * delta);
            if (rightArm.current) {
              rightArm.current.rotation.x = THREE.MathUtils.lerp(rightArm.current.rotation.x, 0.9 + Math.cos(t * 15) * 0.1, 8 * delta);
              rightArm.current.rotation.z = THREE.MathUtils.lerp(rightArm.current.rotation.z, 0, 8 * delta);
            }
          }
        } else {
          boyGroup.current.landedTime = null;
          if (leftArm.current) leftArm.current.rotation.x = THREE.MathUtils.lerp(leftArm.current.rotation.x, -1.8, 2.5 * delta);
          if (rightArm.current) rightArm.current.rotation.x = THREE.MathUtils.lerp(rightArm.current.rotation.x, -1.8, 2.5 * delta);
        }
      } else {
        boyGroup.current.position.lerp(new THREE.Vector3(0, 4, 3), 4 * delta);
        boyGroup.current.rotation.x = THREE.MathUtils.lerp(boyGroup.current.rotation.x, -Math.PI / 4, 4 * delta);
      }
    }
  });

  return (
    <group ref={group} dispose={null} position={[0, -0.8, 0]} scale={1.2}>
      <mesh position={[0, -0.05, 0.5]} receiveShadow>
        <cylinderGeometry args={[2.8, 2.8, 0.05, 64]} />
        <meshStandardMaterial color="#fdfcfb" />
      </mesh>

      {/* Desk Setup */}
      <group position={[0, 0.5, 0]}>
        <RoundedBox args={[2.5, 0.06, 0.8]} radius={0.01} castShadow receiveShadow>
          <meshStandardMaterial color="#ffffff" roughness={0.1} />
        </RoundedBox>
        <RoundedBox args={[0.8, 0.06, 1.2]} position={[-0.85, 0, 0.6]} radius={0.01} castShadow receiveShadow>
          <meshStandardMaterial color="#ffffff" roughness={0.1} />
        </RoundedBox>
      </group>

      {/* Chair */}
      <group position={[0, 0, 0.95]}>
        <mesh position={[0, 0.1, 0]}><cylinderGeometry args={[0.03, 0.03, 0.2]} /><meshStandardMaterial color="#cbd5e1" /></mesh>
        <RoundedBox position={[0, 0.24, 0]} args={[0.45, 0.06, 0.45]} radius={0.05}><meshStandardMaterial color="#ffffff" /></RoundedBox>
        <RoundedBox position={[0, 0.6, 0.2]} args={[0.4, 0.6, 0.06]} radius={0.03} rotation={[-0.1, 0, 0]}><meshStandardMaterial color="#ffffff" /></RoundedBox>
      </group>

      {/* Refined Character (Realistic Styled Human) */}
      <group ref={boyGroup} position={[0, 4, 3]} rotation={[-Math.PI / 4, 0, 0]}>
        {/* Legs - Capsule shape for joints */}
        <group position={[-0.15, 0.1, -0.1]}>
          <mesh castShadow><capsuleGeometry args={[0.06, 0.35, 8, 16]} /><meshStandardMaterial color="#18181b" /></mesh>
          <mesh position={[0, -0.2, 0.05]} castShadow><boxGeometry args={[0.1, 0.06, 0.18]} /><meshStandardMaterial color="#ffffff" /></mesh>
        </group>
        <group position={[0.15, 0.1, -0.1]}>
          <mesh castShadow><capsuleGeometry args={[0.06, 0.35, 8, 16]} /><meshStandardMaterial color="#18181b" /></mesh>
          <mesh position={[0, -0.2, 0.05]} castShadow><boxGeometry args={[0.1, 0.06, 0.18]} /><meshStandardMaterial color="#ffffff" /></mesh>
        </group>

        {/* Torso - Cylinder tapered */}
        <group position={[0, 0.5, 0]}>
          <mesh castShadow><cylinderGeometry args={[0.18, 0.15, 0.45, 32]} /><meshStandardMaterial color="#1e3a8a" /></mesh>
          <mesh position={[0, 0.18, 0]} castShadow><sphereGeometry args={[0.18, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} /><meshStandardMaterial color="#1e3a8a" /></mesh>
        </group>

        {/* Head - Most realistic part */}
        <group ref={head} position={[0, 0.88, 0]}>
          <mesh castShadow><sphereGeometry args={[0.16, 32, 32]} /><meshStandardMaterial color="#ffdbac" roughness={0.5} /></mesh>
          <group position={[0, 0.05, 0]}>
             <Sphere args={[0.17, 32, 32]} position={[0, 0.02, 0.02]} scale={[1, 0.85, 1.1]}>
                <meshStandardMaterial color="#451a03" />
             </Sphere>
          </group>
          <mesh position={[-0.07, 0, -0.14]}><sphereGeometry args={[0.015, 16, 16]} /><meshStandardMaterial color="#000000" /></mesh>
          <mesh position={[0.07, 0, -0.14]}><sphereGeometry args={[0.015, 16, 16]} /><meshStandardMaterial color="#000000" /></mesh>
        </group>

        {/* Arms - Capsules */}
        <group ref={leftArm} position={[-0.24, 0.65, 0]}>
          <mesh position={[0, -0.15, -0.1]} rotation={[0.4, 0, 0]} castShadow><capsuleGeometry args={[0.045, 0.25, 4, 8]} /><meshStandardMaterial color="#1e3a8a" /></mesh>
          <mesh position={[0, -0.28, -0.2]}><sphereGeometry args={[0.04, 16, 16]} /><meshStandardMaterial color="#ffdbac" /></mesh>
        </group>
        <group ref={rightArm} position={[0.24, 0.65, 0]}>
          <mesh position={[0, -0.15, -0.1]} rotation={[0.4, 0, 0]} castShadow><capsuleGeometry args={[0.045, 0.25, 4, 8]} /><meshStandardMaterial color="#1e3a8a" /></mesh>
          <mesh position={[0, -0.28, -0.2]}><sphereGeometry args={[0.04, 16, 16]} /><meshStandardMaterial color="#ffdbac" /></mesh>
        </group>
      </group>

      {/* Dual Monitor Setup (Restored) */}
      <group position={[0, 0.55, -0.25]}>
        {/* Monitor Left - Coding Screen */}
        <group position={[-0.45, 0.4, 0]} rotation={[0, 0.3, 0]}>
           <mesh castShadow>
             <boxGeometry args={[0.8, 0.5, 0.05]} /><meshStandardMaterial color="#111111" />
           </mesh>
           <mesh position={[0, 0, 0.026]}><planeGeometry args={[0.74, 0.44]} /><meshStandardMaterial color="#020617" /></mesh>
           <group position={[-0.25, 0.15, 0.028]}>
              {[...Array(8)].map((_, i) => (
                <mesh key={i} position={[0.15, -i * 0.04, 0]}>
                  <planeGeometry args={[((i * 0.618) % 1) * 0.25 + 0.1, 0.015]} />
                  <meshBasicMaterial color={i % 2 === 0 ? "#38bdf8" : "#f472b6"} />
                </mesh>
              ))}
           </group>
        </group>
        {/* Monitor Right - Terminal */}
        <group position={[0.45, 0.4, 0]} rotation={[0, -0.3, 0]}>
           <mesh castShadow>
             <boxGeometry args={[0.8, 0.5, 0.05]} /><meshStandardMaterial color="#111111" />
           </mesh>
           <mesh position={[0, 0, 0.026]}><planeGeometry args={[0.74, 0.44]} /><meshStandardMaterial color="#020617" /></mesh>
           <mesh position={[-0.25, 0.18, 0.028]}>
              <planeGeometry args={[0.1, 0.02]} />
              <meshBasicMaterial color="#4ade80" />
           </mesh>
        </group>
        {/* Stands */}
        <mesh position={[-0.45, 0.1, 0]}><cylinderGeometry args={[0.02, 0.03, 0.2]} /><meshStandardMaterial color="#333333" /></mesh>
        <mesh position={[0.45, 0.1, 0]}><cylinderGeometry args={[0.02, 0.03, 0.2]} /><meshStandardMaterial color="#333333" /></mesh>
      </group>

      {/* Tactile Keyboard (RESORED) */}
      <group position={[0, 0.58, 0.3]}>
         <RoundedBox args={[0.65, 0.03, 0.25]} radius={0.01}>
            <meshStandardMaterial color="#1e293b" />
         </RoundedBox>
         <group position={[0, 0.02, 0]}>
           {[...Array(5)].map((_, row) => (
             [...Array(12)].map((_, col) => (
               <mesh key={`${row}-${col}`} position={[-0.28 + col * 0.05, 0, -0.09 + row * 0.045]}>
                 <boxGeometry args={[0.035, 0.01, 0.035]} />
                 <meshStandardMaterial color="#334155" />
               </mesh>
             ))
           ))}
         </group>
      </group>

      {/* Small Accessories (RESTORED) */}
      <group position={[-0.8, 0.58, 0.2]}>
         <mesh castShadow>
           <boxGeometry args={[0.1, 0.1, 0.1]} />
           <meshStandardMaterial color="#e11d48" />
         </mesh>
      </group>
      <group position={[0.7, 0.58, 0.2]}>
         <RoundedBox args={[0.15, 0.2, 0.1]} radius={0.02}>
           <meshStandardMaterial color="#facc15" />
         </RoundedBox>
      </group>

      {/* Potted Plant (RESTORED) */}
      <group position={[-0.9, 0.55, 0.8]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.1, 0.08, 0.15, 16]} />
          <meshStandardMaterial color="#a8a29e" />
        </mesh>
        <Sphere args={[0.12, 16, 16]} position={[0, 0.15, 0]}>
           <meshStandardMaterial color="#22c55e" />
        </Sphere>
      </group>
    </group>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="home" ref={ref} className="min-h-screen flex items-center justify-center pt-20">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 px-6">
        <div className="flex-1 z-10 w-full mt-10 md:mt-0">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-6"><span className="david-badge">Full Stack Developer</span></div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8 text-zinc-900 break-words whitespace-pre-line">
              HELLO, I'M<br /><span className="text-orange-500">AMAN</span><br />SHRIVASTAVA.
            </h1>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-zinc-600 font-medium text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            I build modern, scalable web applications and derive actionable insights from complex data.
          </motion.p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#projects" className="david-button group">VIEW WORK <ArrowRight className="group-hover:translate-x-1 transition-transform" /></a>
            <div className="flex items-center gap-4">
              <a href="https://github.com/Aman1601m" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-full text-slate-100 hover:bg-orange-500 transition-all hover:scale-110 shadow-lg shadow-orange-500/10">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/aman-shrivastava-a6597218b?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-full text-slate-100 hover:bg-orange-500 transition-all hover:scale-110 shadow-lg shadow-orange-500/10">
                <FaLinkedin size={22} />
              </a>
              <a href="mailto:shrivastavaaman1601@gmail.com" className="p-3 bg-zinc-900 rounded-full text-slate-100 hover:bg-orange-500 transition-all hover:scale-110 shadow-lg shadow-orange-500/10">
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[400px] md:h-[600px] w-full relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-400/20 blur-[100px] rounded-full"></div>
          <Canvas shadows camera={{ position: [4, 3, 5], fov: 45 }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
            <ComputerBoy isVisible={isInView} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;
