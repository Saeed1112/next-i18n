'use client';
import Image from 'next/image';
import { DownloadCloud, Heart, ListEnd, ListMusic, Play } from 'lucide-react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { AppPlaylist } from '@/components/app-playlist';
import { AppPlayer } from '@/components/app-player';
import { useApp } from '@/app/AppProvider';
import { MoreAlbums } from '@/app/[locale]/moreAlbums';
import { AnimatePresence, motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';

function LayoutBackground() {
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
      <div className='absolute inset-0 bg-gradient-radial from-black/70 to-black lg:backdrop-blur'></div>
    </div>
  );
}

function RecordCover() {
  return (
    <div>
      <div className='relative aspect-square w-80 flex-shrink-0 select-none'>
        <Image
          draggable={false}
          src={
            'https://yt3.googleusercontent.com/QiI-c4cFyRPD0qVwTQooC3dlgJqHA_t6CpEAv818om-mqL9bqNDL4L_qXQVXx_eY76D_7cLD=s900-c-k-c0x00ffffff-no-rj'
          }
          className='relative h-full w-full rounded-md object-cover object-center'
          alt={'Background'}
          height={1028}
          width={2080}
        />
      </div>
    </div>
  );
}

function TrackData() {
  return (
    <div className='flex flex-1 flex-col justify-center gap-3 selection:bg-black selection:text-gray-50'>
      <h2 className='text-6xl font-bold'>Out of time</h2>
      <h3 className='text-4xl font-semibold text-gray-200'>The Weeknd</h3>
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

function DownloadBox() {
  return (
    <Dropdown className='font-mona-sans-kalameh'>
      <DropdownTrigger>
        <Button
          color='primary'
          startContent={<DownloadCloud className=' stroke-gray-50' size={16} />}
        >
          Download
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant='light' aria-label='Static Actions'>
        <DropdownItem key='new'>Mp3 320 - 9.8MB</DropdownItem>
        <DropdownItem key='new'>Mp3 128 - 4.4MB</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

function PlayButton() {
  return (
    <Button
      className='bg-red-600'
      startContent={<Play className='stroke-gray-50' size={16} />}
    >
      Play
    </Button>
  );
}

function LikeButton() {
  return (
    <Button color='danger' isIconOnly>
      <Heart className='stroke-gray-50' size={16} />
    </Button>
  );
}

function TrackActions() {
  return (
    <div className='flex flex-wrap items-center gap-2'>
      <PlayButton />
      <DownloadBox />
      <AddToPlaylist />
      <LikeButton />
    </div>
  );
}

function Categories() {
  const genras = [
    'Pop',
    'Jazz',
    'Sad',
    'Dance',
    'Country',
    'Car',
    'Long road',
    'Hip hop',
    'Classical',
    'Metal',
    'Party',
    'R&B',
  ];
  return (
    <div className='mt-16 flex flex-col gap-3'>
      <h2 className='font-medium'>Genres & Moods</h2>
      <div className='flex'>
        <Swiper slidesPerView={'auto'} spaceBetween={30} className='rounded-md'>
          {genras.map((item) => (
            <SwiperSlide key={item} className='!w-auto py-2'>
              <Button className='flex h-14 items-center justify-center rounded-md bg-default px-10 text-lg font-medium'>
                {item}
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default function Home() {
  const { playlistState } = useApp() as any;
  const variant = {
    open: {
      '--padding-end': '22.8rem',
    },
    closed: {
      '--padding-end': 0,
    },
  } as any;
  return (
    <main className='relative max-h-screen'>
      <LayoutBackground />
      <AppPlaylist />
      <AnimatePresence>
        <motion.div
          variants={variant}
          animate={playlistState ? 'open' : 'closed'}
          initial={'closed'}
          className='relative flex min-h-screen w-full flex-col items-center justify-center rounded-[inherit] pb-16 transition-[padding] duration-300 xl:pe-[--padding-end] xl:transition-none'
        >
          <div className='container flex flex-col justify-center gap-8 px-5 py-16'>
            <div className='flex flex-wrap gap-5 '>
              <RecordCover />
              <div className='flex flex-1 flex-col gap-5'>
                <TrackData />
                <TrackActions />
              </div>
            </div>
            <MoreAlbums />
            <Categories />
          </div>
        </motion.div>
      </AnimatePresence>
      <AppPlayer />
    </main>
  );
}
