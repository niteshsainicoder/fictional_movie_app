'use client'
import Image from 'next/image'
import React from 'react'
import { useMovies } from './context'
import { useRouter } from 'next/navigation'

const MovieCard = ({ name, img, id }) => {
    const { setSelectedMovie } = useMovies();
    const router = useRouter();
    return (
        <div
            onClick={() => {
                setSelectedMovie({ id, name, img });
                router.push('/home/selection');
            }}
            className='w-[351px] cursor-pointer h-[250px] relative  max-h-[300px] flex flex-col py-1   hover:scale-105 transition-all duration-500    gap-2'>
            <Image src={img} width={350} height={200} alt='Img' />
            <div>
                <h1 className='text-[16px] font-semibold'>{name}</h1>
            </div>
        </div>

        
    )
}

export default MovieCard
