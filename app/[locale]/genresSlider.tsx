import { Swiper, SwiperSlide } from 'swiper/react';

export function GenresSlider() {
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
      <h2 className='font-medium'>Genres & Moods</h2>
      <div className='flex'>
        <Swiper slidesPerView={'auto'} spaceBetween={10} className='rounded-md'>
          {genras.map((item) => (
            <SwiperSlide key={item} className='!w-auto'>
              <a className='flex h-10 items-center justify-center rounded-md bg-neutral-900 px-8 text-base md:h-14 md:px-10 md:text-lg'>
                {item}
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
