import "./post.scss";
import ScrollBars from "react-scrollbar";
import { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PlusOneOutlinedIcon from "@material-ui/icons/PlusOneOutlined";
const ITEM_HEIGHT = 48;

const scrollBarStyle = {
  height: "107px",
  width: "633px",
  margin: "-0.5%",
};

export default function Post({ post, stateChanger, data }) {
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

  const interestedHandler = () => {
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
      .then(() => {});
    setEditState(false);
    stateChanger(data + 1);
  };
  const handleDelete = () => {
    setAnchorEl(null);
    axios.delete("/posts/" + post._id).then(() => {});
    stateChanger(data + 1);
  };
  return (
    <div>
      <div className="postContainer">
        <div className="imagePostWH">
          <div className="profilePictureDivFromPost">
            <Link to={`/profile/${user.username}`}>
              <img src={user.profilePicture} alt={user.username} />
            </Link>
          </div>
        </div>

        <div className="secPostContainer">
          <div></div>

          <div className="dateAndVert">
            <span className="createdAtDivFromPost">
              {format(post.createdAt)}
            </span>

            <div className="moreVertDivFromPost">
              {currentUser._id === post.userId && (
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
                    <MenuItem
                      key="delete"
                      onClick={() => handleDelete(post._id)}
                    >
                      Delete
                    </MenuItem>
                  </Menu>
                </div>
              )}
            </div>
          </div>

          <div className="postDescDivFromPost">
            <ScrollBars
              className="scrolldiv"
              horizontal
              autoHide={false}
              style={scrollBarStyle}
            >
              {post?.desc}
            </ScrollBars>
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
          </div>

          <div className="usernameDivFromPost">
            <Link className="linkUserName" to={`/profile/${user.username}`}>
              {user.username}
            </Link>

            {currentUser._id !== post.userId && (
              <QuestionAnswerOutlinedIcon
                style={{ cursor: "pointer", color: "#FFA34C" }}
                onClick={handleContact}
              />
            )}
            <div className="postBottom">
              <div className="postBottomLeft">
                {" "}
                <PlusOneOutlinedIcon onClick={interestedHandler} />{" "}
                <span className="postLikeCounter">
                  {like} people interested in it{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
