import ProfileData from '@/assets/data/profile.json';

export const findMemberByNickname = (nickname: string) => {
  const profileData = ProfileData;
  return profileData.team.members.find(
    (member: any) => member.nickname === nickname,
  );
};
