import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";
import Messenger from "./pages/messenger/Messenger.jsx";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Setting from "./pages/setting/Setting";
import About from "./pages/about-us/about.jsx";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function Main() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Login />}
        </Route>
        <Route exact path="/home">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/login"><Login /></Route>
        <Route path="/register">
          {user ? <Redirect to="/home" /> : <Register />}
        </Route>
        <Route path="/messenger">
          <Messenger />
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
        <Route path="/setting">
          <Setting />
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

//
{
  /* <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/messenger">
          {!user ? <Redirect to="/" /> : <Messenger />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router> */
}
//

export default Main;
