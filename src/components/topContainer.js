import React, { useEffect, useState } from 'react';
import Totals from './totalsDisplay';
import Bookshelf from './bookshelfDisplay';

const Top = ({
  totalPages,
  totalBooks,
  covers,
  newISBN,
  handleInputChange,
  handleSubmit,
  handleDeleteInputChange,
  handleDeleteSubmit,
  deleteISBN,
}) => {
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
          handleDeleteInputChange={handleDeleteInputChange}
          handleDeleteSubmit={handleDeleteSubmit}
          deleteISBN={deleteISBN}
        />
      </div>
    </div>
  );
};

export default Top;
