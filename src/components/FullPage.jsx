import { useState } from "react"
import data from "../data"

const FullPage = () => {

    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"/memeimg.svg",
        ImageName:""
    })

    const [memeImages, setMemeImages] = useState(data);

    const getMemeImage = () => {
        const memesArray = memeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        const Imgname = memesArray[randomNumber].name
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
            ImageName: Imgname
        }))
    }

    const handleChange = (event) => {
        const {name, value} = event.target

        setMeme(prevMeme => {
            return{
                ...prevMeme,
                [name]: value
            }
        })
    }

    return(
        <section>
            <nav className="p-5 h-20 bg-gradient-to-r from-purple-900 to-purple-400 flex items-center text-white gap-3">
                <img src='/trollFace.svg' className="flex justify-center items-center mr-[6px]"/>
                <h2 className="text-2xl mr-auto">Meme Generator</h2>
                <h4 className="text-md">React Project</h4>
            </nav>

            <main>
                <div className="grid grid-cols-2 w-3/4 m-auto gap-5 mt-8">
                    <input
                        type="text"
                        placeholder="top-text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                        className=" indent-2 border-2 border-purple-700 rounded-md h-12"/>
                    <input
                        type="text"
                        placeholder="bottom-text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                        className=" indent-2 border-2 border-purple-700 rounded-md h-12"/>
                    <button
                        className="bg-gradient-to-r from-purple-900 to-purple-400 rounded-md p-2 col-span-full text-white h-12"
                        onClick={getMemeImage}
                    >
                        Get a new meme image 🖼
                    </button>
                </div>
                <div className="relative text-white mt-8">
                    <img
                    src={meme.randomImage}
                    alt={meme.ImageName}
                    className="flex justify-center items-center max-w-full m-auto rounded p-2" />
                    <h2
                        draggable
                        className="absolute text-center font-bold flex flex-wrap
                        left-[50%] translate-x-[-50%] my-4 px-1 md:text-2xl uppercase tracking-normal drop-shadow-2xl top-0"
                    >{meme.topText}</h2>
                    <h2
                        draggable
                        className="absolute text-center font-bold flex flex-wrap
                        left-[50%] translate-x-[-50%] my-4 px-1 md:text-2xl uppercase tracking-normal drop-shadow-2xl bottom-0"
                    >{meme.bottomText}</h2>
                </div>
            </main>
        </section>
    )
}

export default FullPage
