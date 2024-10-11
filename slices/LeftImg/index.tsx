import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LeftImg`.
 */
export type LeftImgProps = SliceComponentProps<Content.LeftImgSlice>;

/**
 * Component for "LeftImg" Slices.
 */
const LeftImg = ({ slice }: LeftImgProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for left_img (variation: {slice.variation}) Slices
    </section>
  );
};

export default LeftImg;
