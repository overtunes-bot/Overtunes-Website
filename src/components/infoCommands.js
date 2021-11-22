export default function InfoCommands() {
    return (<>
        <div className="p-6">
            <div className="bg-gray-600 h-36 rounded-md">
                <div className="rounded-md h-auto bg-gray-600 p-4">
                    <h1 className="text-white text-2xl font-marryweather">Note:</h1>
                    <div className='ml-3 text-white mt-3'>
                        <li>{'Never includes <> in your message when using the commands.'}</li>
                        <li>If you have changed the prefix, please use your own prefix</li>
                    </div>
                </div>
            </div>
        </div>
    </>)
}