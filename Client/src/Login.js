
import { useState } from 'react';

function Login() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  let submit = (e) => {
    e.preventDefault();
    console.warn({username,password});
    let data = {username,password}
    
    // api to be inserted

    setUsername("");
    setPassword("");
  }

  return(
    <div className="Login">
        <header>Login Page</header>
        <form onSubmit={submit}>
            <section class="one-side">
                Username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
                Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
            </section>
                <input id="login_btn" type="submit" value="login"/>
        </form>
    </div>
  );


}

export default Login;
