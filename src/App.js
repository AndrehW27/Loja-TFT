import './App.css';
import { useState, useEffect } from 'react';


import Store from './components/Store';

export default function App() {

  const [loadState, setLoadState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadState(false)
    }, 4000);
  }, [])

  return (
    <div className="App">

      {loadState === true &&
        <div className="loadingContainer">
          <div className="loadingImg">
          </div>
          <div className="loadingOut">
            <div className="loadingIcon"></div>
            <p>Loading ...</p>         
          </div>
        </div>
      }

      <Store />
    </div>
  );
}


