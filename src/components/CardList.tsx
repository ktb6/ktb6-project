'use client';
import React, { useState } from 'react';
import PostCard from './Card';

interface CardListProps {
  cards: Card[];
  defaultView?: 'grid' | 'list';
  hideViewSelect?: boolean;
}

const CardList: React.FC<CardListProps> = ({
  cards,
  defaultView,
  hideViewSelect,
}) => {
  const [view, setView] = useState<'grid' | 'list'>(defaultView ?? 'grid');

  const handleViewChange = (newView: 'grid' | 'list') => {
    setView(newView);
  };

  const isGridView = view === 'grid';

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      {!hideViewSelect && (
        <div className="flex justify-end mb-4">
          <button
            type="button"
            className={`px-4 py-2 mr-2 rounded-md transition-colors duration-300 flex items-center ${
              view === 'grid'
                ? 'bg-blue-700 text-white hover:bg-blue-600'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            onClick={() => handleViewChange('grid')}
          >
            <img
              src="/images/icon_grid.svg"
              alt="Grid View"
              className="w-5 h-5 mr-2"
            />
            Grid
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-md transition-colors duration-300 flex items-center ${
              view === 'list'
                ? 'bg-blue-700 text-white hover:bg-blue-600'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            onClick={() => handleViewChange('list')}
          >
            <img
              src="/images/icon_list.svg"
              alt="List View"
              className="w-5 h-5 mr-2"
            />
            List
          </button>
        </div>
      )}
      <ul
        className={`${isGridView ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4' : 'flex flex-col gap-4'} p-0 m-0 list-none w-full`}
      >
        {cards.map((card) => (
          <PostCard card={card} key={card.slug} view={view} />
        ))}
      </ul>
    </div>
  );
};

export default CardList;
