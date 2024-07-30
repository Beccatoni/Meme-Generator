import React, { useEffect, useState } from "react";
import memeData from "../memeData";


const Meme = () => {

  const imagesData = memeData.data.memes
  
const [allMemes, setAllMemes] = useState([])
const [meme, setMeme] = useState( {
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })

  const [data, setData] = useState({})

  // const [show, setShow] = useState(true)
  // const [windowWidth, setWindoWidth] = useState(window.innerWidth)
 
  useEffect(()=>{
    async function getMemes(){
      const res =  fetch(`https://api.imgflip.com/get_memes`)
      const data = (await res).json()
      setAllMemes(data.data.memes)
    }
   getMemes()
    
  }, [])

// console.log(allMemes)
  function handleChange(event){
    const {name, value} = event.target
          setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
          }))
  }
  // console.log(imagesData[0].url)
  // console.log((imagesData[0]['url']));

  // useEffect(()=> {
  //   window.addEventListener("resize", function(){
  //     console.log("Resized window")
  //     setWindoWidth(window.innerWidth)
  //   })
  // }, [windowWidth])


  const handleClick = () => {
    const randomImageUrl =allMemes[(Math.floor(Math.random()*allMemes.length))].url 
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: randomImageUrl 
    }))
  }


  // function handleSubmit(event){
  //   event.preventDefault()
    
  // }
  return (
    <div className=" flex flex-col items-center ">
      <div className="form flex  flex-col gap-5 w-full items-center justify-center text-xl py-9">
        <div className="flex gap-16">
          <div className="flex flex-col gap-2">
            <label htmlFor="top-text" className="">
              Top text
            </label>
            <input type="text" id="top-text" placeholder="Top text" name="topText" value={meme.topText}  onChange={handleChange} className=" h-12 w-[20rem] border-2  border-slate-300 rounded-lg px-3" />
          </div>

          <div className="flex flex-col gap-2 ">
            <label htmlFor="bottom-text" className="">
              Bottom text
            </label>
            <input type="text" id="bottom-text" placeholder="Bottom text" name="bottomText" value={meme.bottomText}  onChange={handleChange} className="  h-12 border-2 w-[20rem] border-slate-300 rounded-lg px-3" />
          </div>
        </div>

        <button onClick={handleClick} className="h-12 text-white rounded-lg bg-gradient-to-r from-violet-700 to-fuchsia-500 text-xl font-semibold w-[44rem] cursor-pointer">Get new meme image🖼️</button>
      </div>
      <div className="relative flex flex-col items-center">
      <img src={meme.randomImage} alt="" className="max-w-full "  />
      <h2 className="absolute top-2 text-white text-2xl font-extrabold" >{meme.topText}</h2>
      <h2 className="absolute bottom-5 text-white text-2xl">{meme.bottomText}</h2>      
      </div>



      <section>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </section>
      
      {/* <section className="bg-orange-400 h-svh w-svw flex flex-col justify-center items-center" >

      <button className="bg-white px-6 rounded-md h-16" onClick={()=> setShow(prev => !prev)}> Toggle Window tracker</button>
      <p className="font-bold text-3xl text-white">Window width:  {show && windowWidth }</p>
      </section> */}

          </div>
  );
};

export default Meme;
