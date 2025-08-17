import { useEffect, useState } from "react";
import "./App.css";
import { app, auth } from './config/firebase';
import { createUserWithEmailAndPassword  } from "firebase/auth";
import SignUp from './SignUp.jsx';

function App() {
  return (
  <>
    <h1 style={{ padding: 20 }}>Hello from App</h1>
    <SignUp />
  </>
  );
}

export default App;
