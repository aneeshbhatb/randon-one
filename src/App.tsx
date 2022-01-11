import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [ showCompatibilityMsg,  setShowCompatibilityMsg ] = useState(true);

  useEffect(() => {
    const nav = window.navigator as any;
    if (
      (nav.userAgent.indexOf('Chrome') !== 1 &&
        nav.userAgentData?.brands?.some(
          (brannd: { brand: string }) => brannd.brand === "Google Chrome"
        )) || 
      (nav.userAgent.indexOf('Safari') !== -1 && 
        nav.vendor === "Apple Computer, Inc.") || 
      nav.userAgent.indexOf('Firefox') !== -1 || 
      nav.userAgent.indexOf('Edg') !== -1
    ) {
      setShowCompatibilityMsg(false);
    }
  }, []);

  return (
    <div className="App img-bg">
      <div className="img-attr">
        Photo by <a href="https://unsplash.com/@chrispee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Christoph Peich</a> on <a href="https://unsplash.com/s/photos/retro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </div>
      {showCompatibilityMsg ? 
        <div className="not-rec-browser">
          This browser is not recommended
        </div> : null
      }
    </div>
  );
}

export default App;
