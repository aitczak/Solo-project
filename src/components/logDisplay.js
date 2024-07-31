import React, { useEffect, useState } from 'react';

const Log = (props) => {
  const [urls, updateUrls] = useState([]);

  // put render logic here
  return (
    <div>
      <div id='log'>
        <p>This is the Log</p>
      </div>
    </div>
  );
};

export default Log;
