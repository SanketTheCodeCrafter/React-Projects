import Dashboard from "./pages/Dashboard/Dashboard"
import React from "react"
import Transaction from './pages/Transaction/Transaction'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// const router=createBrowserRouter([
//   {
//     path: "/",
//     Element: <Dashboard/>,
//   }
// ])


function App() {
  return (
    <>
     {/* <RouterProvider router={router} /> */}
     <Transaction/>
     <Dashboard/>
    </>
  )
}

export default App
