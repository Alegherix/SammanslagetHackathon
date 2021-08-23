import React from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';

const unityContext = new UnityContext({
  loaderUrl: './unity/Build/Sammanslaget Builds.loader.js',
  dataUrl: './unity/Build/Sammanslaget Builds.data',
  frameworkUrl: './unity/Build/Sammanslaget Builds.framework.js',
  codeUrl: './unity/Build/Sammanslaget Builds.wasm',
});

function App() {
  const moveCamera = () => {
    unityContext.send('CameraMoveMent', 'MoveCamera');
  };

  return (
    <div>
      <button onClick={moveCamera}>Change</button>
      <Unity
        style={{ width: '90vw', height: '90vh' }}
        unityContext={unityContext}
      />
    </div>
  );
}

export default App;
