import React, { useEffect, useState } from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import { motion } from 'framer-motion';

const unityContext = new UnityContext({
  loaderUrl: './Build/Sammanslaget Builds.loader.js',
  dataUrl: './Build/Sammanslaget Builds.data',
  frameworkUrl: './Build/Sammanslaget Builds.framework.js',
  codeUrl: './Build/Sammanslaget Builds.wasm',
});

const Overlay = ({ setOverlay }) => {
  return (
    <motion.div
      key="headingContainer"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 gradient w-screen h-screen flex flex-col gap-4 items-center justify-center z-20"
    >
      <div>
        <h1 className="text-7xl text-[#E07D41] leading-relaxed">
          Räddnings<span className="text-white">missionen</span>
        </h1>
        <h2 className="text-5xl text-white text-center">Presenterar</h2>
      </div>

      <motion.div
        key="sumContainer"
        initial={{ opacity: 0 }}
        transition={{ duration: 4 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, x: -100 }}
        onAnimationComplete={() => setOverlay(false)}
      >
        <p key="sumText" className="text-white text-lg">
          Små summor stora skillnader
        </p>
      </motion.div>
    </motion.div>
  );
};

export default function Story() {
  const [overlay, setOverlay] = useState<boolean>();

  useEffect(() => {
    setOverlay(true);
    unityContext.on('Custom', () => {
      console.log('REEE');
    });

    unityContext.on('error', () => {
      console.log('ERROR');
    });

    unityContext.on('quitted', () => {
      console.log('QUITTTTTTED');
    });

    unityContext.on('canvas', () => console.log('FOOOKING QUITTED mATE'));

    unityContext.on('loaded', () => console.log('LOOOADED'));
  }, []);

  return (
    <>
      {overlay && <Overlay setOverlay={setOverlay} />}
      <div className="relative gradient">
        <Unity className="h-screen w-screen" unityContext={unityContext} />
      </div>
    </>
  );
}
