import '../index.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="p-6 lg:p-10">
            <nav>
                <ul className="justify-between flex text-xl lg:text-3xl">
                    <li className="font-lobster text-blue-500">
                        <Link to="/">Overtunes</Link>
                    </li>
                    <li className="text-white font-inconsolate space-x-3">
                        <Link className='hover:text-gray-400' to="/commands">Commands</Link>
                        <a className="hover:text-gray-400"
                            href="https://discord.com/oauth2/authorize?client_id=873101608467185684&scope=bot&permissions=4332047432&scope=applications.commands%20bot"
                            target="_blank" rel="noopener noreferrer">Invite</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
