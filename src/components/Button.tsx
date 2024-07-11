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
            ? 'bg-gradient-to-r from-slate-600 to-slate-400 text-white hover:from-slate-700 hover:to-slate-600'
            : 'bg-gradient-to-r from-slate-800 to-slate-700 text-gray-300 hover:from-slate-700 hover:to-slate-600'
          : 'bg-gradient-to-r hover:from-slate-800 hover:to-slate-700'
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
