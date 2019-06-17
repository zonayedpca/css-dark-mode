import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const getLocalStorage = () => {
    const mode = window.localStorage.getItem('dark-mode');
    if(mode) {
      return JSON.parse(mode);
    } else {
      return false;
    }
  }

  const [darkMode, setDarkMode] = useState(getLocalStorage());

  const setMode = () => {
    setDarkMode(!darkMode);
    setLocalStorage(!darkMode);
  }

  const setLocalStorage = mode => {
    window.localStorage.setItem('dark-mode', mode);
  }

  return (
    <div data-mode={darkMode ? "dark" : "none"} className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div onClick={() => setMode()} className={`switch ${darkMode && `dark`}`}></div>
        <p>A Simple React App Featuring Dark Mode</p>
      </header>
      <section>
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.</p>
        <h3>Component-Based</h3>
        <p>Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
        <h3>Learn Once, Write Anywhere</h3>
        <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.</p>
        <h3>A Simple Component</h3>
        <p>React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props. JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.</p>
        <h3>A Stateful Component</h3>
        <p>In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().</p>
        <h3>An Application</h3>
        <p>Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.</p>
      </section>
    </div>
  );
}

export default App;
