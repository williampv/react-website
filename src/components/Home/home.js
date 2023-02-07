import TheOffice from "../assets/the_office.jpg"
import "./home.css"

function Home() {
    return (
        <>
            <h1>The Office</h1>
            <img className="poster" src={TheOffice}></img>
        </>
    )
}

export default Home