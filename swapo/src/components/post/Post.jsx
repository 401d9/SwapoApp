import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router";

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

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  console.log('Post ->> user', user);

 const handleContact = () =>{
  const addConversations = async () => {
    try {
      const members = {senderId:currentUser._id, receiverId:user._id};
      console.log('members', members);
      const res = await axios.post("/conversations", members);
      console.log('Messenger, res', res );
    } catch (err) {
      console.log(err);
    }
  };
  addConversations();
  history.push("/messenger");
 }


  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                }
                alt=""
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
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
            <button className="postCommentText" onClick={handleContact}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
}



// <div >
// <div className="postContainer" >
//   <div className="imagePostWH">
//     <div className="profilePictureDivFromPost">
//       <Link to={`/profile/${user.username}`}>
//         <img
//           src={user.profilePicture}
//           alt={user.username}
//         />
//       </Link>
//     </div>
//   </div>
//   <div className="secPostContainer">
//     <div>
//     </div>
//     <div className="dateAndVert">
//       <span className="createdAtDivFromPost" >{format(post.createdAt)}</span>
//       <div className="moreVertDivFromPost">
//         <MoreVert />
//       </div>
//     </div>
//     <div className="postDescDivFromPost">
//       <ScrollBars className="scrolldiv" horizontal autoHide={false} style={scrollBarStyle}>
//         {post?.desc}
//       </ScrollBars>
//     </div>
//     <div className="usernameDivFromPost">
//       <Link className="linkUserName" to={`/profile/${user.username}`}>
//         {user.username}
//       </Link> <QuestionAnswerOutlinedIcon />
//     </div>
//     {/* <div > */}
//     {/* <div className="postBottomLeft">
//       <img
//         className="likeIcon"
//         src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Font_Awesome_5_regular_arrow-circle-up_blue.svg/1024px-Font_Awesome_5_regular_arrow-circle-up_blue.svg.png'
//         onClick={likeHandler}
//         alt=""
//       />
//       <img
//         className="likeIcon"
//         src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Circle_arrow_down_font_awesome.svg/1200px-Circle_arrow_down_font_awesome.svg.png'
//         onClick={likeHandler}
//         alt=""
//       />
//       <span className="postLikeCounter">{like} people like it</span>
//     </div> */}
//     {/* </div> */}
//   </div>
// </div>
// {/* <div className="poligon">
// <img src="https://otakukart.com/wp-content/uploads/2020/12/Luffy-1200x900.jpg"></img>
// </div> */}
// </div>