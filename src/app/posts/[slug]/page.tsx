import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'public/posts');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

interface PostProps {
  params: {
    slug: string;
  };
}

const getPost = (slug: string) => {
  const postPath = path.join(process.cwd(), 'public/posts', `${slug}.md`);
  const fileContents = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { data, content };
};

export default function Post({ params }: PostProps) {
  const { data, content } = getPost(params.slug);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container max-w-2xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        {/* <p className="text-gray-600 mb-8">{data.date}</p> */}
        <div className="text-gray-600 mb-8 flex justify-between">
          <span>{data.date}</span>
          <span>{data.author}</span>
        </div>
        <p className="text-gray-800 mb-8">{data.description}</p>
        <div className="prose">
          <ReactMarkdown
            components={{
              img: ({ alt, src }) => (
                <Image
                  alt={alt || ''}
                  src={src || ''}
                  layout="responsive"
                  width={700}
                  height={475}
                  className="mx-auto"
                />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
