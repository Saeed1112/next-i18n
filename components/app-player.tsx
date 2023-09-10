'use client';
import { Avatar, Button } from '@nextui-org/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useApp } from '@/app/AppProvider';
import { Heart, Play, SkipBack, SkipForward } from 'lucide-react';

const variants = {
  open: {
    '--right': '25rem',
  },
  closed: {
    '--right': 0,
  },
} as any;

function PlayerControls() {
  return (
    <div className='flex flex-1 flex-shrink-0  items-center justify-end gap-5  sm:justify-center'>
      <Button
        variant={'flat'}
        isIconOnly
        radius='full'
        size={'sm'}
        className='hidden sm:flex'
      >
        <SkipBack className='fill-gray-50' size={14} />
      </Button>
      <Button
        isIconOnly
        variant={'flat'}
        radius='full'
        className='justify-self-end'
      >
        <Play className='fill-gray-50' size={18} />
      </Button>
      <Button
        isIconOnly
        radius='full'
        variant={'flat'}
        size={'sm'}
        className='hidden sm:flex'
      >
        <SkipForward className='fill-gray-50' size={14} />
      </Button>
    </div>
  );
}

function PlayerSeeker() {
  return (
    <div className='h-1 rounded-t-md bg-primary/30'>
      <div className='relative flex h-full w-1/3 rounded-t-md bg-primary'>
        <div className='ease-[cubic-bezier(1,-0.4,0,1.4)] absolute -end-2 -top-1.5 h-4 scale-75 select-none rounded-md bg-primary px-2 text-xs font-medium transition-all duration-200 group-hover:scale-100'>
          00:32
        </div>
      </div>
    </div>
  );
}

function PlayerTrack() {
  return (
    <div className='flex max-w-[16rem] flex-shrink items-center gap-2'>
      <Avatar
        radius='sm'
        size='lg'
        className='flex-shrink-0'
        src={'/images/the-weeknd.webp'}
      />
      <div className='flex flex-col justify-center overflow-hidden'>
        <h4 className='truncate text-base font-medium'>
          You (Acoustic) as fdasda sdas fasf asdfas f
        </h4>
        <span className='truncate text-xs text-gray-400'>
          Regard, Troye Sivan & Tate McRae
        </span>
      </div>
    </div>
  );
}

const TrackOptions = () => {
  return (
    <div className='flex items-center gap-5'>
      <Button
        variant={'light'}
        isIconOnly
        radius='full'
        className='hidden sm:flex'
      >
        <Heart size={18} />
      </Button>
    </div>
  );
};

export function AppPlayer() {
  const { playlistState } = useApp() as any;

  return (
    <AnimatePresence initial={false}>
      <motion.div
        animate={playlistState ? 'open' : 'closed'}
        initial={['open']}
        variants={variants}
        transition={{ type: 'tween' }}
        className='group fixed inset-2 top-[unset] z-50 flex flex-col justify-center rounded-md bg-black/80 fill-black/80 backdrop-blur lg:right-[--right]'
      >
        <PlayerSeeker />
        <div className='flex flex-1 gap-2 p-2'>
          <PlayerTrack />
          <PlayerControls />
          <TrackOptions />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
