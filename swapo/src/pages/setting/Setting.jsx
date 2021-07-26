import "./setting.css";
import Header from "../../components/header/Header";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useRef } from "react";
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

  const name = useRef();
  const email = useRef();
  const service = useRef();
  const descriptionOfUser = useRef();
  const experience = useRef();
  const profilePicture = useRef();
  const profileCover = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
      const userObj = {
        name: name.current.value,
        email: email.current.value,
        service: service.current.value,
        descriptionOfUser: descriptionOfUser.current.value,
        experience: experience.current.value,
        profilePicture: profilePicture.current.value,
        profileCover: profileCover.current.value,
      };
      const config = {
        headers: { Authorization: `Bearer ${user.token}` }
    };
      try {
        const res = await axios.put("/profile", userObj,config);
        console.log('res from setting',res);
      } catch (err) {
        console.log(err);
      }
    }

  return (
    <>
      <Header />
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
      <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="name"
              value={user.name}
              ref={name}
              className="loginInput"
            />
            <input
              placeholder="Email"
        
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="service"
        
              ref={service}
              className="loginInput"
              type="text"
              minLength="6"
            />
            <input
              placeholder="description"
        
              ref={descriptionOfUser}
              className="loginInput"
              type="text"
            />
            <input
              placeholder="experience"
        
              ref={experience}
              className="loginInput"
              type="text"
            />
             <input
              placeholder="profilePicture"
              
              ref={profilePicture}
              className="loginInput"
              type="text"
            />
             <input
              placeholder="profileCover"
              
              ref={profileCover}
              className="loginInput"
              type="text"
            />
            <button className="loginButton" type="submit">
              Update Profile
            </button>
          </form> 
    </>
  );
}