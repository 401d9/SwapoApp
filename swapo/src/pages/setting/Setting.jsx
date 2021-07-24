import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Setting() {
  const { user } = useContext(AuthContext);
  const [userData, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${user.username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [user.username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  user.profileCover
                }
                alt=""
              />
              <img
                className="profileUserImg"
                src={
                  user.profilePicture
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
            </div>
          </div>
        </div>
      </div>
      <form className="loginBox">
            <input
              placeholder="Name"
              value={user.name}
              className="loginInput"
              type="text"
            />
            <input
              placeholder="service"
              value={user.service}
              className="loginInput"
              type="text"
            />
                        <input
              placeholder="Experience"
              value={user.experience}
              className="loginInput"
              type="text"
            />
            <input
              placeholder="Description Of User"
              value={user.descriptionOfUser}
              className="loginInput"
              type="text"
            />
                        <input
              placeholder="Profile Picture"
              className="loginInput"
              type="file"
            />
            <input
              placeholder="Profile Cover"
              className="loginInput"
              type="file"
            />
            <button className="loginButton" type="submit">
              Update
            </button>
          </form>        
    </>
  );
}