import Footer from "./Components/Footer"
import Header from "./Components/Header"
import HomeScreen from "./Pages/HomeScreen"
import { Outlet } from "react-router-dom"
const App = () => {
  
  return (
    <>
      <Header/>
    <main className="min-h-lvh">
      <div className="container mx-auto">
        <h1> My app</h1>
      </div>
       <Outlet/>
    </main>
  
 
    <Footer/>
  </>
  )
}

export default App