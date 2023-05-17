import GoogleButton from "react-google-button"
import {googleProvider, auth} from '../../utilities/firebase'
import {signInWithPopup} from 'firebase/auth'

const Loginwithgoogle = () => {

    const handleGoogleLogin = async () => {
        try{
            await signInWithPopup(auth, googleProvider)
        } catch (err) {
            console.log(err.message)
        }
    }

  return (
    <div>
      <GoogleButton onClick={handleGoogleLogin} />
    </div>
  )
}

export default Loginwithgoogle
