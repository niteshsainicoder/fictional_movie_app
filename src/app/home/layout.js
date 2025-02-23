'use client'
import Image from 'next/image'
import React from 'react'
import { MovieProvider } from '../components/context'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function homelayout({
    children
}) {
    const router = useRouter();
    const pathname = usePathname();
    return (
        <MovieProvider>

            <div
                className='w-screen h-screen caret-transparent  flex max-h-full p-4 bg-stone-200 '>
                <div
                    className='w-[278px] flex flex-col gap-4 p-2 h-full bg-black rounded-xl'>
                    <div
                        className='w-full flex py-14 h-[40px] items-center justify-center gap-2 text-white'>
                        <Image
                            src={"/language.svg"}
                            width={60}
                            height={60}
                            alt='globe' />
                        <h1
                            className='font-semibold text-[2vw]'>
                            Almanack
                        </h1>
                    </div>
                    <div
                        onClick={() => router.push('/home/booking')}

                        className={`w-full cursor-pointer flex items-center  px-4 h-[55px] ${pathname !== '/home/activity' ? 'bg-white text-black hover:bg-stone-600 hover:text-white' : ' bg-black text-white hover:bg-stone-600 '} rounded-md `}>
                        <Image
                            src={'/inbox.svg'}
                            width={30}
                            height={30}
                            className={`filter ${pathname !== '/home/activity' ? 'invert-0' : 'invert'}`}
                        />
                        <h1 className='w-full font-bold text-center text-[16px] h-fit' >
                            Booking
                        </h1>
                    </div>
                    <div
                        onClick={() => router.push('/home/activity')}
                        className={`w-full cursor-pointer flex items-center px-4 h-[55px]  ${pathname == '/home/activity' ? 'bg-white text-black hover:bg-stone-600 hover:text-white' : ' bg-black text-white hover:bg-stone-600 '} rounded-md `}>
                        <Image src={'/download.svg'} width={30} height={30} className={`filter ${pathname === '/home/activity' ? 'invert' : 'invert-0'}`} />

                        <h1 className='w-full font-bold text-center text-[16px]  h-fit' >
                            Activity
                        </h1>
                    </div>
                </div>
                {children}
            </div>
        </MovieProvider>

    )
}

// export default page

