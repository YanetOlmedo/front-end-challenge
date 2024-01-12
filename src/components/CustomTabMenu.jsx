import { useState, useEffect } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate, useLocation } from 'react-router-dom';

const CustomTabMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const paths = ['/', '/mybookings'];
        const activeIndex = paths.findIndex(path => location.pathname === path);
        setActiveIndex(activeIndex !== -1 ? activeIndex : 0);
    }, [location]);

    const getTabClass = (isActive) => {
        return isActive
            ? 'text-cyan-600 text-sm'
            : 'text-gray-500 text-sm';
    };

    const items = [
        { label: 'Book', className: getTabClass(activeIndex === 0), command: () => { navigate('/'); setActiveIndex(0); } },
        { label: 'My Bookings', className: getTabClass(activeIndex === 1), command: () => { navigate('/mybookings'); setActiveIndex(1); } },
    ];
    return (
        <div>
            <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}
                className="text-sm text-gray-700"
            />
        </div>
    );
};

export default CustomTabMenu;
