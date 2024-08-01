import React, { useEffect, useState } from 'react';
import Top from './components/topContainer';
import Bottom from './components/bottomContainer';

const Main = (props) => {
  const [totalPages, setTotalPages] = useState(304);
  const [newPages, setNewPages] = useState('');
  const [bookTitleEntry, setBookTitleEntry] = useState('');
  const [dateEntry, setDateEntry] = useState('');
  const [studentName, setStudentName] = useState('');
  const [entries, setEntries] = useState([]);
  const [totalBooks, setTotalBooks] = useState(4);
  const [covers, setCovers] = useState([]);
  const [newISBN, setNewISBN] = useState('');
  const [deleteISBN, setDeleteISBN] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/getAll')
      .then((response) => response.json())
      .then((data) => {
        setEntries([...entries, ...data]);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/getCovers')
      .then((response) => response.json())
      .then((data) => {
        // console.log('data in fetch for all covers', data);
        // console.log('current covers before adding new one', covers);
        const newCovers = covers.concat(data);
        // console.log('newCovers: ', newCovers);
        const newTotal = newCovers.length;
        setTotalBooks(newTotal);
        setCovers(newCovers);
      });
  }, []);

  useEffect(() => {
    // console.log('covers updated:', covers);
  }, [covers]);

  const handleInputChange = (e) => {
    setNewISBN(e.target.value);
  };

  const handleDeleteInputChange = (e) => {
    setDeleteISBN(e.target.value);
  };

  function handleDeleteSubmit(e) {
    e.preventDefault();
    if (deleteISBN) {
      const isbnToDelete = {
        ISBN: parseInt(deleteISBN),
      };
      fetch('http://localhost:3001/deleteCover', {
        method: 'DELETE',
        body: JSON.stringify(isbnToDelete),
        headers: { 'Content-Type': 'application/json' },
      });
      setDeleteISBN('');
      fetch('http://localhost:3001/getCovers')
        .then((response) => response.json())
        .then((data) => {
          const newCovers = data;
          //   console.log('newCovers after deleting :', newCovers);
          setCovers(newCovers);
          const newTotal = newCovers.length;
          setTotalBooks(newTotal);
        });
    }
  }

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
      const updatedCovers = [...covers, parseInt(newISBN)];
      //   console.log('uptadedCovers after adding one: ', updatedCovers);
      setCovers(updatedCovers);
      setNewISBN(''); // Clear the input after submission
      const newTotal = totalBooks + 1;
      setTotalBooks(newTotal);
    }
  }
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
      const increaseTotalPages = {
        totalPages: totalPages,
        updatedPages: parseInt(totalPages) + parseInt(newPages),
      };
      fetch('http://localhost:3001/updatePages', {
        method: 'PUT',
        body: JSON.stringify(increaseTotalPages),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('newTotalPages in fetch :', data);
          setTotalPages(data);
        });

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
          <Top
            totalPages={totalPages}
            totalBooks={totalBooks}
            covers={covers}
            newISBN={newISBN}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            handleDeleteSubmit={handleDeleteSubmit}
            handleDeleteInputChange={handleDeleteInputChange}
            deleteISBN={deleteISBN}
          />
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
