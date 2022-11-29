import React from 'react'


function Character_card({charData
}) {
    console.log(charData.img)
  return (
    <div>
        <img src={charData.img} alt={charData.name}></img>
<li key={charData.name}>{charData.name}</li>
    </div>
  )
}

export default Character_card