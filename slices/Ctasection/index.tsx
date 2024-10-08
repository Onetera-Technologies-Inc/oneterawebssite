import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Ctasection`.
 */
export type CtasectionProps = SliceComponentProps<Content.CtasectionSlice>;

/**
 * Component for "Ctasection" Slices.
 */
const Ctasection = ({ slice }: CtasectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for ctasection (variation: {slice.variation}) Slices
    </section>
  );
};

export default Ctasection;
