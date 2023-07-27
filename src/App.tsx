import sampleStyles from '@src/assets/css/sample-name.module.css';
import {FC, useEffect} from 'react';

const sampleClass = sampleStyles['sample-class'];

const App: FC = () => {
  useEffect(() => {
    document.title = 'App Name';
  }, []);

  return (
    <>
      <p className={sampleClass}>start here</p>
    </>
  );
};

export default App;
