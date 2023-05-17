import React from 'react'
import {auth} from '../../utilities/firebase'
import {createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword} from 'firebase/auth'

const Loginwithemail = () => {

    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')

    const handleChangeOne = (e) => {
        setEmail(e.target.value)
    }

    const handleChangeTwo = (e) => {
        setPassword(e.target.value)
    }

    const createAccount = async () => {
        try{
            await createUserWithEmailAndPassword(auth,email,password)
        } catch (err) {
            console.error(err.message)
        }
    }

    const logIn = async () => {
        try{
            await signInWithEmailAndPassword(auth,email,password)
        } catch (err) {
            console.error(err.message);
        }
    }

    const logOut =async () => {
        try{
            await signOut(auth)
        } catch (err) {
            console.error(err.message)
        }
    }

    console.log(auth?.currentUser?.email);

  return (
    <div>
      <input placeholder='Email' type='email' onChange={handleChangeOne} />

      <input placeholder='Password' type='password' onChange={handleChangeTwo} />

      <button onClick={createAccount}>Create Account</button>

      <button onClick={logIn}>Login</button>

      <button onClick={logOut}>logout</button>
    </div>
  )
}

export default Loginwithemail
