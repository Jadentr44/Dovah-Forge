import React from "react";
import { useState } from "react";
import optionsArr from "./data/options.json";
export default function Options({options}) {

  console.log(optionsArr);

  return (
    <div>
      *leave empty for random
      {optionsArr.map((e, i) => {
        return (
          <div key={i}>
            <h4 className="text-xl font-semibold" htmlFor="">
              {e.label}
            </h4>

            <select
              className="max-w-2xs w-full px-4 py-1 rounded-lg focus:outline-none border-2 text-lg"
              onChange={(option) =>  options[e.label] = option.target.value}
              name={e.label}
              id=""
            >
              <option value={undefined}>random</option>
              {e.options.map((eValue, i) => {
                return (
                  <option key={i} value={eValue}>
                    {eValue}
                  </option>
                );
              })}
            </select>
          </div>
        );
      })}

    </div>
  );
}
