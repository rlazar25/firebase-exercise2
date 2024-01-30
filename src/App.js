import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import './App.css';
import { auth } from './config/firebase-config';

function App() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
 
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  const register = async () => {
    try{
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    } catch (error){
      console.log(error.message)
    }
  }

  const login = async () => {
    try{
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
    } catch (error){
      console.log(error.message)
    }
  }

  const logout = async () => {
     await signOut(auth) 
  }

  return (
    <div className="App">
      <div>
        <h3> Register User </h3>
        <input type="text" placeholder='Email..' onChange={(event) => {setRegisterEmail(event.target.value)}} />
        <input type="text" placeholder='Password..' onChange={(event => {setRegisterPassword(event.target.value)})} />
        <button onClick={register}> Create User </button>
      </div>
      <div>
        <h3> Login User </h3>
        <input type="text" placeholder='Email..' onChange={(event) => {setLoginEmail(event.target.value)}} />
        <input type="text" placeholder='Password..' onChange={(event) => {setLoginPassword(event.target.value)}} />
        <button onClick={login}> Login </button>
        {/* dodavanjem login funkcije program puca */}
      </div>

      <h4>User Logged In: {user?.email} </h4>

      <button onClick={logout}> Sign Out  </button>
    </div>
  );
}
export default App;
