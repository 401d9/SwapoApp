import "./converstaions.css";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Conversation({ conversation, currentUser }) {
  console.log('curUser', currentUser);
  console.log('conversation', conversation);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios(`/users/${friendId}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={user?.profilePicture}
        alt=""
      />
      <span className="conversationName">{user?.username}</span>
    </div>
  );
}