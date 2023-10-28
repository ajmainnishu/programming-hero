import useTitle from "../../../hooks/useTitle";

const Blog = () => {
    // website title dynamic
    useTitle('Blog -');
    return (
        <div>
            <h2 className="flex justify-center items-center text-7xl h-screen">Coming Soon!!!</h2>
        </div>
    );
};

export default Blog;