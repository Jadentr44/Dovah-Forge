import React from "react";
import info from "./data.json";
import Options from "./Options";
import { useState,useRef } from "react";
import Image from "next/image";
import names from '../api/data/names.json'
export default function Race({ setPage, update_build }) {
  const [selected, setSelected] = useState(0);
  const [race, setRace] = useState(undefined);
  const [character, setCharacter] = useState({});
  const [advanced, setAdvanced] = useState(false);

  const character_name = useRef(null)


  const races = [
    {
      name: "Nord",
      desc: "Nords in Skyrim are hardy, resilient warriors from the cold northern lands, renowned for their bravery, honor, and natural resistance to frost.",
      points:{
        Two_Handed:25,
        Smithing:20,
        Block:20,
        One_Handed:20,
        Light_Armor:20,
        Speech:20,
      },
      code: "nord",
    },
    {
      name: "Orc",
      desc: "Orcs are a proud and formidable race known for their physical strength, warrior culture, and craftsmanship, particularly in forging powerful Orcish weapons and armor.",
      points:{
        Heavy_Armor:25,
        Smithing:20,
        Block:20,
        Two_Handed:20,
        One_Handed:20,
        Enchanting:20,
      },
      code: "orc",
    },
    {
      name: "High Elf",
      desc: "High Elves, or Altmer, are a highly intelligent and magically gifted race, hailing from the Summerset Isles, often seen as proud or aloof due to their long lifespans and advanced mastery of arcane arts.",
      points:{
        Illusion:25,
        Conjuration:20,
        Destruction:20,
        Restoration:20,
        Alteration:20,
        Enchanting:20,
      },
      code: "high_elf",
    },
    {
      name: "Khajiit",
      desc: "Khajiit are a feline race from Elsweyr, known for their agility, stealth, and natural aptitude for thievery, often excelling as thieves, assassins, or traders.",
      points:{
        Sneak:25,
        One_Handed:20,
        Archery:20,
        Lockpicking:20,
        Pickpocket:20,
        Alchemy:20,
      },
      code: "khajiit",
    },
  ];
  function codeToName(code){
    return code
    .split('_') // Split the string by underscores
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(' '); // Join the words back with a space
  }

  function build_character() {
    // return console.log(character)
    // let race = selectedRace.toLowerCase().replace(/ /g, "_")

    const possible_builds = info.builds.filter(e=>{
      if(e.races.includes(race.code)) return e
      
      
    })
    let build = possible_builds[Math.floor(Math.random() * possible_builds.length)]
    console.log(build);
    

    console.log(info.builds);
    let data = {name:character_name.current.value,race:race,type:build}
    if(!data.name){
      let namesArr = names[`${race.code}_names`]
      data.name = namesArr[Math.floor(Math.random() * namesArr.length)]
      console.log(data.name)
    }

    
// return console.log(data)
    update_build(data)
    

    setPage("build_sheet")
  }
  return (
    <>
    {/* name */}
      <div className="flex flex-col md:text-3xl text-xl">
        <h2>
          Name:{" "}
          <input
          className="border-2"
          ref={character_name}
            type="text"
            placeholder="Leave Empty for Random"
          />
        </h2>

      </div>
{/* choose race */}

      <h3 className="md:text-2xl text-lg my-2">Race:

      <select onChange={(e)=>setRace(races[e.target.value])} className="w-1/3 border-2" name="" id="">
        {/* <option value={undefined}>Random</option> */}
        {races.map((e,i)=>{
         return <option key={i} value={i}>{e.name}</option> 
        })}
      </select>
      </h3>
      {race && <div className="flex">
        <Image
      src={`/img/race/${race.code}.png`}
      width={100}
      height={100}
      className={`bg-[url('https://i.pinimg.com/474x/cf/90/fc/cf90fc601a5550374c32b1dd9db59046.jpg')] bg-cover h-fit`}
      alt="Picture of the author"
    />
       <div className=" flex flex-col gap-4 px-4">

        <p>{race.desc}</p>
        <ul className="grid md:grid-cols-3 sm:grid-cols-2">
        {Object.entries(race.points).map(([key, value],i) => {
            return <li key={i}>{key.replace(/_/g, ' ')}:{value}</li>
          })}
        </ul>
        {/* <h4>{(race.charAt(0).toUpperCase() + race.slice(1).replace(/_/g, " "))}</h4> */}
       </div>
        </div>}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        {races.map((e, i) => {
          return <Card key={i} race={e} />;
        })}
      </div> */}
      <div>

      <label >
              <input
                type="checkbox"
                onChange={() => setAdvanced(!advanced)}
                />
              more options
            </label>
                </div>

{advanced && <Options />}


      <button onClick={build_character} className="px-6 py-3 border-2 rounded-lg ">Generate Build</button>
    </>
  );

  function Card({ race }) {
    return (
      <div
        onClick={() => setRace(race.name)}
        className={`bg-[url('https://i.pinimg.com/474x/cf/90/fc/cf90fc601a5550374c32b1dd9db59046.jpg')] bg-cover  border-2 cursor-pointer   ${
          selectedRace !== race.name && " grayscale"
        }    transition-all duration-200 `}
      >
        <Image
          src={nord}
          width={150}
          height={150}
          alt="Picture of the author"
          className="mx-auto"
        />
        <div className="w-full px-4">
          <h3 className="text-center text-xl font-bold">{race.name}</h3>
          {/* <p>{race.desc}</p> */}
        </div>
      </div>
    );
  }
}
