import {Link} from 'react-router-dom'

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut libero commodi dolorem dignissimos et officiis. Laboriosam ducimus molestias aperiam fugit. Veritatis earum quasi quidem aperiam? Tempora esse labore dicta?</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;