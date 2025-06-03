import { useState } from 'react';
import Converter from './Converter';
import Converter2 from './Converter_v2';
import './App.css';

function App() {

  const [version, setVersion] = useState(true)

  function version1 () {
    setVersion(true)
  }

  function version2 () {
    setVersion(false)
  }

  return (
    <div className="App">
      <h1>Binary Converter App</h1>
      <button onClick={version1}>Version 1</button>
      <button onClick={version2}>Version 2</button>
      {version ? <Converter></Converter> : <Converter2></Converter2>}
    </div>
  );
}

export default App;
