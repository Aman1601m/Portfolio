import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const WelcomeLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Total duration of loader (3s as per the CSS variable provided by user)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, [loading]);

  return (
    <>
      <style>
        {`
          .custom-loader {
            --duration: 3s;
            --primary: #f97316; /* Orange-500 */
            --primary-light: #fbbf24; /* Amber-400 */
            --primary-rgba: rgba(249, 115, 22, 0);
            width: 200px;
            height: 320px;
            position: relative;
            transform-style: preserve-3d;
          }

          @media (max-width: 480px) {
            .custom-loader {
              zoom: 0.44;
            }
          }

          .custom-loader:before, .custom-loader:after {
            --r: 20.5deg;
            content: "";
            width: 320px;
            height: 140px;
            position: absolute;
            right: 32%;
            bottom: -11px;
            background: #dfd1bc; /* Matches portfolio background */
            transform: translateZ(200px) rotate(var(--r));
            -webkit-animation: mask var(--duration) linear forwards infinite;
            animation: mask var(--duration) linear forwards infinite;
          }

          .custom-loader:after {
            --r: -20.5deg;
            right: auto;
            left: 32%;
          }

          .custom-loader .ground {
            position: absolute;
            left: -50px;
            bottom: -120px;
            transform-style: preserve-3d;
            transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
          }

          .custom-loader .ground div {
            transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0);
            width: 200px;
            height: 200px;
            background: var(--primary);
            background: linear-gradient(45deg, var(--primary) 0%, var(--primary) 50%, var(--primary-light) 50%, var(--primary-light) 100%);
            transform-style: preserve-3d;
            -webkit-animation: ground var(--duration) linear forwards infinite;
            animation: ground var(--duration) linear forwards infinite;
          }

          .custom-loader .ground div:before, .custom-loader .ground div:after {
            --rx: 90deg;
            --ry: 0deg;
            --x: 44px;
            --y: 162px;
            --z: -50px;
            content: "";
            width: 156px;
            height: 300px;
            opacity: 0;
            background: linear-gradient(var(--primary), var(--primary-rgba));
            position: absolute;
            transform: rotateX(var(--rx)) rotateY(var(--ry)) translate(var(--x), var(--y)) translateZ(var(--z));
            -webkit-animation: ground-shine var(--duration) linear forwards infinite;
            animation: ground-shine var(--duration) linear forwards infinite;
          }

          .custom-loader .ground div:after {
            --rx: 90deg;
            --ry: 90deg;
            --x: 0;
            --y: 177px;
            --z: 150px;
          }

          .custom-loader .box {
            --x: 0;
            --y: 0;
            position: absolute;
            -webkit-animation: var(--duration) linear forwards infinite;
            animation: var(--duration) linear forwards infinite;
            transform: translate(var(--x), var(--y));
          }

          .custom-loader .box div {
            background-color: var(--primary);
            width: 48px;
            height: 48px;
            position: relative;
            transform-style: preserve-3d;
            -webkit-animation: var(--duration) ease forwards infinite;
            animation: var(--duration) ease forwards infinite;
            transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
          }

          .custom-loader .box div:before, .custom-loader .box div:after {
            --rx: 90deg;
            --ry: 0deg;
            --z: 24px;
            --y: -24px;
            --x: 0;
            content: "";
            position: absolute;
            background-color: inherit;
            width: inherit;
            height: inherit;
            transform: rotateX(var(--rx)) rotateY(var(--ry)) translate(var(--x), var(--y)) translateZ(var(--z));
            filter: brightness(var(--b, 1.2));
          }

          .custom-loader .box div:after {
            --rx: 0deg;
            --ry: 90deg;
            --x: 24px;
            --y: 0;
            --b: 1.4;
          }

          .custom-loader .box.box0 { --x: -220px; --y: -120px; left: 58px; top: 108px; }
          .custom-loader .box.box1 { --x: -260px; --y: 120px; left: 25px; top: 120px; }
          .custom-loader .box.box2 { --x: 120px; --y: -190px; left: 58px; top: 64px; }
          .custom-loader .box.box3 { --x: 280px; --y: -40px; left: 91px; top: 120px; }
          .custom-loader .box.box4 { --x: 60px; --y: 200px; left: 58px; top: 132px; }
          .custom-loader .box.box5 { --x: -220px; --y: -120px; left: 25px; top: 76px; }
          .custom-loader .box.box6 { --x: -260px; --y: 120px; left: 91px; top: 76px; }
          .custom-loader .box.box7 { --x: -240px; --y: 200px; left: 58px; top: 87px; }

          .custom-loader .box0 { -webkit-animation-name: box-move0; animation-name: box-move0; }
          .custom-loader .box0 div { -webkit-animation-name: box-scale0; animation-name: box-scale0; }
          .custom-loader .box1 { -webkit-animation-name: box-move1; animation-name: box-move1; }
          .custom-loader .box1 div { -webkit-animation-name: box-scale1; animation-name: box-scale1; }
          .custom-loader .box2 { -webkit-animation-name: box-move2; animation-name: box-move2; }
          .custom-loader .box2 div { -webkit-animation-name: box-scale2; animation-name: box-scale2; }
          .custom-loader .box3 { -webkit-animation-name: box-move3; animation-name: box-move3; }
          .custom-loader .box3 div { -webkit-animation-name: box-scale3; animation-name: box-scale3; }
          .custom-loader .box4 { -webkit-animation-name: box-move4; animation-name: box-move4; }
          .custom-loader .box4 div { -webkit-animation-name: box-scale4; animation-name: box-scale4; }
          .custom-loader .box5 { -webkit-animation-name: box-move5; animation-name: box-move5; }
          .custom-loader .box5 div { -webkit-animation-name: box-scale5; animation-name: box-scale5; }
          .custom-loader .box6 { -webkit-animation-name: box-move6; animation-name: box-move6; }
          .custom-loader .box6 div { -webkit-animation-name: box-scale6; animation-name: box-scale6; }
          .custom-loader .box7 { -webkit-animation-name: box-move7; animation-name: box-move7; }
          .custom-loader .box7 div { -webkit-animation-name: box-scale7; animation-name: box-scale7; }

          @keyframes box-move0 { 12% { transform: translate(var(--x), var(--y)); } 25%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
          @keyframes box-scale0 { 6% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 14%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
          @keyframes box-move1 { 16% { transform: translate(var(--x), var(--y)); } 29%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
          @keyframes box-scale1 { 10% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 18%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
          @keyframes box-move2 { 20% { transform: translate(var(--x), var(--y)); } 33%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
          @keyframes box-scale2 { 14% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 22%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
          @keyframes box-move3 { 24% { transform: translate(var(--x), var(--y)); } 37%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
          @keyframes box-scale3 { 18% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 26%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
          @keyframes box-move4 { 28% { transform: translate(var(--x), var(--y)); } 41%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
          @keyframes box-scale4 { 22% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 30%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
          @keyframes box-move5 { 32% { transform: translate(var(--x), var(--y)); } 45%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
          @keyframes box-scale5 { 26% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 34%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
          @keyframes box-move6 { 36% { transform: translate(var(--x), var(--y)); } 49%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
          @keyframes box-scale6 { 30% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 38%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
          @keyframes box-move7 { 40% { transform: translate(var(--x), var(--y)); } 53%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
          @keyframes box-scale7 { 34% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 42%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
          
          @keyframes ground { 0%, 65% { transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0); } 75%, 90% { transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(1); } 100% { transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0); } }
          @keyframes ground-shine { 0%, 70% { opacity: 0; } 75%, 87% { opacity: 0.2; } 100% { opacity: 0; } }
          @keyframes mask { 0%, 65% { opacity: 0; } 66%, 100% { opacity: 1; } }
        `}
      </style>

      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="fixed-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#dfd1bc] flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="custom-loader">
              <div className="box box0"><div></div></div>
              <div className="box box1"><div></div></div>
              <div className="box box2"><div></div></div>
              <div className="box box3"><div></div></div>
              <div className="box box4"><div></div></div>
              <div className="box box5"><div></div></div>
              <div className="box box6"><div></div></div>
              <div className="box box7"><div></div></div>
              <div className="ground"><div></div></div>
            </div>
            
            <motion.p 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-20 text-orange-950 font-bold tracking-[0.4em] text-sm uppercase z-10"
            >
              Building Reality...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: loading ? 0 : 0.5 }}
          className="flex flex-col items-center justify-center z-40 text-center px-4"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: loading ? 0 : 0.8 }}
            className="text-5xl md:text-[5rem] font-black text-zinc-900 mb-6 tracking-tighter uppercase"
          >
            Welcome to my <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Portfolio</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: loading ? 0 : 1.5, duration: 1 }}
            className="absolute bottom-12 flex flex-col items-center cursor-pointer"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
              })
            }}
          >
             <p className="text-zinc-600 font-bold text-sm mb-2 tracking-widest uppercase">Scroll Down</p>
             <motion.div
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
             >
               <ChevronDown className="text-orange-500 hover:text-orange-400 transition-colors" size={32} />
             </motion.div>
          </motion.div>
        </motion.div>

        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full" />
        </div>
      </section>
    </>
  );
};

export default WelcomeLoader;
