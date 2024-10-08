import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Featurefour`.
 */
export type FeaturefourProps = SliceComponentProps<Content.FeaturefourSlice>;

/**
 * Component for "Featurefour" Slices.
 */
const Featurefour = ({ slice }: FeaturefourProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="es-bounded "
    >
      <h2 className="featured-heading">Key Features</h2>
      <div className="keyfeature">
      {slice.primary.featurefourcard.map((item, index) => (
        <div key={index}>
          <PrismicNextImage field={item.featurefourimg} />
          <p>{item.featurefourdes}</p>
        </div>
      ))}
      </div>
    </section>
  );
};

export default Featurefour;
