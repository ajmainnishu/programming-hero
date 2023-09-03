import { Link } from "react-router-dom";
import './Post.css'

const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div className="post">
            <h5>ID: {id}</h5>
            <h5>{title}</h5>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
            <button>Show Post Details</button>
        </div>
    );
};

export default Post;