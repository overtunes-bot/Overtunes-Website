import { Link } from 'react-router-dom';
import InfoCommands from '../../components/infoCommands';

export default function Music() {
    return (
        <>
            <div className="lg:m-60 lg:mt-0">
                <InfoCommands />
                <div className="p-6">
                    <div className="bg-gray-600 h-auto rounded-2xl">
                        <div className="p-2 w-full flex flex-wrap text-center justify-center">
                            <Link className="cursor-pointer bg-cornFlowerBlue p-2 rounded-xl m-2 flex-grow text-white font-inconsolate text-lg" to="/commands">Music</Link>
                            <Link className="cursor-pointer bg-gray-800 p-2 rounded-xl m-2 flex-grow text-white font-inconsolate text-lg" to="/commands/filter">Filter</Link>
                            <Link className="cursor-pointer bg-gray-800 p-2 rounded-xl m-2 flex-grow text-white font-inconsolate text-lg" to="/commands/settings">Settings</Link>
                            <Link className="cursor-pointer bg-gray-800 p-2 rounded-xl m-2 flex-grow text-white font-inconsolate text-lg" to="/commands/playlist">Playlist</Link>
                            <Link className="cursor-pointer bg-gray-800 p-2 rounded-xl m-2 flex-grow text-white font-inconsolate text-lg" to="/commands/utils">Utils</Link>
                        </div>
                    </div>
                </div>

                <div id="musicCommands" className="p-6 space-y-5">
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-play</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Play a song from url or song name, support spotify and
                            Soundcloud
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-seek</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Seek duration on current song
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-join</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Make Overtunes join your voice channel
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-pause</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Pause curreng queue
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-disconnect</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Make Overtunes leave your voice channel
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-clear</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Clear all current queue
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-back</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Back to previous song
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-queue</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Shows current queue
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-autoplay</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Enable autoplay for current queue
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-shuffle</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Shuffle current queue
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-resume</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Resume current queue if paused
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-fix</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Change discord voice server for better audio
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-search</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Search requested song title
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-jump</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Jump to another song at queue
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-volume</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Change volume for current queue
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-nowplaying</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Shows current playing song
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-loop</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Loop current song or queue
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-remove</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Remove request song at queue
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-stop</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Stop current queue and remove all songs
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-lyrics</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Search for lyrics for requested title or current song
                        </p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-2xl h-auto text-white font-inconsolate text-xl shadow-md">
                        <h1 className="font-bold">-skip</h1>
                        <div className="h-px mt-4 bg-white"></div>
                        <p className="mt-2 text-white font-mono p-2">Skip current song
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}