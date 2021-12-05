import '../index.css';

function Home() {
    return (
        <>
            <img className="mt-24 w-40 lg:w-60 mr-auto ml-auto animate-bounce" src="/overtunes.png" alt="Overtunes" />
            <p className="text-center text-white mt-10 font-semibold font-sans text-ls lg:text-2xl mr-10 ml-10">
                Best music bot for <span className="text-blue-400">Discord</span> Supports Spotify, Soundcloud, Deezer and more...
            </p>

            <div className="flex justify-center mt-12 space-x-3 mr-10 ml-10">
                <a href='https://discord.com/oauth2/authorize?client_id=873101608467185684&scope=bot&permissions=4332047432&scope=applications.commands%20bot'><button className="transition duration-500 transform hover:-translate-y-2 hover:opacity-80 font-lobster text-white border-2 rounded-md w-28 lg:w-64 text-xl lg:text-3xl h-14 bg-cornFlowerBlue">Invite</button></a>
                <a href='https://discord.gg/hM8U8cHtwu'><button className="transition duration-500 transform hover:-translate-y-2 hover:opacity-80 font-lobster text-black border-2 rounded-md w-48 text-xl lg:text-3xl h-14 bg-maxBlurple2">Support</button></a>
            </div>

            <div className="h-1 mt-10 mr-10 ml-10 bg-cornFlowerBlue lg:hidden"></div>

            <div className="mt-36">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#BBADFF" fillOpacity="1"
                        d="M0,0L48,32C96,64,192,128,288,176C384,224,480,256,576,250.7C672,245,768,203,864,170.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                    </path>
                </svg>
                <div className="bg-maxBlurple2 h-20">
                </div>
            </div>

            <div className="bg-maxBlurple2 h-auto">
                <h1 className="text-center text-4xl font-marryweather text-white">Why Overtunes ?</h1>

                <div className="p-9 lg:flex lg:space-x-5">
                    <div className="mt-5 border-4 rounded-2xl">
                        <img className="mr-auto ml-auto" src="/safe.png" alt="safe" />
                        <h1 className="text-white text-center text-3xl font-lobster">Guaranteed safe for users</h1>
                        <p className="text-center text-white p-3 font-marryweather">We always keep our users safe when using
                            Overtunes.</p>
                    </div>
                    <div className="mt-5 border-4 rounded-2xl">
                        <img className="mr-auto ml-auto" src="/functional.png" alt="functional" />
                        <h1 className="text-white text-center text-3xl font-lobster">We always keep Overtunes fully functional</h1>
                        <p className="text-center text-white p-3 font-marryweather">We always welcome feedback from users in
                            managing Overtunes so that it meets our user standards.</p>
                    </div>
                    <div className="mt-5 border-4 rounded-2xl">
                        <img className="mr-auto ml-auto" src="/easy.png" alt="easy" />
                        <h1 className="text-white text-center text-3xl font-lobster">We make our users feel easy</h1>
                        <p className="text-center text-white p-3 font-marryweather">We make it easy for our users to use Overtunes,
                            from new features and more.</p>
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#BBADFF" fillOpacity="1"
                    d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,138.7C672,160,768,224,864,250.7C960,277,1056,267,1152,234.7C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                </path>
            </svg>

            <a className="p-10 mt-6 mr-auto ml-auto lg:hidden text-center justify-center flex"
                href="https://top.gg/bot/873101608467185684">
                <img src="https://top.gg/api/widget/873101608467185684.svg" alt='Stats' />
            </a>

            <h1 className="text-center text-5xl font-lobster text-white mt-5 invisible lg:visible">Statistic</h1>

            <div className="hidden lg:flex mt-6 p-16 justify-center space-x-5 text-center">
                <div className="border-4 p-10 rounded-3xl">
                    <p className="text-white text-3xl font-marryweather">700+ Servers</p>
                </div>
                <div className="border-4 p-10 rounded-3xl">
                    <p className="text-white text-3xl font-marryweather">100.000+ Users</p>
                </div>
                <div className="border-4 p-10 rounded-3xl">
                    <p className="text-white text-3xl font-marryweather">80+ Daily Listeners</p>
                </div>
            </div>
        </>
    );
}

export default Home;
