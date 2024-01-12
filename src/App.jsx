import Header from './components/Header';
import FormBooking from './components/FormBooking';
import ListBooking from './components/ListBooking';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import { BookingProvider } from './context/BookingContext';

function App() {
  return (
    <Router>
      <div className='min-h-screen w-full bg-gradient-to-r from-gray-300 to-cyan-600'>
        <Header />
        <BookingProvider>
          <Routes>
            <Route path="/" element={<FormBooking />} />
            <Route path="/mybookings" element={<ListBooking />} />
          </Routes>
        </BookingProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
