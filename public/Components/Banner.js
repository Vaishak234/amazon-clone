import axios from '../axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import requests from '../requests'

function Banner() {
    const [movie, setMovie] = useState([])
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            const randomNum = Math.floor(Math.random()*request.data.results.length)
            setMovie(request.data.results[randomNum]);

        }
        fetchData()
    }, [])
    
    function truncate(str) {
    return str? str.substring(0, 150) + "..." : str;
    } 
  
  return (
      <Bannerdiv style={{background:`url("http://image.tmdb.org/t/p/original/${movie.backdrop_path}")`}}>
         
          <BannerContents >
              <BannerTitle>
                  {movie.name}
              </BannerTitle>
              <BannerButton>
                  <Button>Play</Button>
                  <Button>My List</Button>
              </BannerButton>
              <BannerDescription>
                  {truncate(movie.overview)}
              </BannerDescription>
          </BannerContents>
        <FadeBottom></FadeBottom>
      </Bannerdiv>
      
  )
}

export default Banner

const Bannerdiv = styled.header`
 height: 448px;
 color: white;
 object-fit: contain;
 background-repeat: no-repeat;
 background-size:cover;
 margin-bottom: 3rem;
`
const BannerContents = styled.header`
margin-left: 30px;
padding-top: 140px;

`

const BannerButton = styled.div``

const BannerTitle = styled.h1`
font-size: 3rem;
margin-bottom: .5rem;
`

const Button = styled.button`
outline: none;
border: none;
font-weight: 700;
border-radius: .2rem;
padding-inline:2rem;
margin-right: 1rem;
padding-bottom: 0.5rem;
padding-top: 0.5rem;
background-color: rgba(51,51,51,.5);
cursor: pointer;
color: white;

:hover{
    background-color:white;
    color: black;
}

`

const BannerDescription = styled.p`
width: 45rem;
max-width: 360px;
line-height: 1.3;
padding-top:1rem ;
font-size: 1rem;
`
const FadeBottom = styled.div`
height: 7.4rem;
width: 100%;
`