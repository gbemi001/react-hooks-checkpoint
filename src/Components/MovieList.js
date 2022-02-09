import React, {useState} from 'react'

const MovieList = () =>{
    const[title, setTitle] = useState("American Underdog")
    const[description, setDescription] = useState("Some dreams become destiny. The true story of Kurt Warner, who went from a stockboy at a grocery store to a two-time NFL MVP, Super Bowl champion, and Hall of Fame quarterback.")
    const[posterUrl, setPosterUrl] = useState("https://static.netnaija.com/i/AqgKGAQPar1.jpg")
    const[rating, setRating] = useState("18")
    
    return(
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <img src = {posterUrl} alt="moviePosterUrl" width="200px"/>
            <p>Rating: {rating}</p>

            <h3>{title}</h3>
            <p>{description}</p>
            <img src = {posterUrl} alt="moviePosterUrl" width="200px"/>
            <p>Rating: {rating}</p>
        </div>
    )
}; export default MovieList