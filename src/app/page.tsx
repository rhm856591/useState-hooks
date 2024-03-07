"use client"
import { useState } from "react";
import React from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const add =()=>{
    if(count < 20){
      setCount(count + 1)
    }
    else{
      return;
    }
  }
  const remove =()=>{
    if(count <= 0){
      return;
    }
    else{
      setCount(count - 1)
    }
  }

  return (
    <>
    <div className="flex flex-col items-center justify-center h-[100vh] w-[100wv]">

    <h1 className="font-bold">Welcome to counting World</h1>
    <h3>Count : <span className="bg-yellow-900 px-3 py-1 rounded-full">{count}</span></h3>
    <button onClick={add} className="bg-white text-black my-2 px-3 py-1 rounded">Add</button>
    <button onClick={remove} className="bg-white text-black my-2 px-3 py-1 rounded">Remove</button>
    </div>
    </>
  );
}
