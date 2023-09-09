'use client';
import { Avatar } from '@nextui-org/react';
import { AnimatePresence, motion } from 'framer-motion';

export function AppPlayer({ open }: any) {
  const variants = {
    open: {
      marginInlineEnd: '24.5rem',
    },
    closed: {
      marginInlineEnd: 0,
    },
  };
  return (
    <AnimatePresence initial={false}>
      <motion.div
        animate={open ? 'open' : 'closed'}
        initial={['open']}
        variants={variants}
        className='fixed inset-2 top-[unset] z-50 flex items-center justify-center rounded-md bg-black/80 fill-black/80 p-2 backdrop-blur'
      >
        <div className='absolute bottom-full h-8 w-96 rounded-t-xl bg-[inherit] backdrop-blur'>
          <svg
            className='absolute -left-6 top-2 h-6 w-6'
            xmlns='http://www.w3.org/2000/svg'
            width='128.003'
            height='128'
            viewBox='0 0 128.003 128'
          >
            <path
              className='fill-[inherit]'
              id='Path_1'
              data-name='Path 1'
              d='M97,96c32-32,31-96,31-96V128H0S65,128,97,96Z'
            />
          </svg>

          <svg
            className='absolute -right-6 top-2 h-6 w-6 scale-x-[-1]'
            xmlns='http://www.w3.org/2000/svg'
            width='128.003'
            height='128'
            viewBox='0 0 128.003 128'
          >
            <path
              className='fill-[inherit]'
              id='Path_1'
              data-name='Path 1'
              d='M97,96c32-32,31-96,31-96V128H0S65,128,97,96Z'
            />
          </svg>

          <div className='absolute inset-0 h-16'></div>
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
