import "./header.css";
import React, { useEffect } from "react";
import { Chat } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import { useHistory } from "react-router";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notif, setNotif] = React.useState([]);
  const [numOfNotif, setNumOfNotif] = React.useState(0);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setNumOfNotif(0);
  };

  const handleChat = async (idx) => {
    const objOfUser = {
      userId: user._id,
      index: idx,
    };
    const res = await axios.put("/notif", objOfUser);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    history.replace("/login");
  };

  useEffect(() => {
    const getNotif = async () => {
      try {
        const res = await axios.get("/users/" + user._id);
        setNotif(res.data.notifications);
      } catch (err) {
        console.log(err);
      }
    };
    getNotif();
  }, [user._id]);
  console.log("user>>>", user);
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Swapo</span>
        </Link>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link className="topbarLink" to="/home">
            Homepage
          </Link>
          <Link className="topbarLink" to={`/profile/${user.username}`}>
            Profile
          </Link>
          <Link className="topbarLink" to="/setting">
            Setting
          </Link>
          <Link className="topbarLink" to="/messenger">
            messenger
          </Link>
          <Link className="topbarLink" to="/login">
            login
          </Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Chat onClick={handleClick}></Chat>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {notif.length ? (
                notif.map((items, idx) => (
                  <MenuItem key={idx} onClick={() => handleChat(idx)}>
                    {items}
                    <Link to={"/messenger"}>
                      <button>Go</button>
                    </Link>
                  </MenuItem>
                ))
              ) : (
                <MenuItem onClick={handleClose}>
                  We are sorry 🥺, there isn't any new notifications 😢
                </MenuItem>
              )}
            </Menu>
            <span className="topbarIconBadge">{notif.length}</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img src={user.profilePicture} alt="" className="topbarImg" />
        </Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
