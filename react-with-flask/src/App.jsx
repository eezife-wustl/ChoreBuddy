import { useEffect, useState } from "react";
import "./App.css";
import { auth } from './config/firebase.jsx';
import { onAuthStateChanged } from "firebase/auth";
import SignUp from './SignUp.jsx';
import Login from "./Login.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";

function App() {
  // State to track the currently authenticated user (null if not logged in)
  const [user, setUser] = useState(null);
  
  // Loading state to prevent premature routing decisions while Firebase checks auth status
  const [loading, setLoading] = useState(true);

  // Set up Firebase authentication state listener
  useEffect(() => {
    // onAuthStateChanged fires whenever user logs in, logs out, or on page load
    // This ensures our app always knows the current authentication status
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // currentUser will be null if not logged in, or user object if logged in
      setUser(currentUser);
      setLoading(false); // Authentication status has been determined
    });
    
    // Cleanup function: unsubscribe from auth listener when component unmounts
    // This prevents memory leaks and unnecessary Firebase listeners
    return () => unsubscribe();
  }, []); // Empty dependency array means this effect runs only once on mount

  // Show loading message while Firebase determines authentication state
  // This prevents flickering between login/dashboard before auth status is known
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* 
          ROOT ROUTE ("/") - Smart redirect based on authentication status
          - If user is logged in: redirect to dashboard
          - If user is not logged in: redirect to home page with login/signup forms
          This ensures users always land in the right place based on their auth status
        */}
        <Route 
          path="/" 
          element={user ? <Navigate to="/dashboard" /> : <Navigate to="/home" />} 
        />
        
        {/* 
          HOME ROUTE ("/home") - Login and Signup page
          - If user is already logged in: redirect to dashboard (no need to see login forms)
          - If user is not logged in: show welcome message with Login and Signup components
          This is where new users will sign up and existing users will log in
        */}
        <Route 
          path="/home" 
          element={
            user ? (
              <Navigate to="/dashboard" />
            ) : (
              <div>
                <h1 style={{ padding: 20 }}>Welcome to ChoreBuddy</h1>
                <SignUp />
                <Login />
              </div>
            )
          } 
        />
        
        {/* 
          DASHBOARD ROUTE ("/dashboard") - Protected route for authenticated users
          - If user is logged in: show the Dashboard component with user's chores, groups, etc.
          - If user is not logged in: redirect to home page to log in first
          This is the main app interface where users manage their chores and groups
        */}
        <Route 
          path="/dashboard" 
          element={user ? <Dashboard /> : <Navigate to="/home" />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
