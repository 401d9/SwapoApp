import { useContext, useRef } from "react";
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
    // <div className="login">
    //   <div className="loginWrapper">
    //     <div className="loginLeft">
    //       <h3 className="loginLogo">Swapo</h3>
    //       <span className="loginDesc">
    //         Web app that connects many service providers and those who give their services to each other by swap their knowledge and expertise.
    //       </span>
    //     </div>
    //     <div className="loginRight">
    //       <form className="loginBox" onSubmit={handleClick}>
    //         <input
    //           placeholder="Username"
    //           type="text"
    //           required
    //           className="loginInput"
    //           ref={username}
    //         />
    //         <input
    //           placeholder="Password"
    //           type="password"
    //           required
    //           minLength="6"
    //           className="loginInput"
    //           ref={password}
    //         />
    //         <button className="loginButton" type="submit" disabled={isFetching}>
    //           {isFetching ? (
    //             <CircularProgress color="white" size="20px" />
    //           ) : (
    //             "Log In"
    //           )}
    //         </button>
    //         <button className="loginRegisterButton">
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
    //   <div class="container">
    //     <div class="d-flex justify-content-center h-100">
    //       <div class="card">
    //         <div class="card-header">
    //           <h3>Sign In</h3>
    //           <div class="d-flex justify-content-end social_icon">
    //             <span><i class="fab fa-facebook-square"></i></span>
    //             <span><i class="fab fa-google-plus-square"></i></span>
    //             <span><i class="fab fa-twitter-square"></i></span>
    //           </div>
    //         </div>
    //         <div class="card-body">
    //           <form onSubmit={handleClick}>
    //             <div class="input-group form-group">
    //               <div class="input-group-prepend">
    //                 <span class="input-group-text"><i class="fas fa-user"></i></span>
    //               </div>
    //               <input type="text" class="form-control" placeholder="username" required ref={username} />

    //             </div>
    //             <div class="input-group form-group">
    //               <div class="input-group-prepend">
    //                 <span class="input-group-text"><i class="fas fa-key"></i></span>
    //               </div>
    //               <input type="password" class="form-control" placeholder="password" minLength="6" ref={password} />
    //             </div>
    //             <div class="row align-items-center remember">
    //               <input type="checkbox" />Remember Me
    //             </div>
    //             <div class="form-group">
    //               <input type="submit" value="Login" class="btn float-right login_btn" disabled={isFetching} />

    //             </div>
    //           </form>
    //         </div>
    //         <div class="card-footer">
    //           <div class="d-flex justify-content-center links">
    //             Don't have an account?<a href="#">Sign Up</a>
    //           </div>
    //           <div class="d-flex justify-content-center">
    //             <a href="#">Forgot your password?</a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div class="login-wrap">
    //   <div class="login-html">
    //     <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Sign In</label>
    //     <input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">Sign Up</label>
    //     <div class="login-form">
    //       <div class="sign-in-htm">
    //         <div class="group">
    //           <label for="user" class="label">Username</label>
    //           <input id="user" type="text" class="input" />
    //         </div>
    //         <div class="group">
    //           <label for="pass" class="label">Password</label>
    //           <input id="pass" type="password" class="input" data-type="password" />
    //         </div>
    //         <div class="group">
    //           <input id="check" type="checkbox" class="check" checked />
    //           <label for="check"><span class="icon"></span> Keep me Signed in</label>
    //         </div>
    //         <div class="group">
    //           <input type="submit" class="button" value="Sign In" />
    //         </div>
    //         <div class="hr"></div>
    //         <div class="foot-lnk">
    //           <a href="#forgot">Forgot Password?</a>
    //         </div>
    //       </div>
    //       <div class="sign-up-htm">
    //         <div class="group">
    //           <label for="user" class="label">Username</label>
    //           <input id="user" type="text" class="input" />
    //         </div>
    //         <div class="group">
    //           <label for="pass" class="label">Password</label>
    //           <input id="pass" type="password" class="input" data-type="password" />
    //         </div>
    //         <div class="group">
    //           <label for="pass" class="label">Repeat Password</label>
    //           <input id="pass" type="password" class="input" data-type="password" />
    //         </div>
    //         <div class="group">
    //           <label for="pass" class="label">Email Address</label>
    //           <input id="pass" type="text" class="input" />
    //         </div>
    //         <div class="group">
    //           <input type="submit" class="button" value="Sign Up" />
    //         </div>
    //         {/* <div class="hr"></div> */}
    //         {/* <div class="foot-lnk">
    //       <label for="tab-1">Already Member?</a>
    //     </div> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>


    <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <div class="card card0 border-0">
        <div class="row d-flex">
          <div class="col-lg-6">
            <div class="card1 pb-5">
              <div class="row"> <img src={Logo} class="logo" /> </div>
              <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" class="image" /> </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card2 card border-0 px-4 py-5">
              <div class="row mb-4 px-3">
                <h6 class="mb-0 mr-4 mt-2">Sign in with</h6>
                <div class="facebook text-center mr-3">
                  <div class="fa fa-facebook"></div>
                </div>
                <div class="twitter text-center mr-3">
                  <div class="fa fa-twitter"></div>
                </div>
                <div class="linkedin text-center mr-3">
                  <div class="fa fa-linkedin"></div>
                </div>
              </div>
              <div class="row px-3 mb-4">
                <div class="line"></div> <small class="or text-center">Or</small>
                <div class="line"></div>
              </div>
              <div class="row px-3"> <label class="mb-1">
                <h6 class="mb-0 text-sm">Email Address</h6>
              </label> <input class="mb-4" type="text" name="email" placeholder="Enter a valid email address" /> </div>
              <div class="row px-3"> <label class="mb-1">
                <h6 class="mb-0 text-sm">Password</h6>
              </label> <input type="password" name="password" placeholder="Enter password" /> </div>
              <div class="row px-3 mb-4">
                <div class="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" class="custom-control-input" /> <label for="chk1" class="custom-control-label text-sm">Remember me</label> </div> <a href="#" class="ml-auto mb-0 text-sm">Forgot Password?</a>
              </div>
              <div class="row mb-3 px-3"> <button type="submit" class="btn btn-blue text-center">Login</button> </div>
              <div class="row mb-4 px-3"> <small class="font-weight-bold">Don't have an account? <a class="text-danger ">Register</a></small> </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

