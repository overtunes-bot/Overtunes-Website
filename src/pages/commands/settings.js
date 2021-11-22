import { Link } from 'react-router-dom';
import InfoCommands from '../../components/infoCommands';

export default function Settings() {
    return (
        <>
            <div className="lg:m-60 lg:mt-0">
                <InfoCommands />
                <div className="p-6">
                    <div className="bg-gray-600 h-auto rounded-2xl">
                        <div className="p-2 w-full flex flex-wrap text-center justify-center">
                            <Link className="cursor-pointer bg-gray-800 p-2 rounded-xl m-2 flex-grow text-white font-inconsolate text-lg" to="/commands">Music</Link>
                            <Link className="cursor-pointer bg-gray-800 p-2 rounded-xl m-2 flex-grow text-white font-inconsolate text-lg" to="/commands/filter">Filter</Link>
                            <Link className="cursor-pointer bg-cornFlowerBlue p-2 rounded-xl m-2 flex-grow text-white font-inconsolate text-lg" to="/commands/settings">Settings</Link>
                            <Link className="cursor-pointer bg-gray-800 p-2 rounded-xl m-2 flex-grow text-white font-inconsolate text-lg" to="/commands/playlist">Playlist</Link>
                            <Link className="cursor-pointer bg-gray-800 p-2 rounded-xl m-2 flex-grow text-white font-inconsolate text-lg" to="/commands/utils">Utils</Link>
                        </div>
                    </div>
                </div>

                <div id="settingCommands" className="p-6 space-y-5">
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-setup</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Setup special text channel for requesting song
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-defaultvolume</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Set default volume for player
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-announce</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Enable or unable announcement when song playing
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-prefix</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Set default prefix for the bot
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-djonly</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Set Overtunes only used for user has DJ role
                        </p>
                    </div>
                </div>
            </div >
        </>
    )
}