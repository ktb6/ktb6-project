import CardList from '@/components/CardList';
import MainContainer from '@/components/MainContainer';
import { getPosts } from '@/lib/posts';
import { transformPostsToCards } from '@/utils/posts';

export default function Home() {
  const posts = getPosts();
  const cards = transformPostsToCards(posts);

  return (
    <MainContainer>
      <CardList cards={cards} defaultView="list" hideViewSelect />
    </MainContainer>
  );
}
