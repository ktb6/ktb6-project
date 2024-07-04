import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export default function Home() {
  const posts = getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl mb-4">Latest Posts</h1>
        <ul>
          {posts.map((post) => (
            <div key={post.slug} className="container mb-r p-4 hover:bg-gradient-to-r from-gray-200 to-gray-300">
            <li
              key={post.slug}
            >
              <Link href={`/posts/${post.slug}`}>
                <span className="text-blue-500 text-2xl mb-2 block">
                  {post.title}
                </span>
              </Link>
              <p className="text-gray-600 mb-2">{post.date}</p>
              <p>{post.description}</p>
            </li>
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
}

const getPosts = () => {
  const postsDirectory = path.join(process.cwd(), "public/posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      date: data.date,
      description: data.description,
    };
  });

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
};
