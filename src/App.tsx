import { useState, createContext } from 'react'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Menu from './Component/Menu'
import Game from './Component/Game'

// interface Context{
//   playWith:number,
//   setPlayWith:any
// }

export const Tiktaktoe = createContext<any>(null)

function App() { 

  const [Gamebox,setGamebox] = useState(["","","","","","","","",""])

  const [playWith, setPlayWith] = useState<boolean>(true)

  const [Restart, setRestart] = useState<boolean>(false)
  // console.log(playWith);
  // console.log(Gamebox);
  const [winner,setWinner] = useState<string|null>()

  const [pageParams,setPageParams] = useState<string|null>()

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Menu />
    },
    {
      path:"/:game",
      element:<Game/>
    }
  ])

  return (
    <>
    <Tiktaktoe.Provider value={{
      playWith,
      setPlayWith,
      Gamebox,
      setGamebox,
      Restart,
      setRestart,
      winner,
      setWinner,
      pageParams,
      setPageParams
    }} >
      <RouterProvider router={router} />
    </Tiktaktoe.Provider>
    </>
  )
}

export default App
