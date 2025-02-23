import React from 'react'
import { useMovies } from './context'
import Image from 'next/image';

const ActivityComponent = ({ index, movieId, seats, time, date }) => {
    const { movies, clearBookings } = useMovies();
    const dates = new Date(date);
    const formattedDate = dates.toISOString().split("T")[0];
    const details = movies.filter(val => val.id == movieId)
    console.log(details[0].name, seats, time, date);
    const handleDelete = () => {

        clearBookings(movieId)
    }
    return (
        <div className=' group border-b-2  border-slate-400 pb-4 w-[80%]'>

            <div className='  relative w-[88%] h-fit flex justify-between '>
                <h1 className=' max-w-[50px] w-[50px] text-start'>{index + 1}</h1>
                <h1 className='w-[100px] max-w-[100px] truncate'>{details[0]?.name}</h1>
                <h1 className='w-[50px] max-w-[50px] text-start'>{seats}</h1>
                <h1 className='w-[100px] max-w-[100px] text-start'>${Number(seats) * 25}</h1>
                <h1 className='w-[80px] max-w-[80px] text-start'   >{time == 1 ? ' 9:00' : time == 2 ? ' 12:00' : "18:00"}</h1>
                <h1 className='w-[100px]  max-w-[100px]  text-start'>{formattedDate}</h1>
                <Image onClick={handleDelete} className='absolute hidden cursor-pointer group-hover:block -right-10 top-[50%] -translate-y-1/2' src={'/delete-svgrepo-com.svg'} width={25} height={25} alt='delte'
                />
            </div>
        </div>

    )
}

export default ActivityComponent
