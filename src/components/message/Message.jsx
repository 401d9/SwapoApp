import "./message.css";
import { format } from "timeago.js";
import  axios  from 'axios';
import { useState, useEffect } from 'react';

export default function Message({ message, own, currentUser, sender }) {
  console.log('sender', sender);

  const [user, setUser] = useState(null);

  
  useEffect(() => {
    console.log('useEffect');
      const getUser = async () => {
      try {
        const res = await axios(`https://swapo-backend.herokuapp.com/users/${sender}`);
        console.log('res.data', res.data);
        setUser(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getUser();
  }, [currentUser, sender]);
  console.log('user, currUser', user, currentUser);
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={own ? currentUser.profilePicture : user?.profilePicture}
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}