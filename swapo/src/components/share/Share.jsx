import "./share.css";
import { Button, Form } from "react-bootstrap";
import {
  PermMedia,
  Cancel,
} from "@material-ui/icons";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);
  console.log('user_Share', user);
  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/posts/upload", data);
      } catch (err) { }
    }
    try {
      await axios.post("/posts/upload", newPost);
      window.location.reload();
    } catch (err) { console.log(err); }
  };

  return (


    <div className="share">

      <form className="shareBottom" onSubmit={submitHandler} id="contactus_form" class="contact-form" action="/contactUs" method="POST">
        {/* <img
          className="shareProfileImg"
          src={
            user.profilePicture
          }
          alt=""
        /> */}
        <div class="form__group field">
          <textarea ref={desc} name="message" class="form__field" cols="30" rows="5" autocomplete="off"
            required></textarea>

          <label for="message" className="shareInput"
            class="form__label">{"Hi " + user.username + ", what do you want to provide?"}</label>
        </div>


        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <div className="shareOptions">
          <label htmlFor="file" className="shareOption">

            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              accept=".png,.jpeg,.jpg"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
        </div>
        <button type="submit" class="btn btn-primary btn-ghost">POST</button>
      </form>
    

     {/* 

      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user.profilePicture
            }
            alt=""
          />
          <input
            placeholder={"Hi " + user.username + ", what do you want to provide?"}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">

              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>

          < Button className="shareButton" type="submit">
            Post
          </ Button>
        </form>
      </div>



 */}






    </div>
  );
}

