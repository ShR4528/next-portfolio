'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';

const PortfolioPage = () => {
  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0    %' }}
      transition={{ duration: 1 }}>
      <div className='h-[600vh] relative'> porsfs</div>
    </motion.div>
  );
};

export default PortfolioPage;
