import axios from "axios"
import "./sidebar.css"
import OGI from '../../assets/ogi.jpg'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() =>{
    const getCats =  async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">About OGI</span>
            <img src= { OGI } alt="" className="sidebarImage" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Recusandae qui, omnis nulla accusamus molestias consequatur.</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            {cats.map((c) => (
              <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
              </Link>
            ))}          
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook-square"></i>
        <i className="sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-linkedin"></i>
        <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        <i className="sidebarIcon fa-brands fa-whatsapp"></i>
        </div>
        </div>
    </div>
  )
}
