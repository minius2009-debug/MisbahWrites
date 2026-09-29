import { useState } from 'react';
import { Search as SearchIcon, X, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../data/mock-articles';
import { formatDate } from '../lib/utils';

export default function Search() {
  const [query, setQuery] = useState('');
  
  const results = query.trim() === '' 
    ? [] 
    : ARTICLES.filter(a => 
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        a.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
      );

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-20">
          <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={32} />
          <input
            autoFocus
            type="text"
            placeholder="Search articles, tags, or topics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-[#F1EEE5] dark:bg-[#2A2A20] border-none rounded-2xl py-8 px-20 text-3xl font-bold focus:ring-2 ring-[#5A5A40]/20 placeholder:text-[#8E8A7D]"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          )}
        </div>

        <div className="space-y-12">
          {query === '' ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-slate-300 dark:text-slate-700 mb-4">Start typing to search</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {['Psychology', 'Design', 'AI', 'Travel', 'Culture'].map(tag => (
                  <button 
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium hover:bg-slate-200"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-12">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Found {results.length} results for "{query}"
              </h3>
              {results.map((article) => (
                <Link 
                  key={article.id} 
                  to={`/blog/${article.slug}`}
                  className="block group p-8 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-2xl transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-800"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <img src={article.coverImage} className="w-full md:w-48 aspect-video md:aspect-square object-cover rounded-xl" />
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-4 text-xs text-slate-400 font-medium uppercase tracking-wider">
                        <span>{formatDate(article.publishedAt)}</span>
                        <span>{article.readingTime}</span>
                      </div>
                      <h4 className="text-3xl font-bold leading-tight group-hover:text-blue-500 transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-lg line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-slate-400 mb-2">No results found for "{query}"</h2>
              <p className="text-slate-500">Try adjusting your search or using a broader term.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
