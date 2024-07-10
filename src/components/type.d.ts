type Post = {
  slug: string;
  title: string;
  category?: string;
  author: string;
  date: string;
  description: string;
  image?: string;
  tags?: string[];
};

type Card = Post & {
  slug: string;
  title: string;
  category?: string;
  author?: string;
  date?: string;
  description?: string;
  image?: string;
  tags?: string[];
};
