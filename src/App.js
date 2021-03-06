import React from 'react';
import Avatar from './components/Avatar'
import BadgeComponent from './components/BadgeComponent'

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Avatar/>
        </li>
        <li>
          <BadgeComponent/>
        </li>
      </ul>
    </div>
  );
}

export default App;
