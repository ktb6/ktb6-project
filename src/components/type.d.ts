type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  description: string;

  category?: string;
  image?: string;
  tags?: string[];
  hide?: boolean;
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
