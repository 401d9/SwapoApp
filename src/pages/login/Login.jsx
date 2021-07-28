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

                    <a  style={{color:'white'}} href="https://www.facebook.com/v10.0/dialog/oauth?client_id=855648615091740&redirect_uri=ht[…]3A%2F%2Fswapo.herokuapp.com%2Foauth&state=some_random_string"><div className="fa fa-facebook"></div></a>
                    
                  </div>
                  <div className="twitter text-center mr-3">
                    <a style={{color:'white'}} href="https://swapo-backend.herokuapp.com/google"><div className="fa fa-google"></div></a>
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
