import React, { useEffect, useState } from 'react';
import Chat from './chatDisplay';
import Log from './logDisplay';

const Bottom = (props) => {
  // put render logic here
  return (
    <div>
      <div id='bottom-container'>
        <Log />
        <Chat />
      </div>
    </div>
  );
};

export default Bottom;

/* 
        <Log/>
        <Chat/>
*/
