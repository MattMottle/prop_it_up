import Personcard from './components/Personcard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Personcard
        firstName={ 'Jane' }
        lastName={ 'Doe' }
        initialAge={ 45 }
        hairColor={ 'Black' } />
      <Personcard
        firstName={ 'John' }
        lastName={ 'Smith' }
        initialAge={ 88 }
        hairColor={ 'Brown' } />
      <Personcard
        firstName={ 'Millard' }
        lastName={ 'Fillmore' }
        initialAge={ 50 }
        hairColor={ 'Brown' } />
      <Personcard
        firstName={ 'Maria' }
        lastName={ 'Smith' }
        initialAge={ 62 }
        hairColor={ 'Black' } />
      <Personcard
        firstName={ 'Brad' }
        lastName={ 'Johnson' }
        initialAge={ 42 }
        hairColor={ 'Black' } />
      <Personcard
        firstName={ 'Matt' }
        lastName={ 'Locksmith' }
        initialAge={ 37 }
        hairColor={ 'Red' } />
    </div>
  );
}

export default App;
