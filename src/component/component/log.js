import "./log.css";

function Login() {
  return (
    <div className="main">
      <div class="box">
        <form autocomplete="off">
          <h2>Sign in</h2>
          <div class="inputBox">
            <input type="text" required="required" />
            <span>Userame</span>
            <i></i>
          </div>
          <div class="inputBox">
            <input type="password" required="required" />
            <span>Password</span>
            <i></i>
          </div>
          <div class="links">
            <a href="#">Forgot Password ?</a>
            <a href="#">Signup</a>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default Login;