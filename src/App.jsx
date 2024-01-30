import { useState } from 'react';
import './App.css';

function App() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const register = async () => {

  }

  const login = async () => {

  }

  const logout = async () => {

  }

  return (
    <div className="App">
      <div>
        <h3> Register User </h3>
        <input type="text" placeholder='Email..' onChange={(event) => {setRegisterEmail(event.target.value)}} />
        <input type="text" placeholder='Password..' onChange={(event => {setRegisterPassword(event.target.value)})} />
      </div>
      <div>
        <h3> Login User </h3>
        <input type="text" placeholder='Email..' onChange={(event) => {setLoginEmail(event.target.value)}} />
        <input type="text" placeholder='Password..' onChange={(event) => {setLoginPassword(event.target.value)}} />
        <button> Login </button>
      </div>

      <h4>User Logged In: </h4>

      <button> Sign Out  </button>
    </div>
  );
}

export default App;
