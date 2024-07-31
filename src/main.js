import React, { useEffect, useState } from 'react';
import Top from './components/topContainer';
import Bottom from './components/bottomContainer';

const Main = (props) => {
  // put render logic here
  return (
    <div>
      <div id='main-container'>
        <div id='main'>
          <Top />
          <Bottom />
        </div>
      </div>
    </div>
  );
};

export default Main;
