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
  const [userData, setUser] = useState(user);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`https://swapo-backend.herokuapp.com/users?username=${userData.username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [userData.username]);

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
    e.target.reset();
    const config = {
      headers: { Authorization: `Bearer ${userData.token}` },
    };
    try {
      const res = await axios.put("https://swapo-backend.herokuapp.com/profile", userObj, config);
      console.log("res from setting", res);
      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="settingCardForm">
      <Header />
      <form className="settingCardForm" onSubmit={handleClick}>
        <div className='kkkkkkkkkk'>

          <div className="settingCardContainer">
            <div className="firstSettingCard">
              {/* profile photo, name, userName, 'About', description */}
              <img
                className="profileImgSetting"
                src={userData.profilePicture}
                alt=""
              />
              {/* <h5>Select profile photo</h5> */}
              {/* <Form.Control value={userData.username} ref={name} placeholder="Enter name" type="text" /> */}
              {/* <AddAPhotoOutlinedIcon></AddAPhotoOutlinedIcon> */}

              <h3 style={{color:"#006e89"}}>{userData.username}</h3>
              <p>{userData.email} </p>
              <br></br>

              <h5>Select profile photo</h5>

              <Form.Control
                ref={profilePicture}
                type="link"
                placeholder={userData.profilePicture}
                size="sm"
              />
              <br></br>
              <h5>About</h5>
              <p>{userData.descriptionOfUser}
                </p>
            </div>
            {/* <div className="secSettingCard"  > */}
            <div className="leftSecSettingCard">
              {/* Personal Details->  Full Name,  User name*/}
              <h5>Personal Details</h5>
              <h6  style={{margin: '5px 0'}} className='sett-h6' >Name</h6>

              <Form.Control ref={name} placeholder={userData.name} type="text" />
              <h6  style={{margin: '5px 0'}} className='sett-h6' >Email</h6>
              <Form.Control ref={email} placeholder={userData.email} />
              {/* profile pic, cover */}
              <br></br>
              <h5  style={{margin: '5px 0'}} className='sett-h6'  >Select profile cover</h5>
              <Form.Control
                ref={profileCover}
                type="link"
                placeholder={userData.profileCover}
                size="sm"
                id="img"
                name="img"
                accept="image/*"
              />
              <br />
              <img className="coverImgSetting" src={userData.profileCover} alt="" />
            </div>
            <div className="rightSecSettingCard">
              {/* Personal Details->  service,  exper*/}
              <h5>Information</h5>
              <h6  style={{margin: '5px 0'}} className='sett-h6'  >Service (what is the service that you provide)</h6>
              <Form.Control ref={service} placeholder={userData.service} />
              <h6 style={{margin: '5px 0'}} className='sett-h6' >Experience (provide your experience in years)</h6>
              <Form.Control ref={experience} placeholder={userData.experience} />
              <h6  style={{margin: '5px 0'}} className='sett-h6'  >Description</h6>
              <Form.Control
                as="textarea"
                rows={3}
                ref={descriptionOfUser}
                placeholder={userData.descriptionOfUser}
                name=""
                id=""
                cols="30"
                rows="10"
              />
              <br></br>
              <div className="settingBtn">
                <Button
                  type="submit"
                  as="input"
                  value="Update"
                  style={{ backgroundColor: "#FFA34C", border: "#FFA34C" }}
                />{" "}
              </div>
            </div>
            {/* </div> */}
          </div>


        </div>


      </form>
      <Footer />
    </div>
  );
}
