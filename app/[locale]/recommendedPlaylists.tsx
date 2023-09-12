import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { Play } from 'lucide-react';
import PlayButton from '@/components/playButton';

function RecommendedPlaylistsSliderCard() {
  return (
    <div className='relative flex h-32 w-[32rem] overflow-hidden rounded-md bg-neutral-900'>
      <div className='relative h-32 w-56'>
        <Image
          height={600}
          width={600}
          src={
            'https://audiok.ir/wp-content/uploads/2023/07/IMG_20230726_180446.jpg'
          }
          className='absolute -start-0 z-30 h-32 w-32 object-cover object-center shadow-[0_0_50px_12px] shadow-black'
          alt={'Image'}
        />
        <Image
          height={600}
          width={600}
          src={
            'https://audiok.ir/wp-content/uploads/2023/09/IMG_20230911_231049.jpg'
          }
          alt={'Image'}
          className='absolute start-12 z-20 h-32 w-32 object-cover object-center shadow-[0_0_50px_12px] shadow-black'
        />
        <Image
          height={600}
          width={600}
          src={
            'https://audiok.ir/wp-content/uploads/2022/10/IMG_20221018_024045.jpg'
          }
          alt={'Image'}
          className='absolute start-24 z-10 h-32 w-32 object-cover object-center shadow-[0_0_50px_12px] shadow-black'
        />
        <div className='absolute -end-4 bottom-0 top-0 z-40 flex w-8 items-center justify-center'>
          <PlayButton />
        </div>
      </div>
      <div className='flex flex-1 flex-col justify-center gap-1 overflow-hidden px-5 py-3 ps-6'>
        <h4 className='truncate text-lg font-bold'>
          Classic 80s and a long text to show if get long title
        </h4>
        <p className='line-clamp-3 text-sm'>
          You can feel it in the streets On a day like this, the heat It feel
          like summer I feel like summer I feel like summer You can feel it in
          the streets On a day like this, the heat I fee
        </p>
      </div>
    </div>
  );
}

export function RecommendedPlaylists() {
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
    <div className='mt-5 flex select-none flex-col gap-3'>
      <h2 className='font-medium'>Recommended Playlists</h2>
      <div className='flex'>
        <Swiper slidesPerView={'auto'} spaceBetween={30} className='rounded-md'>
          {genras.map((item) => (
            <SwiperSlide key={item} className='!w-auto'>
              <RecommendedPlaylistsSliderCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
