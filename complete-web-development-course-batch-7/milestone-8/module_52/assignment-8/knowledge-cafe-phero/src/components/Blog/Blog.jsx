import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h2>Question's Answer</h2>
            <div>
                <h5>Difference between props vs state ?</h5>
                <p>Props are used to pass data from a parent component to a child component, while state is used to manage data within a component. Props are immutable and cannot be changed within a component, while state is mutable and can be updated using the setState function.</p>
            </div>
            <hr />
            <div>
                <h5>How does useState work ?</h5>
                <p>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
            </div>
            <hr />
            <div>
                <h5>Purpose of useEffect other than fetching data</h5>
                <p>The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.</p>
            </div>
            <hr />
            <div>
                <h5>How Does React work ?</h5>
                <p>React creates a VIRTUAL DOM in memory. Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM. React only changes what needs to be changed!</p>
            </div>
        </div>
    );
};

export default Blog;