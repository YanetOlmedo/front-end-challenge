import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Card from "./ui/card";
import CustomTabMenu from './CustomTabMenu';
import arrow from '../assets/arrow.svg';
import DetailsBook from './DetailsBook';
import { useBooking } from '../context/BookingContext';

const ListBooking = () => {
    const { getBooks } = useBooking();

    const [selectedBooking, setSelectedBooking] = useState(null);
    const [detailsVisible, setDetailsVisible] = useState(false);

    const handleDetailsClick = (bookingId) => {
        const booking = getBooks().find(b => b.id === bookingId);
        setSelectedBooking(booking);
        setDetailsVisible(true);
    };

    const books = getBooks();

    return (
        <section className='flex justify-center py-4 md:py-12'>
            <Card>
                <CustomTabMenu />
                <h2 className="text-cyan-600 text-center text-xl font-semibold pb-4 pt-6 lg:pt-0">My Bookings</h2>
                <div className="overflow-auto max-h-[50vh] min-h-[30vh]">
                    {books.length > 0 ? (
                        <DataTable value={books}>
                            <Column field="destination" header="Destination" className='text-sm' />
                            <Column field="date" header="Date" className='text-sm' />
                            <Column field="time" header="Time" className="text-sm hidden md:table-cell" headerClassName="hidden md:table-cell" />

                            <Column
                                body={(rowData) => (
                                    <button className="flex items-center text-sm" onClick={() => handleDetailsClick(rowData.id)}>
                                        <img src={arrow} alt="Details" className="h-5 mr-2" />
                                    </button>
                                )}
                            />
                        </DataTable>
                    ) : (
                        <p className="text-gray-500 pt-6">No bookings at the moment.</p>
                    )}
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