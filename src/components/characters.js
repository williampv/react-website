import {useEffect, useState} from "react";

function Characters() {
    const [character, setCharacter] = useState(null)
    useEffect(function getCharacters() {
        fetch('https://officeapi.dev/api/characters/random')
            .then(response => response.json())
            .then(data => setCharacter(data.data))
    }, [])

    return(
        <div>
            {character?.firstname} {character?.lastname}
        </div>
    )
}

export default Characters