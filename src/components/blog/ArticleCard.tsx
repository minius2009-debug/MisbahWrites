import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { Article } from '../../types';
import { formatDate } from '../../lib/utils';

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/article/${article.slug}`} className="block">
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-[#E8E4D8] dark:bg-[#2A2A20] shadow-sm group-hover:shadow-xl transition-shadow duration-500">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/95 dark:bg-black/95 backdrop-blur-sm text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C3B4A] dark:text-[#E0DBCB] rounded-full shadow-sm">
              {article.category}
            </span>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-[#6B6658] dark:text-[#8E8A7D] text-[10px] font-bold uppercase tracking-[0.2em]">
            <span>{formatDate(article.publishedAt)}</span>
            <span className="w-1.5 h-1.5 bg-[#E8E4D8] dark:bg-[#3A3A2A] rounded-full"></span>
            <span>{article.readingTime}</span>
          </div>
          
          <h3 className="text-2xl font-serif italic leading-snug text-[#1A1A1A] dark:text-[#FDFCFB] group-hover:text-[#8C3B4A] transition-colors">
            {article.title}
          </h3>
          
          <p className="text-base text-[#6B6658] dark:text-[#8E8A7D] line-clamp-3 leading-relaxed font-serif italic opacity-90">
            {article.excerpt}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
