import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Onterogrid`.
 */
export type OnterogridProps = SliceComponentProps<Content.OnterogridSlice>;

/**
 * Component for "Onterogrid" Slices.
 */
const Onterogrid = ({ slice }: OnterogridProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for onterogrid (variation: {slice.variation}) Slices
    </section>
  );
};

export default Onterogrid;
