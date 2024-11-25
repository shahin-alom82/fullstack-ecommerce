import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const LogOut = () => {
      const navigate = useNavigate()
      const handleLogout = () => {
            localStorage.removeItem('token');
            toast.success('Log Out Successfully!')
            navigate("/")
      }
      return <button onClick={handleLogout} className="bg-primary/80 px-6 py-1.5 text-gray-200 hover:bg-[#112240] hoverEffect tracking-wide ">Logout</button>

};

export default LogOut;