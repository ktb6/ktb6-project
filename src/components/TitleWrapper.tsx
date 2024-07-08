import React from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
};

export const TitleWrapper = ({ title, children }: Props) => {
  return (
    <div className="container mx-auto p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center">{title}</h1>
      <div>{children}</div>
    </div>
  );
};
