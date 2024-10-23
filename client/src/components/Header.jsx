import { logo } from "../assets";
import { nav } from "../constans";
import Container from "./Container";
import { NavLink, Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import { FaFacebook, FaGithub, FaLinkedinIn, FaUser, FaYoutube } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { TfiEmail } from "react-icons/tfi";

const Header = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
      };

      return (
            <div className="sticky z-50 top-0 bg-white border-b border-gray-400">
                  <Container className={"flex items-center justify-between lg:gap-8 gap-2 py-7 "}>
                        {/* Logo */}
                        <Link to={"/"}>
                              <img src={logo} alt="logoImage" className="lg:w-20" />
                        </Link>

                        <SearchInput />

                        {/* NavLink */}
                        <div className="hidden md:inline-flex items-center gap-8">
                              {nav.map((item, index) => (
                                    <NavLink
                                          className={({ isActive }) =>
                                                isActive
                                                      ? "text-blue-600 font-medium"
                                                      : "text-gray-600 group relative overflow-hidden font-medium hover:text-primary hoverEffect"
                                          }
                                          key={index}
                                          to={item?.path}
                                    >
                                          {item?.title}
                                          <span className="absolute left-0 bottom-0 inline-block w-full h-[1px] bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                                    </NavLink>
                              ))}

                              {/* User & Cart */}
                              <Link to={"/signin"} className="text-lightext hover:text-primary hoverEffect">
                                    <FaUser size={20} />
                              </Link>
                              <Link to={"/cart"} className="text-lightext hover:text-primary hoverEffect relative">
                                    <BsCartCheckFill size={22} />
                                    <span className="absolute items-center text-center justify-center rounded-full text-xs bottom-4 left-2 font-medium">0</span>
                              </Link>
                        </div>

                        {/* Menu Bar for Mobile */}
                        <div className="md:hidden">
                              <button onClick={toggleMenu} className="text-lightext hover:text-primary hoverEffect">
                                    {isMenuOpen ? <IoCloseSharp size={30} /> : <IoMenuSharp size={30} />}
                              </button>

                              {/* Mobile Menu */}
                              {isMenuOpen && (
                                    <div className="absolute top-full left-0  w-full bg-primary/95 shadow-md z-40">
                                          <h1 className="text-gray-300 text-[24px] px-8 mt-6">Nabigation Manu</h1>
                                          <ul className="flex flex-col gap-4 px-8 mb-2 mt-6">
                                                {nav.map((item, index) => (
                                                      <div className="flex items-center gap-2" key={index}>
                                                            <span className="border border-lightext hover:border-gray-300 duration-300 h-2 w-2 rounded-full"></span>
                                                            <NavLink
                                                                  className="text-lightext hover:text-gray-300 duration-300 font-medium"
                                                                  to={item?.path}
                                                                  onClick={() => setIsMenuOpen(false)}
                                                            >
                                                                  {item?.title}
                                                            </NavLink>
                                                      </div>
                                                ))}

                                                <div className="flex items-center gap-2">
                                                      <span className="border border-lightext hover:border-gray-300 duration-300 h-2 w-2 rounded-full"></span>
                                                      <Link
                                                            to={"/signin"}
                                                            className="text-lightext hover:text-gray-300 duration-300 hoverEffect"
                                                            onClick={() => setIsMenuOpen(false)}
                                                      >
                                                            SIGNIN
                                                      </Link>
                                                </div>
                                          </ul>
                                          {/* Social Link */}
                                          <div className="flex items-center gap-4 mb-6 mt-4 px-8">
                                                <span className="border border-lightext hover:text-gray-300 py-1.5 cursor-pointer hover:border-gray-300 duration-300 px-1.5 text-lightext rounded-full">
                                                      <FaFacebook size={20} />
                                                </span>
                                                <span className="border border-lightext hover:text-gray-300 py-1.5 cursor-pointer hover:border-gray-300 duration-300 px-1.5 text-lightext rounded-full">
                                                      <FaGithub size={20} />
                                                </span>
                                                <span className="border border-lightext hover:text-gray-300 py-1.5 cursor-pointer hover:border-gray-300 duration-300 px-1.5 text-lightext rounded-full">
                                                      <FaYoutube size={20} />
                                                </span>
                                                <span className="border border-lightext hover:text-gray-300 py-1.5 cursor-pointer hover:border-gray-300 duration-300 px-1.5 text-lightext rounded-full">
                                                      <FaLinkedinIn size={20} />
                                                </span>
                                                <span className="border border-lightext hover:text-gray-300 py-1.5 cursor-pointer hover:border-gray-300 duration-300 px-1.5 text-lightext rounded-full">
                                                      <TfiEmail size={20} />
                                                </span>
                                          </div>
                                    </div>
                              )}
                        </div>
                  </Container>
            </div>
      );
};

export default Header;
