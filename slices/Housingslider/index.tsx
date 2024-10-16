'use client';
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules'; // Added EffectCoverflow
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow'; // Import coverflow effect styles

export type HousingsliderProps = SliceComponentProps<Content.HousingsliderSlice>;

const Housingslider = ({ slice }: HousingsliderProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="es-bounded housingslider"
    >
      <Swiper
        modules={[Navigation, Autoplay, EffectCoverflow]} // Include Coverflow module
        spaceBetween={30}
        slidesPerView={3.15}
        navigation
        loop={true} // Loop enabled
        autoplay={false} // Autoplay with 3s delay
       
        breakpoints={{
          340: {
            slidesPerView: 1.01,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.05,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.15,
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
                <PrismicNextLink field={item.comingsoon}>
                  Coming Soon
                </PrismicNextLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Additional CSS */}
      <style jsx>{`
        .es-bounded {
          max-width: 100% !important;
          margin: 0 auto;
          padding: 0 20px; /* Padding to prevent cut-offs */
        }

        .minislider {
          background: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
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
          background-color: #fff;
          padding: 10px 20px;
          border-radius: 4px;
          display: inline-block;
          font-weight: bold;
          text-decoration: none;
          color: #333;
        }

        .swiper-slide {
          display: flex;
          justify-content: center; /* Center content in each slide */
        }

        @media (max-width: 1024px) {
          .minislider {
            padding: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default Housingslider;
