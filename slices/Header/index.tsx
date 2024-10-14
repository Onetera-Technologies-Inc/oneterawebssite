/* eslint-disable react/jsx-key */
"use client"
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { useState } from "react";

/**
 * Props for `Header`.
 */
export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

/**
 * Component for "Header" Slices.
 */
const Header = ({ slice }: HeaderProps): JSX.Element => {
  const [toggle, setToggle] = useState(false);
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
          <div className={`menuitems ${toggle && "show"}`}>
            {slice.primary.menuitem.map((item) => (
              <PrismicNextLink field={item.menuname} />
            ))}
          </div>
        </div>

        <div className="right-menu">
          {slice.primary.sidemenu.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <PrismicNextLink field={item.sideitem} />
          ))}
        </div>

        <div
          className="menu_toggle"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {/* mobile menu toggle here */}
          <span className="toggle_span">|||</span>
        </div>
      </div>
    </section>
  );
};

export default Header;
