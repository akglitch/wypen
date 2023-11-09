import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Slide {
  image: string;
  title: string;
  text: string;
}

const slides: Slide[] = [
  {
    image: 'url("randy-fath-dDc0vuVH_LU-unsplash.jpg")',
    title: 'Discover Sustainable Style!',
    text: 'Explore our collection of eco-friendly fashion and accessories - where style meets sustainability.',
  },
  {
    image: 'url("irewolede-PvwdlXqo85k-unsplash.jpg")',
    title: 'Every Purchase Counts!',
    text: 'With each purchase, you\'re supporting a greener future. Join us in reducing plastic waste and carbon emissions.',
  },
  {
    image: 'url("steven-weeks-DUPFowqI6oI-unsplash.jpg")',
    title: 'Autumn Essentials: Sustainable and Stylish!',
    text: 'Embrace the fall season with our eco-friendly collection - cozy, chic, and good for the planet.',
  },
  // Add more slides similarly
];

function Header() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const currentSlide = useRef<number>(0);

  useEffect(() => {
    const moveSlide = () => {
      const slider = sliderRef.current;

      if (slider) {
        const max = slider.scrollWidth - slider.clientWidth;
        const left = slider.clientWidth;

        currentSlide.current = (currentSlide.current + 1) % slides.length;
        const nextSlide = currentSlide.current * left;

        if (max === slider.scrollLeft) {
          slider.scrollTo({ left: 0, behavior: 'auto' });
        } else {
          slider.scrollBy({ left, behavior: 'smooth' });
        }
      }

      setTimeout(moveSlide, 6000);
    };

    setTimeout(moveSlide, 6000);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="h-[92vh] w-full overflow-hidden flex flex-nowrap text-center" ref={sliderRef}>
      {slides.map((slide: Slide, index: number) => (
        <motion.div
          key={index}
          className="space-y-4 flex-none w-full flex flex-col items-center justify-center bg-cover relative h-80vh"
          style={{
            backgroundImage: slide.image,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
          }}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="text-4xl max-w-md text-white" variants={fadeIn}>
            {slide.title}
          </motion.h2>
          <motion.p className="max-w-md text-white" variants={fadeIn}>
            {slide.text}
          </motion.p>
          <i className="fa fa-angle-double-down text-white fa-3x absolute bottom-4 animate-bounce cursor-pointer"></i>
        </motion.div>
      ))}
    </div>
  );
}

export default Header;
