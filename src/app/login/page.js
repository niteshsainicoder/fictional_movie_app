'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function page() {
    const router = useRouter();
    const [credentials] = useState({ username: "naval.ravikant", password: "05111974" })
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const validate = () => {
        if (credentials.username == username && credentials.password == password) {
            router.push('/home/booking')
        } else {
            setUsername('');
            setPassword('');
            setError(true);
        }
    }
    return (
        <div
            className='w-full h-screen bg-neutral-200 flex items-center justify-center'>
            <div
                className=' relative w-[90vw] max-w-[400px] h-[50vh] flex flex-col items-center justify-around py-10 max-h-[600px] bg-stone-800 rounded-md '>
                <div
                    className='w-full flex h-[40px] items-center justify-center gap-2 text-white'>
                    <Image
                        src={"/language.svg"}
                        width={32}
                        height={32}
                        alt='globe' />
                    <h1 className='font-semibold text-[20px]'>
                        Almanack
                    </h1>
                </div>
                <div
                    className='w-[84vw] max-w-[220px]  px-2 h-fit flex bg-white  rounded-lg overflow-hidden'>
                    <Image
                        src={'/user-svgrepo-com.svg'}
                        width={22}
                        height={20}
                        alt='User' />
                    <input
                        onChange={(e) => { setUsername(e.target.value); setError(false) }}
                        value={username}
                        placeholder='Username'
                        className='outline-none ring-0 max-w-[180px]  p-2' />
                </div>
                <div
                    className=' w-[84vw] max-w-[220px] px-2 h-fit flex bg-white rounded-lg overflow-hidden'>
                    <Image
                        src={'/password-lock-svgrepo-com.svg'}
                        width={24}
                        height={20}
                        alt='User'
                      />
                    <input
                        onChange={(e) => { setPassword(e.target.value); setError(false) }}
                        value={password}
                        placeholder='password'
                        className='outline-none ring-0 max-w-[180px]  p-2' />
                </div>
                {error && <h1 className=' absolute z-40 bottom-24 text-red-500 '>Wrong Credentials</h1>}
                <button onClick={validate}
                    className='bg-white mt-2 w-[180px] py-2 rounded-2xl'>
                    Login
                </button>
            </div>
        </div>
    )
}

export default page
