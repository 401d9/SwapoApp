import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../loginCall";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import Slider from "../../components/Slider/Slider.jsx";

export default function Login() {
  const username = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { username: username.current.value, password: password.current.value },
      dispatch
    );
    history.push("/home");
  };
 
  const handleCreate = (e) => {
    e.preventDefault();
    history.push("/register");
  };

  return (
    /*     <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Swapo</h3>
          <span className="loginDesc">
            Web app that connects many service providers and those who give their services to each other by swap their knowledge and expertise.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              type="text"
              required
              className="loginInput"
              ref={username}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <button onClick={handleCreate} className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  ); */
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">

     <div className="row-main">
                  {" "}
                  <img src={Logo} className="logoLogin" />{" "}
                </div>
      <form onSubmit={handleClick}>
        <div className="cardA card0 border-0">
          <div className="row-login d-flex">
            <div className="col-lg-6 ">
              <div className="card1 pb-5">
                {/* <div className="row-main">
                  {" "}
                  <img src={Logo} className="logoLogin" />{" "}
                </div> */}
                {/* <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" className="image" /> </div> */}
                <Slider />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card2  border-0 px-4 py-5">
                <div className="row mb-4 px-3">
                  <larg className="font-weight-bold">
                    <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                  </larg>
                  <div className="facebook text-center mr-3">
                    <div className="fa fa-facebook"></div>
                  </div>
                  <div className="twitter text-center mr-3">
                    <div className="fa fa-google"></div>
                  </div>
                </div>
                <div className="row px-3 mb-4">
                  <div className="line"></div>{" "}
                  <small className="or text-center">Or</small>
                  <div className="line"></div>
                </div>
                <div className="row px-3">
                  {" "}
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">User name</h6>
                  </label>{" "}
                  <input
                    className="mb-4 loginInput"
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    required
                    ref={username}
                  />{" "}
                </div>
                <div className="row px-3">
                  {" "}
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">Password</h6>
                  </label>{" "}
                  <input
                    className="loginInput"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required
                    minLength="6"
                    ref={password}
                  />{" "}
                </div>
                <div className="row px-3 mb-4">
                  <div className="custom-control custom-checkbox custom-control-inline">
                    {" "}
                    <input
                      id="chk1"
                      type="checkbox"
                      name="chk"
                      className="custom-control-input loginInput"
                    />{" "}
                    <label for="chk1" className="custom-control-label text-sm">
                      Remember me
                    </label>{" "}
                  </div>
                </div>
                <div className="row1 mb-3 px-3">
                  {" "}
                  <button
                    type="submit"
                    className="btn btn-blue text-center button-login"
                    disabled={isFetching}
                  >
                    Login
                  </button>{" "}
                </div>
                <div className="row1 mb-4 px-3">
                  {" "}
                  <larg className="font-weight-bold">
                    Don't have an account?{" "}
                    <Link className="text-danger " to="/register" style={{'color':'#FFA34C'}}>
                      Register
                    </Link>{" "}
                  </larg>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
