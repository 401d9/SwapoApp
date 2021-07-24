import App from "./App";
//import Login from "./pages/login/Login";
//import Register from "./pages/register/Register";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Messenger from "./pages/messenger/Messenger.jsx";
import Register from "./pages/register/Register"
import Profile from "./pages/profile/Profile"
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import Setting from "./pages/setting/Setting"
function Main() {
    return (
        <Router>
            <Switch>
                <Route exact path="/"> <App /> </Route>
                {/*  <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
                <Route path="/register">
                    {user ? <Redirect to="/" /> : <Register />}
                </Route> */}
                <Route path="/messenger">
                    <Messenger />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/setting">
                    <Setting />
                </Route>
            </Switch>
        </Router>
    );
}

export default Main;