import React from "react";
import Options from "./Options";
import { useState, useRef } from "react";
import Image from "next/image";

// import data
import racesJson from './data/races.json'
import buildsJson from "./data/builds.json";
import namesJson from "./data/names.json";

export default function Race({ setPage, update_build }) {
  // state to track race, and more options setting
  const [race, setRace] = useState(undefined);
  const [advanced, setAdvanced] = useState(false);

  // name input
  const character_name = useRef(null);

  // giving data a variable
  const races = racesJson.racesArr
  const builds = buildsJson.builds
  const names = namesJson

  // funtion to gather all the data, and pass on to build sheet
  function build_character() {
    // if there is no race selected, set race to random 
    let selectedRace = race;
    if (!selectedRace) {
      selectedRace = races[Math.floor(Math.random() * races.length)];
      // selectedRace = races[0];
    }
// finding a build that matches current race
    const possible_builds = builds.filter((e) => {
      if (e.races.includes(selectedRace.code)) return e;
    });

    // selecting build based on random 
    let build =
      possible_builds[Math.floor(Math.random() * possible_builds.length)];

      // creating obj for character
    let data = {
      name: character_name.current.value,
      race: selectedRace,
      type: build,
    };

    // giving random name if empty
    if (!data.name) {
      let namesArr = names[`${selectedRace.code}_names`];
      data.name = namesArr[Math.floor(Math.random() * namesArr.length)];
    }


    update_build(data);
    setPage("build_sheet");
  }
  return (
    <div className="max-w-5xl border-2 rounded-lg p-5 mx-auto ">
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

      <h3 className="md:text-2xl text-lg my-2">
        Race:
        <select
          onChange={(e) => setRace(races[e.target.value])}
          className="w-1/3 border-2"
          name=""
          id=""
        >
          <option value={undefined}>Random</option>
          {races.map((e, i) => {
            return (
              <option key={i} value={i}>
                {e.name}
              </option>
            );
          })}
        </select>
      </h3>
      {race && (
        <div className="flex">
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
              {Object.entries(race.points).map(([key, value], i) => {
                return (
                  <li key={i}>
                    {key.replace(/_/g, " ")}:{value}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      <div>
        <label>
          <input type="checkbox" onChange={() => setAdvanced(!advanced)} />
          more options
        </label>
      </div>

      {advanced && <Options />}

      <button
        onClick={build_character}
        className="px-6 py-3 border-2 rounded-lg "
      >
        Generate Build
      </button>
    </div>
  );
}
