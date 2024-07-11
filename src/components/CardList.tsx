'use client';
import React, { useState } from 'react';
import PostCard from './Card';
import Button from './Button';

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
        <div className="flex justify-end mb-4 gap-2">
          <Button
            selected={view === 'grid'}
            handleClick={() => handleViewChange('grid')}
          >
            <>
              <img
                src="/images/icon_grid.svg"
                alt="Grid View"
                className="w-5 h-5 mr-2"
              />
              Grid
            </>
          </Button>
          <Button
            selected={view === 'list'}
            handleClick={() => handleViewChange('list')}
          >
            <>
              <img
                src="/images/icon_list.svg"
                alt="Grid View"
                className="w-5 h-5 mr-2"
              />
              List
            </>
          </Button>
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
