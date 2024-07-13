import CardList from '@/components/CardList';
import MainContainer from '@/components/MainContainer';
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
    <MainContainer>
      <PageIntro title={slug} description={memberData?.bio} />
      <CardList cards={cards} />
    </MainContainer>
  );
};

export default AuthorPage;
