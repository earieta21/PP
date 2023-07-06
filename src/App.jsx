import { useState } from 'react';
import './App.css';
import { puppyList } from './data.js';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(puppyId) {
    setFeatPupId(puppyId);
  }

  return (
    <div className='App'>
      {puppies.map((puppy) => (
        <p onClick={() => handleClick(puppy.id)} key={puppy.id}>
          {puppy.name}
        </p>
      ))}
      {featPupId && (
        <div>
          <h2>{puppies.find((puppy) => puppy.id === featPupId)?.name}</h2>
          <ul>
            <li>Age: {puppies.find((puppy) => puppy.id === featPupId)?.age}</li>
            <li>Email: {puppies.find((puppy) => puppy.id === featPupId)?.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
