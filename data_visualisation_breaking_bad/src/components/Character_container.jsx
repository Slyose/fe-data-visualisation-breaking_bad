import React from 'react'
import { useEffect, useState } from 'react'
import Character_card from './Character_card'

function Character_container() {

    const [chardata, setChardata] = useState([])

    useEffect(() => {
        fetch("https://breakingbadapi.com/api/characters").then((response) => {
            response.json().then((data) => {
                setChardata(data)
            })
        })
    }, [chardata])


  return (
    <div className="character_container">
    <ul>
        {chardata.map((char) => {
            return <Character_card charData={char}/>
        })}
    </ul>
    </div>
)


}
export default Character_container