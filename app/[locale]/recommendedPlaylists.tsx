import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Button } from '@nextui-org/react';

function RecommendedPlaylistsSliderCard() {
  return (
    <div className='flex h-32 w-[32rem] overflow-hidden rounded-md  bg-neutral-900'>
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
      </div>
      <div className='flex flex-1 flex-col justify-center gap-1 overflow-hidden px-5 py-3'>
        <h4 className='text-lg font-bold'>Classic 80s</h4>
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
