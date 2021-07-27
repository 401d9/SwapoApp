import "./setting.css";
import Header from "../../components/header/Header";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useRef } from "react";
import { AuthContext } from "../../context/AuthContext";

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
        headers: { Authorization: `Bearer ${user.token}` }
    };
      try {
        const res = await axios.put("/profile", userObj,config);
        console.log('res from setting',res);
      } catch (err) {
        console.log(err);
      }
    }

  return (
    <>
      <Header />
      <div >
        <div >
          <div >
            <div>
              <img
                
                src={
                  user.profileCover
                }
                alt=""
              />
              <img
               
                src={
                  user.profilePicture
                }
                alt=""
              />
            </div>
            <div >
              <h4 >{user.username}</h4>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleClick}>
            <input
              placeholder="name"
              value={user.name}
              ref={name}
              
            />
            <input
              placeholder="Email"
        
              ref={email}
           
              type="email"
            />
            <input
              placeholder="service"
        
              ref={service}
              type="text"
              minLength="6"
            />
            <input
              placeholder="description"
        
              ref={descriptionOfUser}
         
              type="text"
            />
            <input
              placeholder="experience"
        
              ref={experience}
           
              type="text"
            />
             <input
              placeholder="profilePicture"
              
              ref={profilePicture}
          
              type="text"
            />
             <input
              placeholder="profileCover"
              
              ref={profileCover}
           
              type="text"
            />
            <button  type="submit">
              Update Profile
            </button>
          </form> 




















{/* <div className="container">
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="settingCard h-100">
              <div className="settingCard-body">
                <div className="account-settings">
                  <div className="user-profile">
                    <div className="user-avatar">
                      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" />
                    </div>
                    <h5 className="user-name">Yuki Hayashi</h5>
                    <h6 className="user-email">yuki@Maxwell.com</h6>
                  </div>
                  <div className="about">
                    <h5>About</h5>
                    <p>I'm Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="settingCard h-100">
              <div className="settingCard-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-2 text-primary">Personal Details</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name</label>
                      <input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="eMail">Email</label>
                      <input type="email" className="form-control" id="eMail" placeholder="Enter email ID" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input type="text" className="form-control" id="phone" placeholder="Enter phone number" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="website">Website URL</label>
                      <input type="url" className="form-control" id="website" placeholder="Website url" />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mt-3 mb-2 text-primary">Address</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="Street">Street</label>
                      <input type="name" className="form-control" id="Street" placeholder="Enter Street" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="ciTy">City</label>
                      <input type="name" className="form-control" id="ciTy" placeholder="Enter City" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="sTate">State</label>
                      <input type="text" className="form-control" id="sTate" placeholder="Enter State" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="zIp">Zip Code</label>
                      <input type="text" className="form-control" id="zIp" placeholder="Zip Code" />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right">
                      <button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
                      <button type="button" id="submit" name="submit" className="btn btn-primary">Update</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}