const FullPage = () => {
    return(
        <section>

            <nav className="p-5 h-20 bg-gradient-to-r from-purple-900 to-purple-400 flex items-center text-white gap-3">
                <img src='/trollFace.svg' className="flex justify-center items-center mr-[6px]"/>
                <h2 className="text-2xl mr-auto">Meme Generator</h2>
                <h4 className="text-md">React Project</h4>
            </nav>

            <main>
                <form action="" className="grid grid-cols-2 w-3/4 m-auto gap-5 mt-8">
                    <input
                        type="text"
                        placeholder="top-text"
                        className=" indent-2 border-2 border-purple-700 rounded-md h-12"/>
                    <input
                        type="text"
                        placeholder="bottom-text"
                        className=" indent-2 border-2 border-purple-700 rounded-md h-12"/>
                    <button className="bg-gradient-to-r from-purple-900 to-purple-400 rounded-md p-2 col-span-full text-white h-12">
                        Get a new meme image 🖼
                    </button>
                </form>
                <img
                    src="/memeimg.svg"
                    alt=""
                    className="w-3/4 m-auto p-12 rounded" />
            </main>
        </section>
    )
}

export default FullPage
