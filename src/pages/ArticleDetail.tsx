import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { motion } from 'motion/react';
import { Twitter, Linkedin, MessageCircle, Copy, Clock, Calendar, ArrowLeft } from 'lucide-react';
import { ARTICLES, AUTHOR } from '../data/mock-articles';
import { TableOfContents, ArticleCard } from '../components/blog';
import { formatDate } from '../lib/utils';

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = ARTICLES.find(a => a.slug === slug);

  if (!article) return <div>Article not found</div>;

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#8E8A7D] hover:text-black dark:hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Feed
        </Link>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <article className="lg:col-span-8">
            <header className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <span className="px-3 py-1 bg-[#8C3B4A]/10 text-[#8C3B4A] dark:text-[#E0DBCB] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
                  {article.category}
                </span>
                <span className="w-1.5 h-1.5 bg-[#E8E4D8] dark:bg-[#3A3A2A] rounded-full"></span>
                <span className="text-[#6B6658] dark:text-[#8E8A7D] text-[10px] font-bold uppercase tracking-[0.2em]">{article.readingTime}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-serif italic leading-[1.05] tracking-tighter mb-12 text-[#1A1A1A] dark:text-[#FDFCFB]">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-8 font-serif italic text-[#6B6658] dark:text-[#8E8A7D] border-y border-[#E8E4D8] dark:border-[#2A2A20] py-8">
                <div className="flex items-center gap-4 group cursor-default">
                  <img src={AUTHOR.avatar} className="w-12 h-12 rounded-2xl object-cover shadow-sm group-hover:shadow-md transition-shadow" alt={AUTHOR.name} />
                  <span className="text-[#1A1A1A] dark:text-[#FDFCFB] text-lg not-italic font-bold tracking-tight">{AUTHOR.name}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar size={16} />
                  <span>{formatDate(article.publishedAt)}</span>
                </div>
              </div>
            </header>

            <div className="relative group mb-20">
              <div className="absolute -inset-4 bg-[#8C3B4A]/5 rounded-[2rem] scale-95 group-hover:scale-100 transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
              <img 
                src={article.coverImage} 
                alt={article.title} 
                className="relative w-full aspect-[16/10] object-cover rounded-3xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]"
              />
            </div>

            <div className="markdown-body max-w-none">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>

            {/* Author Footer */}
            <footer className="mt-32 p-12 bg-[#F7F3EE] dark:bg-[#1A1A1A] rounded-[2rem] border border-[#E8E4D8] dark:border-[#2A2A20] flex flex-col md:flex-row gap-12 items-center text-center md:text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#8C3B4A]/5 rounded-full -mr-24 -mt-24 group-hover:scale-150 transition-transform duration-1000"></div>
              <img src={AUTHOR.avatar} className="relative w-32 h-32 rounded-3xl object-cover border-4 border-white dark:border-black shadow-xl" alt={AUTHOR.name} />
              <div className="relative flex-1 space-y-4">
                <h4 className="text-3xl font-serif italic text-[#1A1A1A] dark:text-[#FDFCFB]">Written by {AUTHOR.name}</h4>
                <p className="text-lg text-[#6B6658] dark:text-[#8E8A7D] leading-relaxed font-serif italic">
                  {AUTHOR.bio}
                </p>
                <div className="flex gap-6 justify-center md:justify-start pt-2">
                  <a href="#" className="text-[#8E8A7D] hover:text-[#8C3B4A] transition-colors"><Twitter size={24} /></a>
                  <a href="#" className="text-[#8E8A7D] hover:text-[#8C3B4A] transition-colors"><Linkedin size={24} /></a>
                </div>
              </div>
            </footer>
          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-32 space-y-16">
              <TableOfContents />

              <div className="space-y-6">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C3B4A] border-b border-[#E8E4D8] dark:border-[#2A2A20] pb-4">Share Engagement</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Twitter, label: 'Twitter' },
                    { icon: Linkedin, label: 'LinkedIn' },
                    { icon: MessageCircle, label: 'Chat' },
                    { icon: Copy, label: 'Copy' }
                  ].map((item) => (
                    <button key={item.label} className="p-4 bg-[#F7F3EE] dark:bg-[#1A1A1A] rounded-2xl text-[#8E8A7D] hover:text-white hover:bg-[#8C3B4A] transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                      <item.icon size={20} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Read More Section */}
        <section className="mt-40 pt-24 border-t border-[#E8E4D8] dark:border-[#2A2A20]">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-6xl font-serif italic tracking-tighter text-[#1A1A1A] dark:text-[#FDFCFB]">Related Reading</h2>
            <Link to="/" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C3B4A] hover:opacity-70 transition-opacity pb-2">Explore All</Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {ARTICLES.filter(a => a.id !== article.id).slice(0, 3).map((related) => (
              <ArticleCard key={related.id} article={related} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
