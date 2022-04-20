import "./topbar.css"
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () =>{
    dispatch({type:"LOGOUT"});
  }
  return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
        <i className="topIcon fa-brands fa-whatsapp"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/">Home</Link>
                </li>
                <li className="topListItem"><Link className="link" to="/About">About</Link></li>
                <li className="topListItem"><Link className="link" to="/Contact">Contact</Link></li>
                <li className="topListItem"><Link className="link" to="/Write">Create Post</Link></li>
                <li className="topListItem" onClick={handleLogout}>
                  {user && "Logout"}
                </li>
            </ul>
        </div>
        <div className="topRight">
            {
              user ? (
                <Link to="/settings">
              <img className="topImage" src={PF + user.profilePic} alt="" />
              </Link>
              ) : (
                <ul className="topList">
                  <li className="topListItem">
                      <Link className="link" to="/Login">Login</Link>
                  </li>
                  <li className="topListItem">
                      <Link className="link" to="/Register">Register</Link>
                  </li>
                  
                </ul>
              )
            }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
           
        </div>
    </div>
  );
}
