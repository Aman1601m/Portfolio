import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Full Stack Development",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Next.js", "Tailwind CSS", "TypeScript", "RESTful APIs"]
  },
  {
    title: "Data Analysis",
    skills: ["Python", "Pandas", "NumPy", "SQL", "Tableau", "PowerBI", "Data Visualization", "Advance Excel"]
  },
  {
    title: "Tools & Technologies",
    skills: ["VS Code", "Git", "GitHub", "Postman", "Jupyter Notebook", "ChatGPT", "Prompt Engineering", "GenAI"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="pt-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4 flex items-center gap-4 text-zinc-900 uppercase tracking-tight">
          <span className="w-12 h-[4px] bg-orange-500"></span>
          Skills & Expertise
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="glass-card p-8 rounded-2xl flex flex-col h-full"
          >
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-rose-500 tracking-tight inline-block">
              {category.title}
            </h3>
            <motion.div 
              variants={{
                show: { transition: { staggerChildren: 0.05 } }
              }}
              initial="hidden"
              whileInView="show"
              className="flex flex-wrap gap-3"
            >
              {category.skills.map((skill) => (
                <motion.span 
                  key={skill}
                  variants={{
                    hidden: { opacity: 0, scale: 0.5 },
                    show: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ scale: 1.1, backgroundColor: "#fff7ed", color: "#ea580c" }}
                  className="px-4 py-2 bg-white/60 border border-zinc-200 shadow-sm rounded-full text-sm font-bold text-zinc-700 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
