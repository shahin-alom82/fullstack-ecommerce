import { useState } from "react"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Test from "./components/Test"


function App() {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "")

  return (
    <main className="w-full bg-gray-50 min-h-screen font-bodyFont">
      <Header token={token} setToken={setToken} />
      {/* Main body */}
      <div className="flex w-full">
        {/* Side bar */}
        <div className="border-r-2 border-gray-300 w-[18%] min-h-screen fixed px-4 py-4">
          <SideBar />
        </div>
        {/* Content Section */}
        <div className="flex-1 px-4 py-4 ml-[18%]">
          <p>Page Content</p>
          <Test />
        </div>
      </div>
    </main>
  )
}

export default App
