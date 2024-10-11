'use client';
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Props for `Featurefour`.
 */
export type FeaturefourProps = SliceComponentProps<Content.FeaturefourSlice>;

/**
 * Component for "Featurefour" Slices.
 */
const Featurefour = ({ slice }: FeaturefourProps): JSX.Element => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Stop observing once in view
        }
      },
      {
        threshold: 0.1, // Adjust this value to control when the animation triggers
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef} // Attach the ref to the section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="es-bounded "
    >
      <h2 className="featured-heading">Key Features</h2>

      <motion.div
        initial="hidden"
        whileInView="visible"

        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }} // Use inView state
        exit={{ opacity: 0, y: 60 }} 
        transition={{ 
          duration: 0.5, // Duration of the animation
          ease: "easeOut", // Easing function for smoothness
         // Delay before the animation starts
        }} 
      >
        <div className="keyfeature">
          {slice.primary.featurefourcard.map((item, index) => (
            <div key={index}>
              <PrismicNextImage field={item.featurefourimg} />
              <p>{item.featurefourdes}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Featurefour;
