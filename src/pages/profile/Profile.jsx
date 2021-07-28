import "./profile.css";
import Header from "../../components/header/Header";
import Feed from "../../components/feed/Feed";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { useParams } from "react-router";

export default function Profile() {
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`https://swapo-backend.herokuapp.com/user/profile/${username}`);
      setUser(res.data[0]);
      console.log("profile/line21", res);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Header />

      <div>

        <div class="container-profile">
          <div class="header-container">
            <img src={user.profileCover} alt="" class="header-pic" />
            <div class="header">
              <h1 class="main-heading">@{user.username}</h1>
              <div class="tag">Service : {user.service}</div>
              {/* <br /> */}
              <div class="tag">experience : {user.experience} years</div>
              <div class="stats">
                <span class="stat-module">
                  {/* Rating <span class="stat-number">4.5</span> */}
                  <Box borderColor="transparent" class="stat-module">

                  </Box>
                </span>
              </div>
            </div>
          </div>

          <div class="overlay-header"></div>

          <div class="body">
            <div className="profile-pic">
              {" "}
              <img src={user.profilePicture} alt={user.name} class="body-image" />
            </div>


            <div style={{ paddingTop: "13px" }}>

              <div class="body-stats">{user.name}</div>

              <div  >
                <Rating className='fvvfvfvvfv'
                  name="half-rating-read"
                  defaultValue={Math.floor(Math.random() * 5) + 0.5}
                  precision={0.5}
                  readOnly

                  style={{ fontSize: '36px', width: 'fit-content', marginLeft: "19px" }}
                />
              </div>
            </div>


            <div class="u-clearfix"></div>
            {/* <div class="body-info"> */}
            <p className="desproffff">{user.descriptionOfUser} </p>
            {/* </div> */}

            <div class="card u-clearfix">
              {/* <span class="card-heading">
                Start listing services for <span>SWAP!</span>
              </span> */}
              {/* <span class="card-more">
                <svg
                  fill="#777777"
                  height="18"
                  viewBox="0 0 24 24"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </span> */}
              {/* <ul class="card-list">
              <li>
                {" "} */}
              {/* </li> */}
              {/* </ul> */}
            </div>
          </div>


        </div>

        <div style={{ margin: '2% 15%' }} >
          <Feed username={user.username} />
        </div>


      </div>

      <Footer />
    </>
  );
}
