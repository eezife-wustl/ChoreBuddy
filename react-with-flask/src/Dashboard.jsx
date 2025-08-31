import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { auth } from './config/firebase';
import { signOut } from "firebase/auth";

function Dashboard() {
  // useNavigate hook allows programmatic navigation to different routes
  // We'll use this to redirect user to home page after logout
  const navigate = useNavigate();

  // Logout function that signs user out and redirects them
  const handleLogout = async () => {
    try {
      // Firebase signOut function clears the user's authentication session
      await signOut(auth);
      alert("Logged out successfully");
      
      // After successful logout, redirect user back to home page
      // This ensures they see the login/signup forms again
      navigate("/home");
    } catch (error) {
      // Handle any errors that might occur during logout process
      console.error("Error logging out: ", error);
    }
  };

  return (
    <>
      {/* Main dashboard header - welcomes the authenticated user */}
      <h1 style={{ padding: 20 }}>Welcome to Your ChoreBuddy Dashboard!</h1>
      <p>Here you can manage your chores, view your streak, and more!</p>
      
      {/* 
        Placeholder section for future ChoreBuddy features
        This shows users what functionality will be available in the full app
      */}
      <div style={{ padding: 20 }}>
        <h2>Coming Soon:</h2>
        <ul>
          <li>View your chores for the week</li>
          <li>Check off completed chores</li>
          <li>View your chore streak</li>
          <li>Join or create chore groups</li>
          <li>Manage group assignments (if you're a group leader)</li>
        </ul>
      </div>
      
      {/* 
        Logout button - allows user to sign out and return to login page
        Uses handleLogout function which clears authentication and redirects
      */}
      <button onClick={handleLogout} style={{ padding: 10, margin: 20 }}>
        Logout
      </button>
    </>
  );
}

export default Dashboard;
