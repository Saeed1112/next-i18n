import { Swiper, SwiperSlide } from 'swiper/react';
import { albums } from '@/data/albums.json';
import 'swiper/css';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { Heart } from 'lucide-react';
import { Chip } from '@nextui-org/chip';
import PlayButton from '@/components/playButton';
import { FreeMode } from 'swiper/modules';

export function MoreAlbums() {
  return (
    <div className='mt-16 flex flex-col gap-3'>
      <h2 className='font-medium'>Related Albums</h2>
      <div className='flex'>
        <Swiper slidesPerView={'auto'} spaceBetween={30} className='rounded-md'>
          {albums.map((album: any) => (
            <SwiperSlide
              key={album.albumName}
              className='aspect-[16/10] w-full min-w-[20rem] max-w-[28rem] sm:!w-[26rem]'
            >
              <AlbumSliderCard album={album} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

function AlbumSliderCard({ album }: any) {
  return (
    <div className='relative h-full w-full select-none overflow-hidden rounded-md bg-default'>
      <div className='absolute inset-0 z-10 bg-gradient-radial from-black/60 to-black'></div>
      <Image
        src={album.artistCover}
        alt={album.albumName}
        className='absolute h-full w-full rounded-md object-cover object-center'
        height={210}
        width={390}
      />
      <div className='relative z-20 flex h-full w-full flex-col justify-between p-3 sm:p-5'>
        <div className='flex items-center justify-between'>
          <Chip size='sm' className='bg-neutral-900 text-xs' radius='sm'>
            The Weeknd
          </Chip>
          <Button size='sm' variant='light' isIconOnly radius='full'>
            <Heart size={14} />
          </Button>
        </div>
        <div className='flex gap-2'>
          <Image
            className='h-20 w-20 rounded-md bg-neutral-800 object-cover object-center'
            src={album.albumCover}
            height={300}
            width={300}
            alt={album.albumName}
          />
          <div className='flex flex-1 items-center gap-2 overflow-hidden'>
            <div className='flex flex-1 flex-col overflow-hidden'>
              <h3 className='overflow-hidden truncate text-xl font-semibold'>
                {album.albumName}
              </h3>
              <p className='text-xs font-light text-gray-300 sm:text-sm'>
                {album.tracks} Songs, 1hrs 23min
              </p>
            </div>

            <PlayButton />
          </div>
        </div>
      </div>
    </div>
  );
}
