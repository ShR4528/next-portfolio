'use client';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0vh%' }}
      transition={{ duration: 1 }}>
      {/* contAiner */}
      <div>
        {/* TEXT CONT`INER */}
        <div className='p-4 sm:p- 12 lg:p-20 xl:p-48'>
          {/* BIO */}
          <div className='hidden'></div>
          {/* SKILLS */}
          <div className='hidden'></div>
          {/* EXPIRENCE */}
          <div className='hidden'></div>
        </div>
        {/* svg container  */}
        <div className='hidden'></div>
        <div></div>
        fdhvbz
      </div>
    </motion.div>
  );
};

export default AboutPage;
