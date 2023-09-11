import { Swiper, SwiperSlide } from 'swiper/react';
import { albums } from '@/data/albums.json';
import 'swiper/css';
import Image from 'next/image';

export function MoreAlbums() {
  return (
    <div className='mt-16 flex flex-col'>
      <h2>Similar</h2>
      <div className='flex'>
        <Swiper slidesPerView={'auto'} spaceBetween={30} freeMode={true}>
          {albums.map((album: any) => (
            <SwiperSlide key={album.albumName} className='!h-52 !w-96'>
              <div className='relative h-full w-full overflow-hidden rounded-md bg-default'>
                <div className='absolute inset-0 z-10 bg-gradient-radial from-black/20 to-black backdrop-blur'></div>
                <Image
                  src={album.artistCover}
                  alt={album.albumName}
                  className='absolute h-full w-full object-cover object-center'
                  height={210}
                  width={390}
                />
                <div className='relative z-20 flex h-full w-full flex-col justify-between px-5 py-5'>
                  <div>Top</div>
                  <div className='flex gap-2'>
                    <Image
                      className='h-20 w-20 rounded-md object-cover object-center'
                      src={album.albumCover}
                      height={300}
                      width={300}
                      alt={album.albumName}
                    />
                    <div className='flex flex-col justify-center'>
                      <h3 className='text-xl font-semibold'>
                        {album.albumName}
                      </h3>
                      <p className='text-sm font-light text-gray-300'>
                        {album.tracks} Songs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

function AlbumSliderCard() {
  return <SwiperSlide className='h-64 !w-96 bg-red-600'>134</SwiperSlide>;
}
