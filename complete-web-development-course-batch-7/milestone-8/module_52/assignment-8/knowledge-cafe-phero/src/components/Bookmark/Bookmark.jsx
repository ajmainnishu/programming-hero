import './Bookmark.css'

const Bookmark = (props) => {
    const times = props.times;
    const bookmarks = props.bookmarks;
    // spent time calculation
    let readTime = 0
    for (let time of times) {
        readTime += time;
    }
    return (
        <div className='time-container'>
            <p className='time-spent'>Spent time on read: {readTime} min</p>
            <div className='title-container'>
                <p className='title-heading'>Bookmarked Blogs: {bookmarks.length}</p>
                <div>
                    {
                        bookmarks.map(title => <p className='title-para'>{title}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookmark;