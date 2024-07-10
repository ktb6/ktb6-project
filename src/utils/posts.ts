export const transformPostsToCards = (posts: Post[]) => {
  return posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    category: post.category,
    author: post.author,
    date: post.date,
    description: post.description,
    image: post.image,
    tags: post.tags,
  }));
};
