import PageIntro from '@/components/PageIntro';
import CardList from '@/components/CardList';
import { getPosts } from '@/lib/posts';
import { transformPostsToCards } from '@/utils/posts';

const PostsPage: React.FC = () => {
  const posts: Post[] = getPosts();
  const cards = transformPostsToCards(posts);

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 px-5 max-w-screen-xl mx-auto w-full mb-24">
      <PageIntro
        title="Blog"
        description="팀 육두문자의 블로그는 습득한 기술, 개발 문화, 팀원들의 이야기를 들려드립니다."
      />
      <CardList cards={cards} />
    </main>
  );
};

export default PostsPage;
