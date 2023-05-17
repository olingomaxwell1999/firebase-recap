
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px', marginBottom: "20px"}}>
      <Link to="/">Log in with email and password</Link>

      <Link to="/google">Log in with google</Link>

      <Link to="/developers">Developers</Link>
    </div>
  )
}

export default Navigation
