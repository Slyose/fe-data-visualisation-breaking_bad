import React from 'react'
import "./Character_card.css"

function Character_card({charData
}) {
    console.log(charData)
  return (
    <div>
        <div className="front_card">
        <a href="#" title="breaking_bad_photos">
        <img src={charData.img} alt={charData.name} className="profile_pic"></img>
        </a>
<li key={charData.name}>{charData.name}</li>
</div>
<div className="back_card">
<li key={charData.nickname}>Nickname: {charData.nickname}</li>
<li key='jobs'>Jobs:</li>
{charData.occupation.map((job) => {
   return <li key={job}>{job}</li>
})}
<li key={charData.status}>Alive/dead: {charData.status}</li>
<li key={charData.portrayed}>Portrayed by:{charData.portrayed}</li>
</div>
    </div>
  )
}

export default Character_card