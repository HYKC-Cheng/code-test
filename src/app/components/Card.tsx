'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface footerTag {
  hour?: number;
  course?: number;
  completed?: string;
}

export interface CardProps {
  bg: string;
  bgHover: string;
  line?: string;
  title?: string;
  tag?: string[];
  description?: string;
  footer?: footerTag | React.ReactNode;
}

const footerRender = (footer: CardProps['footer']) => {
  if (!footer) {
    return null;
  }

  if (React.isValidElement(footer)) {
    return footer;
  }

  const { hour, course, completed } = footer as footerTag;
  return (
    <div className='footer color-card-footer flex items-center justify-between h-[35px]'>
      <div className='flex justify-center items-center'>
        {hour && (
          <div className='flex justify-center items-center mr-[20px]'>
            <Image className='mr-[5px]' width={14} height={14} src='/card-icon-1.png' alt='' />
            <span className='text-[12px] color-card-footer font-neuemachina'>{`${hour} Hour`}</span>
          </div>
        )}
        {course && (
          <div className='flex justify-center items-center'>
            <Image className='mr-[5px]' width={14} height={14} src='/card-icon-2.png' alt='' />
            <span className='text-[12px] color-card-footer font-neuemachina'>{`${course} Course`}</span>
          </div>
        )}
      </div>
      {completed && (
        <div className='w-[140px] h-[36px] rounded-[40px] flex justify-center items-center bg-[#2a2a2a]'>
          <Image className='mr-[5px]' width={20} height={20} src='/card-icon-3.svg' alt='' />
          <span className='text-[10px] color-card-green'>{`${completed} COMPLETED`}</span>
        </div>
      )}
    </div>
  );
};

const Card = (props: CardProps) => {
  const { bg, bgHover, line, title, tag, description, footer } = props || {};

  const [ishover, setIsHover] = useState(false);

  return (
    <div className='relative'>
      <div
        className='w-[416px] h-[278px] bg-cover bg-center p-[30px] flex flex-col justify-between relative z-10 transition-transform'
        style={{ backgroundImage: `url(${bg})`, transform: `translate(${ishover ? '4px, -4px' : 0})` }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div>
          {/* 头部线条 */}
          {line && (
            <div className='heard-line w-[46px] h-[4px] rounded-[11px] mb-[25px]' style={{ background: line }} />
          )}
          {/* 标题 */}
          {title && <div className='title color-card-title text-[16px] mb-[15px] font-bold'>{title}</div>}
          {/* 标签 */}
          {tag && (
            <div className='tag color-card-tag mb-[15px] flex gap-[10px]'>
              {tag.map((item) => (
                <div
                  key={item}
                  className='w-[53px] h-[18px] rounded-[20px] flex justify-center items-center border text-[9px] mb-[10px]'
                >
                  {item}
                </div>
              ))}
            </div>
          )}

          {/* 描述 */}
          {description && <div className='description color-card-description text-[12px] max-w-[336px]'>{description}</div>}
        </div>
        {/* 底部图标 */}
        <>{footerRender(footer)}</>
      </div>
      {/* 背景底色hover图 */}
      <Image
        className='absolute left-0 top-0 z-0'
        style={{ opacity: ishover ? 1 : 0 }}
        width={416}
        height={278}
        src={bgHover}
        alt=''
      />
    </div>
  );
};

export default Card;
