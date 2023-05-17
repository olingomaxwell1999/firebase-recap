

const Developercard = ({name,age, occupation, gender, tribe, team, height, residence}) => {
  return (
    <div>
      <h1>name : {name}</h1>
      <h3>age : {age}</h3>
      <h2>occupation : {occupation}</h2>
      <h3>gender : {gender}</h3>
      <h3>tribe : {tribe}</h3>
      <h3>team : {team}</h3>
      <h3>height : {height} ft</h3>
      <h3>residence : {residence}</h3>
    </div>
  )
}

export default Developercard
