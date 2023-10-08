import { useRef } from 'react';
// import generatePDF from 'react-to-pdf';

const Blog = () => {
    const targetRef = useRef();
    return (
        <div className="w-6/12 mx-auto my-20">
            <div  ref={targetRef}>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Tell us the differences between uncontrolled and controlled components
                    </div>
                    <div className="collapse-content">
                        <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How to validate React props using PropTypes
                    </div>
                    <div className="collapse-content">
                        <p>Installing the prop-types Library and Basic Usage And we validate them by setting the propTypes property of the FooComponent component to an object that has the names of the props to validate as the keys. And the corresponding values are the data type of the props.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Tell us the difference between nodejs and express js
                    </div>
                    <div className="collapse-content">
                        <p>Express is built on top of Node, so yes, Express adds more features while building apps. Node is just a Javascript environment with libraries to make it easy to write software, whereas Express extends Node specifically to add middleware, routing, and much more.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What is a custom hook, and why will you create a custom hook?
                    </div>
                    <div className="collapse-content">
                        <p>Custom Hooks are typically used for local component state management and can handle specific functionality, such as form validation or API calls. They promote code reuse and simplify the logic within components.</p>
                    </div>
                </div>
            </div>
            <button className='btn mt-10' onClick={() => generatePDF(targetRef, {filename: 'blog.pdf'})}>Download PDF</button>
        </div>
    );
};

export default Blog;