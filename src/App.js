import React from 'react';
import Main from './main';
import Characters from './users.json';

const App = () => {
  return (
    <div id='screen'>
      <Main />
    </div>
  );
};

export default App;

/* 
return (
    <div style={styles.container}>
      <Main />
    </div>
  );
  return <h1>Hello React</h1>;
*/
