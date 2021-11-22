import { Link } from 'react-router-dom';
import InfoCommands from '../../components/infoCommands';

export default function Playlist() {
    return (
        <>
            <div className="lg:m-60 lg:mt-0">
                <InfoCommands />
                <div className="p-6">
                    <div className="bg-gray-600 h-auto rounded-2xl">
                        <div className="p-2 w-full flex flex-wrap text-center justify-center">
                            <Link className="cursor-pointer bg-gray-800 p-2 rounded-xl m-2 flex-grow text-white font-inconsolate text-lg" to="/commands">Music</Link>
                            <Link className="cursor-pointer bg-gray-800 p-2 rounded-xl m-2 flex-grow text-white font-inconsolate text-lg" to="/commands/filter">Filter</Link>
                            <Link className="cursor-pointer bg-gray-800 p-2 rounded-xl m-2 flex-grow text-white font-inconsolate text-lg" to="/commands/settings">Settings</Link>
                            <Link className="cursor-pointer bg-cornFlowerBlue p-2 rounded-xl m-2 flex-grow text-white font-inconsolate text-lg" to="/commands/playlist">Playlist</Link>
                            <Link className="cursor-pointer bg-gray-800 p-2 rounded-xl m-2 flex-grow text-white font-inconsolate text-lg" to="/commands/utils">Utils</Link>
                        </div>
                    </div>
                </div>

                <div id="playlistCommands" className="p-6 space-y-5">
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-create</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Create private playlist
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-rename</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Rename your saved playlist
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-list</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">See all your playlist
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-save</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Save current song to your saved playlist
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-view</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">View all your song at your saved playlist
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-load</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Load all your songs at saved queue
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-addlist</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Add all songs in the queue to playlist
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-delete</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Delete your saved playlist
                        </p>
                    </div>
                </div>
            </div >
        </>
    )
}