import '../App.css';

function logIn() {
  

  // submit function send token to backend if its in local storage
  async function handleSubmit(e) {
      const response = await fetch(`http://localhost:5000/authentication/`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
      })
  
      const data = await response.json()
  
      if (response.status === 200) {
          setCurrentUser(data.user)
          localStorage.setItem('token', data.token)
          history.push(`/`)
      } else {
          setErrorMessage(data.message)
      }}
  



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