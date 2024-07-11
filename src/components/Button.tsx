import React from 'react';

type Props = {
  selected?: boolean;
  handleClick?: () => void;
  children: React.ReactNode;
};

const Button = ({ selected, handleClick, children }: Props) => {
  return (
    <button
      type="button"
      className={`px-4 py-2 rounded-md transition-colors duration-300 flex items-center ${
        selected
          ? 'bg-gradient-to-r from-slate-700 to-slate-600 text-white hover:from-slate-700 hover:to-slate-600'
          : 'bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 hover:from-gray-800 hover:to-gray-700'
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
