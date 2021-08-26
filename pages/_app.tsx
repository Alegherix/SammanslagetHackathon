import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      {/* <motion.div key={router.route} exit={{ opacity: 0 }}> */}
      <Component {...pageProps} />
      {/* </motion.div> */}
    </AnimatePresence>
  );
}

export default MyApp;
