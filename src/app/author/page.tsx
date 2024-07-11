import PageIntro from '@/components/PageIntro';

const AuthorPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 px-5 max-w-screen-xl mx-auto w-full mb-24">
      <PageIntro
        title="Author"
        description="육두문자의 이야기를 만들어 가는 사람들"
      />
    </main>
  );
};

export default AuthorPage;
