import React, { useEffect, useState } from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import { FaChevronRight } from 'react-icons/fa';

const unityContext = new UnityContext({
  loaderUrl: './Build/Sammanslaget Builds.loader.js',
  dataUrl: './Build/Sammanslaget Builds.data',
  frameworkUrl: './Build/Sammanslaget Builds.framework.js',
  codeUrl: './Build/Sammanslaget Builds.wasm',
});

export default function Home() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    unityContext.on('loaded', () => setIsLoaded(true));
  }, []);

  const moveCamera = () => {
    unityContext.send('Main Camera', 'MoveCamera');
  };

  return (
    <div className="relative gradient">
      <button
        onClick={moveCamera}
        className="rounded-full border-2 border-white p-2 absolute right-5 top-[50%] hover:border-black duration-300"
      >
        <FaChevronRight />
      </button>
      <Unity
        className="h-screen w-screen gradient"
        unityContext={unityContext}
      />
    </div>
  );
}
