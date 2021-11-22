import { Link } from 'react-router-dom';
import InfoCommands from '../../components/infoCommands';

export default function Utils() {
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
                            <Link className="cursor-pointer bg-gray-800 p-2 rounded-xl m-2 flex-grow text-white font-inconsolate text-lg" to="/commands/playlist">Playlist</Link>
                            <Link className="cursor-pointer bg-cornFlowerBlue p-2 rounded-xl m-2 flex-grow text-white font-inconsolate text-lg" to="/commands/utils">Utils</Link>
                        </div>
                    </div>
                </div>

                <div id="utilsCommands" className="p-6 space-y-5">
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-help</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Shows all commands at Overtunes
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-vote</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Shows vote links for Overtunes
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-support</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Shows supports link for Overtunes
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-invite</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Shows invite link for Overtunes
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-ping</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Show Overtunes latency
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-nodes</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Shows music server stats for Overtunes
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-aboutme</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Shows info about Overtunes
                        </p>
                    </div>
                </div>
            </div >
        </>
    )
}