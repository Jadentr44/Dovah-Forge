import React from 'react'

export default function Build_Sheet({build}) {
  console.log(build)
  return (
    <div>
      {build.name} the {build.race.name} is a {build.type.name}. {build.type.desc}
    </div>
  )
}
