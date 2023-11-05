import { useEffect, useState } from "react";

const useFetchData = () => {
    // data store state
    const [menu, setMenu] = useState([]);
    // data loading state
    const [loading, setLoading] = useState(true);
    // fetch data
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);
            })
    }, [])
    return [menu, loading];
};

export default useFetchData;