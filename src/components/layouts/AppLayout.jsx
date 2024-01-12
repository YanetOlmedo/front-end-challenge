import PropTypes from 'prop-types';
import Header from "../Header";
import Footer from "../Footer";
const AppLayout = ({ children }) => (
    <div className='min-h-screen w-full bg-gradient-to-r from-gray-300 to-cyan-600'>
        <Header />
        {children}
        <Footer />
    </div>
);

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout