import { Outlet } from 'react-router-dom'
import './App.css'
import MainFooter from './common/MainFooter'
import MainHeader from './common/MainHeader'
import MainNav from './common/MainNav'



const App = () => {

  return (
    <>
      <MainHeader/>
      <MainNav/>
      
      <main>
        <Outlet/>
      </main>

      <MainFooter/>
    </>
  )
}

export default App
