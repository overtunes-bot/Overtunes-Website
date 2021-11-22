import { Link } from 'react-router-dom';
import InfoCommands from '../../components/infoCommands';

export default function Filter() {
    return (
        <>
            <div className="lg:m-60 lg:mt-0">
                <InfoCommands />
                <div className="p-6">
                    <div className="bg-gray-600 h-auto rounded-2xl">
                        <div className="p-2 w-full flex flex-wrap text-center justify-center">
                            <Link className="cursor-pointer bg-gray-800 p-2 rounded-xl m-2 flex-grow text-white font-inconsolate text-lg" to="/commands">Music</Link>
                            <Link className="cursor-pointer bg-cornFlowerBlue p-2 rounded-xl m-2 flex-grow text-white font-inconsolate text-lg" to="/commands/filter">Filter</Link>
                            <Link className="cursor-pointer bg-gray-800 p-2 rounded-xl m-2 flex-grow text-white font-inconsolate text-lg" to="/commands/settings">Settings</Link>
                            <Link className="cursor-pointer bg-gray-800 p-2 rounded-xl m-2 flex-grow text-white font-inconsolate text-lg" to="/commands/playlist">Playlist</Link>
                            <Link className="cursor-pointer bg-gray-800 p-2 rounded-xl m-2 flex-grow text-white font-inconsolate text-lg" to="/commands/utils">Utils</Link>
                        </div>
                    </div>
                </div>

                <div id="filterCommands" className="p-6 space-y-5">
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-nightcore</h1>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-8D</h1>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-tremolo</h1>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-distortion</h1>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-pop</h1>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-vaporwave</h1>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-trebblebass</h1>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-earrape</h1>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-karaoke</h1>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-soft</h1>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-daycore</h1>
                    </div>
                </div>
            </div >
        </>
    )
}