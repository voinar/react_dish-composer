import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import { Wrapper, Title } from './components/Title/styles';

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Title>
              Edit <code>src/App.tsx</code> and save to reload.
            </Title>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Wrapper>
    </Provider>
  );
}

export default App;
