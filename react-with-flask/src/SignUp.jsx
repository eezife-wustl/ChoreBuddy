import { useState } from "react";
import { app, auth } from './config/firebase';
import { createUserWithEmailAndPassword  } from "firebase/auth";

function SignUp() {
      const [username, setUserName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
    // To create the user with email and password
    const handleUser = async (e) => {
      e.preventDefault();
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('User created successfully');
        } catch (err) {
          console.error(err);
        }
      }

     return (    
        <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleUser}>
          <label>Username: 
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)} required />
          </label>
          <label>Email:
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>Password:
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <label> Confirm PW:
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
     );
    }

export default SignUp;