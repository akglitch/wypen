import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function Header() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let sliding = false;

    const moveSlide = () => {
      if (!sliding && slider) {
        sliding = true;

        const max = slider.scrollWidth - slider.clientWidth;
        const left = slider.clientWidth;

        if (max === slider.scrollLeft) {
          setTimeout(() => {
            slider.scrollTo({ left: 0, behavior: 'auto' });
            sliding = false;
          }, 2000); // Wait for 2 seconds before resetting the slide
        } else {
          slider.scrollBy({ left, behavior: 'auto' });
          sliding = false;
        }
      }

      setTimeout(moveSlide, 6000); // Adjusted to 6 seconds
    };

    setTimeout(moveSlide, 6000); // Adjusted to 6 seconds
  }, []);

  const slides = [
    {
      title: 'Discover Sustainable Style!',
      text: 'Explore our collection of eco-friendly fashion and accessories - where style meets sustainability.',
    },
    {
      title: 'Every Purchase Counts!',
      text: 'With each purchase, you\'re supporting a greener future. Join us in reducing plastic waste and carbon emissions.',
    },
    {
      title: 'Autumn Essentials: Sustainable and Stylish!',
      text: 'Embrace the fall season with our eco-friendly collection - cozy, chic, and good for the planet.',
    },
    // Add more slides similarly
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="h-[92vh] w-full overflow-hidden flex flex-nowrap text-center" id="slider" ref={sliderRef}>
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="space-y-4 flex-none w-full flex flex-col items-center justify-center bg-cover relative h-80vh"
          style={{
            backgroundImage: 'url("/andrew-coelho-aL7SA1ASVdQ-unsplash.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
