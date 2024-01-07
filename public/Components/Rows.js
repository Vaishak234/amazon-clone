import React, { useEffect, useState } from 'react'
import axios from "../axios";
import styled from 'styled-components';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_imgurl="http://image.tmdb.org/t/p/original/"

function Rows({ title ,fetchUrl,isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState()
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results);
        }
        fetchData()

    }, [fetchUrl])

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie)
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get('v'))
                     console.log(trailerUrl);
                }).catch((err) => {
                console.log(err);
            })
        }
    }
   
  return (
      <>
      <Row>
          <RowTitle>{title}</RowTitle>
          <RowPosters >
              {movies.map((movie) => {
                return (
                   <RowPoster isLargeRow={isLargeRow?true:false} onClick={()=>handleClick(movie.name? movie.name:movie.title)} key={movie.id}  width={400} src={`${base_imgurl}${isLargeRow ? movie.poster_path :movie.backdrop_path}`} alt={movie.name} />
                )
              })
             }
          </RowPosters>
             { trailerUrl && <YouTube  videoId={trailerUrl} opts={opts} />}
          </Row>
      </>
  )
}

export default Rows

const Row = styled.div`
margin: 20px;
color: white;


`

const RowPosters = styled.div`
display:flex;
overflow-y:hidden;
overflow-x:scroll;
padding: 15px;
&::-webkit-scrollbar {
 display: none;
}
`

const RowTitle = styled.h1`
margin: 0;
`

const RowPoster = styled.img`
width: 100%;
object-fit: contain;
max-height: ${props=>props.isLargeRow?'250px':'100px'};
margin-right: 15px;
transition: transform 450ms;

:hover{
    transform:scale(1.08);
}
`

