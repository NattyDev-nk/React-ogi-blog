import "./header.css"
import HeadImage from '../../assets/pexel.jpg'

export default function Header() {
  return (
    <div className='header'>
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Oke Golden Ink</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src= { HeadImage } alt="" className="headerImage" />
        </div>
    </div>
  )
}
