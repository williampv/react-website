import { useEffect, useState } from "react"

function Episodios() {
    const [episode, setEpisode] = useState(null)
    const [shouldRefresh, setShouldRefresh] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(function getEpisode () {
        if (!shouldRefresh) {
            return
        }
        setIsLoading(true)
        fetch('https://officeapi.dev/api/episodes/random')
            .then(response => response.json())
            .then(data => {
                setShouldRefresh(false)
                setEpisode(data.data)
                setIsLoading(false)
            })
    }, [shouldRefresh])

    function onRefresh() {
        setShouldRefresh(true)
    }

    return(
        <div>
            <button onClick={onRefresh}>Refresh</button>
            <br></br>
            {episode?.title}
            <br></br>
            {episode?.description}
        </div>
    )
}

export default Episodios