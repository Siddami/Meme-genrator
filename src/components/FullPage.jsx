import { useEffect, useState } from "react"

const FullPage = () => {

   const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"/memeimg.svg",
        ImageName:""
    })
    const [allMemes, setAllMemes] = useState([])

    useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        const Imgname = allMemes[randomNumber].name
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
                        className="absolute font-extrabold
                        left-[50%] translate-x-[-50%] my-4 px-1 md:text-3xl uppercase top-0 drop-shadow-[40px]"
                    >{meme.topText}</h2>
                    <h2
                        className="absolute font-extrabold
                        left-[50%] translate-x-[-50%] my-4 px-1 md:text-3xl uppercase bottom-0 drop-shadow-[40px]"
                    >{meme.bottomText}</h2>
                </div>
            </main>
        </section>
    )
}

export default FullPage
