import React from "react";

const Meme = () => {
  return (
    <div className="">
      <form action="" className="flex  flex-col gap-5 w-full items-center justify-center text-xl py-9">
        <div className="flex gap-16">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="">
              Top text
            </label>
            <input type="text" placeholder="Top text" className=" h-12 w-[20rem] border-2  border-slate-300 rounded-lg" />
          </div>

          <div className="flex flex-col gap-2 ">
            <label htmlFor="" className="">
              Bottom text
            </label>
            <input type="text"placeholder="Bottom text" className="  h-12 border-2 w-[20rem] border-slate-300 rounded-lg " />
          </div>
        </div>

        <button className="h-12 text-white rounded-lg bg-gradient-to-r from-violet-700 to-fuchsia-500 text-xl font-semibold w-[44rem] cursor-pointer">Get new meme image🖼️</button>
      </form>
    </div>
  );
};

export default Meme;
