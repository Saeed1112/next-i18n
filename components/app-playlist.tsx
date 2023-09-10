'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, Button } from '@nextui-org/react';
import { ChevronLeft, Play, X } from 'lucide-react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useApp } from '@/app/AppProvider';
import { playlist } from '@/data/playlist.json';
import { cn } from '@/lib/utils';

const variants = {
  open: {
    x: 0,
  },
  closed: {
    x: '100%',
  },
} as Variants;

export function AppPlaylist() {
  const { playlistState, togglePlaylist } = useApp() as any;
  return (
    <AnimatePresence initial={false}>
      <motion.div
        transition={{ type: 'tween' }}
        animate={playlistState ? 'open' : 'closed'}
        initial={['closed']}
        variants={variants}
        className='fixed bottom-[5.75rem] end-2 left-2 top-2 z-50 flex w-auto rounded-md bg-black/80 backdrop-blur sm:left-[unset] sm:w-96 lg:bottom-2'
      >
        <div
          className='absolute -left-5 bottom-0 top-0 flex w-5 items-center justify-center'
          onClick={() => togglePlaylist()}
        >
          <div className='relative flex h-12 w-full cursor-pointer items-center justify-center rounded-s-lg bg-black/80 fill-black/80'>
            <SvgShape className={'-top-3'} />
            <SvgShape className='-bottom-3 -rotate-90' />
            <ChevronLeft
              strokeWidth={5}
              className={cn('w-4 transition-all duration-300', {
                'rotate-180': playlistState,
              })}
            />
          </div>
        </div>
        <div className='relative flex w-full flex-1 flex-col'>
          <ScrollArea className='absolute inset-0 w-full rounded-md'>
            <div className='pointer-events-none absolute left-0 right-0 top-0 z-30 flex w-full items-center bg-gradient-to-b from-black via-black to-transparent px-5 py-4'>
              <span>Playlist</span>
              <Button
                onClick={togglePlaylist}
                variant='light'
                radius='full'
                isIconOnly
                className='pointer-events-auto ms-auto'
              >
                <X size='14' />
              </Button>
            </div>
            <div className='flex flex-col px-5'>
              {playlist.map((_, index) => (
                <PlaylistCard key={index} track={_} />
              ))}
            </div>
            <div className='mb-16 mt-5 text-center text-xs font-medium text-gray-400'>
              Load more
            </div>
            <div className='pointer-events-none absolute bottom-0 left-0 right-0 z-30 h-16 bg-gradient-to-t from-black via-black to-transparent'></div>
          </ScrollArea>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function PlaylistCard({ track }: any) {
  return (
    <div className='group flex w-full select-none gap-2 rounded-md p-2 first:mt-14 hover:bg-default/10 hover:backdrop-blur-2xl'>
      <Avatar
        draggable='false'
        radius='sm'
        size='lg'
        src={track.cover}
        className='flex-shrink-0'
      />
      <div className='flex flex-col justify-center overflow-hidden'>
        <h2 className='line-clamp-2 font-medium'>{track.name}</h2>
        <span className='overflow-hidden truncate text-sm text-gray-500 transition-all duration-200 group-hover:text-gray-300'>
          {track.artist}
        </span>
      </div>

      <div className='ms-auto flex flex-col items-center justify-center gap-1'>
        <Button
          isIconOnly
          radius={'full'}
          className='mt-auto bg-danger'
          size={'sm'}
        >
          <Play size={14} className='fill-gray-50' />
        </Button>
        <span className='text-[0.65rem] text-gray-500'>03:22</span>
      </div>
    </div>
  );
}

function SvgShape({ className }: any) {
  return (
    <svg
      className={cn('absolute end-0 h-3 w-3', className)}
      xmlns='http://www.w3.org/2000/svg'
      width='45'
      height='45'
      viewBox='0 0 45 45'
    >
      <path
        className='fill-[inherit]'
        id='Path_1'
        data-name='Path 1'
        d='M33.589,33.222C44.84,21.972,45,0,45,0V45H0S22.339,44.472,33.589,33.222Z'
      />
    </svg>
  );
}
