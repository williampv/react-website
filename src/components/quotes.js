import {useEffect, useState} from "react";

function Quotes() {
    const [quote, setQuote] = useState('null')
    useEffect(function getQuotes() {
        fetch('https://officeapi.dev/api/quotes/random')
            .then(response => response.json())
            .then(data => setQuote(data.data))
    }, [])

    return(
        <div>
            {quote?.content}
        </div>
    )
}

export default Quotes