import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import Shimmer from './Shimmer';

const UpcomingMovies = () => {

  const [movies,setmovies] = useState();

  useEffect(()=>{FetchUpcomingMovies()},[]);


    const FetchUpcomingMovies = async() =>{
      const url = 'https://imdb188.p.rapidapi.com/api/v1/getUpcomingMovies?region=US';
      const options = {
	      method: 'GET',
	      headers: {
		      'X-RapidAPI-Key': '7e321a2e3dmshf92e1f9626cf012p1bbd6ejsn442803ed61e7',
		      'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
	      }
      };

    try {
	    const response = await fetch(url, options);
	    const result = await response.json();
      setmovies(result?.message);
	    // console.log(result.message);

    } catch (error) {
	    console.error(error);
    }
    }
    if(!movies) return <Shimmer />;

    console.log(movies);
  return (
    <div>
      <h1 className='text-6xl font-extrabold mx-20 my-3 p-2 font-serif'>Up Coming Movies</h1>
          <div className='flex flex-wrap justify-center'>
        {/* <MovieCard movies={movies[0]}/> */}
        {
          movies.map((item)=><MovieCard movies={item}/>)
        }
    </div>
    </div>
  )
}

export default UpcomingMovies