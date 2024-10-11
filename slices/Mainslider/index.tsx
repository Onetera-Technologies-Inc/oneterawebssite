'use client';

import { PrismicNextImage } from '@prismicio/next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { SliceComponentProps } from '@prismicio/react';
import { Content } from '@prismicio/client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export type MainsliderProps = SliceComponentProps<Content.MainsliderSlice>;

export default function Mainslider({ slice }: MainsliderProps) {
  const images = [
    slice.primary.bannerimg,
    slice.primary.banner2,
    slice.primary.banner3,
    slice.primary.banner2,
    slice.primary.banner3,
  ];

  return (
    <section className='py-12 main__slider'>
      <div className='container'>
        <Swiper
          navigation
          pagination={{ type: 'fraction' }}
          autoplay={{ delay: 3000 }}
          loop={true}
          
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={(swiper) => console.log(swiper)}
          className='h-96 w-full rounded-lg'
          spaceBetween={30}  // Space between slides
          slidesPerView={1.0001}  // Show part of the first and last slides
          style={{ padding: '0 15%' }} // Added padding for peek effect
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                {image && (
                  <PrismicNextImage field={image} className='block h-full w-full object-cover' />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
