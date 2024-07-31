import React, { useEffect, useState } from 'react';

const Totals = ({ totalBooks }) => {
  // put render logic here
  return (
    <div>
      <div id='totals'>
        <h2 id='totalBooks'>Total Books: {totalBooks}</h2>
        <h2 id='totalPages'>Total Pages: </h2>
      </div>
    </div>
  );
};

export default Totals;
