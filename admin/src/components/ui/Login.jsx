import { useState } from "react";
import { logo } from "../../assets";
import toast from "react-hot-toast"
import axios from 'axios';
import.meta.env.VITE_BACKEND_URL

const Login = ({ setToken }) => {


      // Server Url
      const serverUrl = import.meta.env.VITE_BACKEND_URL
      // Email & password
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')

      const handleAdminLogin = async (e) => {
            e.preventDefault()
            try {
                  const res = await axios.post(serverUrl + "/api/user/admin", {
                        email,
                        password
                  })
                  const data = res?.data;

                  if (data?.success) {
                        setToken(data?.token)
                        toast.success(data?.message)
                  } else {
                        toast.error(data?.message)
                  }

            } catch (error) {
                  console.log('Login error', error)
                  toast.error(error?.message)
            }
            // Epty
            setEmail('')
            setPassword('')
      }

      return (
            <div className="flex flex-col gap-3 bg-gray-300 min-h-screen items-center justify-center p-4 sm:p-8">
                  <div className="bg-white rounded-md p-2">
                        <img src={logo} alt="logoImage" className="w-20 h-auto" />
                  </div>
                  <div className="bg-white py-6 px-6 w-full max-w-sm sm:max-w-md shadow-lg rounded-lg">
                        <h1 className="text-2xl font-semibold text-gray-700 tracking-wide text-center">Admin Panel</h1>
                        {/* Form Section */}
                        <form onSubmit={handleAdminLogin} className="flex flex-col gap-4 mt-6">
                              <div>
                                    <p className="text-sm text-gray-700">Email Address</p>
                                    <input
                                          className="border border-gray-300 py-2 px-3 mt-1 rounded outline-none text-sm placeholder:text-gray-400 w-full"
                                          placeholder="Enter your email.."
                                          type="email"
                                          required
                                          value={email}
                                          onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <p className="text-sm text-gray-700 mt-3">Password</p>
                                    <input
                                          className="border border-gray-300 py-2 px-3 mt-1 rounded outline-none text-sm placeholder:text-gray-400 w-full"
                                          placeholder="Enter your password.."
                                          type="password"
                                          required
                                          value={password}
                                          onChange={(e) => setPassword(e.target.value)}
                                    />
                              </div>
                              {/* Submit Button */}
                              <button type="submit" className="py-3 px-4 mt-4 bg-[#112240] text-white rounded-full hover:bg-black/80 cursor-pointer duration-300">Login</button>
                        </form>
                  </div>
            </div>

      );
};

export default Login;