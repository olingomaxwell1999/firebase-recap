import React from 'react'
import {db} from '../../utilities/firebase'
import { collection, addDoc } from 'firebase/firestore'

const Createdeveloper = () => {

    //Reference to the database
    const developersCollectionRef = collection(db, "developers")

    //States for creating a developer
    const [name, setName] = React.useState('')
    const [age, setAge] = React.useState(0)
    const [occupation, setOccupation] = React.useState('')
    const [gender, setGender] = React.useState('')
    const [tribe, setTribe] = React.useState('')
    const [team, setTeam] = React.useState('')
    const [height, setHeight] = React.useState(0)
    const [residence, setResidence] = React.useState(0)

    //Functions that feed data to ourstates
    const handleName = (e) => {
        setName(e.target.value)
        
    }

    const handleAge = (e) => {
        setAge(e.target.value)
    }

    const handleOccupation = (e) => {
        setOccupation(e.target.value)
    }

    const handleGender = (e) => {
        setGender(e.target.value)
    }

    const handleTribe = (e) => {
        setTribe(e.target.value)
    }

    const handleTeam = (e) => {
        setTeam(e.target.value)
    }

    const handleHeight = (e) => {
        setHeight(e.target.value)
    }

    const handleResidence = (e) => {
        setResidence(e.target.value)
    }

    ///Creating a new developer from the dom

    const createDeveloper = async () => {
        try{
            await addDoc(developersCollectionRef, {
                name: name,
                age: age,
                occupation: occupation,
                gender: gender,
                tribe: tribe,
                team: team,
                height: height,
                residence: residence
            })
            
        } catch (err) {
            console.log(err.message)
        }
    }

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '300px'}}>
      <input type="text" placeholder='Enter your name' onChange={handleName} />
      <input type="number" placeholder='Enter Your Age' onChange={handleAge} />
      <input type="text" placeholder='Enter your occupation' onChange={handleOccupation} />
      <input type="text" placeholder='Enter Your Gender' onChange={handleGender} />
      <input type="text" placeholder='Enter your tribe' onChange={handleTribe} />
      <input type="text" placeholder='Enter Your Team' onChange={handleTeam} />
      <input type="number" placeholder='Enter Your Height in Feet' onChange={handleHeight} />
      <input type="text" placeholder='Enter Your Residence' onChange={handleResidence} />

      <button onClick={createDeveloper}>Create Developer</button>
    </div>
  )
}

export default Createdeveloper
