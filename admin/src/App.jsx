import { useEffect, useState } from "react"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import { Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import Add from "./components/pages/Add"
import List from "./components/pages/List"
import Orders from "./components/pages/Orders"
import Login from "./components/ui/Login"
import Users from "./components/pages/Users"


function App() {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "")

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  return (
    <main className="w-full bg-gray-50 min-h-screen font-bodyFont">
      {
        token === ""
          ?
          <Login setToken={setToken} />
          :
          <>
            <Header token={token} setToken={setToken} />
            {/* Main body */}
            <div className="flex w-full">
              {/* Side bar */}
              <div className="border-r-2 border-gray-300 md:w-[18%] min-h-screen fixed px-4 py-4">
                <SideBar />
              </div>
              {/* Content Section */}
              <div className="flex-1 px-4 py-4 md:ml-[20%] ml-20">
                <Routes>
                  <Route path="/" element={<Home token={token} />} />
                  <Route path="/add" element={<Add token={token} />} />
                  <Route path="/list" element={<List token={token} />} />
                  <Route path="/orders" element={<Orders token={token} />} />
                  <Route path="/users" element={<Users token={token} />} />
                </Routes>
              </div>
            </div>
          </>
      }
    </main>
  )
}

export default App
