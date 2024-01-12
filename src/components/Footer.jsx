import wp from '../assets/whatsapp.svg'
import linkedin from '../assets/linkedin.svg'
import mail from '../assets/mail.svg'

const Footer = () => {
    return (
        <footer id="contact" className="text-center bg-cyan-950 py-10 px-2">
            <p className="text-md md:text-lg text-gray-300 mb-4"><span className='font-semibold'>Stay Connected with Us!</span> Reach out for travel updates and inquiries.</p>
            <div className="flex items-center justify-center">
                <div className="w-[20%] border-t border-white mx-2"></div>
                <a
                    href="https://api.whatsapp.com/send?phone=5491144146185"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-600 mx-2"
                >
                    <img src={wp} alt="WhatsApp" className="h-6 m-2" />
                </a>
                <a
                    href="https://www.linkedin.com/in/yane-it/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 mx-2"
                >
                    <img src={linkedin} alt="LinkedIn" className="h-6 m-2" />
                </a>
                <a
                    href="mailto:yanetolmedo.dev@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-gray-700 mx-2"
                >
                    <img src={mail} alt="Email" className="h-6 m-2" />
                </a>
                <div className="w-[20%] border-t border-white mx-2"></div>
            </div>
            <p className="text-xs text-gray-300 mt-4">Copyright © 2024 by Yanet Olmedo.</p>
        </footer>
    );
};

export default Footer;