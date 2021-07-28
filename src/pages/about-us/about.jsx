import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import pic from "./assets/ashar.jpeg";
import "./about.css";
export default function About() {
  return (
    <div>
      <Header />
      <div className="about">
        <div data-aos="fade-up" data-aos-duration="1000" class="divshadow">
          <div class="container-fluid-about">
            <div class="row">
              <div class="col-sm-8">
                <h2 className="h2-about">About Swapo</h2>
                <h4 className="h4-about">
                  Web app that connects many service providers and those who
                  give their services to each other by swap their knowledge and
                  expertise.
                </h4>
                <p className="p-about">
                  SWAPO web app, users can reach the various services among wide
                  posts, users can post their services and swap with other
                  services and chat with the service provider to agree on
                  swapping.
                </p>
              </div>
              <div class="col-sm-4">
                <span class="glyphicon glyphicon-signal logo-about"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid-about bg-grey">
          <div class="row">
            <div class="col-sm-4">
              <span class="glyphicon glyphicon-globe logo-about"></span>
            </div>
            <div class="col-sm-8">
              <h2 className="h2-about">Our Values</h2>
              <h4 className="h4-about">
                <strong>MISSION:</strong> We strive to offer our service
                providers swapping with no price, the best available selection,
                and the utmost convenience.{" "}
              </h4>
              <p className="p-about">
                <strong>VISION:</strong> To be Earth’s most Web App, where
                customers can find and discover services they might want to swap
                online.
              </p>
            </div>
          </div>
        </div>
        <h2 className="h3-about" style={{ "text-align": "center" }}>
          Our Team
        </h2>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="profile-card-4 text-center">
                <img
                  src="https://ca.slack-edge.com/TNGRRLUMA-U01L7MM7DLM-c0a1f533b4a1-512"
                  class="img img-responsive"
                />
                <div class="profile-content">
                  <div class="profile-name">
                    Mustafa Jdeitawi
                    {/* <p>Developer</p> */}
                  </div>
                  <div class="profile-description">
                    Full Stack Web Developer
                  </div>
                  <div class="icon">
                    {/* <div className="facebook text-center mr-3"> */}
                    <a
                      href="https://github.com/jdeitawimostafa"
                      class="fab fa-github"
                    ></a>
                    {/* <div className="fa fa-facebook"></div> */}
                    {/* </div> */}
                    <a
                      class="fab fa-linkedin-in"
                      href="https://www.linkedin.com/in/mostafa-jdeitawi-aaaa92206/"
                    ></a>
                    <a
                      class="fab fa-facebook-f"
                      href="https://www.facebook.com/mostafagedo0"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="profile-card-4 text-center">
                <img
                  src="https://ca.slack-edge.com/TNGRRLUMA-U01L7MMUWPP-8388d9e2d054-512"
                  class="img img-responsive"
                />
                <div class="profile-content">
                  <div class="profile-name">Shady Khaled</div>
                  <div class="profile-description">
                    Full Stack Web Developer
                  </div>
                  <div class="icon">
                    <a
                      href="https://github.com/shadykh"
                      class="fab fa-github"
                    ></a>
                    <a
                      class="fab fa-linkedin-in"
                      href="https://www.linkedin.com/in/shadykhaled/"
                    ></a>
                    <a
                      class="fab fa-facebook-f"
                      href="https://www.facebook.com/shadykhlaedz"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="profile-card-4 text-center">
                <img
                  src="https://ca.slack-edge.com/TNGRRLUMA-U01LGV0PBSQ-c4ef369d11be-512"
                  class="img img-responsive"
                />
                <div class="profile-content">
                  <div class="profile-name">Nour Abu Elenein</div>
                  <div class="profile-description">
                    Full Stack Web Developer
                  </div>
                  <div class="icon">
                    <a
                      href="https://github.com/engnour94"
                      class="fab fa-github"
                    ></a>
                    <a
                      class="fab fa-linkedin-in"
                      href="https://www.linkedin.com/in/nour-abuelenein/"
                    ></a>
                    <a
                      class="fab fa-facebook-f"
                      href="https://www.facebook.com/eng.nour.mohmd"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="profile-card-4 text-center">
                <img
                  src="https://ca.slack-edge.com/TNGRRLUMA-U01LGV1UP36-71e667c8eaaf-512"
                  class="img img-responsive"
                />
                <div class="profile-content">
                  <div class="profile-name">
                    Wafa'a Ankoush
                    <p>@Developer</p>
                  </div>
                  <div class="profile-description">
                    Full Stack Web Developer
                  </div>
                  <div class="icon">
                    <a
                      href="https://github.com/wafaankoush99"
                      class="fab fa-github"
                    ></a>
                    <a
                      class="fab fa-linkedin-in"
                      href="https://www.linkedin.com/in/wafaankoush/"
                    ></a>
                    <a
                      class="fab fa-facebook-f"
                      href="https://www.facebook.com/profile.php?id=100046460961446"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 divshadow">
              <div class="profile-card-4 text-center">
                <img src={pic} class="img img-responsive" />
                <div class="profile-content">
                  <div class="profile-name">As-har Abuhelweh</div>
                  <div class="profile-description">
                    Full Stack Web Developer
                  </div>
                  <div class="icon">
                    <a
                      href="https://github.com/asharabuhelweh"
                      class="fab fa-github"
                    ></a>
                    <a
                      class="fab fa-linkedin-in"
                      href="https://www.linkedin.com/in/as-har-abuhelweh-27207510b/"
                    ></a>
                    <a
                      class="fab fa-facebook-f"
                      href="https://www.facebook.com/ashar.mohamad.92"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
