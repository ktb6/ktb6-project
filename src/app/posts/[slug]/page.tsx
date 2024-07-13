import fs from 'fs';
import path from 'path';
import PostDetail from '@/components/PostDetail';
import MainContainer from '@/components/MainContainer';
import { getPost } from '@/lib/posts';

// 정적 생성을 위해 여전히 generateStaticParams를 사용하여 경로를 미리 정의할 수 있습니다
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

export default function Post({ params }: PostProps) {
  const { data, content } = getPost(params.slug);

  return (
    <MainContainer>
      <PostDetail data={data} content={content} />
    </MainContainer>
  );
}
