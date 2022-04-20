import "./post.css";
import { Link } from "react-router-dom";

export default function Post({post}) {
  const PF = "http://localhost:5000/images/"
  return (
    <div className="post">
      {post.photo && ( 
      <img src= {PF + post.photo} 
      alt="" className="postImage" />
      )}
        
        <div className="postInfo">
            <div className="postCats">
              {post.categories.map((c)=> (
                <span className="postCat">{c.name}</span>
             ))}
            </div>
            <Link to={`/post/${post._id}`} className="link">
            <span className="postTitle">{post.title}</span>
            </Link>
            <hr/>
            <span className="postDate">
              {new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDescript">{post.desc}</p>
        
    </div>
  );
}
