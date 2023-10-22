import {useEffect} from "react"

const useTitle = title => {
    // title dynamic name
    useEffect(() => {
        document.title = `${title} - Coffee Store`
    }, [title])
}

export default useTitle;