'use client';
import ActivityComponent from '@/app/components/ActivityComponent';
import { useMovies } from '@/app/components/context';
import Image from 'next/image';
import React from 'react'

function page() {
  const { bookings, } = useMovies()
  console.log(bookings);

  return (
    <div
      className='flex flex-col items-start mt-1 gap-4 px-8 justify-start w-full'>
      <div className='w-full flex justify-between items-center'>
        <h1 className='w-fit font-semibold text-[26px]'>
          Activity
        </h1>
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
      <div className='w-full max-w-[950px]  font-semibold flex justify-between h-fit border-b-2 pr-48 border-slate-400 pb-4'>
        <h1>ID</h1>
        <h1>Movie</h1>
        <h1>Tickets</h1>
        <h1>Amount</h1>
        <h1>Time</h1>
        <h1>Date</h1>
      </div>
      {bookings?.map((val ,index) => <ActivityComponent key={val.id + val.name} index={index} {...val} />)}
    </div>
  )
}

export default page
