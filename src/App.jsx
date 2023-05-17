
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Signinone from './Pages/Signinone/Signinone'
import Signintwo from './Pages/Signintwo/Signintwo'
import Navigation from './Componets/Navigation/Navigation'
import Developers from './Pages/Developers/Developers'


function App() {
  

  return (
    <>
      <BrowserRouter>

        <Navigation/>

        <Routes>

          <Route path='/' element={<Signinone/>}/>

          <Route path='/google' element={<Signintwo/>}/>

          <Route path='/developers' element={<Developers/>}/>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
