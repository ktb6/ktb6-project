import CardList from '@/components/CardList';
import PageIntro from '@/components/PageIntro';
import { getPostsByAuthor } from '@/lib/posts';
import { transformPostsToCards } from '@/utils/posts';
import { findMemberByNickname } from '@/utils/profile';

const AuthorPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const posts = getPostsByAuthor(slug);
  const cards = transformPostsToCards(posts);
  const memberData = findMemberByNickname(slug);

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 px-5 max-w-screen-xl mx-auto w-full">
      <PageIntro title={slug} description={memberData?.bio} />
      <CardList cards={cards} />
    </main>
  );
};

export default AuthorPage;
