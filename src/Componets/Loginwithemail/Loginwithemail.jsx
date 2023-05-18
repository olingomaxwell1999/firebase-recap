import React from 'react'
import {auth} from '../../utilities/firebase'
import {createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword} from 'firebase/auth'

const Loginwithemail = () => {

    //states for collecting the input values

    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')

    //feeding data to our states
    const handleChangeOne = (e) => {
        setEmail(e.target.value)
    }

    const handleChangeTwo = (e) => {
        setPassword(e.target.value)
    }

    //handling the creating account functionality

    const createAccount = async () => {
        try{
            await createUserWithEmailAndPassword(auth,email,password)
        } catch (err) {
            console.error(err.message)
        }
    }

    //handling the logging in functionality

    const logIn = async () => {
        try{
            await signInWithEmailAndPassword(auth,email,password)
        } catch (err) {
            console.error(err.message);
        }
    }

    //handling the logout functionality

    const logOut =async () => {
        try{
            await signOut(auth)
        } catch (err) {
            console.error(err.message)
        }
    }

    //checks which user is logged in
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
