import "./profile.css";
import Header from "../../components/header/Header";
import Feed from "../../components/feed/Feed";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [user2, setUser] = useState({});
  //const username = useParams().username;
  //console.log('profile', useParams().userName);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/user/profile/${user.username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [user.username]);

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
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={user.username} />
          </div>
        </div>
      </div>
    </>
  );
}