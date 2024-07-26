import React from 'react';

type Props = {
  sections: React.ReactNode[];
};

type ConvertedSection = {
  id: string;
  header: string;
  description: React.ReactNode;
};

type CardProps = {
  sections: ConvertedSection[];
};

export const renderDescription = (description: DescriptionItem[]) => {
  return description.map((item) => {
    if (item.type === 'p') {
      return (
        <p key={item.id} className="text-light-text dark:text-dark-text-1 mb-4">
          {item.text}
        </p>
      );
    } else if (item.type === 'ul') {
      return (
        <ul
          key={item.id}
          className="list-disc list-inside text-light-text-3 dark:text-dark-text-3 mb-4"
        >
          {(item.text as string[]).map((text, index) => (
            <li key={`${item.id}-li-${index}`}>{text}</li>
          ))}
        </ul>
      );
    }
    return null;
  });
};

export const AboutSectionCard = ({ sections }: CardProps) => {
  return (
    <div className="bg-gradient-to-r from-zinc-300 to-zinc-400 dark:from-zinc-700 dark:to-zinc-600 shadow-lg rounded-lg p-6 flex flex-col gap-2 max-w-[740px]">
      {sections.map((section) => (
        <div key={`${section.id}-card`}>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">
            {section.header}
          </h3>
          {section.description}
        </div>
      ))}
    </div>
  );
};

const AboutSections = ({ sections }: Props) => {
  return <div className="flex flex-col gap-8">{sections}</div>;
};

export default AboutSections;
