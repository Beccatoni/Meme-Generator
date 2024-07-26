import React, { useState } from "react";
import memeData from "../memeData";

const Meme = () => {

  const imagesData = memeData.data.memes
  
const [allMemeImages, setAllMemeImages] = useState(imagesData)
const [meme, setMeme] = useState( {
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })
  // console.log(imagesData[0].url)
  // console.log((imagesData[0]['url']));


  const handleClick = () => {
    const randomImageUrl = imagesData[(Math.floor(Math.random()*imagesData.length))].url 
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: randomImageUrl 
    }))
  }
  return (
    <div className=" flex flex-col items-center ">
      <div  className="flex  flex-col gap-5 w-full items-center justify-center text-xl py-9">
        <div className="flex gap-16">
          <div className="flex flex-col gap-2">
            <label htmlFor="top-text" className="">
              Top text
            </label>
            <input type="text" id="top-text" placeholder="Top text" className=" h-12 w-[20rem] border-2  border-slate-300 rounded-lg px-3" />
          </div>

          <div className="flex flex-col gap-2 ">
            <label htmlFor="bottom-text" className="">
              Bottom text
            </label>
            <input type="text" id="bottom-text" placeholder="Bottom text" className="  h-12 border-2 w-[20rem] border-slate-300 rounded-lg px-3" />
          </div>
        </div>

        <button onClick={handleClick} className="h-12 text-white rounded-lg bg-gradient-to-r from-violet-700 to-fuchsia-500 text-xl font-semibold w-[44rem] cursor-pointer">Get new meme image🖼️</button>
      </div>
      <img src={meme.randomImage} alt="" className="max-w-full" />
    </div>
  );
};

export default Meme;
