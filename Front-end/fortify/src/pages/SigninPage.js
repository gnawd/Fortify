const SignInPage = () => {
    return <div class="background">
    <div class="wrap">
  <h2>Welcome back!</h2>
  <form action="#">
    <div class="input-box">
      <input type="text" placeholder="Enter your name" required />
    </div>

    <div class="input-box">
      <input type="text" placeholder="Enter your email" required />
    </div>
    
    <div class="input-box">
      <input type="password" placeholder="Create password" required />
    </div>
    
    <div class="input-box">
      <input type="password" placeholder="Confirm password" required />
    </div>
    <div class="text">
      <h3>Don't have an account? <a href="">Sign up here</a></h3>
    </div>
    </form>
    </div>
  </div>
  }
  export default SignInPage