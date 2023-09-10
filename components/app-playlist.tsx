'use client';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, Button } from '@nextui-org/react';
import { Play, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useApp } from '@/app/AppProvider';
import { playlist } from '@/data/playlist.json';

const variants = {
  open: {
    x: 0,
  },
  closed: {
    x: '110%',
  },
} as any;

function PlaylistCard({ track }: any) {
  return (
    <div className='group flex w-full select-none gap-2 rounded-md p-2 first:mt-14 hover:bg-danger/10 hover:backdrop-blur-2xl'>
      <Avatar
        draggable='false'
        radius='sm'
        size='lg'
        src={track.cover}
        className='flex-shrink-0'
      />
      <div className='flex flex-col justify-center'>
        <h2 className='font-medium'>{track.name}</h2>
        <span className='text-sm text-gray-500 transition-all duration-200 group-hover:text-gray-300'>
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

export function AppPlaylist({ open }: any) {
  const { playlistState, togglePlaylist } = useApp() as any;
  return (
    <AnimatePresence initial={false}>
      <motion.div
        animate={playlistState ? 'open' : 'closed'}
        initial={['closed']}
        variants={variants}
        className='fixed bottom-[5.5rem] end-2 left-2 top-2 z-50 flex w-auto overflow-hidden rounded-md bg-black/80 backdrop-blur md:left-[unset] md:w-96 lg:bottom-2'
      >
        <div className='relative flex flex-1'>
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
