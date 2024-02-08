'use client';

import { motion } from 'framer-motion';

const Test = () => {
  const variants = {
      variants1: {
          x: 400,
          y: 300,
          opacity: 1,
      },
      variants2: {
        x: 100,
        y: -300,
        rotation: 1,
      },
    },
  };

  return (
    <div className='h-full flex items-center justify-center'>
      <motion.div
        className='w-96 h-96 bg-red-400 rounded'
        initiial={{ x: -100 }}
        variants={{ variants }}
              animate={{
                  condition ? "variants2" : "variants1"}}
        transition={{ delay: 2, duration: 4 }}></motion.div>
      Test
    </div>
  );
};

export default Test;
