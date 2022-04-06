import {useEffect, useState} from 'react'
import Web3Modal from "web3modal";

import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const initWeb3 = async () => {
    const providerOptions = {
      /* See Provider Options Section */
    };

    const web3Modal = new Web3Modal({
      network: "https", // optional
      cacheProvider: true, // optional
      providerOptions // required
    });

    const provider = await web3Modal.connect();

    const web3 = new Web3(provider || 'http://localhost:8545')
    web3.eth.getAccounts().then(console.log);
  }

  useEffect(() => {
    initWeb3();
  }, [initWeb3]);

  /* =========
     Render
     ========= */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
