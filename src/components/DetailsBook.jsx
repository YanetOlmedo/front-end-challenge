import PropTypes from 'prop-types';
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useBooking } from "../context/BookingContext";

const DetailsBook = ({ visible, onHide, booking }) => {
    const { deleteBookingById } = useBooking();

    if (!booking) return null;

    const bookingDetails = [
        { label: "Origin", value: booking.origin },
        { label: "Destination", value: booking.destination },
        { label: "Passengers", value: booking.passengers },
        { label: "Date", value: booking.date },
        { label: "Time", value: booking.time },
    ];

    const handleCancelBook = () => {
        deleteBookingById(booking.id);
        onHide();
    };

    return (
        <div>
            <Dialog
                header="Booking Details"
                visible={visible}
                className="w-[80vw] md:w-[20vw]"
                onHide={onHide}
            >
                {bookingDetails.map((detail) => (
                    <div key={detail.label} className="flex justify-between mb-8">
                        <span>{detail.label}:</span>
                        <span>{detail.value}</span>
                    </div>
                ))}
                <div className="flex justify-end">
                    <Button
                        onClick={handleCancelBook}
                        className="bg-red-500 w-32 h-10 text-white text-sm flex items-center justify-center">
                        Cancel Booking
                    </Button>
                </div>
            </Dialog>
        </div>
    );
};

DetailsBook.propTypes = {
    visible: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    booking: PropTypes.shape({
        id: PropTypes.string.isRequired,
        origin: PropTypes.string,
        destination: PropTypes.string,
        passengers: PropTypes.number,
        date: PropTypes.string,
        time: PropTypes.string,
    }),
};

export default DetailsBook;
