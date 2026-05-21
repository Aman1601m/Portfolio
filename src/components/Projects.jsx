import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Activity } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Smart Future Steps LMS",
    description: "A professional Learning Management System built with the MERN stack. Features comprehensive course management, student enrollment, secure authentication, and a dynamic admin dashboard. Designed for a seamless educational experience.",
    image: "/assets/lms_mockup.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Aman1601m/LMS",
    live: "https://smart-future-steps.vercel.app/",
    featured: true
  },
  {
    title: "Hospital Appointment Booking System",
    description: "A comprehensive full-stack healthcare platform that streamlines patient scheduling, doctor availability management, and administrative workflows. Built with modern web technologies to ensure a seamless experience for both patients and healthcare providers.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Aman1601m/hospital-booking-system",
    live: "https://hospital-booking-system-delta.vercel.app",
    featured: true
  },
  {
    title: "Data Analytics Dashboard",
    description: "Interactive dashboard for visualizing complex business metrics. Processes large datasets to provide real-time insights, trend analysis, and predictive modeling for strategic decision making.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Pandas", "PowerBI", "Excel", "Databricks"],
    github: "",
    live: "",
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="pt-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4 flex items-center gap-4 text-zinc-900 uppercase tracking-tight">
          <span className="w-12 h-[4px] bg-orange-500"></span>
          Featured Projects
        </h2>
      </motion.div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
          >
            {/* Image Container */}
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute inset-0 bg-orange-500/10 rounded-2xl blur-xl group-hover:bg-orange-400/20 transition-colors duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-sm glass">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-[300px] md:h-[400px] object-cover mix-blend-overlay group-hover:mix-blend-normal transform group-hover:scale-105 transition-all duration-700 opacity-80 group-hover:opacity-100"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Activity size={14} />
                    Featured
                  </div>
                )}
              </div>
            </div>

            {/* Content Container */}
            <div className={`w-full md:w-1/2 flex flex-col ${index % 2 === 1 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} z-10`}>
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4 hover:text-orange-500 transition-colors cursor-pointer">
                {project.title}
              </h3>
              
              <div className="glass-card p-6 rounded-2xl mb-6 relative z-10">
                <p className="text-zinc-700 font-medium text-base md:text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              <ul className={`flex flex-wrap gap-3 mb-8 ${index % 2 === 1 ? 'md:justify-end' : 'md:justify-start'}`}>
                {project.tags.map(tag => (
                  <li key={tag} className="text-orange-600 font-bold text-sm uppercase tracking-wider">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-orange-500 transition-colors p-2"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-orange-500 transition-colors p-2"
                  >
                    <ExternalLink size={24} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
