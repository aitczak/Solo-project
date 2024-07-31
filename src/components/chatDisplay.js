import React, { useEffect, useState } from 'react';

const Chat = (props) => {
  const [urls, updateUrls] = useState([]);

  // put render logic here
  return (
    <div>
      <div id='chat'>
        <p>This is the chat</p>
      </div>
    </div>
  );
};

export default Chat;
