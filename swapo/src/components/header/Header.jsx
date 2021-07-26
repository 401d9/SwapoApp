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
    history.replace('/login');
  }

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
          <Link className="topbarLink" to="/profile">
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
            <Chat onClick={handleClick}>Open Menu</Chat>
            <Menu
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











// import "./header.css";
// import Logo from './logo.png'
// import './header.js'
// import React from 'react';
// import { alpha, makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import Badge from '@material-ui/core/Badge';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
// import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
// import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
// import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
// import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
// import MeetingRoomTwoToneIcon from '@material-ui/icons/MeetingRoomTwoTone';
// const useStyles = makeStyles((theme) => ({
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(3),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
//   sectionDesktop: {
//     display: 'none',
//     [theme.breakpoints.up('md')]: {
//       display: 'flex',
//     },
//   },
//   sectionMobile: {
//     display: 'flex',
//     [theme.breakpoints.up('md')]: {
//       display: 'none',
//     },
//   },
// }));
// export default function PrimarySearchAppBar() {
//   const { user } = useContext(AuthContext);
//   //   console.log('user>>>', user);
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };
//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };
//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };
//   const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );
//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton aria-label="show 4 new mails" color="primary">
//           <Badge badgeContent={4} color="secondary">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton aria-label="show 11 new notifications" color="primary">
//           <Badge badgeContent={11} color="secondary">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );
//   return (
//     <>
//       <div className="topbarContainer">
//         <div className="topbarLeft">
//           <Link to="/" style={{ textDecoration: "none" }}>
//             {/* <span className="logo">Swapo</span>
//              */}
//             <img className="logofromHeader" src={Logo} alt="" />
//           </Link>
//         </div>
//         <div className="midPartHeader myDIV">
//             <div><Link className="topbarLink btn" to='/home'><HomeOutlinedIcon style={{ fontSize: "33px", color: "#82E5FF" }} /></Link>
//             </div>
//             <div><Link className="topbarLink btn active" to='/profile'><PermIdentityOutlinedIcon style={{ fontSize: "33px", color: "#82E5FF" }} /></Link>
//             </div>
//             <div><NotificationsNoneOutlinedIcon className="btn" style={{ fontSize: "33px", color: "#82E5FF" }} />
//             </div>
//             <div><Link className="topbarLink btn" to='/setting'>
//               <SettingsOutlinedIcon style={{ fontSize: "33px", color: "#82E5FF" }} />
//             </Link></div>
//           {/* <div className="topbarIcons">
//             <div className="topbarIconItem"> */}
//           {/* <span className="topbarIconBadge">0</span> */}
//           {/* </div> */}
//           {/* </div> */}
//         </div>
//         <div className="rightPartHeader">
//           <MeetingRoomTwoToneIcon style={{ fontSize: "33px", color: "#F9F9F9", float: "right" , marginRight:'3%'}} />
//           <InfoTwoToneIcon style={{ fontSize: "33px", color: "#F9F9F9", float: "right" , marginRight:'3%'}} />
//           <Link to={`/profile/${user.username}`}>
//             <img style={{ float: "right" , marginRight:'4%'}}
//               src={
//                 user.profilePicture
//               }
//               alt=""
//               className="topbarImg"
//             />
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }