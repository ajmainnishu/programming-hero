import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Car Doctor Resources`
    }, [title])
}

export default useTitle;