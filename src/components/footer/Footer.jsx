import './footer.css'
import Logo from './logo.png'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
function Footer(){
  const { user } = useContext(AuthContext);
 return(
<footer className="footer-distributed">
  <div className="footer-left">
    <h3><img src={Logo} alt=''/></h3>
    <p className="footer-links">
      <Link to="/home" style={{'paddingRight':'5'}}> Home  </Link>
      
      {'  '}
      <Link to ="/messenger">Messenger</Link>
      {'  '}
      <Link to="/setting">Setting </Link>
      {'  '}
      <Link to="/about-us">About us</Link>
      {' '}  
      <Link to={`/profile/${user.username}`}>Profile</Link>
    
    </p>
    <p className="footer-company-name">SWAPO © 2021</p>
  </div>
  <div className="footer-center">
    <div>
      <i className="fa fa-map-marker" />
      <p><span>Amman, Jordan</span> </p>
    </div>
    <div>
      <i className="fa fa-phone" />
      <p>+962 79 999 9999 </p>
    </div>
    <div>
      <i className="fa fa-envelope" />
      <p><a href="mailto:contact@swapo.com">contact@swapo.com</a></p>
    </div>
  </div>
  <div className="footer-right">
    <p className="footer-company-about">
      <span>About the App</span>
      a web app that connects many service providers and those who give their services to each other by swap their knowledge and expertise.
    </p>
    <div className="footer-icons">
  
      <a href="https://www.facebook.com/eng.nour.mohmd/"><i className="fa fa-facebook" /></a>
      <a href="#"><i className="fa fa-twitter" /></a>
      <a href="https://www.linkedin.com/in/nour-abuelenein/"><i className="fa fa-linkedin" /></a>
      <a href="https://github.com/401d9"><i className="fa fa-github" /></a>
    </div>
  </div>
</footer>

 )

}

export default Footer;