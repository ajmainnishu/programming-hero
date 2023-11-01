import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Cudly Toy Store ${title}`
    }, [title])
}

export default useTitle;