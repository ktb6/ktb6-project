import CardList from '@/components/CardList';
import PageIntro from '@/components/PageIntro';
import ProfileData from '@/assets/data/profile.json';

const AuthorPage = () => {
  const profileData = ProfileData;

  const cards = profileData.team.members.map((member) => ({
    slug: member.nickname,
    title: member.nickname,
    author: member.nickname,
    description: member.bio,
    link: `/author/${member.nickname}`,
    image: member.image,
  }));

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 px-5 max-w-screen-xl mx-auto w-full mb-24">
      <PageIntro
        title="Author"
        description="육두문자의 이야기를 만들어 가는 사람들"
      />
      <CardList cards={cards} />
    </main>
  );
};

export default AuthorPage;
