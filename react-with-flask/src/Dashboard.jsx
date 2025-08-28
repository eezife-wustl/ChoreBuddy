import { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { app, auth } from './config/firebase';
import { createUserWithEmailAndPassword  } from "firebase/auth";
import SignUp from './SignUp.jsx';
import Login from "./Login.jsx";

function Dashboard() {
  return (
  <>
    <h1 style={{ padding: 20 }}>ChoreBuddy</h1>
    <SignUp />
    <Login />
  </>
  );
}

export default Dashboard;
