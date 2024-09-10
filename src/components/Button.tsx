import React from 'react';

type Props = {
  selected?: boolean;
  handleClick?: () => void;
  children: React.ReactNode;
  style?: 'default' | 'none';
};

const Button = ({
  selected,
  handleClick,
  children,
  style = 'default',
}: Props) => {
  return (
    <button
      type="button"
      className={`px-4 py-2 rounded-md transition-colors duration-300 flex items-center ${
        style == 'default'
          ? selected
            ? 'bg-gradient-to-r dark:from-zinc-500 dark:to-zinc-400 dark:text-white hover:from-zinc-500 hover:to-zinc-400'
            : 'bg-gradient-to-r dark:from-zinc-700 dark:to-zinc-600 dark:text-gray-300 hover:from-zinc-600 hover:to-zinc-500'
          : 'bg-gradient-to-r hover:from-slate-300 hover:to-slate-400 dark:hover:from-zinc-700 dark:hover:to-zinc-600'
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
