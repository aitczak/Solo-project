import React, { useEffect, useState } from 'react';
import Totals from './totalsDisplay';
import Bookshelf from './bookshelfDisplay';

const Top = ({ totalPages }) => {
  const [totalBooks, setTotalBooks] = useState(4);
  const [covers, setCovers] = useState([
    9780399208539, 9780060256678, 9781852275501,
  ]);
  const [newISBN, setNewISBN] = useState('');

  const handleInputChange = (e) => {
    setNewISBN(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (newISBN) {
      const updatedCovers = [...covers, newISBN];
      setCovers(updatedCovers);
      setNewISBN(''); // Clear the input after submission
      const newTotal = totalBooks + 1;
      setTotalBooks(newTotal);
    }
  }

  // put render logic here
  return (
    <div>
      <div id='top-container'>
        <h1 id='header'>Welcome to Our Reading Journey</h1>
        <Totals totalBooks={totalBooks} totalPages={totalPages} />
        <Bookshelf
          totalBooks={totalBooks}
          covers={covers}
          newISBN={newISBN}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Top;
