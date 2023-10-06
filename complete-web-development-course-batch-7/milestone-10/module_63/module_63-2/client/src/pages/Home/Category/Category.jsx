import { useParams } from "react-router-dom";

const Category = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>This is Category: {id}</h2>
        </div>
    );
};

export default Category;