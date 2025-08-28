import { useEffect, useState } from "react";
import "./App.css";
import { app, auth } from './config/firebase';
import { createUserWithEmailAndPassword  } from "firebase/auth";
import SignUp from './SignUp.jsx';
import Login from "./Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./Dashboard.jsx";

// const Dashboard = () => <h1>Dashboard (private) </h1>

function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<h1 style={{ padding: 20 }}>ChoreBuddy</h1>} />
      <Route path="/home" element={
        <div>
          <SignUp />
          <Login />
        </div>
      } />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </>
  );
}

export default App;
