import "./profile.css";
import Header from "../../components/header/Header";
import Feed from "../../components/feed/Feed";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
export default function Profile() {
  const { user } = useContext(AuthContext);
  const [user2, setUser] = useState({});


  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/user/profile/${user.username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [user.username]);

  return (
    <>
      <Header />

      <div class="container">
        <div class="header-container">

          <img src={
            user.profileCover
          } alt="" class="header-image" />
          <div class="header">

            <h1 class="main-heading">@{user.username}</h1>
            <span class="tag">Service : {user.service}</span>
            <span class="tag">experience :{user.experience}</span>
            <div class="stats">
              <span class="stat-module">
                Posts <span class="stat-number">3</span>
              </span>
              <span class="stat-module">
                {/* Rating <span class="stat-number">4.5</span> */}
                <Box borderColor="transparent" class="stat-module">
                  Rating


                  <div class="rating"><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /></div>
                </Box>

              </span>
            </div>
          </div>
        </div>

        <div class="overlay-header"></div>

        <div class="body">

          <div className="profile-pic"> <img src={user.profilePicture} alt={user.name} class="body-image" /></div>


          <span class="body-stats">{user.name}</span>

          <div class="u-clearfix"></div>
          <div class="body-info">
            <p>
              description {user.descriptionOfUser}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque numquam expedita animi odio facere natus blanditiis delectus, itaque eveniet, laborum, distinctio commodi? Nemo numquam fugiat distinctio excepturi exercitationem reiciendis!
            </p>
            <p>


            </p>
          </div>

          <div class="u-clearfix">
            <span class="card-heading">My posts</span>
            <span class="card-more">
              <svg fill="#777777" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </span>
            <ul class="card-list">
              <li>   <Feed username={user.username} /></li>

            </ul>
          </div>
        </div>

      </div>
    </>
  );
}