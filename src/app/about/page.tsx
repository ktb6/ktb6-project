import profileData from '@/assets/data/profile.json';
import { TitleWrapper } from '@/components/TitleWrapper';

const About = () => {
  const profile = profileData;

  return (
    <div className="container mx-auto p-4 flex flex-col gap-8 max-w-[1200px]">
      <TitleWrapper title=" 안녕하세요, 우리는 카카오테크 부트캠프 1기 6조 육두문자입니다!">
        <span className="text-2xl">
          우리 팀은 지속적으로 새로운 기술과 지식을 습득하고, 이를 팀원들과
          공유함으로써 함께 성장하는 것을 목표로 합니다.
        </span>
      </TitleWrapper>
      <TitleWrapper title="팀원 소개">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.team.members.map((member, index) => (
            <div key={index} className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-2">
                {member.role} 개발자
              </h2>
              <p className="text-gray-300 mb-1">
                <span className="font-bold">이름:</span> {member.name} (
                {member.nickname})
              </p>
              <p className="text-gray-300 mb-1">
                <span className="font-bold">주요 기술:</span>{' '}
                {member.skills.join(', ')}
              </p>
              <p className="text-gray-300">
                <span className="font-bold">소개:</span> {member.bio}
              </p>
            </div>
          ))}
        </section>
      </TitleWrapper>
      <TitleWrapper title="우리가 하는 일">
        <section className="bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col gap-2 max-w-[740px]">
          <div>
            <h3 className="text-2xl font-semibold mb-2">프로젝트</h3>
            <p className="text-gray-300 mb-4">
              우리는 현재 AI 솔루션을 클라우드에 탑재한 기발하고 창의적인
              서비스를 제작하는 것을 목표로 하고 있습니다. 이 프로젝트는 사용자
              경험을 혁신하고, 데이터 분석을 통해 유용한 인사이트를 제공하는 AI
              기반 플랫폼을 개발하는 데 중점을 두고 있습니다.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">기술 사용 사례</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>
                프론트엔드: React와 Next.js를 사용하여 사용자 친화적인
                인터페이스를 구축합니다.
              </li>
              <li>
                백엔드: Spring, Nest.js, FastAPI를 통해 견고한 서버 측 로직을
                구현합니다.
              </li>
              <li>
                클라우드: AWS, Kakao Cloud를 활용하여 확장성과 안정성을 보장하는
                클라우드 인프라를 구축합니다.
              </li>
              <li>
                AI: Python, PyTorch를 사용하여 머신러닝 및 딥러닝 모델을
                개발하고 배포합니다.
              </li>
              <li>
                데브옵스: Docker와 Kubernetes를 통해 애플리케이션의 컨테이너화
                및 오케스트레이션을 관리합니다.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">문제 해결 방법</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>
                문제 정의: 문제의 본질을 정확히 파악하고 명확하게 정의합니다.
              </li>
              <li>
                분석 및 계획: 다양한 접근 방법을 검토하고, 최적의 솔루션을 찾기
                위한 계획을 세웁니다.
              </li>
              <li>
                협업: 팀원 간의 긴밀한 협업을 통해 다양한 아이디어를 도출하고,
                최상의 해결책을 선택합니다.
              </li>
              <li>
                실행: 계획된 솔루션을 신속하고 정확하게 구현하며, 각 단계에서
                피드백을 반영하여 개선합니다.
              </li>
              <li>
                검증 및 개선: 해결된 문제를 검증하고, 필요에 따라 지속적인 개선
                작업을 수행합니다.
              </li>
            </ul>
          </div>
        </section>
      </TitleWrapper>
      <TitleWrapper title="일하는 방식">
        <section className="bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col gap-2 max-w-[740px]">
          <div>
            <h3 className="text-2xl font-semibold mb-2">협업 도구</h3>
            <p className="text-gray-300 mb-4">
              우리 팀은 GitHub, Jira, Discord를 사용하여 효율적인 협업 환경을
              구축하고 있습니다.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">작업 프로세스</h3>
            <p className="text-gray-300 mb-4">
              우리는 애자일 스크럼 방식을 채택하여 작업을 진행합니다. 데일리
              스크럼을 통해 진행 상황을 공유하고, 스프린트 단위로 목표를
              설정하며, 코드 리뷰 문화를 통해 코드 품질을 높이고 있습니다.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">커뮤니케이션</h3>
            <p className="text-gray-300 mb-4">
              팀 내외부와의 원활한 소통을 위해 Discord와 Zep을 사용하고
              있습니다. 이를 통해 실시간 커뮤니케이션과 협업을 효과적으로
              진행하고 있습니다.
            </p>
          </div>
        </section>
      </TitleWrapper>
    </div>
  );
};

export default About;
