import React from 'react';
import Slider from 'react-slick';
// Define the types for the slide data
interface Slide {
  url: string;
  alt: string;
  title?: string;
  description?: string;
}
interface CarouselProps {
  slides: Slide[];
}
const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.url} alt={slide.alt || `Slide ${index}`} />
          {slide.title && <h3>{slide.title}</h3>}
          {slide.description && <p>{slide.description}</p>}
        </div>
      ))}
    </Slider>
  );
};
export default Carousel;