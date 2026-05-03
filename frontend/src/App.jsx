import Footer from "./Components/Footer"
import Header from "./Components/Header"
import HomeScreen from "./Pages/HomeScreen"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/ReactToastify.css'
const App = () => {
  
  return (
    <>
      <Header/>
      <ToastContainer/>
    <main className="min-h-lvh">
      <div className="container mx-auto">
        <h1> MY FIRST MERN PROJECT</h1>
      </div>
       <Outlet/>
    </main>
  
 
    <Footer/>
  </>
  )
}

export default App