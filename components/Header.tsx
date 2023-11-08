import React, { useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slideData: Slide[] = [
  {
    image: 'url("randy-fath-dDc0vuVH_LU-unsplash.jpg")',
    title: 'Discover Sustainable Style!',
    description: 'Explore our collection of eco-friendly fashion and accessories - where style meets sustainability.',
  },
  {
    image: 'url("irewolede-PvwdlXqo85k-unsplash.jpg")',
    title: 'Every Purchase Counts!',
    description: 'With each purchase, you\'re supporting a greener future. Join us in reducing plastic waste and carbon emissions.',
  },
  {
    image: 'url("steven-weeks-DUPFowqI6oI-unsplash.jpg")',
    title: 'Autumn Essentials: Sustainable and Stylish!',
    description: 'Embrace the fall season with our eco-friendly collection - cozy, chic, and good for the planet.',
  },
  // Add more slide objects as needed
];

function Header(): JSX.Element {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const moveSlide = () => {
      if (slider) {
        const max = slider.scrollWidth - slider.clientWidth;
        const left = slider.clientWidth;

        if (max === slider.scrollLeft) {
          slider.scrollTo({ left: 0, behavior: 'auto' });
        } else {
          slider.scrollBy({ left, behavior: 'auto' });
        }

        setTimeout(moveSlide, 6000); // Adjusted to 6 seconds
      }
    };

    setTimeout(moveSlide, 6000); // Adjusted to 6 seconds
  }, []);

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const stagger: Variants = {
    visible: {
      transition: { staggerChildren: 0.5 },
    },
  };

  return (
    <div className="h-[92vh] w-full overflow-hidden flex flex-nowrap text-center" ref={sliderRef}>
      {slideData.map((slide, index) => (
        <motion.div
          key={index}
          className="space-y-4 flex-none w-full flex flex-col items-center justify-center bg-cover relative h-80vh"
          style={{
            backgroundImage: slide.image,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="text-4xl max-w-md text-white" variants={fadeIn}>
            {slide.title}
          </motion.h2>
          <motion.p className="max-w-md text-white" variants={fadeIn}>
            {/* Displaying the description if it's a string, or the message property of the error if not */}
            {typeof slide.description === 'string' ? slide.description : (slide.description as any).message}
          </motion.p>
          <i className="fa fa-angle-double-down text-white fa-3x absolute bottom-4 animate-bounce cursor-pointer"></i>
        </motion.div>
      ))}
    </div>
  );
}

export default Header;
