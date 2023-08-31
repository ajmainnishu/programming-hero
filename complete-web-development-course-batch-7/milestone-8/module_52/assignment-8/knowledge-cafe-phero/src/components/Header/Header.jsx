import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header-container'>
                <div>
                    <h1>Knowledge Cafe</h1>
                </div>
                <div>
                    <img className='header-img' src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" alt="header image" />
                </div>
            </div>
            <hr /> 
        </div>
    );
};

export default Header;