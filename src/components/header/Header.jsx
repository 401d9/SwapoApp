import "./header.css";
import Logo from "./logo.png";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import { useHistory } from "react-router";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import MeetingRoomTwoToneIcon from "@material-ui/icons/MeetingRoomTwoTone";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";

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
  };

  const handleChat = async (idx) => {
    const objOfUser = {
      userId: user._id,
      index: idx,
    };
    const res = await axios.put("/notif", objOfUser);
    console.log("stat=line34", numOfNotif);
    setNumOfNotif(-1);
    console.log("stat=line34", numOfNotif);
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

  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img title='Swapo' className="logofromHeader" src={Logo} alt="" />
          </Link>
        </div>
        <div className="midPartHeader myDIV">
          {/* home */}
          <div>
            <Link title='Home' className="topbarLink" to="/home">
              <HomeOutlinedIcon
                style={{ fontSize: "33px", color: "#82E5FF" }}
              />
            </Link>
          </div>
          {/* profile */}
          <div>
            <Link title='Profile' className="topbarLink" to={`/profile/${user.username}`}>
              <PermIdentityOutlinedIcon
                style={{ fontSize: "33px", color: "#82E5FF" }}
              />
            </Link>
          </div>
          {/* messenger */}
          <div>
            <Link title='Messages' to={"/messenger"}>
              <QuestionAnswerOutlinedIcon
                style={{ fontSize: "33px", color: "#82E5FF" }}
              />
            </Link>
          </div>
          <div title='Notifications'>
            <NotificationsNoneOutlinedIcon
              style={{ fontSize: "33px", color: "#82E5FF", cursor: 'pointer' }}
              onClick={handleClick}
            />
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
            <span

              style={{
                color: 'white', backgroundColor: '#f0294a', borderRadius: '70%', padding: "2px",
                border: "5px solid rgb(240, 41, 74)",
                marginLeft: "-9px",
                borderTop: "none",
                borderBottom: "none"
              }}

              className="topbarIconBadge">{notif.length}</span>
          </div>
          <div>
            <Link title='settings' className="topbarLink" to="/setting">
              <SettingsOutlinedIcon
                style={{ fontSize: "33px", color: "#82E5FF" }}
              />
            </Link>
          </div>
        </div>
        <div title='Logout' className="rightPartHeader">
          <MeetingRoomTwoToneIcon
            onClick={handleLogout}
            style={{
              fontSize: "33px",
              color: "#F9F9F9",
              float: "right",
              marginRight: "3%",
              cursor:'pointer'
            }}
          />

          <Link to="/about-us">

          

            <InfoTwoToneIcon
              style={{
                fontSize: "33px",
                color: "#F9F9F9",
                float: "right",
                marginRight: "3%",
              }}
            />
          </Link>
          <Link title='Profile' to={`/profile/${user.username}`}>
            <img
              style={{ float: "right", marginRight: "4%", border:'3px solid #f9f9f9' }}
              src={user.profilePicture}
              alt=""
              className="topbarImg"
            />
          </Link>
        </div>
      </div>
    </>
  );
}