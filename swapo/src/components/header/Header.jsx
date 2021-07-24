import "./topbar.css";
import {  Chat } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  console.log('user>>>', user);
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Swapo</span>
        </Link>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link className="topbarLink" to='/home'>Homepage</Link>
          <Link className="topbarLink" to='/profile'>Profile</Link>
          <Link className="topbarLink" to='/setting'>Setting</Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">0</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}
