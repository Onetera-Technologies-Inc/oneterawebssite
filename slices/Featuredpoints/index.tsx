import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Featuredpoints`.
 */
export type FeaturedpointsProps =
  SliceComponentProps<Content.FeaturedpointsSlice>;

/**
 * Component for "Featuredpoints" Slices.
 */
const Featuredpoints = ({ slice }: FeaturedpointsProps): JSX.Element => {
  return (
    <div className="featured_main">
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="es-bounded"
    >
      <div className="featured_points">
      <PrismicNextImage field={slice.primary.featuredimg} />
     {slice.primary.featuredheading}
     </div>
    </section>
    </div>
  );
};

export default Featuredpoints;
