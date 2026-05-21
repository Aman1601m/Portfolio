import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const object = {
        ...formData,
        access_key: "88fca581-84f9-4016-beb5-b8e7aa61a20a"
    };
    const json = JSON.stringify(object);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const res = await response.json();

        if (res.success) {
            setIsSending(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 5000);
        } else {
            throw new Error(res.message);
        }
    } catch (error) {
        setIsSending(false);
        alert("Failed to send message properly. Please check your Access Key.");
        console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="pt-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4 inline-flex items-center gap-4 text-zinc-900 uppercase tracking-tight">
          <span className="w-12 h-[4px] bg-orange-500 hidden md:block"></span>
          Get In Touch
          <span className="w-12 h-[4px] bg-orange-500 hidden md:block"></span>
        </h2>
        <p className="text-zinc-600 font-medium text-lg max-w-2xl mx-auto mt-4">
          Whether you have a question, an opportunity, or just want to say hi, I'll try my best to get back to you!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="glass-card p-6 rounded-2xl flex items-center gap-6">
            <div className="p-4 bg-orange-500/20 rounded-full text-orange-600">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="text-zinc-500 font-bold text-xs uppercase tracking-wider mb-1">Email</h4>
              <a href="mailto:shrivastavaaman1601@gmail.com" className="text-zinc-900 hover:text-orange-500 font-bold text-lg transition-colors">
                shrivastavaaman1601@gmail.com
              </a>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl flex items-center gap-6">
            <div className="p-4 bg-orange-500/20 rounded-full text-orange-600">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="text-zinc-500 font-bold text-xs uppercase tracking-wider mb-1">Phone</h4>
              <a href="tel:+916260324594" className="text-zinc-900 hover:text-orange-500 font-bold text-lg transition-colors">
                +91 6260324594
              </a>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl flex items-center gap-6">
            <div className="p-4 bg-orange-500/20 rounded-full text-orange-600">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="text-zinc-500 font-bold text-xs uppercase tracking-wider mb-1">Location</h4>
              <p className="text-zinc-900 font-bold text-lg">Indore, Madhya Pradesh, India</p>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
         >
           <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6 relative overflow-hidden">
             <AnimatePresence>
               {isSubmitted && (
                 <motion.div 
                   initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                   animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
                   exit={{ opacity: 0 }}
                   className="absolute inset-0 z-10 bg-white/40 flex flex-col items-center justify-center text-center p-6"
                 >
                   <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mb-4"
                  >
                    <Send size={32} />
                  </motion.div>
                  <h3 className="text-2xl font-black text-zinc-900 mb-2 uppercase tracking-tight">Message Sent!</h3>
                  <p className="text-zinc-600 font-bold">Thank you for reaching out, Aman will get back to you soon.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label htmlFor="name" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/60 border border-zinc-200 shadow-sm rounded-xl px-4 py-3 text-zinc-900 font-medium focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all"
                required
                disabled={isSending}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/60 border border-zinc-200 shadow-sm rounded-xl px-4 py-3 text-zinc-900 font-medium focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all"
                required
                disabled={isSending}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-white/60 border border-zinc-200 shadow-sm rounded-xl px-4 py-3 text-zinc-900 font-medium focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
                required
                disabled={isSending}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`david-button w-full justify-center group ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={isSending}
            >
              {isSending ? (
                <>SENDING...</>
              ) : (
                <>
                  SEND MESSAGE
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      <div className="mt-24 text-center pb-8">
        <div className="flex items-center justify-center gap-6 mb-6">
          <a href="https://github.com/Aman1601m" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/60 border border-zinc-200 shadow-sm rounded-full text-zinc-500 hover:text-orange-500 hover:bg-orange-50 transition-all">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/aman-shrivastava-a6597218b?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/60 border border-zinc-200 shadow-sm rounded-full text-zinc-500 hover:text-orange-500 hover:bg-orange-50 transition-all">
            <FaLinkedin size={22} />
          </a>
          <a href="mailto:shrivastavaaman1601@gmail.com" className="p-3 bg-white/60 border border-zinc-200 shadow-sm rounded-full text-zinc-500 hover:text-orange-500 hover:bg-orange-50 transition-all">
            <Mail size={22} />
          </a>
        </div>
        <p className="text-zinc-500 font-bold text-sm tracking-wide">
          Designed & Built with React, Tailwind CSS, and Three.js
        </p>
        <p className="text-zinc-500 font-bold text-xs mt-2 uppercase tracking-widest">
          © {new Date().getFullYear()} Aman Shrivastava
        </p>
      </div>
    </section>
  );
};

export default Contact;
