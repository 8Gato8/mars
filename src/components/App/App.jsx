import './App.css';

import { useState } from 'react';

import Header from '../Header/Header';
import Content from '../Content/Content';

function App() {
  const [appAdditionalStyles, setAppAdditionalStyles] = useState('');

  const defineOffsetSide = (x) => {
    const containerWidth = document.querySelector('body').offsetWidth;

    const percentage = (x / containerWidth) * 100;

    let offsetSide;
    if (percentage > 70) {
      offsetSide = '_right';
    } else if (percentage < 30) {
      offsetSide = '_left';
    } else {
      offsetSide = '_center';
    }
    return offsetSide;
  };

  const onMouseMove = (x) => {
    setAppAdditionalStyles(defineOffsetSide(x));
  };

  return (
    <div
      className={`app app_offset${appAdditionalStyles}`}
      onMouseMove={(e) => {
        onMouseMove(e.clientX);
      }}>
      <div className="app__fog"></div>
      <div className="app__wrapper">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
