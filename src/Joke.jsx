import { useContext } from "react";

import {contextProp} from './App'



const Joke = () => {

    const globalProp = useContext(contextProp);

    return(
        <>

                    <div className='dad-joke-two'>
                        <p>Singing in the shower is fun until you get soap in your mouth.<b>{globalProp[0]}</b></p>
                    </div>

                    <div className='dad-joke-three'>
                        <p>My wife is really mad at the fact that I have no sense of direction.<b>{globalProp[1]}</b></p>
                    </div>

                    <div className='dad-joke-four'>
                        <p>How do you follow Will Smith in the snow?<b>{globalProp[2]}</b></p>
                    </div>
        </>
    )
}

export default Joke;