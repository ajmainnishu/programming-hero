import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} Volunteer Network`;
    }, [title])
}

export default useTitle;