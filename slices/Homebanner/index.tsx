'use client';
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { motion } from "framer-motion";


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
     <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: -80 }} 
      transition={{ duration: 0.8 }} 
    >
      <h1 > Access trusted<br/> city services in<br/> one conversation</h1>
    </motion.div>
    </section>
    </div>
  );
};

export default Homebanner;
