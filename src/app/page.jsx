"use client"
import { useState } from "react";
import Image from "next/image";
import orc from "./orc.png";
import Link from "next/link";
export default function Home() {
return(
  <main className="">
  <section className="min-h-screen bg-[url('https://www.chromethemer.com/wallpapers/chromebook-wallpapers/images/960/skyrim-4k-chromebook-wallpaper.jpg')] bg-center bg-cover flex justify-center items-center flex-col">
  <div className="max-w-3xl">
  <h1 className=" text-6xl font-bold drop-shadow-lg text-white mb-4 ">Forge Your Ultimate Skyrim Build</h1>
  <h1 className=" text-2xl font-bold drop-shadow-lg text-white  mb-6">Create and customize unique Skyrim character builds with our easy-to-use generator, tailored to suit your playstyle and preferences</h1>
<Link href={"/character-builder"}>

  <button className="text-white px-3 py-2 border-2 text-lg ">Build Character</button>
</Link>


  </div>
  
  </section>
  </main>
)
}
