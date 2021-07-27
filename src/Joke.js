import React, {useState, useEffect} from 'react';
import Reveal from './Reveal'

const Joke = () => {

    //state
    const[joke, setJoke] = useState(``)
    const[punchline, setPunchLine] = useState(``)
    const[url, setUrl ] = useState(`https://official-joke-api.appspot.com/random_joke`)
    const [switched, setSwitched] = useState(false)

    //functions
    const GenerateJoke = () => {
        setSwitched(false);
        fetch(url)
        .then(res => res.json())
        .then(data => {
        setJoke(data.setup)
        setPunchLine(data.punchline)
        })
    }

    const switchPunchBody = () => {
        setSwitched(!switched)
    }

    useEffect(() => {
         GenerateJoke()
    }, [])

    return (
        <div>

            <p>{joke}</p>
            {switched && <Reveal punchline={punchline}/> }
            <button onClick={switchPunchBody}>
                {switched && `Hide punchline`}
                {!switched && 'Reveal the punchline!'}
            </button>
            <br /><br />
            <button onClick={GenerateJoke}>Get new joke &#128540;</button>

        </div>
    );
}

export default Joke