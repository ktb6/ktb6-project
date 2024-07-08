import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const posts = getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl mb-4">Latest Posts</h1>
        <ul>
          {posts.map((post) => (
            <div
              key={post.slug}
              className="container mb-r p-4 hover:bg-gradient-to-r from-gray-100 to-gray-200 hover:dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-800"
            >
              <li key={post.slug} className="flex flex-row items-start">
              <div className="flex-grow flex flex-col">
                <Link href={`/posts/${post.slug}`}>
                  <span className="text-blue-500 text-2xl mb-2 block">
                    {post.title}
                  </span>
                </Link>
                <p className="text-gray-600 mb-2">{post.date}</p>
                <p>{post.description}</p>
                </div>
                  {post.image && (
                    <div className="h-150 w-150 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={150} // Adjust width as needed
                        height={150} // Adjust height as needed
                        className="object-cover rounded"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  )}
                
              </li>
            </div>
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
      image: data.image
    };
  });

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
};
