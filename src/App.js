import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted className="Background">
        <source src={`${process.env.PUBLIC_URL}/background.mp4`} type="video/mp4" />
      </video>

      <header className="App-header">
        <nav className="circle-nav">
          <ul>
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
            <li><a href="#">Item 4</a></li>
            <li><a href="#">Item 5</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;