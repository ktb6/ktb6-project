import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'public/posts');

export const getPosts = () => {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
      author: data.author,
      description: data.description,
      category: data.category,
      image: data.image,
      hide: data.hide,
    };
  });

  const visiblePosts = posts.filter((post) => !post.hide);
  visiblePosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return visiblePosts;
};

export function getPostsByAuthor(author: string) {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: fileName.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
      author: data.author,
      description: data.description,
      category: data.category,
      image: data.image,
      hide: data.hide,
    };
  });

  // hide가 true인 포스트를 제외하고 정렬 및 필터링
  const visiblePosts = posts.filter(
    (post) => !post.hide && post.author.toLowerCase() === author.toLowerCase(),
  );
  visiblePosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return visiblePosts;
}
