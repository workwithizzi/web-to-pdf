import React from 'react';
import DownloadPDF from './DownloadPDF';

import './styles/App.css';

import Proposal from './templates/Proposal';

function App() {
  return (
    <>
      <DownloadPDF>
        <Proposal
          title="Design &amp; Development Proposal"
          date="July 23, 2019"
        />
      </DownloadPDF>
      <button onClick={() => { window.print() }}>Save via Browser API</button>
    </>
  );
}

export default App;
