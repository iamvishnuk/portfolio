'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Card, CardHeader } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { ChevronRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: readonly string[];
}

const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };
  return (
    <Link
      href={href || '#'}
      className='block cursor-pointer'
      onClick={handleClick}
    >
      <Card className='flex'>
        <div className='flex-none'>
          <Avatar className='bg-muted-background m-auto size-12 border dark:bg-foreground'>
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className='object-contain'
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className='group ml-4 flex-grow flex-col items-center'>
          <CardHeader>
            <div className='flex items-center justify-between gap-x-2 text-base'>
              <h3 className='inline-flex items-center justify-center text-xs font-semibold leading-none sm:text-sm'>
                {title}
                {badges && (
                  <span className='inline-flex gap-x-1'>
                    {badges.map((badge, index) => (
                      <Badge
                        variant='secondary'
                        className='align-middle text-xs'
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    'size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
                    isExpanded ? 'rotate-90' : 'rotate-0'
                  )}
                />
              </h3>
              <div className='text-right text-xs tabular-nums text-muted-foreground sm:text-sm'>
                {period}
              </div>
            </div>
            {subtitle && <div className='font-sans text-xs'>{subtitle}</div>}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? 'auto' : 0
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1]
              }}
              className='mt-2 text-xs sm:text-sm'
            >
              <ul className='list-disc space-y-2'>
                {description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};

export default ResumeCard;
