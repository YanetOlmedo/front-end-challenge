import { createContext, useContext, useRef, useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { Toast } from 'primereact/toast';

export const BookingContext = createContext();

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) throw new Error("useBooking must be used within a BookingProvider");
    return context;
};

export const BookingProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const toast = useRef(null);

    const destinations = [
        { label: 'Buenos Aires', value: 'Buenos Aires' },
        { label: 'Cordoba', value: 'Cordoba' },
        { label: 'Santa Fe', value: 'Santa Fe' },
        { label: 'Mendoza', value: 'Mendoza' },
        { label: 'Salta', value: 'Salta' },
        { label: 'Jujuy', value: 'Jujuy' },
        { label: 'Tierra del Fuego', value: 'Tierra del Fuego' },
        { label: 'Río Negro', value: 'Río Negro' },
        { label: 'San Juan', value: 'San Juan' },
        { label: 'Entre Ríos', value: 'Entre Ríos' }
    ];

    const travelTimes = [
        { label: '08:00 AM', value: '08:00' },
        { label: '10:00 AM', value: '10:00' },
        { label: '01:00 PM', value: '13:00' },
        { label: '03:00 PM', value: '15:00' },
        { label: '06:00 PM', value: '18:00' },
        { label: '09:00 PM', value: '21:00' },
    ];

    useEffect(() => {
        const storedBooks = localStorage.getItem("books");
        if (storedBooks) {
            setBooks(JSON.parse(storedBooks));
        }
    }, []);

    const saveBooksToLocalStorage = (newBooks) => {
        try {
            localStorage.setItem("books", JSON.stringify(newBooks));
        } catch (error) {
            showToast('error', 'Error', 'Failed to save booking');
        }
    };

    const showToast = (severity, summary, detail) => {
        toast.current.show({ severity, summary, detail, life: 2500 });
    };

    const addBooking = (newBooking) => {
        try {
            const updatedBooks = [...books, newBooking];
            setBooks(updatedBooks);
            saveBooksToLocalStorage(updatedBooks);
            showToast('success', 'Success', 'Booking added successfully.');
        } catch (error) {
            showToast('error', 'Error', 'Failed to add booking.');
        }
    };

    const deleteBookingById = (bookingId) => {
        try {
            const updatedBooks = books.filter((booking) => booking.id !== bookingId);
            setBooks(updatedBooks);
            saveBooksToLocalStorage(updatedBooks);
            showToast('success', 'Success', 'Booking deleted successfully.');
        } catch (error) {
            showToast('error', 'Error', 'Failed to delete booking.');
        }
    };

    return (
        <BookingContext.Provider value={{
            books,
            getBooks: () => books,
            addBooking,
            deleteBookingById,
            destinations,
            travelTimes
        }}>
            {children}
            <Toast ref={toast} />
        </BookingContext.Provider>
    );
};

BookingProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
