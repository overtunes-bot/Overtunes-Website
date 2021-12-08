import { Link } from 'react-router-dom';
import '../index.css';

function Footer() {
    return (
        <footer className="bg-black h-auto p-2 lg:p-10">
            <div className='flex justify-between p-2 lg:p-10'>
                <Link to={'/privacy'} className='text-gray-400 cursor-pointer'>Privacy Policy</Link>
                <p className="text-gray-400 text-right">Made with 💖 by Vann#3784</p>
            </div>
            <p className="text-gray-400 mt-4 text-center">Copyright © Overtunes</p>
        </footer>
    );
}

export default Footer;
