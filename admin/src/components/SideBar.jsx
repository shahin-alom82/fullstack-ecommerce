import { NavLink } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { FaListUl, FaUserTie } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";

const SideBar = () => {
      return (
            <div className="w-full h-full">
                  <div className="flex flex-col gap-4 mt-2">
                        {/* Add Section */}
                        <NavLink to={"/add"} className={"flex items-center gap-2 text-gray-700 rounded bg-gray-100 hover:bg-[#112240] duration-300 cursor-pointer hover:text-white border border-gray-300 px-2 py-1"}>
                              <span className="border border-gray-300 py-1 px-1 rounded-full  "><IoMdAdd /></span>
                              <p className="font-medium hidden md:block">Add Item</p>
                        </NavLink>
                        {/* List Section */}
                        <NavLink to={"/list"} className={"flex items-center gap-2 text-gray-700 rounded bg-gray-100 hover:bg-[#112240] duration-300 cursor-pointer hover:text-white border border-gray-300 px-2 py-1"}>
                              <span className="border border-gray-300 py-1 px-1 rounded-full "><FaListUl />
                              </span>
                              <p className="font-medium hidden md:block">Product List</p>
                        </NavLink>
                        {/* List Section */}
                        <NavLink to={"/orders"} className={"flex items-center gap-2 text-gray-700 rounded bg-gray-100 hover:bg-[#112240] duration-300 cursor-pointer hover:text-white border border-gray-300 px-2 py-1"}>
                              <span className="border border-gray-300 py-1 px-1 rounded-full "><AiFillProduct />
                              </span>
                              <p className="font-medium hidden md:block">Orders</p>
                        </NavLink>
                        {/* List Section */}
                        <NavLink to={"/users"} className={"flex items-center gap-2 text-gray-700 rounded bg-gray-100 hover:bg-[#112240] duration-300 cursor-pointer hover:text-white border border-gray-300 px-2 py-1"}>
                              <span className="border border-gray-300 py-1 px-1 rounded-full "><FaUserTie />
                              </span>
                              <p className="font-medium hidden md:block">Users</p>
                        </NavLink>

                  </div>
            </div>
      );
};

export default SideBar;