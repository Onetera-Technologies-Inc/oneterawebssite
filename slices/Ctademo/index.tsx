import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Ctademo`.
 */
export type CtademoProps = SliceComponentProps<Content.CtademoSlice>;

/**
 * Component for "Ctademo" Slices.
 */
const Ctademo = ({ slice }: CtademoProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="es-bounded ctasection"
    >
      <div className="ctasmall-head">{slice.primary.ctasmall}</div>
      <div className="flex justify-between align-baseline  margintop80">
      <div className="ctalarge-head"><PrismicRichText field={slice.primary.ctalarge} /></div>
      <div className="green-global-btn"><PrismicNextLink field={slice.primary.ctabtn} /></div>
      </div>
    
    </section>
  );
};

export default Ctademo;
