import { useState } from 'react';
import './Blogs.css'
import { useEffect } from 'react';
import Articles from '../Articles/Articles';
import Bookmark from '../Bookmark/Bookmark';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
    // blogs state
    const [blogs, setBlogs] = useState([]);
    // spent time state
    const [times, setTimes] = useState([]);
    // bookmark state
    const [bookmarks, setBookmarks] = useState([]);
    // json data fetch for blog state
    useEffect(() => {
        fetch('./fakeData/fakeData.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    // spent time set time state
    const totalTime = time => {
        let newTime = [...times, parseInt(time)];
        setTimes(newTime)
    }
    // bookmark calculation and set on bookmark state
    const totalBookmark = items => {
        let newBookmark = [];
        const exists = bookmarks.find(bookmarkItem => bookmarkItem === items);
        if (!exists) {
            newBookmark = [...bookmarks, items];
        } else {
            toast.warn("Can't add more than 1");
            const remaining = bookmarks.filter(bookmarkItem => bookmarkItem !== items);
            newBookmark = [...remaining, exists];
        }
        setBookmarks(newBookmark);
    }
    return (
        <div className='blogs-container'>
            {/* articles section */}
            <div className='article-container'>
                {
                    blogs.map(blog => <Articles blogs={blog} key={blog.id} totalTime={totalTime} totalBookmark={totalBookmark}></Articles>)
                }
            </div>
            {/* bookmark section */}
            <div>
                <Bookmark times={times} bookmarks={bookmarks}></Bookmark>
            </div>
        </div>
    );
};

export default Blogs;