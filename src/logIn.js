import './App.css';

function logIn() {
  return (
    <div class="entry">
        <label for="user">Username</label>
        <input type="text" placeholder="Enter Username" required></input>

        <label for="pass">Password</label>
        <input type="text" placeholder="Enter Password" required></input>

        <button type="submit">Login</button>
        <label type="checkbox" checked="checked">Remember Me</label>

        <button type="submit">Forgot Password</button>
        <button type="submit" a href ="./signUp">Sign Up</button>
    </div>
  );
}

export default logIn;