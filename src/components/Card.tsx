import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/utils/date';

interface CardProps {
  card: Card;
  view: 'grid' | 'list';
}

const Card: React.FC<CardProps> = ({ card, view }) => {
  const isListView = view === 'list';

  const imageSrc =
    card.image && card.image.trim() !== ''
      ? card.image
      : '/images/default-thumbnail.png';

  return (
    <Link href={card.link ? card.link : `/posts/${card.slug}`} key={card.slug}>
      <li
        className={`flex ${isListView ? 'flex-row max-w-[780px] mx-auto items-center' : 'flex-col'} rounded-lg items-start  p-2 sm:p-4 hover:bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700 dw-full h-full`}
      >
        <div
          className={`relative ${isListView ? 'w-1/3 h-auto order-last' : 'w-full order-first'}`}
          style={{ aspectRatio: '3 / 2' }} // 3:2 비율을 유지
        >
          <Image
            src={imageSrc}
            alt={card.title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={`flex flex-col ${isListView ? 'w-2/3 pr-4' : 'mt-2'}`}>
          <span className="text-[14px] text-light-text-blue dark:text-blue-400 my-2">
            {card.category}
          </span>
          <span className="text-lg md:text-xl mb-2 line-clamp-2">
            {card.title}
          </span>
          {isListView && (
            <p className="mb-2 line-clamp-2">{card.description}</p>
          )}
          <div className="flex items-center text-light-text-4 dark:text-slate-400">
            <p>{card.author}</p>
            {card.date && (
              <>
                <div className="dot" />
                <p>{formatDate(card.date)}</p>
              </>
            )}
          </div>
        </div>
      </li>
    </Link>
  );
};

export default Card;
