import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Fcard`.
 */
export type FcardProps = SliceComponentProps<Content.FcardSlice>;

/**
 * Component for "Fcard" Slices.
 */
const Fcard = ({ slice }: FcardProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for fcard (variation: {slice.variation}) Slices
    </section>
  );
};

export default Fcard;
