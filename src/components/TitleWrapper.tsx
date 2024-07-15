import React from 'react';

type Props = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export const TitleWrapper = ({ title, description, children }: Props) => {
  return (
    <section className="container mx-auto p-2 md:p-6  flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center">
        {title}
      </h1>
      {description && (
        <span className="text-md sm:text-lg lg:text-xl text-gray-400">
          {description}
        </span>
      )}
      {children && <div>{children}</div>}
    </section>
  );
};
