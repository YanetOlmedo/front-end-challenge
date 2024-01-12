import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Card from "./ui/card";
import CustomTabMenu from './CustomTabMenu';
import arrow from '../assets/arrow.svg';
import DetailsBook from './DetailsBook';


const ListBooking = () => {


    const [selectedBooking, setSelectedBooking] = useState(null);
    const [detailsVisible, setDetailsVisible] = useState(false);


    const handleDetailsClick = (bookingId) => {
        const booking = bookings.find(b => b.id === bookingId);
        setSelectedBooking(booking);
        setDetailsVisible(true);
    };


    const bookings = [
        { id: 1, origin: "Mendoza", destination: 'Buenos Aires', passengers: 2, date: '2024-01-01', time: '12:00 PM' },
        { id: 2, origin: "Buenos Aires", destination: 'Cordoba', passengers: 1, date: '2024-02-01', time: '2:30 PM' },
    ];


    return (
        <section className='flex justify-center py-4 md:py-12'>
            <Card>
                <CustomTabMenu />
                <h2 className="text-cyan-600 text-center text-xl font-semibold pb-4">My Bookings</h2>
                <div className="overflow-auto max-h-[50vh] min-h-[30vh]">
                    <DataTable value={bookings}>
                        <Column field="destination" header="Destination" className='text-sm' />
                        <Column field="date" header="Date" className='text-sm' />
                        <Column field="time" header="Time" className="text-sm hidden md:table-cell" />
                        <Column
                            body={(rowData) => (
                                <button className="flex items-center text-sm" onClick={() => handleDetailsClick(rowData.id)}>
                                    <img src={arrow} alt="Details" className="h-5 mr-2" />
                                </button>
                            )}
                        />

                    </DataTable>
                </div>
                <DetailsBook
                    visible={detailsVisible}
                    onHide={() => setDetailsVisible(false)}
                    booking={selectedBooking}
                />
            </Card>
        </section>
    );
};


export default ListBooking;