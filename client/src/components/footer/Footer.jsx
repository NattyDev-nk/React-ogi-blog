import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h1 className="logo-text">Oke Golden<span>Ink Blog</span></h1>
                    <p>Oke Golden Ink is a media outlet situated in Otuoke, which aims to bring credible 
                        and update news about our environs to promote peace, awareness and unity in our society.
                    </p>
                    <div className="contact">
                        <span><i className="fas fa-phone"></i> &nbsp; +2348168817181</span>
                        <span><i className="fas fa-envelope"></i> &nbsp; natykinstech@gmail.com</span>
                    </div>
                    <div className="socials">
                    <Link className="link" to="/"><i className="fab fa-facebook"></i></Link>
                    <Link className="link" to="/"><i className="fab fa-instagram"></i></Link>
                    <Link className="link" to="/"><i className="fab fa-twitter"></i></Link>
                    <Link className="link" to="/"><i className="fab fa-youtube"></i></Link>
   
                    </div>
                </div>
                <div className="footer-section links">
                        <h2>Quick Links</h2>
                    <ul>
                        <Link className="link" to="/">Events</Link>
                        <Link className="link" to="/">Team</Link>
                        <Link className="link" to="/">Gallery</Link>
                        <Link className="link" to="/">Sponsors</Link>
                        <Link className="link" to="/">Terms and Conditions</Link>
                        
                    </ul>
                </div>
                
                <div className="footer-section contact-form">
                    <h2>Contact Us</h2>
                    <br/>
                    <form method="post">
                        <input type="email" name="email" className="text-input contact-input" placeholder="Enter your email address..."/>
                        <textarea name="message" rows="4" placeholder="Your message..." className="text-input contact-input"></textarea>
                        <button type="submit" className="btn btn-big"><i className="fas fa-envelope"></i>send</button>
                    </form>
                </div>
            </div>
                <div className="footer-bottom">
                    &copy; 2022 | Designed by Natykins Tech (Dev-Natty)
                </div>
        </div>
    </div>
  )
}
