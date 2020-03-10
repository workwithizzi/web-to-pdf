import React from 'react';
import DownloadPDF from './DownloadPDF';

import './App.css';
import logo from './logo.svg';
import logo2 from './logo512.png';

function App() {
  return (
    <div>
      <DownloadPDF>
        <h3>Hello, this is a H3 tag</h3>
        <p className="para">a pararaph</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img id="doNotInclude" src={""} alt="react"></img>
        {/* <img id="doNotInclude" src={logo2} alt="react"></img> */}
        <p id="doNotInclude">sfdjhjhgkjdfhgkj</p>
      </DownloadPDF>
    </div>
  );
}

export default App;
