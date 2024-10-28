import { Link } from "react-router-dom";
import { logo } from "../assets";
import Container from "./Container";

const Header = ({ token, setToken }) => {

      const handleToken = () => {
            setToken("")
      }
      return (
            <div className="border-b-2  py-4 border-gray-300 sticky z-50 top-0 bg-white">
                  <Container className={"flex justify-between items-center"}>
                        <div>
                              <Link to={"/"}>
                                    <img src={logo} alt="logoImage" className="w-24" />
                                    <p className="text-xs text-blue-700 uppercase font-semibold tracking-wide mt-1">Admin panel</p>
                              </Link>
                        </div>

                        {
                              token ?
                                    <button onClick={handleToken} className="bg-black/80 tracking-wide py-1.5 divide-neutral-600 rounded-full hover:bg-black px-4 text-white text-center flex justify-center items-center">
                                          Logout
                                    </button>
                                    :
                                    <button className="bg-black/80 tracking-wide py-1.5 divide-neutral-600 rounded-full hover:bg-black px-4 text-white text-center flex justify-center items-center duration-300">
                                          Login
                                    </button>
                        }
                  </Container>
            </div>
      );
};

export default Header;