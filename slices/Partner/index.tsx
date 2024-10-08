import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Partner`.
 */
export type PartnerProps = SliceComponentProps<Content.PartnerSlice>;

/**
 * Component for "Partner" Slices.
 */
const Partner = ({ slice }: PartnerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="es-bounded text-center partner-section"
    >
    <div className="Partner-text-heading"><PrismicRichText field={slice.primary.partnermainheading}/></div>
    <div className="Partner-img text-center"><PrismicNextImage field={slice.primary.partnerimg} /></div>
    <div className="Partner-description text-center"><PrismicRichText field={slice.primary.partnerheading} /></div>
    <div className="Partner-desgination text-center"> {slice.primary.partnerdes}</div>
    </section>
  );
};

export default Partner;
