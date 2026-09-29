export interface Author {
  name: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readingTime: string;
  category: 'Culture' | 'Tech' | 'Personal Essays' | 'Design' | 'Society' | 'Education' | 'Youth Culture';
  coverImage: string;
  featured?: boolean;
  trending?: boolean;
  tags: string[];
}
