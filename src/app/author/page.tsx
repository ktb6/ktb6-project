import CardList from '@/components/CardList';
import PageIntro from '@/components/PageIntro';
import ProfileData from '@/assets/data/profile.json';
import MainContainer from '@/components/MainContainer';

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
    <MainContainer>
      <PageIntro
        title="Author"
        description="육두문자의 이야기를 만들어 가는 사람들"
      />
      <CardList cards={cards} />
    </MainContainer>
  );
};

export default AuthorPage;
