import AboutData from '@/assets/data/about.json';
import ProfileData from '@/assets/data/profile.json';
import MainContainer from '@/components/MainContainer';
import { ProfileCardList } from '@/components/ProfileCard';
import { TitleWrapper } from '@/components/TitleWrapper';
import AboutSections, {
  AboutSectionCard,
  renderDescription,
} from '@/components/AboutSections';

const aboutData = AboutData;
const profileData = ProfileData;

const renderSections = () => [
  <TitleWrapper
    key={aboutData.data[0].id}
    title={aboutData.data[0].title}
    description={aboutData.data[0].description}
  />,
  <TitleWrapper key={aboutData.data[1].id} title={aboutData.data[1].title}>
    <ProfileCardList profile={profileData} />
  </TitleWrapper>,
  ...aboutData.data.slice(2).map((about) => (
    <TitleWrapper title={about.title} key={about.id}>
      {about.sections && (
        <AboutSectionCard
          sections={about.sections.map((section) => ({
            id: section.id,
            header: section.header,
            description: renderDescription(
              section.description as DescriptionItem[],
            ),
          }))}
        />
      )}
    </TitleWrapper>
  )),
];

const AboutPage = () => {
  return (
    <MainContainer>
      <AboutSections sections={renderSections()} />
    </MainContainer>
  );
};

export default AboutPage;
