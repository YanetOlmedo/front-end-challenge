import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import CustomTabMenu from './CustomTabMenu';
import Card from './ui/card';


const FormBooking = () => {
    const destinations = [
        { label: 'Buenos Aires', value: 'buenosaires' },
        { label: 'Cordoba', value: 'cordoba' },
        { label: 'Mendoza', value: 'mendoza' }
    ];


    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);


    return (
        <section className='flex justify-center py-4 md:py-12'>
            <Card>
                <div>
                    <CustomTabMenu />
                    <h2 className="text-cyan-600 text-center text-xl font-semibold pb-4">Book a trip now!</h2>
                    <form className="space-y-2 md:space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="origin" className="block text-sm md:text-base text-gray-700">From:</label>
                            <Dropdown id="origin"
                                options={destinations}
                                placeholder="Select Origin"
                                className="w-full"
                                filter={true}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="destination" className="block text-sm md:text-base text-gray-700">To:</label>
                            <Dropdown
                                id="destination"
                                options={destinations}
                                placeholder="Select Destination"
                                className="w-full"
                                filter={true}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="passengers" className="block text-sm md:text-base text-gray-700">
                                Passengers:
                            </label>
                            <Dropdown
                                id="passengers"
                                options={Array.from({ length: 12 }, (_, index) => ({ label: `${index + 1}`, value: index + 1 }))}
                                placeholder="Select Number of Passengers"
                                className="w-full"
                                filter={true}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="date" className="block text-sm md:text-base text-gray-700">Date:</label>
                            <Calendar
                                id="date"
                                dateFormat="dd/mm/yy"
                                showIcon
                                className="w-full border-b border-gray-300"
                                minDate={currentDate}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="time" className="block text-sm md:text-base text-gray-700">Time:</label>
                            <Calendar id="time"
                                showIcon
                                showTime
                                timeOnly
                                hourFormat="24"
                                className="w-full border-b border-gray-300"
                                required
                            />
                        </div>
                        <div className="flex justify-around space-x-4">
                            <Button label="Submit" className="bg-cyan-600 w-24 h-10 text-white text-sm flex items-center justify-center" />
                            <Button label="Clear" className="bg-white w-24 h-10 text-red-500 border border-red-500 text-sm flex items-center justify-center" />
                        </div>
                    </form>
                </div>
            </Card>
        </section>
    );
}


export default FormBooking;