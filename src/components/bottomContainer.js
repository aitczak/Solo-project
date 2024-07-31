import React, { useEffect, useState } from 'react';
// import Chat from './chatDisplay';
import Log from './logDisplay';

const Bottom = ({
  newPages,
  totalPages,
  entries,
  bookTitleEntry,
  dateEntry,
  studentName,
  handleLogSubmit,
  handleLogInputChange,
  handleBookInputChange,
  handleDateInputChange,
  handleNameInputChange,
}) => {
  // put render logic here
  return (
    <div>
      <div id='bottom-container'>
        <Log
          newPages={newPages}
          totalPages={totalPages}
          bookTitleEntry={bookTitleEntry}
          dateEntry={dateEntry}
          studentName={studentName}
          handleLogSubmit={handleLogSubmit}
          handleLogInputChange={handleLogInputChange}
          handleBookInputChange={handleBookInputChange}
          handleDateInputChange={handleDateInputChange}
          handleNameInputChange={handleNameInputChange}
          entries={entries}
        />
      </div>
    </div>
  );
};

export default Bottom;

/* 
        <Log/>
        <Chat/>
*/
// {/* <Chat /> */}
