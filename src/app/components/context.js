'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState(
        [
            {
                id: 1,
                name: "Godfather (1972)",
                img: "/movie/download 1.svg"
            },
            {
                id: 2,
                name: "Inception (2010)",
                img: "/movie/0_gKT0Cw0ACnsbaejO 1.svg"
            },
            {
                id: 3,
                name: "Avengers : Endgame (2019)",
                img: "/movie/scale 1.svg"
            },
            {
                id: 4,
                name: "The Menu (2022)",
                img: "/movie/download 2.svg"
            },
            {
                id: 5,
                name: "Get Out (2017)",
                img: "/movie/download 3.svg"
            },
            {
                id: 6,
                name: "National Treasure (2004)",
                img: "/movie/download 4.svg"
            },
        ]);

    const [bookings, setBookings] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState();

    useEffect(() => {
        const storedBookings = JSON.parse(localStorage.getItem("bookings"));
        if (storedBookings) setBookings(storedBookings);
    }, []);

    useEffect(() => {
        localStorage.setItem("bookings", JSON.stringify(bookings));
    }, [bookings]);


    const addBooking = (movieId, seats,time,date) => {

        const details = movies.filter(val => val.id == movieId && val)
        if (!details) {
            toast("Movie not found");
        }
        const newBooking = { movieId, title: details.title, seats,time,date };
        setBookings([...bookings, newBooking]);
        toast("Successfully booked")
    };

    const clearBookings = (id) => {
        console.log(id);
        
        if (!id) {
            setBookings([]);
            localStorage.removeItem("bookings");
        } else {
            const newbook = bookings.filter(val => val.id === id && val);
            console.log(newbook);
            
            setBookings(newbook);
        }
        toast("Successfully removed")

    };

    return (
        <MovieContext.Provider value={{ movies, bookings, addBooking, clearBookings, selectedMovie, setSelectedMovie }}>
            {children}
        </MovieContext.Provider>
    );
};

// Custom hook for accessing movie context
export const useMovies = () => useContext(MovieContext);
