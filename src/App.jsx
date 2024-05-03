import './App.css'
import  Mug from './assets/mug.png'
import { createContext, useEffect} from 'react';
import JokeCards from './JokeCards';
import Joke from './Joke';
import PunchLine from './PunchLine';
import { useRef } from 'react';
export const contextProp = createContext();
export const punchLineProp = createContext();
export const cardProp = createContext();


function App() {


  const firstJoke = useRef(null);
  const cardArray = {jokeCards : ['Why couldnt the bicycle stand up by itself? It was two tired.','What time did the man go to the dentist? Tooth hurt-y.' , 'How many tickles does it take to make an octopus laugh? Ten tickles.','What concert costs just 45 cents? 50 Cent featuring Nickelback!']};

  useEffect(() => {
    const setScrollHeight = () => {

      const HtmlElement = document.documentElement;
      const ScrollHieght = Math.min((HtmlElement.scrollTop / HtmlElement.clientHeight) * 100  , 100);
      HtmlElement.style.setProperty("--scroll-value" , ScrollHieght);
    }

    window.addEventListener('scroll' ,setScrollHeight);

  },[]);


  const ObserveMe = (observedElement) => {

    const Observe  = new IntersectionObserver((element) =>{

      element.forEach((ele) => {

        if(ele.isIntersecting){
          ele.target.classList.add('show-joke')
        }else{
          ele.target.classList.remove('show-joke')
        }
      })

    })

    try{

      observedElement.forEach((ele) => {
        Observe.observe(ele.current);

      });
      

    }catch(error){
      console.log(error)
    }
  }
  const jokePartTwo = {punchLineObserver : ObserveMe  , punchLine : ['You dont have any elbow grease to put into it.' , 'Because if they flew over the bay, wed call them bagels.','I`ll have one beer and a mop.']};
  const joke = {jokes : ['Then its a soap opera.' , 'So I packed up my stuff and right.', 'You follow the fresh prints.']};

  return (
    <>
    <div className='dad-jokes'>

        <div className='header-container'>

            <div className='dad-joke-container'>
              <div className='dad-joke-one'>

                    <h1 ref={firstJoke}>I only know 25 letters of the alphabet</h1>
                    <p>I don't know y.</p>
              </div>

              <div className='inside-joke-container'>

                <contextProp.Provider value={joke.jokes}>
                    <Joke/>
                </contextProp.Provider>
              </div>


            </div>  
          </div>
 
          <punchLineProp.Provider value={jokePartTwo}>
            <PunchLine/>
          </punchLineProp.Provider>

          <cardProp.Provider value={cardArray.jokeCards}>
            <JokeCards/>
          </cardProp.Provider>

    </div>
    </>
  )
}

export default App
