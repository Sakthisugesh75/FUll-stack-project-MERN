import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from 'react-router-dom'
import HomeScreen from './Pages/HomeScreen.jsx'
import LoginScreen from './Pages/LoginScreen.jsx'
import CardScreen from './Pages/CardScreen.jsx'
import ProductScreen from './Pages/ProductScreen.jsx'
import store from './store.js'
import { Provider } from 'react-redux'
const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
        <Route index={true} path='/' element={<HomeScreen/>}/>
        <Route path='/cart' element={<CardScreen/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
         <Route path='/product/:id' element={<ProductScreen/>}/>


        </Route>
    )
)


createRoot(document.getElementById('root')).render(
     <Provider store={store}>
    <RouterProvider router={router}>
        
    <App />
    </RouterProvider>
    </Provider>
)
