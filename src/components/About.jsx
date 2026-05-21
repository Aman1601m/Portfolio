import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ChartBar, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="pt-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4 flex items-center gap-4 text-zinc-900 uppercase tracking-tight">
          <span className="w-12 h-[4px] bg-orange-500"></span>
          About Me
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 text-slate-300 leading-relaxed text-lg"
        >
          <p className="text-zinc-700 font-medium text-xl leading-relaxed">
            I am a passionate <span className="text-orange-600 font-bold">Full Stack Developer</span> and <span className="text-orange-600 font-bold">Data Analyst</span>, driven by the desire to build robust, scalable applications and extract meaningful insights from rigorous data analysis.
          </p>
          <p className="text-zinc-700 font-medium text-xl leading-relaxed">
            My unique background combines deep technical capabilities in software engineering with a strong analytical foundation. I specialize in the MERN stack alongside Python-based data ecosystems.
          </p>
          <div className="space-y-4 mt-8">
            <div className="p-6 glass-card rounded-2xl flex items-center gap-4">
              <div className="p-4 bg-orange-500/20 rounded-xl text-orange-600">
                <GraduationCap size={32} />
              </div>
              <div>
                <h4 className="text-zinc-900 font-bold text-xl">Postgraduate Education</h4>
                <p className="text-zinc-600 font-medium mt-1">Master of Business Administration (MBA IT and HR)</p>
              </div>
            </div>
            
            <div className="p-6 glass-card rounded-2xl flex items-center gap-4">
              <div className="p-4 bg-orange-500/20 rounded-xl text-orange-600">
                <GraduationCap size={32} />
              </div>
              <div>
                <h4 className="text-zinc-900 font-bold text-xl">Undergraduate Education</h4>
                <p className="text-zinc-600 font-medium mt-1">Bachelor of Science (B.Sc) in Computer Science</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
           variants={{
             hidden: { opacity: 0 },
             show: {
               opacity: 1,
               transition: { staggerChildren: 0.2, delayChildren: 0.4 }
             }
           }}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true }}
           className="grid grid-cols-2 gap-4"
        >
          <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }} whileHover={{ y: -5, scale: 1.02 }} className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-4 transition-all">
            <Code className="text-orange-500" size={40} />
            <h4 className="text-zinc-900 font-bold text-lg">Full Stack Development</h4>
            <p className="text-sm font-medium text-zinc-600">React, Node.js, Next.js</p>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }} whileHover={{ y: -5, scale: 1.02 }} className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-4 transition-all">
            <ChartBar className="text-rose-500" size={40} />
            <h4 className="text-zinc-900 font-bold text-lg">Data Analysis</h4>
            <p className="text-sm font-medium text-zinc-600">Python, SQL, Visualization</p>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }} whileHover={{ y: -5, scale: 1.02 }} className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-4 col-span-2 transition-all">
            <Award className="text-amber-500" size={40} />
            <h4 className="text-zinc-900 font-bold text-lg">Problem Solving</h4>
            <p className="text-sm font-medium text-zinc-600">Turning complex business challenges into elegant technical solutions.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
