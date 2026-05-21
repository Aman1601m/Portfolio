import React from 'react';

const BackgroundEffect = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none mix-blend-multiply">
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-orange-400 rounded-full filter blur-[128px] opacity-10 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-amber-300 rounded-full filter blur-[128px] opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-rose-400 rounded-full filter blur-[128px] opacity-10 animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default BackgroundEffect;
