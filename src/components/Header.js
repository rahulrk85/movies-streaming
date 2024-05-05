import React from 'react'

const Header = () => {
  return (
    <div className='flex  justify-between'>
        <div className='p-4 m-3'>
            <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflix-logo' className='w-60' />
        </div>
        <div className='flex text-2xl p-8 font-semibold font-serif'>
            <h1 className='p-4'>Home</h1>
            <h1 className='p-4'>Contact</h1>
            <h1 className='p-4'>About</h1>
        </div>
    </div>
  )
}

export default Header;