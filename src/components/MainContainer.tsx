import React from 'react';

type Props = {
  children: React.ReactNode;
};

const MainContainer = ({ children }: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 max-w-screen-xl mx-auto w-full my-8 text-light-text dark:text-dark-text">
      {children}
    </main>
  );
};

export default MainContainer;
