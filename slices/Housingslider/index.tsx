import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Housingslider`.
 */
export type HousingsliderProps =
  SliceComponentProps<Content.HousingsliderSlice>;

/**
 * Component for "Housingslider" Slices.
 */
const Housingslider = ({ slice }: HousingsliderProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="es-bounded"
    >
     <div className="feat-card">
     {slice.primary.housingcard.map((item) => (
      // eslint-disable-next-line react/jsx-key
      <div className="minislider">
        <div className="feat-heading"><PrismicRichText field={item.housingheading} /></div><p className="sliderdescription"> {item.housingdes}</p>
        <div className="white-btn"><PrismicNextLink field={item.comingsoon} /></div>
        </div> 
      ))}
     </div>
    </section>
  );
};

export default Housingslider;
