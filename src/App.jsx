import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Meme from './components/Meme'
import Count from './components/Count'
import Star from './components/Star'
import contacti from './assets/contacti.png'
import boxes from './boxes'
import Box from './components/Box'


function App(props) {
 

  const [count, setCount] = useState(0)
  const [contact, setContact] = useState({
    firstName : 'John',
    lastName: 'Doe',
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true
  })
  const [squares, setSquares] = useState(boxes)



  function add(){
      setCount(prevCount => prevCount + 1)
  }

  function subtract(){
      setCount(prevCount => prevCount - 1)
  }

  //  for star toggle
  function toggleFavorite(){
    setContact(prevContact => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite
    }))
  }

  // console.log("App component rendered")

//square elements from the boxes  and styling

// const darkModeTrueorFalse = props.darkMode ? "#222222" : "#cccccc"
// const styles = {
//   backgroundColor : props.darkMode ? "#222222" : "#cccccc",
//   borderRadius: "10px"
// }


const squareElements = squares.map(square => (
  <Box on={square.on}  key={square.id}/>
))


  return (
    <>
  
    <Header/>
     <Meme/>
     <div className='flex justify-center items-center my-12'>
     <div className='bg-slate-600 flex  justify-center items-center h-60  w-44 relative rounded-md mb-10 '>
     <button onClick={subtract} className='bg-slate-400 h-7 w-7 rounded-full text-xl absolute left-10 bottom-24'>-</button>
     <Count number={count}/>
     <button onClick={add} className='bg-slate-400 h-7 w-7 rounded-full text-xl absolute right-10 bottom-24'>+</button>
   
     </div>
     </div>


{/* passing data from parent to child */}
     <div className='flex justify-center items-center my-12'>
       <article className=' flex flex-col gap-3 bg-slate-100 shadow-xl border border-slate-500 h-[22rem] w-[15rem] rounded-lg p-3'>
        <img src={contacti} alt="" />
        <div className='flex flex-col gap-4'>
          <Star isFilled = {contact.isFavorite} handleClick={toggleFavorite}/>
          <h2 className='font-bold text-3xl'>{contact.firstName} {contact.lastName}</h2>
        </div>
        <p className='text-slate-500 text-base'>{contact.phone}</p>
        <p className='text-slate-500 text-base'>{contact.email}</p>

       </article>
     </div>


     {/* boxes  */}

    <section className='flex justify-center items-center gap-3 my-6 max-w-[30%] flex-wrap mx-auto'>
     
        {squareElements}
    </section>


    </>
  )
}

export default App
