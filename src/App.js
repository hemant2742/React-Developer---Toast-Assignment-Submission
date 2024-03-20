// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Toast from './components/toast';
import Home from './components/home/index';

function App({ message, hideInfoIcon, withoutAction, withoutDivider, crossIcon, notificationIcon }) {
  const [showToast, setShowToast] = useState(false);

  const showToastFor3Seconds = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  useEffect(() => {
    if (showToast === true) {
      showToastFor3Seconds();
    }
  }, [showToast]);

  return (
    <div className='App'>
      <Home setShowToast={setShowToast} />
      {showToast && (
        <div className='toast-container'>
          <Toast
            message={message}
            hideInfoIcon={hideInfoIcon}
            withoutAction={withoutAction}
            withoutDivider={withoutDivider}
            crossIcon={crossIcon}
            notificationIcon={notificationIcon}
          />
        </div>
      )}
    </div>
  );
}

export default App;
