import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Homebanner`.
 */
export type HomebannerProps = SliceComponentProps<Content.HomebannerSlice>;

/**
 * Component for "Homebanner" Slices.
 */
const Homebanner = ({ slice }: HomebannerProps): JSX.Element => {
  return (
    <div className="main-banner-bg">
    
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation} 
      className="es-bounded"
    >

     <h1> Access trusted<br/> city services in<br/> one conversation</h1>
    </section>
    </div>
  );
};

export default Homebanner;
