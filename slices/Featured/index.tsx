import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Featured`.
 */
export type FeaturedProps = SliceComponentProps<Content.FeaturedSlice>;

/**
 * Component for "Featured" Slices.
 */
const Featured = ({ slice }: FeaturedProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="es-bounded"
    >
       <div className="keyfeature">
        <h3>Key Features</h3>
       </div>
    </section>
  );
};

export default Featured;
