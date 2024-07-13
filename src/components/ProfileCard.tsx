import Link from 'next/link';

type Props = {
  member: MemberType;
};

type ListProps = {
  profile: ProfileDataType;
};

export const ProfileCardList = ({ profile }: ListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {profile.team.members.map((member) => (
        <ProfileCard member={member} key={member.nickname} />
      ))}
    </div>
  );
};

export const ProfileCard = ({ member }: Props) => {
  return (
    <Link href={`/author/${member.nickname}`}>
      <div className="bg-gradient-to-r from-zinc-700 to-zinc-600 shadow-lg rounded-lg p-6 hover-3d">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">
          {member.role} 개발자
        </h2>
        <p className="text-gray-300 mb-1">
          <span className="font-bold">이름:</span> {member.nickname}
        </p>
        <p className="text-gray-300 mb-1">
          <span className="font-bold">주요 기술:</span>{' '}
          {member.skills.join(', ')}
        </p>
        <p className="text-gray-300">
          <span className="font-bold">소개:</span> {member.bio}
        </p>
      </div>
    </Link>
  );
};
