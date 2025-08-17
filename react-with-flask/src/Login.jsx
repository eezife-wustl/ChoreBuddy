import { useState } from "react";
import { app, auth } from './config/firebase';
import { signInWithEmailAndPassword  } from "firebase/auth";

function Login() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
    // To create the user with email and password
    const handleUser = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('sign in successful');
        } catch (err) {
          console.error(err);
        }
      }

     return (    
        <div>
        <h2>Login</h2>
        <form onSubmit={handleUser}>
          <label>Email or Username:
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>Password:
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
     );
    }

export default Login;