import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
      const [search, setSearch] = useState("")
      return (
            <div className="flex-1 relative">
                  <input
                        type="text"
                        placeholder="Product search here..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border border-gray-400 w-full py-1.5 rounded-full outline-none pl-4 pr-10 placeholder:text-gray-600 focus-visible:border-blue-500"
                  />
                  {
                        search ?
                              <IoClose size={20} onClick={() => setSearch("")} className="absolute top-[9px] right-4 hover:text-red-500 cursor-pointer text-gray-600" />
                              :
                              <IoSearchSharp size={20} className="absolute top-[9px] right-4 text-gray-600" />
                  }
            </div>
      );
};

export default SearchInput;