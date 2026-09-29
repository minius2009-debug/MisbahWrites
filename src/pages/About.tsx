import { motion } from 'motion/react';
import { AUTHOR } from '../data/mock-articles';
import { Twitter, Linkedin, Github, Globe, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-serif italic mb-8 tracking-tighter text-[#1A1A1A] dark:text-[#FDFCFB]"
          >
            I'm {AUTHOR.name.split(' ')[0]}.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl md:text-3xl text-[#8C3B4A] dark:text-[#E0DBCB] italic font-serif"
          >
            Narrating the intersection of youth culture and regional identity
          </motion.p>
        </header>

        <div className="grid md:grid-cols-3 gap-24">
          <div className="md:col-span-2 space-y-12 text-xl leading-relaxed text-[#6B6658] dark:text-[#8E8A7D] font-serif">
            <p className="first-letter:text-7xl first-letter:font-serif first-letter:italic first-letter:mr-4 first-letter:float-left first-letter:text-[#1A1A1A] dark:first-letter:text-[#FDFCFB]">
              I am an emerging writer and thinker based in the serene landscape of Sonoghur, Upper Chitral. 
              As a student at Aga Khan Higher Secondary School (AKHSS) Kuragh, my work is deeply rooted in 
              the evolving perspectives of my generation.
            </p>
            <p>
              My writing explores the intricate intersection of youth culture, community dynamics, and 
              contemporary social themes. I strive to capture the everyday realities and quiet transformations 
              that are currently shaping both our regional landscape and our collective future.
            </p>
            <p className="italic border-l-4 border-[#8C3B4A] pl-8 py-2">
              "Through these essays, I aim to provide a window into the evolving landscape of Upper Chitral, 
              documenting the stories that often go unheard in the rush of the modern world."
            </p>

            <div className="pt-16">
              <h3 className="text-3xl font-serif italic mb-10 text-[#1A1A1A] dark:text-[#FDFCFB]">Academic & Creative Focus</h3>
              <div className="space-y-10">
                {[
                  { title: 'Youth Culture', desc: 'Exploring the aspirations and challenges of the modern youth.' },
                  { title: 'Community Dynamics', desc: 'Documenting the social fabric of Upper Chitral.' },
                  { title: 'Contemporary Themes', desc: 'Analyzing global shifts through a local lens.' },
                ].map((item) => (
                  <div key={item.title} className="group cursor-default border-b border-[#E8E4D8] dark:border-[#2A2A20] pb-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif italic text-2xl group-hover:text-[#8C3B4A] transition-colors">{item.title}</span>
                      <ArrowRight size={20} className="text-[#8E8A7D] group-hover:text-[#8C3B4A] transition-colors group-hover:translate-x-1 duration-300" />
                    </div>
                    <p className="text-base text-[#6B6658] dark:text-[#8E8A7D]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-16">
            <div className="space-y-8">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C3B4A]">Connect</h4>
              <div className="flex flex-col gap-6">
                <a href="#" className="flex items-center gap-4 text-xl font-serif italic hover:text-[#8C3B4A] transition-colors group">
                  <Twitter size={20} className="text-[#8E8A7D] group-hover:text-[#8C3B4A]" /> Twitter / X
                </a>
                <a href="#" className="flex items-center gap-4 text-xl font-serif italic hover:text-[#8C3B4A] transition-colors group">
                  <Linkedin size={20} className="text-[#8E8A7D] group-hover:text-[#8C3B4A]" /> LinkedIn
                </a>
                <a href="#" className="flex items-center gap-4 text-xl font-serif italic hover:text-[#8C3B4A] transition-colors group">
                  <Github size={20} className="text-[#8E8A7D] group-hover:text-[#8C3B4A]" /> GitHub
                </a>
              </div>
            </div>

            <div className="p-10 bg-[#F7F3EE] dark:bg-[#1A1A1A] rounded-3xl border border-[#E8E4D8] dark:border-[#2A2A20] space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#8C3B4A]/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>
              <h4 className="font-serif italic text-2xl relative z-10">Collaboration</h4>
              <p className="text-base text-[#6B6658] dark:text-[#8E8A7D] relative z-10">
                Available for speaking engagements, workshops, and editorial consulting.
              </p>
              <button className="w-full btn-primary px-4 py-3.5 text-xs relative z-10">
                Get in Touch
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
