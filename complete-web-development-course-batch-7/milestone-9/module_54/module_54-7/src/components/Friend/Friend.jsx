import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({friend}) => {
    const {email, name, id, phone} = friend;
    return (
        <div className="friend">
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p><Link to={`/friend/${id}`}>Show me details</Link></p>
        </div>
    );
};

export default Friend;