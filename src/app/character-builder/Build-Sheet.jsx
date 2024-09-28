import React from 'react'
import buildsJson from "./data/builds.json";

export default function Build_Sheet({character}) {
  const skills = buildsJson.skills
  console.log(character)
  return (
    <div className='grid sm:grid-cols-2 gap-6 justify-around max-w-4xl  mx-auto '>
      <div className='flex flex-col gap-8'>
      <div className='p-4 border-2 rounded-lg'>
        <div className='text-xl mb-4'>

        <h2>name:{character.name}</h2>
        <h2>race:{character.race.name}</h2>
        <h2>build:{character.type.name}</h2>
        </div>
        <p>{character.type.desc}</p>
      </div>
      <div className='bg-blue-500'>b</div>

      </div>
      <div className='p-4 border-2 rounded-lg'>
        <div>

        <h2 className='text-xl font-bold'>Primary Skills:</h2>
        <ul className='flex flex-col gap-2'>
      {character.type.primary_skills.map((e,i)=>{
        let skill = skills[e-1]
        console.log(skill);
        
        return <li key={i}>
          <h4 className='text-lg font-semibold'>{skill.name}:</h4>
          <p>{skill.desc}</p>
        </li>
      })}
        </ul>
      </div>
        <div className='mt-4'>

        <h2 className='text-xl font-semibold'>Secondary Skills:</h2>
        <ul className='flex flex-col gap-2'>
      {character.type.secondary_skills.map((e,i)=>{
        let skill = skills[e-1]
        console.log(skill);
        
        return <li key={i}>
          <h4 className='text-lg font-medium'>{skill.name}:</h4>
          <p>{skill.desc}</p>
        </li>
      })}
        </ul>
      </div>
      </div>
    </div>

  )
}
// {build.name} the {build.race.name} is a {build.type.name}. {build.type.desc}
// 
