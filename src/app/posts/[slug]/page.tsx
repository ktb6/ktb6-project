import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { formatDate } from '@/utils/date';
import Link from 'next/link';

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
    <div className="flex justify-center items-center min-h-screen mt-8 mb-24">
      <div className="container max-w-2xl mx-auto p-4">
        <div className="flex flex-col items-center pb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            {data.title}
          </h1>
          <div className="text-gray-400 flex w-fit items-center">
            <Link href={`/author/${data.author}`}>
              <span>{data.author}</span>
            </Link>
            <div className="dot" />
            <span>{formatDate(data.date)}</span>
            {data.tags && data.tags.length > 0 && (
              <>
                <div className="dot" />
                <div className="flex gap-2">
                  {data.tags.map((tag: any, index: number) => (
                    <span key={index} className="text-slate-300">
                      #{tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="prose-sm md:prose">
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
