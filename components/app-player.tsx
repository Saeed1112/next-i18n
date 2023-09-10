'use client';
import { Avatar } from '@nextui-org/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useApp } from '@/app/AppProvider';

const variants = {
  open: {
    '--right': '25rem',
  },
  closed: {
    '--right': 0,
  },
} as any;

export function AppPlayer() {
  const { playlistState } = useApp() as any;

  return (
    <AnimatePresence initial={false}>
      <motion.div
        animate={playlistState ? 'open' : 'closed'}
        initial={['open']}
        variants={variants}
        transition={{ type: 'tween' }}
        className='fixed inset-2 top-[unset] z-50 flex items-center justify-center rounded-b-md bg-black/80 fill-black/80 p-2 backdrop-blur lg:right-[--right]'
      >
        <div className='absolute -top-1 left-0 right-0 h-1 overflow-hidden rounded-t-full bg-neutral-600'>
          <div className='relative h-full w-1/3 bg-primary'></div>
        </div>
        <div className='flex flex-1 gap-2'>
          <Avatar radius='sm' size='lg' src={'/images/the-weeknd.webp'} />
          <div className='flex flex-col justify-center'>
            <h4 className='text-base font-medium'>Out of time</h4>
            <span className='text-xs text-gray-400'>The Weeknd</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
