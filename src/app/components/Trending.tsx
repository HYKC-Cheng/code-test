'use client';

import React, { useState } from 'react';
import Card, { CardProps } from './Card';
import Image from 'next/image';

const Content = ({ label, value }: { label: string; value: string }) => (
  <div className='flex justify-between items-center w-full border-b border-[#282828] pb-[2px] mt-[15px]'>
    <div className='text-[12px] color-card-description'>{label}</div>
    <div className='text-[14px] color-card-title font-neuemachina font-light'>{value}</div>
  </div>
);

const cardData: CardProps[] = [
  {
    bg: '/card-bg-1.svg',
    bgHover: '/card-bg-hover-1.svg',
    line: 'linear-gradient(180deg, #38C1A5 -0.01%, #0891D5 99.99%)',
    title: 'Introduction to programming',
    tag: ['Beginner'],
    description: 'This course covers the most basic concepts in programming using Solidity as an example.',
    footer: {
      hour: 35,
      course: 5,
      completed: '45%',
    },
  },
  {
    bg: '/card-bg-2.svg',
    bgHover: '/card-bg-hover-2.svg',
    title: 'Moonshot 2023 Summer Hackathon',
    tag: ['All Tracks', 'Solidity', 'ZK'],
    footer: (
      <div>
        {[
          { label: 'Signup', value: '4/15 - 6/15' },
          { label: 'Event', value: '6/15 - 7/15' },
          { label: 'Grant size', value: '200K' },
        ].map(({ label, value }) => (
          <Content key={label} label={label} value={value} />
        ))}
      </div>
    ),
  },
  {
    bg: '/card-bg-3.svg',
    bgHover: '/card-bg-hover-3.svg',
    line: 'linear-gradient(180deg, #D9E313 0%, #3CBC34 100%)',
    title: 'Web 3.0 Programming Basics',
    tag: ['Beginner'],
    description:
      'Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure.',
    footer: {
      hour: 35,
      course: 5,
    },
  },
  {
    bg: '/card-bg-4.svg',
    bgHover: '/card-bg-hover-4.svg',
    line: 'linear-gradient(180deg, #E0AD38 -0.01%, #EB3E1C 93.39%)',
    footer: (
      <div>
        <Image className='absolute left-[15px] top-[15px]' width={380} height={238} src='/card-img.svg' alt='' />
        <div className='absolute left-[25px] top-[175px] text-[16px] color-card-title font-bold'>What is Bitcoin</div>
        <div className='absolute left-[250px] bottom-[20px] flex justify-center items-center'>
          <Image className='mr-[5px]' width={14} height={14} src='/card-icon-1.png' alt='' />
          <span className='text-[12px] color-card-footer font-neuemachina'>35 Hour</span>
        </div>
      </div>
    ),
  },
];

const Trending: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className='text-[20px] mt-[35px] mb-[35px] color-title font-book'>{'< / Trending Now >'}</div>
      <div className='w-full overflow-hidden relative'>
        {/* cards */}
        <div
          className='card-container flex gap-[50px] transition-transform'
          style={{ transform: `translate(-${currentIndex * 466}px)` }}
        >
          {cardData.map((item) => (
            <div key={item.bg} className='flex-shrink-0'>
              <Card {...item} />
            </div>
          ))}
        </div>

        {/* next button */}
        {currentIndex + 3 < cardData.length && (
          <div className='absolute right-[-126px] top-1/2 transform -translate-y-1/2 w-[190px] h-[378px] bg-button-wrapper'>
            <div
              className='w-[48px] h-[48px] absolute left-[16px] top-1/2 transform -translate-y-1/2 rounded-[48px] border border-[#676767] flex justify-center items-center hover:bg-[#303030] cursor-pointer'
              onClick={() => setCurrentIndex((pre) => pre + 1)}
            >
              <Image width={11} height={11} src='/right-icon.svg' alt='' />
            </div>
          </div>
        )}

        {/* pre button */}
        {currentIndex > 0 && (
          <div className='absolute left-[-126px] top-1/2 transform -translate-y-1/2 w-[190px] h-[378px] bg-button-wrapper rotate-180'>
            <div
              className='w-[48px] h-[48px] absolute left-[16px] top-1/2 transform -translate-y-1/2 rounded-[48px] border border-[#676767] flex justify-center items-center hover:bg-[#303030] cursor-pointer'
              onClick={() => setCurrentIndex((pre) => pre - 1)}
            >
              <Image width={11} height={11} src='/right-icon.svg' alt='' />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Trending;
