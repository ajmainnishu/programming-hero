import useTitle from "../../hooks/usetitle";

const Blogs = () => {
    // dynamic title
    useTitle('| Blogs');
    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-20">
            {/* item 1 */}
            <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources. <br /> At a high level, these each serve different purposes. The access token allows for access to different APIs and protected resources. The refresh token lets you mint new access tokens. The id token from OpenID Connect (OIDC) is used by the client to display information about the user.</p>
                </div>
            </div>
            {/* item 2 */}
            <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p>SQL databases are relational, and NoSQL databases are non-relational. SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
                </div>
            </div>
            {/* item 3 */}
            <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    What is express js? What is Nest JS?
                </div>
                <div className="collapse-content">
                    <p>ExpressJs: Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js. <br />
                        NodeJs: Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.
                    </p>
                </div>
            </div>
            {/* item 3 */}
            <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    What is MongoDB aggregate and how does it work?
                </div>
                <div className="collapse-content">
                    <p>What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;