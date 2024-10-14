'use client';
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export type HousingsliderProps = SliceComponentProps<Content.HousingsliderSlice>;

const Housingslider = ({ slice }: HousingsliderProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="es-bounded"
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 2000 }}  // Adjust delay as per your needs
        loop={true}
        breakpoints={{
          240: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {slice.primary.housingcard.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="minislider">
              <div className="feat-heading">
                <PrismicRichText field={item.housingheading} />
              </div>
              <p className="sliderdescription">{item.housingdes}</p>
              <div className="white-btn">
                <PrismicNextLink field={item.comingsoon} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Additional CSS */}
      <style jsx>{`
        .es-bounded {
          max-width: 1200px;
          margin: 0 auto;
        }
        .minislider {
          background: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
        }
        .feat-heading {
          font-size: 18px;
          font-weight: bold;
        }
        .sliderdescription {
          margin-top: 10px;
          font-size: 14px;
          color: #666;
        }
        .white-btn {
          margin-top: 20px;
        }
      `}</style>
    </section>
  );
};

export default Housingslider;
