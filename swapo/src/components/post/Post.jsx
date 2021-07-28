import "./post.scss";
import ScrollBars from "react-scrollbar";
import { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import PlusOneOutlinedIcon from "@material-ui/icons/PlusOneOutlined";
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';





const ITEM_HEIGHT = 48;

const scrollBarStyle = {
  padding: "10px 0",
  height: "120px",
  width: "639px",
  margin: "-7% 0",
  marginTop: '20px',
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
    } catch (err) { }
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
      .then(() => { });
    setEditState(false);
    stateChanger(data + 1);
  };
  const handleDelete = () => {
    setAnchorEl(null);
    axios.delete("/posts/" + post._id).then(() => { });
    stateChanger(data + 1);
  };


  const [showModal, setShow] = useState(false);

  const handleCloseModal = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="pppppppppp">

      <div className='mmmmmmmmmm'>

        <span >
          {" "}
          <PlusOneOutlinedIcon onClick={interestedHandler} style={{ cursor: "pointer", color: "#006E89", border: '2px solid', borderRadius: "50%", fontSize: '38px', fontWeight: "700", padding: "4px" }} />{" "}

        </span>

        {/* <span > */}
        {currentUser._id !== post.userId && (
          <span>

            <QuestionAnswerOutlinedIcon
              style={{ cursor: "pointer", color: "#006E89", border: '2px solid', borderRadius: "50%", fontSize: '38px', fontWeight: "700", padding: "4px" }}
              onClick={handleContact}
            />
          </span>

        )}
        {/* </span> */}

        {/* <span> */}
        {currentUser._id === post.userId && (
          <span>

            <EditIcon
              onClick={handleShow} style={{ cursor: "pointer", color: "#006E89", border: '2px solid', borderRadius: "50%", fontSize: '38px', fontWeight: "700", padding: "4px" }}
            />

          </span>


        )}
        {/* </span> */}


        {/* <span> */}
        {currentUser._id === post.userId && (
          <span>
            <DeleteOutlineIcon
              onClick={() => handleDelete(post._id)} style={{ cursor: "pointer", color: "#f0294a", border: '2px solid', borderRadius: "50%", fontSize: '38px', fontWeight: "700", padding: "4px" }}
            />
          </span>

        )}
        {/* </span> */}
      </div>

      <div className="postContainer">
        <div className="imagePostWH">
          <div className="profilePictureDivFromPost">
            <Link to={`/profile/${user.username}`}>
              <img src={user.profilePicture} alt={user.username} />
            </Link>
          </div>
        </div>

        <div className="secPostContainer">


          <div className="nameSpan">
            <Link className="linkUserName" style={{
              fontWeight: "900",
              fontSize: "24px",
              marginTop: "3px",
              width: "100%"
            }} to={`/profile/${user.username}`}>
              {user.username}
            </Link>
          </div>

          <div className="dateAndVert">
            <span className="createdAtDivFromPost">
              {format(post.createdAt)}
            </span>


          </div>

          <div className='aaaaaaaaaaaaaa'>

            <div className="postDescDivFromPost">
              <ScrollBars
                className="scrolldiv"
                horizontal
                autoHide={false}
                style={scrollBarStyle}
              >
                {post?.desc}
              </ScrollBars>
            </div>
          </div>

          <div className="peopleAtDivFromPost"  >
            {like} people interested{" "}
          </div>






          <span>
            <Modal show={showModal} onHide={handleCloseModal} >
              <Modal.Header closeButton>
                <Modal.Title style={{ color: '#006E89' }}>Edit Post</Modal.Title>
              </Modal.Header>
              <Modal.Body>

                <p style={{ color: '#006E89' }}>{post.desc}</p>

                <form onSubmit={handleSubmit}>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    ref={desc}
                    placeholder="Edit your post here"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  />

                  <br></br>

                  <Button
                    type="submit"
                    as="input"
                    value="Update"
                    style={{ backgroundColor: "#FFA34C", border: "#FFA34C", float: "right" }}
                  />{" "}
                </form>

              </Modal.Body>
            </Modal>



          </span>

        </div>
      </div>




    </div>
  );
}