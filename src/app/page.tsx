import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function Home() {
  const posts = getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">육두문자 Team Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug} className="mb-4">
              <Link href={`/posts/${post.slug}`}>
                <span className="text-blue-500 text-2xl">{post.title}</span>
              </Link>
              <p className="text-gray-600">{post.date}</p>
              <p>{post.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

const getPosts = () => {
  const postsDirectory = path.join(process.cwd(), 'public/posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
      description: data.description,
    };
  });

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
};
