'use client';
import Image from 'next/image';
import { DownloadCloud, ListEnd, ListMusic, Play } from 'lucide-react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { AppPlaylist } from '@/components/app-playlist';
import { AppPlayer } from '@/components/app-player';
import { AnimatePresence, motion } from 'framer-motion';

function LayoutBackground({ open }: any) {
  const variants = {
    open: {
      paddingRight: '24rem',
    },
    closed: {
      paddingRight: 0,
    },
  };
  return (
    <div className='fixed inset-0'>
      <Image
        src={'/images/the-weeknd.webp'}
        className='h-full w-full object-cover object-center'
        alt={'Background'}
        height={1028}
        width={2080}
      />
      <div className='absolute inset-0 bg-gradient-radial from-black/50 to-black backdrop-blur'></div>
    </div>
  );
}

function RecordCover() {
  return (
    <div className='relative aspect-square w-80 select-none'>
      <Image
        draggable={false}
        src={'/images/the-weeknd.webp'}
        className='pointer-events-none absolute h-full w-full scale-125 object-cover object-center opacity-80 blur-2xl'
        alt={'Background'}
        height={1028}
        width={2080}
      />
      <Image
        draggable={false}
        src={'/images/the-weeknd.webp'}
        className='relative h-full w-full rounded-md object-cover object-center'
        alt={'Background'}
        height={1028}
        width={2080}
      />
    </div>
  );
}

function TrackData() {
  return (
    <div className='flex flex-1 flex-col justify-center gap-3 selection:bg-black selection:text-gray-50'>
      <h2 className='text-6xl font-bold'>Feels Like Summer</h2>
      <h3 className='text-4xl font-semibold text-gray-200'>Childish Gambino</h3>
      <p className='line-clamp-5 max-w-sm text-sm text-gray-300'>
        You can feel it in the streets On a day like this, the heat It feel like
        summer I feel like summer I feel like summer You can feel it in the
        streets On a day like this, the heat I feel like summer She feel like
        summer This feel like summer I feel like summer
      </p>
    </div>
  );
}

function AddToPlaylist() {
  return (
    <Select
      placeholder='Add to playlist'
      labelPlacement='outside'
      className='max-w-[12rem]'
      isLoading
      startContent={<ListMusic className='stroke-gray-50' size={16} />}
    >
      {[
        'Dualipa Collection',
        'For sad times',
        'Nice tracks',
        'Reza Sadeghi',
        'Persian',
        'Rap',
        'Trash songs',
      ].map((animal) => (
        <SelectItem
          variant={'light'}
          startContent={<ListEnd size={14} />}
          key={animal}
          value={animal}
          className='font-mona-sans-kalameh'
        >
          {animal}
        </SelectItem>
      ))}
    </Select>
  );
}

export default function Home() {
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (playing) setTimeout(() => setPlaying(false), 4500);
  }, [playing]);
  return (
    <main className='relative max-h-screen'>
      <LayoutBackground open={playing} />
      <AppPlaylist open={playing} />
      <AnimatePresence>
        <motion.div className='relative flex min-h-screen w-full flex-col justify-center rounded-[inherit] py-16 pb-44'>
          <div className='flex flex-col items-center justify-center'>
            <div className='container flex flex-col px-5'>
              <div className='flex flex-wrap gap-5'>
                <RecordCover />
                <div className='flex flex-col gap-5'>
                  <TrackData />
                  <div className='flex flex-wrap items-center gap-2'>
                    <Button
                      onClick={() => setPlaying(true)}
                      color='danger'
                      isLoading={playing}
                      startContent={
                        playing || <Play className='stroke-gray-50' size={16} />
                      }
                    >
                      Play
                    </Button>

                    <Dropdown className='font-mona-sans-kalameh'>
                      <DropdownTrigger>
                        <Button
                          color='primary'
                          startContent={
                            <DownloadCloud
                              className=' stroke-gray-50'
                              size={16}
                            />
                          }
                        >
                          Download
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu variant='light' aria-label='Static Actions'>
                        <DropdownItem key='new'>Mp3 320 - 9.8MB</DropdownItem>
                        <DropdownItem key='new'>Mp3 128 - 4.4MB</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>

                    <AddToPlaylist />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <AppPlayer open={playing} />
    </main>
  );
}
