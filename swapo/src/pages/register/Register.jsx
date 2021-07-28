import axios from "axios";
import { useRef } from "react";
import Logo from "../login/logo.png";
import { Link } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import { useHistory } from "react-router";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        password: password.current.value,
        email: email.current.value,
      };
      try {
        await axios.post("/signup", user);
        history.push("/login");
        console.log("user", user);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="row">
                  {" "}
                  <img src={Logo} className="logoLogin" />{" "}
                </div>
      <form onSubmit={handleClick}>
        <div className="cardA card0 border-0">
          <div className="row d-flex">
            <div className="col-lg-6">
              <div className="card1 pb-5">
                {/* <div className="row">
                  {" "}
                  <img src={Logo} className="logoLogin" />{" "}
                </div> */}
                <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                  {" "}
                  {" "}
                </div>
                <Slider />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card2  border-0 px-4 py-5">
                <div className="row mb-4 px-3">
                  <larg className="font-weight-bold">
                    <h6 className="mb-0 mr-4 mt-2">Sign Up with</h6>
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
                    {/* <h6 className="mb-0 text-sm">Email</h6> */}
                  </label>{" "}
                  <input
                    className="mb-4 loginInput"
                    type="email"
                    name="email"
                    placeholder="Enter a valid Email"
                    required
                    ref={email}
                  />{" "}
                </div>
                <div className="row px-3">
                  {" "}
                  <label className="mb-1">
                    {/* <h6 className="mb-0 text-sm">User name</h6> */}
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
                    {/* <h6 className="mb-0 text-sm">Password</h6> */}
                  </label>{" "}
                  <input
                    className="mb-4 loginInput"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required
                    minLength="6"
                    ref={password}
                  />{" "}
                </div>
                <div className="row px-3 last">
                  {" "}
                  <label className="mb-1">
                    {/* <h6 className="mb-0 text-sm">Confirmed Password</h6> */}
                  </label>{" "}
                  <input
                    className="loginInput"
                    type="password"
                    name="passwordAgain"
                    placeholder="Confirmed Password "
                    required
                    minLength="6"
                    ref={passwordAgain}
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
                <div className="row mb-3 px-3">
                  <Link to="">
                    {" "}
                    <button
                      type="submit"
                      className="btn btn-blue text-center button-login"
                    >
                      Sign up
                    </button>
                  </Link>{" "}
                </div>
                <div className="row mb-4 px-3">
                  {" "}
                  <larg className="font-weight-bold">
                    You have an account?{" "}
                    <Link className="text-danger " to="/login">
                      Login
                    </Link>{" "}
                  </larg>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

















  //   <div className="login">
  //     <div className="loginWrapper">
  //       <div className="loginLeft">
  //         <h3 className="loginLogo">Swapo</h3>
  //         <span className="loginDesc">
  //         Web app that connects many service providers and those who give their services to each other by swap their knowledge and expertise.
  //         </span>
  //       </div>
  //       <div className="loginRight">
  //         <form className="loginBox" onSubmit={handleClick}>
  //           <input
  //             placeholder="Username"
  //             required
  //             ref={username}
  //             className="loginInput"
  //           />
  //           <input
  //             placeholder="Email"
  //             required
  //             ref={email}
  //             className="loginInput"
  //             type="email"
  //           />
  //           <input
  //             placeholder="Password"
  //             required
  //             ref={password}
  //             className="loginInput"
  //             type="password"
  //             minLength="6"
  //           />
  //           <input
  //             placeholder="Password Again"
  //             required
  //             ref={passwordAgain}
  //             className="loginInput"
  //             type="password"
  //           />
  //           <button className="loginButton" type="submit">
  //             Sign Up
  //           </button>
  //           <button onClick={handleIntoAccount} className="loginRegisterButton">Log into Account</button>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  );
}
