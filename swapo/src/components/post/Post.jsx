import "./post.scss";
import { MoreVert } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ScrollBars from 'react-scrollbar';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';

const scrollBarStyle = {
  height: '107px',
  width: '633px',
  margin: '-0.5%'
};


export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

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
    } catch (err) { }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (

    <div >
      <div className="postContainer" >
        <div className="imagePostWH">
          <div className="profilePictureDivFromPost">
            <Link to={`/profile/${user.username}`}>
              <img
                src={user.profilePicture}
                alt={user.username}
              />
            </Link>
          </div>

        </div>


        <div className="secPostContainer">
          <div>


          </div>

          <div className="dateAndVert">
            <span className="createdAtDivFromPost" >{format(post.createdAt)}</span>

            <div className="moreVertDivFromPost">
              <MoreVert />
            </div>

          </div>

          <div className="postDescDivFromPost">

            <ScrollBars className="scrolldiv" horizontal autoHide={false} style={scrollBarStyle}>
              {post?.desc}
            </ScrollBars>

          </div>

          <div className="usernameDivFromPost">
            <Link className="linkUserName" to={`/profile/${user.username}`}>
              {user.username}
            </Link> <QuestionAnswerOutlinedIcon />
          </div>

          {/* <div > */}
          {/* <div className="postBottomLeft">
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

          {/* </div> */}

        </div>


      </div>
      {/* <div className="poligon">
      <img src="https://otakukart.com/wp-content/uploads/2020/12/Luffy-1200x900.jpg"></img>


      </div> */}

    </div>

  );
}
