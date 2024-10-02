import React from "react";
import buildsJson from "./data/builds.json";
import itemsObj from "./data/items.json";
import Image from "next/image";
export default function Build_Sheet({ character }) {
  const skills = buildsJson.skills;
  console.log(character);
  return (
    <div className="rounded-lg bg-white p-4 max-w-2xl border-2 mx-auto">
      <div className="flex flex-col sm:flex-row  border-b-2 pb-4">
        <Image
          src={`/img/race/${character.race.code}.png`}
          width={250}
          height={250}
          className={`bg-[url('https://i.pinimg.com/474x/cf/90/fc/cf90fc601a5550374c32b1dd9db59046.jpg')] bg-cover h-fit w-2/5 sm:w-1/5 rounded-lg shadow-md mx-auto sm:mx-0`}
        />

        <div className="w-full max-w-[80%] px-4 flex flex-col gap-2">
          <div className="  flex flex-col sm:flex-row mt-2 sm:mt-0 justify-between text-lg">
            <h2>
              <span className="font-semibold">Name:</span>
              {character.name}
            </h2>
            <h2>
              <span className="font-semibold">Race:</span>
              {character.race.name}
            </h2>
            <h2>
              <span className="font-semibold">Build:</span>
              {character.type.name}
            </h2>
          </div>
          <div>
            <p className="">{character.type.desc}</p>
          </div>
          <div className="flex gap-4 text-xl">
            <h3>
              <span className="text-red-600 font-semibold">HP:</span>50%
            </h3>
            <h3>
              <span className="text-blue-600 font-semibold">MAG:</span>20%
            </h3>
            <h3>
              <span className="text-green-600 font-semibold">STA:</span>30%
            </h3>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-2">

<div>
        <div className="mt-2">
          <h4 className="text-lg font-semibold">Fight style:</h4>
          <p>
            {character.type.gear.map((e) => {
              let itemArr = itemsObj[e];
              return (
                <p> {itemArr[Math.floor(Math.random() * itemArr.length)]}</p>
              );
            })}
          </p>
        </div>
        <div className=" my-2">
          {Object.entries(character.options).map(([key, value], i) => {
            return (
              <div key={i}>
                <h4 className="font-semibold text-lg">{key}:</h4>
                <p>{value}</p>
              </div>
            );
          })}
        </div>
        </div>
        <div className="">
        <div>

          <ul className="grid grid-cols-2 gap-2">
            {character.type.primary_skills.map((e, i) => {
              let skill = skills[e - 1];

              return (
                <li className="flex flex-col items-center" key={i}>
                  <Image
          src={`/img/skill/twoHanded.webp`}
          width={250}
          height={250}
          className={` h-fit w-1/2 rounded-lg `}
        />
                  <h4 className="text-lg font-semibold">{skill.name}</h4>
                  
                </li>
              );
            })}
          </ul>
        </div>

      </div>
      </div>
    </div>
  );
}
// {build.name} the {build.race.name} is a {build.type.name}. {build.type.desc}
//
