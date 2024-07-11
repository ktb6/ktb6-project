import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { formatDate } from '@/utils/date';
import Link from 'next/link';
import Button from '@/components/Button';
import Giscus from '@/components/Giscus';

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
    <main className="flex justify-center min-h-screen mt-8 mb-24">
      <div className="flex flex-col items-center w-full max-w-[820px] mx-auto p-6">
        <div className="flex flex-col items-center pb-12">
          <span className="text-[14px] text-blue-400 my-2">
            {data.category}
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            {data.title}
          </h1>
          <div className="text-gray-400 flex items-center justify-center flex-wrap">
            <Link href={`/author/${data.author}`}>
              <span>{data.author}</span>
            </Link>
            <div className="dot" />
            <span>{formatDate(data.date)}</span>
            {data.tags && data.tags.length > 0 && (
              <div className="flex gap-2 ml-2">
                {data.tags.map((tag: any, index: number) => (
                  <span key={index} className="text-slate-300">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col max-w-[780px] items-center justify-center gap-6 md:gap-14 pb-24">
          <div className="max-w-[780px] prose md:prose-lg">
            <ReactMarkdown
              components={{
                img: ({ alt, src }) => (
                  <Image
                    alt={alt || ''}
                    src={src || ''}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    width={700}
                    height={475}
                    className="mx-auto rounded-lg"
                  />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
          <div className="w-full">
            <Giscus />
          </div>
        </div>

        <Link href={'/posts'}>
          <Button>← Back to Blog</Button>
        </Link>
      </div>
    </main>
  );
}
