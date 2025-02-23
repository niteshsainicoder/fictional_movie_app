'use client'
import { useMovies } from '@/app/components/context';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function page() {
  const { selectedMovie, addBooking } = useMovies();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [time, setTime] = useState(1)
  const [counter, setCounter] = useState(1)
  const router = useRouter();
  useEffect(() => {
    if (!selectedMovie) {
      router.push('/home/booking');
    }
  }, [])

  const handleBooking = () => {
    console.log( selectedMovie, counter || 1, time, selectedDate);
    
    addBooking(selectedMovie.id, counter || 1, time, selectedDate)
    router.push('/home/activity')
  }
  return (
    <div
      className='flex flex-col   items-start mt-1 gap-4 px-8 justify-start w-full'>
      <div className='flex  justify-between w-full h-fit'>


        <div className=' w-[90vw] max-w-[900px] h-[301px] relative '>
          <Image src={selectedMovie?.img} fill alt='img' className='object-cover rounded-md' />
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
      <div className='w-full flex flex-col gap-4 items-start justify-start'>
        <h1 className='font-bold text-[24px] w-full'>
          {selectedMovie?.name}
        </h1>
        <div className='w-full flex gap-4 items-center justify-start'>
          <h1 className='w-[180px] font-medium'>Ticket Count</h1>
          <button className='font-bold scale-x-150' onClick={() => setCounter(prev => (prev > 1 ? prev - 1 : prev))}> - </button>
          <span className='w-[80px] bg-black text-center rounded-md text-white px-2 p-1'> {counter}</span>
          <button className='scale-150 -translate-y-[2px]' onClick={() => setCounter(prev => prev + 1)}> + </button>
        </div>
        <div className='w-full flex gap-4 items-center justify-start'>
          <h1 className='w-[180px] font-medium'>Show Time</h1>
          <button onClick={() => setTime(1)} className={`w-[80px] rounded-md hover:scale-[1.02] px-2 p-1 ${time == 1 ? 'bg-black text-white' : 'bg-slate-300 text-black'}  font-semibold flex gap-2 `}><Image src={'/light_mode.svg'} width={20} height={20} alt='sorry' />9:00 </button>
          <button onClick={() => setTime(2)} className={`w-[80px] rounded-md hover:scale-[1.02] px-2 p-1 ${time == 2 ? 'bg-black text-white' : 'bg-slate-300 text-black'} font-semibold flex gap-2`}><Image src={'/language.svg'} width={20} height={20} alt='sorry' />12:00</button>
          <button onClick={() => setTime(3)} className={`w-[80px] rounded-md hover:scale-[1.02] px-2 p-1 ${time == 3 ? 'bg-black text-white' : 'bg-slate-300 text-black'}   font-semibold flex gap-2`}><Image src={'/dark_mode.svg'} width={20} height={20} alt='sorry' />18:00</button>
        </div>
        <div className='w-full flex gap-4 items-center justify-start'>
          <h1 className='w-[180px] font-medium'>Date</h1>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            className="border px-4 py-1 mt-2 rounded w-full"
            placeholderText="Select a date"
          />
        </div>
        <button onClick={handleBooking} className='w-[200px] px-4 p-2 bg-black rounded-md text-white'>Book Ticket</button>
      </div>
    </div>
  )
}

export default page
