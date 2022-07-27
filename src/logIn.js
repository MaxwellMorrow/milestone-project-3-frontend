import './App.css';

function logIn() {
  return (
    <div class="entry">
      <div class="welcomeContainer">
        <h2>Welcome</h2>
      </div>
        <label for="user">Username</label>
        <input class="input" type="text" placeholder="Enter Username" required></input>

        <label for="pass">Password</label>
        <input class="input" type="text" placeholder="Enter Password" required></input>

        <button class="styledButton" type="submit">Login</button>
        <label type="checkbox" checked="checked">Remember Me</label>

        <button class="styledButton" type="submit">Forgot Password</button>
        <button class="styledButton" type="submit" a href ="./signUp">Sign Up</button>
    </div>
  );
}

export default logIn;