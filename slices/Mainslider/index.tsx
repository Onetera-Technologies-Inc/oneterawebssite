import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
// import 'slick-carousel/slick/slick.css'; 
// import 'slick-carousel/slick/slick-theme.css';
// import Carousel from "@/app/componets/Carousel";



/**
 * Props for `Mainslider`.
 */
export type MainsliderProps = SliceComponentProps<Content.MainsliderSlice>;

/**
 * Component for "Mainslider" Slices.
 */
const Mainslider = ({ slice }: MainsliderProps): JSX.Element => {
  const dummySlides = [ { url: 'https://via.placeholder.com/800x400?text=Slide+1', alt: 'Slide 1', title: 'Dummy Slide 1', description: 'This is the description for Slide 1', }, { url: 'https://via.placeholder.com/800x400?text=Slide+2', alt: 'Slide 2', title: 'Dummy Slide 2', description: 'This is the description for Slide 2', }, { url: 'https://via.placeholder.com/800x400?text=Slide+3', alt: 'Slide 3', title: 'Dummy Slide 3', description: 'This is the description for Slide 3', }, ];
  return (
    <section
      
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="es-bounded"
    >

      {/* <Carousel slides={dummySlides}/> */}
      <PrismicNextImage field={slice.primary.bannerimg} />
      
    </section>
  );
};

export default Mainslider;
