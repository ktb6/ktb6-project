type ProfileDataType = {
  team: {
    name: string;
    members: MemberType[];
  };
};

type MemberType = {
  role: string;
  nickname: string;
  skills: string[];
  bio: string;
};

type DescriptionItem = {
  id: string;
  type: 'p' | 'ul';
  text: string | string[];
};

type Section = {
  id: string;
  header: string;
  description: DescriptionItem[];
};

type AboutData = {
  title: string;
  description?: string;
  sections?: Section[];
};

type AboutDataType = {
  data: AboutData[];
};

type MenuDataType = {
  data: { name: string; link: string }[];
};

type MetaDataType = {
  service_name: string;
  service_description: string;
  service_tags: string[];
  version: string;
  author: string;
  contact_email: string;
  repository_url: string;
  license: string;
  last_updated: string;
  seo: {
    title: string;
    meta_description: string;
    keywords: string[];
    canonical_url: string;
    robots: string;
    image: string;
  };
  social_media: {
    open_graph: {
      title: string;
      type: string;
      url: string;
      image: string;
      description: string;
      site_name: string;
    };
  };
};
