import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import CustomTabMenu from './CustomTabMenu';
import Card from './ui/card';
import { useBooking } from '../context/BookingContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const FormBooking = () => {
    const { addBooking, destinations } = useBooking();

    const initialOrigin = '';
    const initialDestination = '';
    const initialPassengers = null;
    const initialDate = null;
    const initialTime = null;

    const [origin, setOrigin] = useState(initialOrigin);
    const [destination, setDestination] = useState(initialDestination);
    const [passengers, setPassengers] = useState(initialPassengers);
    const [date, setDate] = useState(initialDate);
    const [time, setTime] = useState(initialTime);
    const MySwal = withReactContent(Swal);

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!origin || !destination || !passengers || !date || !time) {
            MySwal.fire({
                title: 'Error',
                text: 'Please fill all fields',
                icon: 'error',
                confirmButtonText: 'OK',
                width: '30rem',
                confirmButtonColor: '#0891b2',
            });
            return;
        }


        const formatTime = (time) => {
            const hours = time.getHours().toString().padStart(2, '0');
            const minutes = time.getMinutes().toString().padStart(2, '0');
            return `${hours}:${minutes}`;
        };

        const newBooking = {
            id: Math.random(),
            origin,
            destination,
            passengers,
            date: date ? date.toISOString().split('T')[0] : '',
            time: time ? formatTime(time) : '',
        };

        addBooking(newBooking);
        handleReset();
    };

    const handleReset = () => {
        setOrigin(initialOrigin);
        setDestination(initialDestination);
        setPassengers(initialPassengers);
        setDate(initialDate);
        setTime(initialTime);
    };

    return (
        <section className='flex justify-center py-4 md:py-12'>
            <Card>
                <div>
                    <CustomTabMenu />
                    <h2 className="text-cyan-600 text-center text-xl font-semibold pb-4 pt-6 lg:pt-0">Book a trip now!</h2>
                    <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label htmlFor="origin" className="block text-sm md:text-base text-gray-700">From<span className='text-red-500'>*</span></label>
                            <Dropdown
                                id="origin"
                                value={origin}
                                onChange={(e) => setOrigin(e.value)}
                                options={destinations}
                                placeholder="Select Origin"
                                className="w-full"
                                filter
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="destination" className="block text-sm md:text-base text-gray-700">To<span className='text-red-500'>*</span></label>
                            <Dropdown
                                id="destination"
                                value={destination}
                                onChange={(e) => setDestination(e.value)}
                                options={destinations}
                                placeholder="Select Destination"
                                className="w-full"
                                filter={true}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="passengers" className="block text-sm md:text-base text-gray-700">
                                Passengers<span className='text-red-500'>*</span>
                            </label>
                            <Dropdown
                                id="passengers"
                                value={passengers}
                                onChange={(e) => setPassengers(e.value)}
                                options={Array.from({ length: 12 }, (_, index) => ({ label: `${index + 1}`, value: index + 1 }))}
                                placeholder="Select Number of Passengers"
                                className="w-full"
                                filter={true}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="date" className="block text-sm md:text-base text-gray-700">Date<span className='text-red-500'>*</span></label>
                            <Calendar
                                id="date"
                                value={date}
                                onChange={(e) => setDate(e.value)}
                                dateFormat="dd/mm/yy"
                                showIcon
                                className="w-full border-b border-gray-300 custom-calendar"
                                minDate={currentDate}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="time" className="block text-sm md:text-base text-gray-700">Time<span className='text-red-500'>*</span></label>
                            <Calendar id="time"
                                value={time}
                                onChange={(e) => setTime(e.value)}
                                showIcon
                                showTime
                                timeOnly
                                hourFormat="24"
                                className="w-full border-b border-gray-300 custom-calendar"
                            />
                        </div>
                        <div className="flex justify-around space-x-4 pt-4">
                            <Button
                                type="submit"
                                label="Submit"
                                className="bg-cyan-600 w-24 h-10 text-white text-sm flex items-center justify-center" />
                            <Button
                                type="button"
                                label="Clear"
                                onClick={handleReset}
                                className="bg-white w-24 h-10 text-red-500 border border-red-500 text-sm flex items-center justify-center" />
                        </div>
                    </form>
                </div>
            </Card>
        </section>
    );
}

export default FormBooking;
