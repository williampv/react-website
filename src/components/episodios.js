import { useEffect, useState } from "react"

function Episodios() {
    const [episode, setEpisode] = useState(null)
    useEffect(function getEpisode () {
        fetch('https://officeapi.dev/api/episodes/random')
            .then(response => response.json())
            .then(data => setEpisode(data.data))
    }, [])

    return(
        <div>
            {episode?.title}
            <br></br>
            {episode?.description}
        </div>
    )
}

export default Episodios