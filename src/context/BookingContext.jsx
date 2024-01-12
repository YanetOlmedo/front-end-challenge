import PropTypes from "prop-types";
import { createContext, useContext, useState, useEffect } from "react";

const BookingContext = createContext();

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) throw new Error("useBooking must be used within a BookingProvider");
    return context;
};

export const BookingProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const storedBooks = localStorage.getItem("books");
        if (storedBooks) {
            setBooks(JSON.parse(storedBooks));
        }
    }, []);

    const saveBooksToLocalStorage = (newBooks) => {
        localStorage.setItem("books", JSON.stringify(newBooks));
    };

    const getBooks = () => {
        return books;
    };

    const addBooking = (newBooking) => {
        const updatedBooks = [...books, newBooking];
        setBooks(updatedBooks);
        saveBooksToLocalStorage(updatedBooks);
    };

    const deleteBookingById = (bookingId) => {
        const updatedBooks = books.filter((booking) => booking.id !== bookingId);
        setBooks(updatedBooks);
        saveBooksToLocalStorage(updatedBooks);
    };

    return (
        <BookingContext.Provider
            value={{
                books,
                getBooks,
                addBooking,
                deleteBookingById,
            }}
        >
            {children}
        </BookingContext.Provider>
    );
};

BookingProvider.propTypes = {
    children: PropTypes.node.isRequired,
};