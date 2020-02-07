import React from 'react';
import './App.css';

function onClick(e) {
  console.log(e);
}

function App() {
  return (
    <div className="App">

      <h1>Helicopter Shark</h1>

      <p>Detect misinformation in a few taps! Get started by uploading an image</p>

      <form action="">
        <div>
          <input type="file"/>
        </div>

        <div>
          <button type="button" onClick={onClick}>Go</button>
        </div>

      </form>

    </div>
  );
}

export default App;
