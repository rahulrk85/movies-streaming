import React from 'react'

const MovieCard = ({movies}) => {

    // console.log(movies);
    const {titleText, imageModel} = movies.entries[0];
  return (
    <div className='w-72 font-serif bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-xl m-2'>
        <img className='p-3 w-72 h-96' src={imageModel?.url} alt='movies'/>
        <h1 className='font-bold text-2xl p-2 m-2 pb-4'>{titleText}</h1>
    </div>
  )
}

export default MovieCard