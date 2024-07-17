import { formatDate } from '@/utils/date';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';
import Giscus from '@/components/Giscus';
import Button from '@/components/Button';

type Props = {
  data: {
    [key: string]: any;
  };
  content: string;
};
const PostDetail = ({ data, content }: Props) => {
  return (
    <div className="flex flex-col items-center w-full max-w-[820px] mx-auto py-6 px-2">
      <div className="flex flex-col items-center pb-8">
        <span className="text-[14px] text-blue-400 dark:text-dark-text-blue my-2">
          {data.category}
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          {data.title}
        </h1>
        <div className="text-light-text-4 dark:text-gray-400 flex items-center justify-center flex-wrap">
          <Link href={`/author/${data.author}`}>
            <span>{data.author}</span>
          </Link>
          <div className="dot" />
          <span>{formatDate(data.date)}</span>
          {data.tags && data.tags.length > 0 && (
            <div className="flex gap-2 ml-2 flex-wrap">
              {data.tags.map((tag: any, index: number) => (
                <span
                  key={index}
                  className="text-light-text-3 dark:text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col w-full max-w-[780px] items-center justify-center gap-6 md:gap-14 pb-24">
        <div className="w-full max-w-[780px] prose prose-slate dark:prose-invert md:prose-lg text-[#333333] dark:text-[#F0F0F0]">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              img: ({ alt, src }) => (
                <Image
                  alt={alt || ''}
                  src={src || ''}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  width={780}
                  height={475}
                  className="mx-auto rounded-lg !mb-[4px]"
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
  );
};

export default PostDetail;
