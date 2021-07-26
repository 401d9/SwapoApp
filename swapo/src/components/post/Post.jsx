import "./post.css";
import { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router";
/**************************************** */
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
const ITEM_HEIGHT = 48;

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const [editState, setEditState] = useState(false);
  const { user: currentUser } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId, editState]);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const handleContact = () => {
    const addConversations = async () => {
      try {
        const members = { senderId: currentUser._id, receiverId: user._id };
        const res = await axios.post("/conversations", members);
      } catch (err) {
        console.log(err);
      }
    };
    addConversations();
    history.push("/messenger");
  };

  /**************** */
  const desc = useRef();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setAnchorEl(null);
    setEditState(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("setEditState(false);00");
    axios
      .put("/posts/" + post._id, { newDesc: desc.current.value })
      .then(() => {
      });
      setEditState(false);
  };
  const handleDelete = () => {
    setAnchorEl(null);
    axios
      .delete("/posts/" + post._id)
      .then(() => {
      });
  };
//to={`/profile/${user.username}`}
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={user.profilePicture}
                alt=""
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              <MenuItem key="edit" onClick={() => handleEdit(post._id)}>
                Edit
              </MenuItem>
              <MenuItem key="delete" onClick={() => handleDelete(post._id)}>
                Delete
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          {editState && (
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Edit your post here"
                className="shareInput"
                ref={desc}
              />
              <button>Update</button>
            </form>
          )}
          <img className="postImg" src={post.img} alt="" />
        </div>
        <div className="postBottom">
          {/*           <div className="postBottomLeft">
            <img
              className="likeIcon"
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Font_Awesome_5_regular_arrow-circle-up_blue.svg/1024px-Font_Awesome_5_regular_arrow-circle-up_blue.svg.png'
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Circle_arrow_down_font_awesome.svg/1200px-Circle_arrow_down_font_awesome.svg.png'
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div> */}
          <div className="postBottomRight">
            <button className="postCommentText" onClick={handleContact}>
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
