import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import "../post/post.scss";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState(0);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("https://swapo-backend.herokuapp.com/posts/profile/" + username)
        : await axios.get("https://swapo-backend.herokuapp.com/posts/timeline");
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    console.log("Posts", newPost);
    fetchPosts();
  }, [username, user._id, newPost]);
  console.log("Posts", newPost);
  return (
    <div >
      <div>
        {(!username || username === user.username) && (
          <Share stateChanger={setNewPost} data={newPost} />
        )}
        {posts.map((p) => (
          <div className="postContainerTest">
            <Post
              key={p._id}
              post={p}
              stateChanger={setNewPost}
              data={newPost}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
