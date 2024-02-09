'use client';
import Navbar from '@/components/Navbar';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const TransitionProvaider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode='wait'>
      <div
        key={pathName}
        className='w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100'>
        <motion.div
          className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40'
          animate={{ height: '140vh' }}
          exit={{ height: '0vh', trasition: { delay: 2 } }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
        <motion.div
          className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40'
          exit={{ height: '140vh' }}
          animate={{ height: '0vh', transition: { delay: 2 } }}
        />
        <div className='h-24'>
          <Navbar />
        </div>
        <div className='h-[calc(100vh -6rem)]'> {children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvaider;
