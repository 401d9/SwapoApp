import "./setting.css";
import Header from "../../components/header/Header";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import Footer from "../../components/footer/Footer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Setting() {
  const { user } = useContext(AuthContext);
  const [userData, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${user.username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [user.username]);

  const name = useRef();
  const email = useRef();
  const service = useRef();
  const descriptionOfUser = useRef();
  const experience = useRef();
  const profilePicture = useRef();
  const profileCover = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    const userObj = {
      name: name.current.value,
      email: email.current.value,
      service: service.current.value,
      descriptionOfUser: descriptionOfUser.current.value,
      experience: experience.current.value,
      profilePicture: profilePicture.current.value,
      profileCover: profileCover.current.value,
    };
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    };
    try {
      const res = await axios.put("/profile", userObj, config);
      console.log("res from setting", res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="settingCardForm">
      <Header />
      <form className="settingCardForm" onSubmit={handleClick}>
        <div className="settingCardContainer">
          <div className="firstSettingCard">
            {/* profile photo, name, userName, 'About', description */}
            <img
              className="profileImgSetting"
              src={user.profilePicture}
              alt=""
            />
            {/* <h5>Select profile photo</h5> */}
            {/* <Form.Control value={user.username} ref={name} placeholder="Enter name" type="text" /> */}
            {/* <AddAPhotoOutlinedIcon></AddAPhotoOutlinedIcon> */}
            <Form.Control
              ref={profilePicture}
              type="link"
              placeholder={user.profileCover}
              size="sm"
            />
            <h4>{user.username}</h4>
            <p>{user.email}</p>
            <br></br>
            <h5>About</h5>
            <p>{user.descriptionOfUser}</p>
          </div>
          {/* <div className="secSettingCard"  > */}
          <div className="leftSecSettingCard">
            {/* Personal Details->  Full Name,  User name*/}
            <h5>Personal Details</h5>
            <h6>Name</h6>
            <Form.Control ref={name} placeholder={user.name} type="text" />
            <h6>Email</h6>
            <Form.Control ref={email} placeholder={user.email} />
            {/* profile pic, cover */}
            <br></br>
            <h5>Select profile cover</h5>
            <Form.Control
              ref={profileCover}
              type="link"
              placeholder={user.profileCover}
              size="sm"
              id="img"
              name="img"
              accept="image/*"
            />
            <br />
            <img className="coverImgSetting" src={user.profileCover} alt="" />
          </div>
          <div className="rightSecSettingCard">
            {/* Personal Details->  service,  exper*/}
            <h5>Information</h5>
            <h6>Service</h6>
            <Form.Control ref={service} placeholder={user.service} />
            <h6>Experience</h6>
            <Form.Control ref={experience} placeholder={user.experience} />
            <h6>Description</h6>
            <Form.Control
              as="textarea"
              rows={3}
              ref={descriptionOfUser}
              placeholder={user.descriptionOfUser}
              name=""
              id=""
              cols="30"
              rows="10"
            />
          </div>
          {/* </div> */}
          <div className="settingBtn">
            <Button
              type="submit"
              as="input"
              value="Update"
              style={{ backgroundColor: "#FFA34C", border: "#FFA34C" }}
            />{" "}
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}
