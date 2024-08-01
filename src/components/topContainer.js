import React, { useEffect, useState } from 'react';
import Totals from './totalsDisplay';
import Bookshelf from './bookshelfDisplay';

const Top = ({ totalPages }) => {
  const [totalBooks, setTotalBooks] = useState(4);
  const [covers, setCovers] = useState([]);
  const [newISBN, setNewISBN] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/getCovers')
      // .then((response) => response.json())
      .then((data) => {
        console.log('data in fetch for all covers', data);
        const newCovers = covers.concat([data]);
        setCovers(newCovers);
      });
  }, []);

  const handleInputChange = (e) => {
    setNewISBN(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (newISBN) {
      const newCoverDoc = {
        ISBN: parseInt(newISBN),
      };
      fetch('http://localhost:3001/newCover', {
        method: 'POST',
        body: JSON.stringify(newCoverDoc),
        headers: { 'Content-Type': 'application/json' },
      });
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
