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

type Card = {
  slug: string;
  title: string;
  date?: string;
  author: string;
  description: string;

  link?: string;
  category?: string;
  image?: string;
  tags?: string[];
  hide?: boolean;
};
