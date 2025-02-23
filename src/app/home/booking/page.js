'use client'
import { useMovies } from '@/app/components/context';
import MovieCard from '@/app/components/MovieCard';
import Image from 'next/image';
import React, { useState } from 'react'

function page() {
  const [searchValue, setSearchValue] = useState('');
  const { movies } = useMovies();
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }
console.log(movies);

  return (
    <div
      className='flex flex-col items-start mt-1 gap-4 px-8 justify-start w-full'>
      <div
        className='w-full flex justify-between   h-[45px] '>
        <div
          className=' max-w-[768px] flex gap-2 min-w-[660px] rounded-lg ring-1 h-full px-4 bg-[#D9D9D9] '>
          <input
            placeholder='Search'
            value={searchValue}
            onChange={handleSearchChange}
            className=' w-[95%] placeholder:font-semibold placeholder:text-black h-full bg-transparent outline-none ring-0' />
          <Image
            src={'/search.svg'}
            width={38}
            height={38}
            alt={'search'} />
        </div>
        <div
          className='flex'>
          <div
            className='w-[70px] h-[70px] '>
            <Image
              src={'/account_circle.svg'}
              width={55}
              height={55}
              alt='profile'
              className='bg-[#D9D9D9] rounded-full aspect-auto p-2' />
          </div>
          <h1
            className='font-bold'>
            Naval
            <br />
            Ravikant
          </h1>
        </div>
      </div>

      <div className='w-full h-fit '>
        <h1 className='font-bold text-[20px]'>Good Morning Mr. Naval Ravikant !</h1>
      </div>
      <div className=' flex flex-wrap  items-center justify-between w-full h-full'>
        {movies?.map(val =>

          <MovieCard key={val.id} {...val} />
        )}
      </div>
    </div>
  )
}

export default page