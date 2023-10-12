import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function Header() {
  useEffect(() => {
    const slider = document.querySelector('#slider') as HTMLDivElement;
    const moveSlide = () => {
      const max = slider.scrollWidth - slider.clientWidth;
      const left = slider.clientWidth;

      if (max === slider.scrollLeft) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left, behavior: 'smooth' });
      }

      setTimeout(moveSlide, 2000);
    };

    setTimeout(moveSlide, 2000);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const stagger = {
    visible: {
      transition: { staggerChildren: 0.5 },
    },
  };

  return (
    <>
      <div className="h-screen w-full overflow-hidden flex flex-nowrap text-center" id="slider">
        <motion.div
          className="space-y-4 flex-none w-full flex flex-col items-center justify-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-4xl max-w-md "
            variants={fadeIn}
          >
            Your Big Idea
          </motion.h2>
          <motion.p
            className="max-w-md "
            variants={fadeIn}
          >
            It&apos;s fast, flexible, and reliable — with zero-runtime.
          </motion.p>
        </motion.div>
        <motion.div
          className="space-y-4 flex-none w-full flex flex-col items-center justify-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-4xl max-w-md "
            variants={fadeIn}
          >
            Tailwind CSS works by scanning all of your HTML
          </motion.h2>
          <motion.p
            className="max-w-md "
            variants={fadeIn}
          >
            It&apos;s fast, flexible, and reliable — with zero-runtime.
          </motion.p>
        </motion.div>
        <motion.div
          className="space-y-4 flex-none w-full flex flex-col items-center justify-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-4xl max-w-md "
            variants={fadeIn}
          >
            React, Vue, and HTML
          </motion.h2>
          <motion.p
            className="max-w-md "
            variants={fadeIn}
          >
            Accessible, interactive examples for React and Vue powered by Headless UI, plus vanilla HTML if you&apos;d rather write any necessary JS yourself.
          </motion.p>
        </motion.div>
      </div>
    </>
  );
}

export default Header;
