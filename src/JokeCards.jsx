import { useContext , useRef , useEffect} from "react";
import './JokeCards.css';
import { cardProp } from "./App";

const JokeCards = () => {

    const cardOne = useRef(null);
    const cardTwo = useRef(null);
    const cardThree = useRef(null);
    const cardFour = useRef(null);




    useEffect(() => {

        const cardElements = [cardOne.current,cardTwo.current,cardThree.current,cardFour.current];

        const cardObserver = new IntersectionObserver((cards) => {

            cards.forEach((card) => {

                if(card.isIntersecting){

                    card.target.classList.add('slide');
                }else{
                    card.target.classList.remove('slide');
                }
            });
        });

    
       cardElements.forEach((card) =>{
         cardObserver.observe(card);
       })
        

    },[])
    

    const cardsArray = useContext(cardProp);
    return(
        <div className="cards">

            <p ref={cardOne} className="card-1">{cardsArray[0]}</p>
            <p ref={cardTwo} className="card-2">{cardsArray[1]}</p>
            <p ref={cardThree} className="card-3">{cardsArray[2]}</p>
            <p ref={cardFour} className="card-4">{cardsArray[3]}</p>
        </div>
    )
}

export default JokeCards;