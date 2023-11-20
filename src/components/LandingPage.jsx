import { Link } from "react-router-dom"
import { TypeAnimation } from "react-type-animation"

const LandingPage = () => {
    return(
        <section className=" h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-purple-900 to-purple-400 text-white">
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Welcome to the Meme Generator !',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Where you get to Create your own Memes',
                    1000,
                    'With randomly Generated Images',
                    1000,
                    'Attach your text, be creative and enjoy !!',
                    1000
                ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
                className=" text-4xl md:text-6xl inline-block mb-10"
            />
            <button className=" border-2 p-3 rounded-md md:text-lg text-sm">
                <Link to='./full-page'>
                    Click Here to Start
                </Link>
            </button>
        </section>
    )
}

export default LandingPage
