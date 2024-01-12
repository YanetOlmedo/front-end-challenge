import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useBooking } from "../context/BookingContext";

const DetailsBook = ({ visible, onHide, booking }) => {
    const { deleteBookingById } = useBooking();
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);

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
        setShowConfirmDialog(false);
        onHide();
    };

    const confirmCancel = () => {
        setShowConfirmDialog(true);
    };

    const rejectCancel = () => {
        setShowConfirmDialog(false);
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
                        onClick={confirmCancel}
                        className="bg-red-500 w-32 h-10 text-white text-sm flex items-center justify-center">
                        Cancel Booking
                    </Button>
                </div>
            </Dialog>
            <Dialog
                header="Confirm Cancellation"
                visible={showConfirmDialog}
                onHide={rejectCancel}
                className="w-[60vw] md:w-[30vw]"
            >
                <p>Are you sure you want to cancel this booking?</p>
                <div className="flex justify-end">
                    <Button
                        label="No"
                        onClick={rejectCancel}
                        className="p-button-text mr-4"
                    />
                    <Button
                        label="Yes"
                        onClick={handleCancelBook}
                        className="text-red-500"
                    />
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
