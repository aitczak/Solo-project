import React, { useEffect, useState } from 'react';
import Top from './components/topContainer';
import Bottom from './components/bottomContainer';

const Main = (props) => {
  const [totalPages, setTotalPages] = useState(0);
  const [newPages, setNewPages] = useState('');
  const [bookTitleEntry, setBookTitleEntry] = useState('');
  const [dateEntry, setDateEntry] = useState('');
  const [studentName, setStudentName] = useState('');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/getAll')
      .then((response) => response.json())
      .then((data) => {
        setEntries([...entries, ...data]);
      });
  }, []);

  const handleLogInputChange = (e) => {
    setNewPages(e.target.value);
  };
  const handleBookInputChange = (e) => {
    setBookTitleEntry(e.target.value);
  };
  const handleDateInputChange = (e) => {
    setDateEntry(e.target.value);
  };
  const handleNameInputchange = (e) => {
    setStudentName(e.target.value);
  };
  function handleLogSubmit(e) {
    e.preventDefault();
    if (newPages) {
      const updatedPages = parseInt(totalPages) + parseInt(newPages);
      setTotalPages(updatedPages);
      const newEntry = {
        name: studentName,
        pages: newPages,
        book: bookTitleEntry,
        date: dateEntry,
      };
      fetch('http://localhost:3001/newEntry', {
        method: 'POST',
        body: JSON.stringify(newEntry),
        headers: { 'Content-Type': 'application/json' },
      });

      setEntries([
        ...entries,
        {
          name: studentName,
          pages: newPages,
          book: bookTitleEntry,
          date: dateEntry,
        },
      ]);
      setNewPages(''); // Clear the input after submission
      setBookTitleEntry('');
      setDateEntry('');
      setStudentName('');
    }
  }

  // put render logic here
  return (
    <div>
      <div id='main-container'>
        <div id='main'>
          <Top totalPages={totalPages} />
          <Bottom
            newPages={newPages}
            totalPages={totalPages}
            bookTitleEntry={bookTitleEntry}
            dateEntry={dateEntry}
            studentName={studentName}
            entries={entries}
            handleLogSubmit={handleLogSubmit}
            handleLogInputChange={handleLogInputChange}
            handleBookInputChange={handleBookInputChange}
            handleDateInputChange={handleDateInputChange}
            handleNameInputChange={handleNameInputchange}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
