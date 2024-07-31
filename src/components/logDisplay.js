import React, { useEffect, useState } from 'react';

const Log = ({
  newPages,
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

  const LogEntries = entries.map((entryObj, index) => {
    return (
      <p
        className='logEntry'
        id={index}
      >{`${entryObj.name} read ${entryObj.pages} pages of ${entryObj.book} on ${entryObj.date}!`}</p>
    );
  });

  return (
    <div>
      <div id='log'>
        <p id='logHeader'>Look what we've been reading!</p>
        <div id='logEntries'>{LogEntries}</div>
        <form id='logInputs' onSubmit={handleLogSubmit}>
          <input
            className='studentName'
            type='text'
            placeholder='Name'
            value={studentName}
            onChange={handleNameInputChange}
          />
          <input
            className='numberOfPagesInput'
            type='text'
            placeholder='Number of pages'
            value={newPages}
            onChange={handleLogInputChange}
          />
          <input
            className='bookTitleInput'
            type='text'
            placeholder='Book title'
            value={bookTitleEntry}
            onChange={handleBookInputChange}
          />
          <input
            className='dateInput'
            type='text'
            placeholder='date'
            value={dateEntry}
            onChange={handleDateInputChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Log;
//    const colors = ['#6accf6', '#f6d56a']
