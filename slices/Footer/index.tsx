import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>;

/**
 * Component for "Footer" Slices.
 */
const Footer = ({ slice }: FooterProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="footer-bg"
    >
    <div className="es-bounded">
      <div className="main-footer">
        <div className="footer-logo">
        <PrismicNextImage field={slice.primary.footerlogo} />
        <div className="footercontact">
        <PrismicNextLink field={slice.primary.footercontact} />
        </div>
        </div>
        <div className="footermenus">
        {slice.primary.footermenuitem.map((item) => (
         <><PrismicNextLink field={item.footermenu} /></> 
      ))}
        </div>
      </div>

      <div className="footerbottomlinks">
      <div className="footer-left">
        <div className="privacylinks">
      {slice.primary.footerprivacy.map((item) => (
     <p><PrismicNextLink field={item.footerlinks} /></p>
      ))}
      </div>

<div className="footersociallinks">
        {slice.primary.socialmedialinks.map((item) => (
        <PrismicNextLink field={item.sociallinks} />
        ))}
        </div>
        </div>

        <div className="footerright">
        {slice.primary.footercopyright.map((item, index) => (
          <span key={index}>{item.footercoyrighttext}</span>
        ))}
      </div>

        </div>

     
      </div>
   
    </section>
  );
};

export default Footer;
