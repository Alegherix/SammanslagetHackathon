import React, { useEffect, useState } from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import { FaChevronRight, FaHeart } from 'react-icons/fa';
import story from '../src/data';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

const unityContext = new UnityContext({
  loaderUrl: './Build/Sammanslaget Builds.loader.js',
  dataUrl: './Build/Sammanslaget Builds.data',
  frameworkUrl: './Build/Sammanslaget Builds.framework.js',
  codeUrl: './Build/Sammanslaget Builds.wasm',
});

interface IStory {
  text: string;
}

const StoryText: React.FC<IStory> = ({ text }) => {
  return (
    <div className="flex flex-col absolute top-[20%] max-w-screen-sm right-[10%]">
      <p>{text}</p>
      <button
        onClick={() => unityContext.send('Main Camera', 'NextSlide')}
        className="rounded-md p-2 w-[fit-content] border-2 border-black text-black duration-200 hover:bg-gray-200 self-end"
      >
        Hur hjälper min gåva?
      </button>
    </div>
  );
};

const Overlay = ({ setOverlay }) => {
  return (
    <div className="absolute inset-0 gradient w-screen h-screen flex items-center justify-center z-20">
      <motion.div
        animate={{ rotate: 360, scale: 3 }}
        transition={{ duration: 2.3 }}
        onAnimationComplete={() => setOverlay(false)}
      >
        <FaHeart className="text-5xl text-red-500" />
      </motion.div>
    </div>
  );
};

export default function Story() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [overlay, setOverlay] = useState<boolean>();

  useEffect(() => {
    unityContext.on('loaded', () => setIsLoaded(true));
    setOverlay(true);
  }, []);

  const moveCamera = () => {
    unityContext.send('Main Camera', 'NextSlide');
  };

  return (
    <>
      {overlay && <Overlay setOverlay={setOverlay} />}
      <div className="relative gradient">
        <StoryText text={story[0].text} />
        <button
          onClick={moveCamera}
          className="rounded-full border-2 border-white p-2 absolute right-5 top-[50%] hover:border-black duration-300"
        >
          <FaChevronRight />
        </button>
        <Unity
          style={{ background: 'red' }}
          className="w-screen h-screen "
          unityContext={unityContext}
        />
      </div>
    </>
  );
}
