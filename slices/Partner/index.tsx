'use client';
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Props for `Partner`.
 */
export type PartnerProps = SliceComponentProps<Content.PartnerSlice>;

/**
 * Component for "Partner" Slices.
 */
const Partner = ({ slice }: PartnerProps): JSX.Element => {
  const controls = useAnimation(); // Animation controls from Framer Motion
  const ref = useRef<HTMLElement>(null); // Reference to the section

  // Function to handle intersection
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        controls.start({ opacity: 1, y: 0 }); // Start animation when in view
      } else {
        controls.start({ opacity: 0, y: 20 }); // Reset to initial state when out of view
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });

    if (ref.current) {
      observer.observe(ref.current); // Observe the section
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Cleanup observer
      }
    };
  }, [ref]);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="es-bounded text-center partner-section"
      ref={ref} // Attach the ref to the section
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Start hidden and slightly below
        animate={controls} // Use animation controls
        transition={{ duration: 1 }} // Animation duration
      >
        <div className="Partner-text-heading">
          <PrismicRichText field={slice.primary.partnermainheading} />
        </div>
        <div className="Partner-img text-center">
          <PrismicNextImage field={slice.primary.partnerimg} />
        </div>
        <div className="Partner-description text-center">
          <PrismicRichText field={slice.primary.partnerheading} />
        </div>
        <div className="Partner-desgination text-center">
          {slice.primary.partnerdes}
        </div>
      </motion.div>
    </section>
  );
};

export default Partner;
