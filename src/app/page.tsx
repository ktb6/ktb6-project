import CardList from '@/components/CardList';
import { getPosts } from '@/lib/posts';
import { transformPostsToCards } from '@/utils/posts';

export default function Home() {
  const posts = getPosts();
  const cards = transformPostsToCards(posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 max-w-screen-xl mx-auto w-full mt-8">
      <CardList cards={cards} defaultView="list" hideViewSelect />
    </main>
  );
}
