import "./share.css";
import { Cancel } from "@material-ui/icons";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";

export default function Share({ stateChanger, data }) {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    desc.current.value = "";
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/posts/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/posts/upload", newPost);
      console.log("new Pst");
      stateChanger(data + 1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <form
        className="shareBottom"
        onSubmit={submitHandler}
        id="contactus_form"
        class="contact-form"
      >
        <div class="form__group field">
          <textarea
            ref={desc}
            name="message"
            class="form__field"
            cols="30"
            rows="4"
            autocomplete="off"
            required
          ></textarea>

          <label for="message" className="shareInput" class="form__label">
            {"Welcome " +
              user.username +
              " 😊 , what do you want to swap 🔄 today?"}
          </label>
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
        <button type="submit" class="btn-share btn-primary btn-ghost">
          POST
        </button>
      </form>
    </div>
  );
}
