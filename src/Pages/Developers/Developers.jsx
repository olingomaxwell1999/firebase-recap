import React,{useEffect} from 'react'
import {db} from '../../utilities/firebase'
import {collection, getDocs} from 'firebase/firestore'
import Developercard from '../../Componets/Developercard/Developercard'
import Createdeveloper from '../../Componets/Createdeveloper/Createdeveloper'

const Developers = () => {

    //developers from firebase state
    const [developers,setDevelopers] = React.useState([])

    //Reference to the database
    const developersCollectionRef = collection(db, "developers")

    //fetching developers from firebase
    const getDevelopers = async () => {
        try{
            const data = await getDocs(developersCollectionRef)

            const fineData = data.docs.map((doc) => ({
                ...doc.data()
            }))

            console.log(fineData);

            setDevelopers(fineData)
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getDevelopers()
    },[])

    console.log(developers);

  return (
    <div>
        <Createdeveloper/>
      {
        developers.map((developer) => (
            <Developercard key={developer.id} name={developer.name} age={developer.age} occupation={developer.occupation} gender={developer.gender} tribe={developer.tribe} team={developer.team} height={developer.height} residence={developer.residence} />
        ))
      }
    </div>
  )
}

export default Developers
