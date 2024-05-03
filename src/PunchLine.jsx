
import { useContext , useRef , useEffect} from 'react';
import {punchLineProp} from './App';

const PunchLine = () => {

    const {punchLineObserver  ,  punchLine } = useContext(punchLineProp);
    const puchLineone = useRef(null);
    const puchLinetwo = useRef(null);
    const puchLinethree = useRef(null);

    const punchLineArray = [puchLineone,puchLinetwo,puchLinethree];

    useEffect(() => {
        punchLineObserver(punchLineArray)
    },[])

    return(

        <>
            <div className='dad-joke-five'>
                 <h1>How does dry skin affect you at work?</h1>
                 <p  ref={puchLineone}   className='punchLine' ><b >{punchLine[0]}</b></p>
            </div>


            <div className='dad-joke-six'>
                 <h1 > Why do seagulls fly over the ocean?</h1>
                 <p  ref={puchLinetwo} className='punchLine' ><b>{punchLine[1]}</b></p>
            </div>

            <div className='dad-joke-seven'>
                 <h1 >A skeleton walks into a bar and says, Hey, bartender.</h1>
                 <p ref={puchLinethree} className='punchLine'><b >{punchLine[2]}</b></p>
            </div>
        </>
    )
}

export default PunchLine;