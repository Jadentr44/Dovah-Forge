"use client"
import { useState } from "react";
import Race from "./Race";
import Build_Sheet from "./Build-Sheet";
// import orc from "./orc.png";
export default function Home() {
  const [page,setPage] =  useState("race")
  const [build,setBuild] =  useState({})

  function update_build(value){
    setBuild(build=>({
      ...build,...value
    }))
  }

  return (
    <div className="px-4 ">
      <div className="mx-auto max-w-5xl border-2  px-4 py-5 rounded-md my-8 ">
        
       {page == "race" && <Race setPage={setPage} update_build={update_build} />}
       {page == "build_sheet" && <Build_Sheet build={build} />}
      </div>
    </div>
  );
}

