import "./header.css";
import Logo from './logo.png'
import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import MeetingRoomTwoToneIcon from '@material-ui/icons/MeetingRoomTwoTone';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';

export default function PrimarySearchAppBar() {
  const { user } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notif, setNotif] = React.useState([]);
  const history = useHistory();
  const [setNumOfNotif] = React.useState(0);

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
    history.replace('/login');
  }



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
            <img className="logofromHeader" src={Logo} alt="" />
          </Link>
        </div>
        {/* home, profile, message, notifications ,setting */}
        <div className="midPartHeader myDIV">
          {/* home */}
          <div><Link className="topbarLink" to='/home'><HomeOutlinedIcon style={{ fontSize: "33px", color: "#82E5FF" }} /></Link>
          </div>
          {/* profile */}
          <div><Link className="topbarLink" to='/profile'><PermIdentityOutlinedIcon style={{ fontSize: "33px", color: "#82E5FF" }} /></Link>
          </div>
          {/* messenger */}
          <div>
            <Link to={'/messenger'}>
              <QuestionAnswerOutlinedIcon onClick={handleClick} style={{ fontSize: "33px", color: "#82E5FF" }} />
            </Link>
          </div>
          {/* notifications */}
          <div><NotificationsNoneOutlinedIcon
            style={{ fontSize: "33px", color: "#82E5FF" }}
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}

          >

            {notif.map((items, idx) => (
              <MenuItem key={idx} onClick={() => handleChat(idx)}>
                {items}{" "}
                <Link to={'/messenger'}>
                  <button>Go</button>
                </Link>
              </MenuItem>
            ))}

          </NotificationsNoneOutlinedIcon>
          </div>


          {/* settings */}
          <div><Link className="topbarLink" to='/setting'>
            <SettingsOutlinedIcon style={{ fontSize: "33px", color: "#82E5FF" }} />
          </Link></div>

        </div>

        {/* profileImg, info, logout */}
        <div className="rightPartHeader">
          {/* logout */}
          <MeetingRoomTwoToneIcon onClick={handleLogout} style={{ fontSize: "33px", color: "#F9F9F9", float: "right", marginRight: '3%' }} />
          
          {/* info */}
          <Link to='/aboutus'>
           <InfoTwoToneIcon style={{ fontSize: "33px", color: "#F9F9F9", float: "right", marginRight: '3%' }} />
          </Link>
          
          {/* profile */}
          <Link to={`/profile/${user.username}`}>
            <img style={{ float: "right", marginRight: '4%' }}
              src={
                user.profilePicture
              }
              alt=""
              className="topbarImg"
            />
          </Link>
        </div>
      </div>
    </>
  );
}