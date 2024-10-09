import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Header`.
 */
export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

/**
 * Component for "Header" Slices.
 */
const Header = ({ slice }: HeaderProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="header-bounded"
    >
      <div className="header">
        <div className="main-menu">
        <div className="logo">
        <PrismicNextImage field={slice.primary.logo} />
        </div>
        <div className="menuitems">
          {slice.primary.menuitem.map((item) => (<PrismicNextLink field={item.menuname} />))}

        </div>
        </div>

        <div className="right-menu">
        {slice.primary.sidemenu.map((item) => (
          <PrismicNextLink field={item.sideitem} />
        ))}
        </div>
      </div>
     
    </section>
  );
};

export default Header;
