import { useContext, useRef } from "react";
import { Link } from 'react-router-dom';

import "./login.css";
import { loginCall } from "../../loginCall";
import { AuthContext } from "../../context/AuthContext";
import Logo from './logo.png'
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const username = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { username: username.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    // <div classNameName="login">
    //   <div classNameName="loginWrapper">
    //     <div classNameName="loginLeft">
    //       <h3 classNameName="loginLogo">Swapo</h3>
    //       <span classNameName="loginDesc">
    //         Web app that connects many service providers and those who give their services to each other by swap their knowledge and expertise.
    //       </span>
    //     </div>
    //     <div classNameName="loginRight">
    //       <form classNameName="loginBox" onSubmit={handleClick}>
    //         <input
    //           placeholder="Username"
    //           type="text"
    //           required
    //           classNameName="loginInput"
    //           ref={username}
    //         />
    //         <input
    //           placeholder="Password"
    //           type="password"
    //           required
    //           minLength="6"
    //           classNameName="loginInput"
    //           ref={password}
    //         />
    //         <button classNameName="loginButton" type="submit" disabled={isFetching}>
    //           {isFetching ? (
    //             <CircularProgress color="white" size="20px" />
    //           ) : (
    //             "Log In"
    //           )}
    //         </button>
    //         <button classNameName="loginRegisterButton">
    //           {isFetching ? (
    //             <CircularProgress color="white" size="20px" />
    //           ) : (
    //             "Create a New Account"
    //           )}
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>


    ///
    // <div>
    //   <div className="container">
    //     <div className="d-flex justify-content-center h-100">
    //       <div className="card">
    //         <div className="card-header">
    //           <h3>Sign In</h3>
    //           <div className="d-flex justify-content-end social_icon">
    //             <span><i className="fab fa-facebook-square"></i></span>
    //             <span><i className="fab fa-google-plus-square"></i></span>
    //             <span><i className="fab fa-twitter-square"></i></span>
    //           </div>
    //         </div>
    //         <div className="card-body">
    //           <form onSubmit={handleClick}>
    //             <div className="input-group form-group">
    //               <div className="input-group-prepend">
    //                 <span className="input-group-text"><i className="fas fa-user"></i></span>
    //               </div>
    //               <input type="text" className="form-control" placeholder="username" required ref={username} />

    //             </div>
    //             <div className="input-group form-group">
    //               <div className="input-group-prepend">
    //                 <span className="input-group-text"><i className="fas fa-key"></i></span>
    //               </div>
    //               <input type="password" className="form-control" placeholder="password" minLength="6" ref={password} />
    //             </div>
    //             <div className="row align-items-center remember">
    //               <input type="checkbox" />Remember Me
    //             </div>
    //             <div className="form-group">
    //               <input type="submit" value="Login" className="btn float-right login_btn" disabled={isFetching} />

    //             </div>
    //           </form>
    //         </div>
    //         <div className="card-footer">
    //           <div className="d-flex justify-content-center links">
    //             Don't have an account?<a href="#">Sign Up</a>
    //           </div>
    //           <div className="d-flex justify-content-center">
    //             <a href="#">Forgot your password?</a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="login-wrap">
    //   <div className="login-html">
    //     <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab">Sign In</label>
    //     <input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" className="tab">Sign Up</label>
    //     <div className="login-form">
    //       <div className="sign-in-htm">
    //         <div className="group">
    //           <label for="user" className="label">Username</label>
    //           <input id="user" type="text" className="input" />
    //         </div>
    //         <div className="group">
    //           <label for="pass" className="label">Password</label>
    //           <input id="pass" type="password" className="input" data-type="password" />
    //         </div>
    //         <div className="group">
    //           <input id="check" type="checkbox" className="check" checked />
    //           <label for="check"><span className="icon"></span> Keep me Signed in</label>
    //         </div>
    //         <div className="group">
    //           <input type="submit" className="button" value="Sign In" />
    //         </div>
    //         <div className="hr"></div>
    //         <div className="foot-lnk">
    //           <a href="#forgot">Forgot Password?</a>
    //         </div>
    //       </div>
    //       <div className="sign-up-htm">
    //         <div className="group">
    //           <label for="user" className="label">Username</label>
    //           <input id="user" type="text" className="input" />
    //         </div>
    //         <div className="group">
    //           <label for="pass" className="label">Password</label>
    //           <input id="pass" type="password" className="input" data-type="password" />
    //         </div>
    //         <div className="group">
    //           <label for="pass" className="label">Repeat Password</label>
    //           <input id="pass" type="password" className="input" data-type="password" />
    //         </div>
    //         <div className="group">
    //           <label for="pass" className="label">Email Address</label>
    //           <input id="pass" type="text" className="input" />
    //         </div>
    //         <div className="group">
    //           <input type="submit" className="button" value="Sign Up" />
    //         </div>
    //         {/* <div className="hr"></div> */}
    //         {/* <div className="foot-lnk">
    //       <label for="tab-1">Already Member?</a>
    //     </div> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>


    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <form onSubmit={handleClick} >
        <div className="card card0 border-0">
          <div className="row d-flex">
            <div className="col-lg-6">
              <div className="card1 pb-5">
                <div className="row"> <img src={Logo} className="logoLogin" /> </div>
                <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" className="image" /> </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card2 card border-0 px-4 py-5">
                <div className="row mb-4 px-3"><larg className="font-weight-bold">
                  <h6 className="mb-0 mr-4 mt-2">Sign in with</h6></larg>
                  <div className="facebook text-center mr-3">

                    <div className="fa fa-facebook"></div>
                  </div>
                  <div className="twitter text-center mr-3">
                    <div className="fa fa-google"></div>

                  </div>

                </div>
                <div className="row px-3 mb-4">
                  <div className="line"></div> <small className="or text-center">Or</small>
                  <div className="line"></div>
                </div>
                <div className="row px-3"> <label className="mb-1">
                  <h6 className="mb-0 text-sm">User name</h6>
                </label> <input className="mb-4" type="text" name="username" placeholder="Enter Username" required ref={username} /> </div>
                <div className="row px-3"> <label className="mb-1">
                  <h6 className="mb-0 text-sm">Password</h6>
                </label> <input type="password" name="password" placeholder="Enter password"
                  required
                  minLength="6"
                  ref={password} /> </div>
                <div className="row px-3 mb-4">
                  <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input" /> <label for="chk1" className="custom-control-label text-sm">Remember me</label> </div>
                </div>
                <div className="row mb-3 px-3" ><Link to='home'> <button type="submit" className="btn btn-blue text-center" disabled={isFetching} >Login</button></Link> </div>
                <div className="row mb-4 px-3"> <larg className="font-weight-bold">Don't have an account? <Link className="text-danger " to="/register">Register</Link> </larg> </div>
              </div>
            </div>
          </div>

        </div>
      </form>
    </div>

  );
}

