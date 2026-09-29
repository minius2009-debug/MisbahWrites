import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { Article } from '../../types';
import { formatDate } from '../../lib/utils';
import { AUTHOR } from '../../data/mock-articles';

export default function FeaturedArticle({ article }: { article: Article }) {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center pt-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-[#8C3B4A]/10 text-[#8C3B4A] dark:text-[#E0DBCB] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
              {article.category}
            </span>
            <span className="w-1.5 h-1.5 bg-[#E8E4D8] dark:bg-[#3A3A2A] rounded-full"></span>
            <span className="text-[#6B6658] dark:text-[#8E8A7D] text-[10px] font-bold uppercase tracking-[0.2em]">{article.readingTime}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif italic leading-[1.05] tracking-tight text-[#1A1A1A] dark:text-[#FDFCFB]">
            {article.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-[#6B6658] dark:text-[#8E8A7D] leading-relaxed max-w-xl font-serif italic">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-4 pt-4">
            <Link
              to={`/article/${article.slug}`}
              className="btn-primary"
            >
              Read Full Story
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
