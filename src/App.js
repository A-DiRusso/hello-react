
//just like node require in node.js code
//syntax is "ES6 style imports" (as opposed to calling require() )
import React from 'react';    //Pull in the react library this will be at the top of every .js file
//import logo from './logo.svg'; //import an image this makes the image more preformant with react
import './App.css';            //Recomendation: no individual style files. just use index.css
// import Greet from './Greet';
// import Counter from './Counter';
import ClickyCounter from './ClickyCounter';
import DecrementCounter from './DecrementCounter';

// "App" is an arbertrary name - App is a component
// A component is a function that returns a React Element
// A React Element is a description of a
//DOM element (or tree)
// The most common way to specify a React Element is to use JSX
function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* <Greet whom="👹" />
          <Greet /> */}
          {/* <Counter /> */}
          <ClickyCounter />
          <DecrementCounter />
        
          {/* this is a comment in JSX*/}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click the Button!!!!
        </a>
      </header>
    </div>
  );
}

//One react compontet per page
//same as module.exports
export default App;
