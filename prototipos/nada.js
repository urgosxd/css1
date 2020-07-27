const IndexPage = () => (
  <STY>
    <div className="login-container d-flex align-items-center justify-content-center  ">
      <form className="login-form text-center border">
        <h1 className="mb-5 font-weight-light text-uppercase ">Login</h1>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control rounded-pill form-control-lg"
            placeholder="Username"
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control rounded-pill form-control-lg "
            placeholder="Password"
          />
        </div>
        <div className="forgot-link text-left mb-3">
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input "
              id="flexCheckDefault"
            />
            <label htmlFor="flexCheckDefault" className="form-check-label ">
              Remenber Password
            </label>
          </div>
          <a href="#" className="text-decoration-none">
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="btn hola btn-primary btn-block rounded-pill form-control-lg"
        >
          Login
        </button>
        <p className="mt-3 font-weight-normal">
          Dont have an account
          <a href="#" className="text-decoration-none">
            {" "}
            Register Now
          </a>
        </p>
      </form>
    </div>
  </STY>
)

export const STY = styled.div`
  color: #666;
  .login-container {
    height: 100vh;
    width: 100%;
  }
  .login-form {
    max-width: 100%;
    width: 370px;
    padding: 25px;
    margin: auto;
  }
  .hola {
    background-color: green;
    border-color: green;
  }
`
