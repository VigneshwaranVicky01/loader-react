import { useState } from 'react';
import LetterLoading from './loader/LettersLoading';
import StretchLoading from './loader/StretchLoading';
import GlowLoading from './loader/GlowLoading';
import boom from '../assets/boom.mp3';

export default function LoaderDemo() {
  const [loader, setLoader] = useState(null);
  const [key, setKey] = useState(0);

  const startLoader = (type) => {
    if (type == 'letter') {
      new Audio(boom).play(); // play once
    }
    setLoader(type);
    setKey((prev) => prev + 1); // force re-mount → replay animation
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>TentTalkies Loader</h1>

      <div style={styles.buttons}>
        <button onClick={() => startLoader('letter')}>Letter</button>
        <button onClick={() => startLoader('stretch')}>Stretch</button>
        <button onClick={() => startLoader('glow')}>Glow</button>
      </div>

      <div style={styles.loaderArea}>
        {loader === 'letter' && <LetterLoading key={key} />}
        {loader === 'stretch' && <StretchLoading key={key} />}
        {loader === 'glow' && <GlowLoading key={key} />}
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: '#000',
    minHeight: '100vh',
    minWidth: '80vw',
    color: '#fff',
    textAlign: 'center',
    paddingTop: '60px',
  },
  title: {
    marginBottom: '20px',
  },
  buttons: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
    marginBottom: '50px',
  },
  loaderArea: {
    height: '120px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
