import React from "react";

export default function Options() {
  return (
    <div>
      *leave empty for random
      <h4>Faction</h4>
      <select className="border-2" name="faction" id="">
        <option value=""></option>
        <option value="companions">The Companions</option>
        <option value="college_of_winterhold">The College of Winterhold</option>
        <option value="thieves_guild">The Thieves Guild</option>
        <option value="dark_brotherhood">The Dark Brotherhood</option>

        <option value="dawnguard">The Dawnguard</option>
        <option value="volkihar_clan">Volkihar Clan</option>
        <option value="bards_college">The Bards College</option>
        <option value="blades">The Blades</option>
      </select>
      <h4>Civil War Side</h4>
      <select className="border-2" name="war" id="">
        <option value=""></option>
        <option value="">Imperial Legion</option>
        <option value="">Stormcloaks</option>
      </select>
      <h4>Theft Frequency</h4>
      <select className="border-2" name="war" id="">
        <option value=""></option>
        <option value="">No Theft</option>
        <option value="">Occasional</option>
        <option value="">Frequent</option>
        <option value="">Constant</option>
      </select>
      <h4>Murder Frequency</h4>
      <select className="border-2" name="war" id="">
        <option value=""></option>
        <option value="">No Murder</option>
        <option value="">Occasional</option>
        <option value="">Frequent</option>
        <option value="">Constant</option>
      </select>
    </div>
  );
}
