import FormBooking from './components/FormBooking';
import ListBooking from './components/ListBooking';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import ErrorPage from './components/ui/ErrorPage';
import AppLayout from './components/layouts/AppLayout';



function App() {
  return (
    <Router>
      <BookingProvider>
        <Routes>
          <Route path="/" element={
            <AppLayout>
              <FormBooking />
            </AppLayout>
          } />
          <Route path="/mybookings" element={
            <AppLayout>
              <ListBooking />
            </AppLayout>
          } />
          <Route path="/*" element={<ErrorPage statusCode={404} message="Not Found" />} />
        </Routes>
      </BookingProvider>
    </Router>
  );
}

export default App;