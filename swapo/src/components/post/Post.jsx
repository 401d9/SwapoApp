import "./post.scss";
import { MoreVert } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ScrollBars from "react-scrollbar";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import { useHistory } from "react-router";

const scrollBarStyle = {
  height: "107px",
  width: "633px",
  margin: "-0.5%",
};

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/${post.userId}`);
      console.log(res.data);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  // const likeHandler = () => {
  //   try {
  //     axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
  //   } catch (err) { }
  //   setLike(isLiked ? like - 1 : like + 1);
  //   setIsLiked(!isLiked);
  // };

  console.log("Post ->> user", user);

  const handleContact = () => {
    const addConversations = async () => {
      try {
        const members = { senderId: currentUser._id, receiverId: user._id };
        console.log("members", members);
        const res = await axios.post("/conversations", members);
        console.log("Messenger, res", res);
      } catch (err) {
        console.log(err);
      }
    };
    addConversations();
    history.push("/messenger");
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
                <img
                  className="likeIcon"
                  src="https://www.pinclipart.com/picdir/big/54-548007_interested-in-getting-involved-with-the-pto-raise.png"
                  onClick={interestedHandler}
                  alt=""
                />
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
