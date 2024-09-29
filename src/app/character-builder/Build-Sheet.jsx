import React from "react";
import buildsJson from "./data/builds.json";
import Image from "next/image";
export default function Build_Sheet({ character }) {
  const skills = buildsJson.skills;
  console.log(character);
  return (
    <div className="grid sm:grid-cols-2 gap-6 justify-around max-w-4xl  mx-auto  ">
      <div className="flex flex-col gap-8">
        {/* info */}
        <div className="p-4 border-2 rounded-lg shadow-md bg-white flex justify-between items-center">
          <div className="text-xl ">
            <h2>
              <span className="font-semibold">name:</span>
              {character.name}
            </h2>
            <h2>
              <span className="font-semibold">race:</span>
              {character.race.name}
            </h2>
            <h2>
              <span className="font-semibold">build:</span>
              {character.type.name}
            </h2>
          </div>
          <Image
            src={`/img/race/${character.race.code}.png`}
            width={80}
            height={80}
            className={`bg-[url('https://i.pinimg.com/474x/cf/90/fc/cf90fc601a5550374c32b1dd9db59046.jpg')] bg-cover h-fit`}
            alt="Picture of the author"
          />
        </div>
        {/* play style */}
        <div className="p-4 border-2 rounded-lg shadow-md bg-white">
          <p>{character.type.desc}</p>
          <div className="text-lg my-2">
            {Object.entries(character.options).map(([key, value], i) => {
              return (
                <h4 key={i}>
                  <span className="font-semibold">{key}:</span>
                  {value}{" "}
                </h4>
              );
            })}
          </div>
        </div>
      </div>
      {/* skills */}
      <div className="p-4 border-2 rounded-lg shadow-md bg-white">
        <div>
          <h2 className="text-xl font-bold">Primary Skills:</h2>
          <ul className="flex flex-col gap-2">
            {character.type.primary_skills.map((e, i) => {
              let skill = skills[e - 1];

              return (
                <li key={i}>
                  <h4 className="text-lg font-semibold">{skill.name}:</h4>
                  <p>{skill.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Secondary Skills:</h2>
          <ul className="flex flex-col gap-2">
            {character.type.secondary_skills.map((e, i) => {
              let skill = skills[e - 1];
              console.log(skill);

              return (
                <li key={i}>
                  <h4 className="text-lg font-semibold">{skill.name}:</h4>
                  <p>{skill.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
// {build.name} the {build.race.name} is a {build.type.name}. {build.type.desc}
//
