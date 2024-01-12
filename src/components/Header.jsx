import banner from '../assets/banner-bus3.jpg';

const Header = () => {
    return (
        <div className="relative bg-cover bg-center h-40 md:h-64" style={{ backgroundImage: `url(${banner})` }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <h1 className="text-white text-xl font-semibold md:text-5xl mx-auto pt-12 md:pt-20 relative z-20 text-center">
                <span className='text-cyan-600'>ADA</span>BUS <span className='text-cyan-600'>ARG</span>ENT<span className='text-cyan-600'>INA</span>
            </h1>
            <p className='text-white text-xs md:text-lg text-center pt-2 md:pt-4 relative z-20'>Travel worry-free, book your dreams in every seat!</p>
        </div>
    );
}

export default Header;
