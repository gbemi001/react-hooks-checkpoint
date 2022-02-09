import React, {useState} from 'react'

const MovieCard =  () => {
    const[title, setTitle] = useState("")
    const[description, setDescription] = useState("")
    const[posterUrl, setPosterUrl] = useState("")
    const[rating, setRating] = useState(" ")
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return(
        <div>
        <h2>Add Only Worthy New Movies Here...</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="Title">Movie Title: </label>
            <input type="text" name="title" placeholder="Enter Movie title here" id="title" onChange={e=>setTitle(e.target.value)} />
            </div>

            <div>
            <label htmlFor="Description">Movie description: </label>
            <textarea name="description" placeholder="Enter Movie description here" id="description" cols="30" rows="10" onChange={e=>setDescription(e.target.value)} />
            </div>

            <div>
            <label htmlFor="PosterUrl">Poster URL: </label>
            <input type="text" name="url" placeholder="Enter Movie Poster url here" id="posterUrl" onChange={e=>setPosterUrl(e.target.value)} />
            </div>

            <div>
            <label htmlFor="Rating">Movie Rating: </label>
            <input type="text" name="rating" placeholder="Enter Movie rating here" id="rating" onChange={e=>setRating(e.target.value)} />
            </div>

            <div>
            <input type="submit" value="Add"/>
            </div>

        </form>
        

        </div>
    )
}; export default MovieCard