import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="pt-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4 flex items-center gap-4 text-zinc-900 uppercase tracking-tight">
          <span className="w-12 h-[4px] bg-orange-500"></span>
          Experience
        </h2>
      </motion.div>

      <div className="relative border-l-4 border-zinc-300 ml-6 md:ml-8">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative pl-8 md:pl-12"
        >
          {/* Timeline Dot Animation */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
            className="absolute -left-[14px] top-1 bg-[#dfd1bc] p-1 z-10"
          >
            <div className="w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)]"></div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -8, scale: 1.01 }}
            className="glass-card p-8 rounded-2xl transition-all duration-300 shadow-xl shadow-transparent hover:shadow-orange-500/5 mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">MIS Executive & Service Desk</h3>
                <h4 className="text-lg text-orange-600 font-bold flex items-center gap-2">
                  <Briefcase size={18} />
                  Eicher Motors
                </h4>
              </div>
              <div className="flex items-center gap-2 text-zinc-600 text-sm font-bold bg-white/60 border border-zinc-200 px-4 py-2 rounded-full w-fit">
                <Calendar size={16} />
                <span>Past Role</span>
              </div>
            </div>

            <motion.ul 
              variants={{
                show: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } }
              }}
              initial="hidden"
              whileInView="show"
              className="space-y-4 text-zinc-700 font-medium text-lg leading-relaxed"
            >
              {[
                "Managed Management Information Systems (MIS), generating comprehensive reports to support data-driven decision making at the executive level.",
                "Analyzed large datasets to identify operational trends, bottlenecks, and opportunities for process optimization.",
                "Served on the Service Desk, providing technical support and resolution for complex IT issues, ensuring maximum uptime and efficiency.",
                "Streamlined data collection processes and automated reporting workflows, reducing manual effort and improving data accuracy."
              ].map((text, i) => (
                <motion.li 
                  key={i} 
                  variants={{ hidden: { opacity: 0, x: 10 }, show: { opacity: 1, x: 0 } }}
                  className="flex gap-3"
                >
                  <span className="text-orange-500 font-bold mt-1">▹</span>
                  <p>{text}</p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
