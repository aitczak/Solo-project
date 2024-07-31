import React, { useEffect, useState } from 'react';
import Totals from './totalsDisplay';
import Bookshelf from './bookshelfDisplay';

const Top = (props) => {
  const [totalBooks, setTotalBooks] = useState(4);
  // put render logic here
  return (
    <div>
      <div id='top-container'>
        <h1 id='header'>Welcome to Our Reading Journey</h1>
        <Totals totalBooks={totalBooks} />
        <Bookshelf totalBooks={totalBooks} />
      </div>
    </div>
  );
};

export default Top;
