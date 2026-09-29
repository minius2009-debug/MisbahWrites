import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FeaturedArticle, ArticleCard } from '../components/blog';
import { ARTICLES, AUTHOR } from '../data/mock-articles';
import { cn } from '../lib/utils';
import { TrendingUp, Send, ArrowRight } from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Youth Culture', 'Community', 'Society', 'Education'];
  
  const featuredArticle = ARTICLES.find(a => a.featured) || ARTICLES[0];
  const trendingArticles = ARTICLES.filter(a => a.trending);
  const filteredArticles = activeCategory === 'All' 
    ? ARTICLES.filter(a => !a.featured)
    : ARTICLES.filter(a => a.category === activeCategory && !a.featured);

  return (
    <main className="pb-20">
      <FeaturedArticle article={featuredArticle} />

      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-8 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap border",
                  activeCategory === cat 
                    ? "bg-[#8C3B4A] border-[#8C3B4A] text-white shadow-md scale-105" 
                    : "bg-[#F7F3EE] dark:bg-[#1A1A1A] border-[#E8E4D8] dark:border-[#2A2A20] text-[#6B6658] dark:text-[#8E8A7D] hover:border-[#8C3B4A] hover:text-[#8C3B4A]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-20">
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-24">
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-20">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-16">
            <div className="bg-[#F7F3EE] dark:bg-[#1A1A1A] border border-[#E8E4D8] dark:border-[#2A2A20] rounded-3xl p-10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8C3B4A]/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-5 mb-8">
                  <div className="relative">
                    <img src={AUTHOR.avatar} className="w-20 h-20 rounded-2xl object-cover bg-[#D6D1C1] shadow-md" alt={AUTHOR.name} />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#8C3B4A] rounded-full flex items-center justify-center text-white text-[8px] font-bold">MW</div>
                  </div>
                  <div>
                    <h4 className="font-serif italic text-2xl text-[#1A1A1A] dark:text-[#FDFCFB]">{AUTHOR.name}</h4>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#8C3B4A] mt-1">Writer & Thinker</p>
                  </div>
                </div>
                <p className="text-base text-[#6B6658] dark:text-[#8E8A7D] leading-relaxed mb-8 italic font-serif opacity-90">
                  "{AUTHOR.bio}"
                </p>
                <Link to="/about" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A1A1A] dark:text-[#FDFCFB] hover:text-[#8C3B4A] transition-colors group/link">
                  Learn More
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-[#E8E4D8] dark:border-[#2A2A20] pb-4">
                <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C3B4A]">Must Read Articles</h5>
                <TrendingUp size={14} className="text-[#8C3B4A]" />
              </div>
              <div className="space-y-8">
                {trendingArticles.map((article, idx) => (
                  <Link key={article.id} to={`/article/${article.slug}`} className="flex items-start space-x-6 group">
                    <span className="text-3xl font-serif text-[#E8E4D8] dark:text-[#2A2A20] font-bold italic transition-colors group-hover:text-[#8C3B4A]">0{idx + 1}</span>
                    <div className="space-y-2">
                      <h6 className="text-base font-serif italic leading-snug group-hover:text-[#8C3B4A] transition-colors">
                        {article.title}
                      </h6>
                      <p className="text-[10px] text-[#6B6658] dark:text-[#8E8A7D] uppercase tracking-widest flex items-center gap-2">
                        {article.readingTime}
                        <span className="w-1 h-1 bg-[#E8E4D8] dark:bg-[#3A3A2A] rounded-full"></span>
                        {article.category}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-[#1A1A1A] dark:bg-[#FDFCFB] rounded-3xl p-10 text-[#FDFCFB] dark:text-[#1A1A1A] shadow-2xl relative overflow-hidden group">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#8C3B4A]/20 rounded-full -mb-24 -mr-24 transition-transform duration-700 group-hover:scale-125"></div>
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 bg-[#8C3B4A] rounded-2xl flex items-center justify-center text-white">
                  <Send size={24} />
                </div>
                <h4 className="font-serif italic text-3xl leading-tight">Stay Updated</h4>
                <p className="text-sm text-[#8E8A7D] dark:text-[#6B6658] leading-relaxed">
                  Join our community exploring the evolving perspectives of Upper Chitral. Receive our latest essays directly in your inbox.
                </p>
                <div className="space-y-3 pt-2">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-white/5 dark:bg-black/5 border border-white/10 dark:border-black/10 rounded-xl px-5 py-3 text-sm placeholder-white/30 dark:placeholder-black/30 focus:outline-none focus:ring-2 ring-[#8C3B4A]"
                  />
                  <button className="w-full bg-[#8C3B4A] text-white rounded-xl py-3 text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg">
                    Join Newsletter
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
