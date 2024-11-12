import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "../ui/Loader";
import { Link } from "react-router-dom";
import PriceFomate from "../PriceFomate";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

import.meta.env.VITE_BACKEND_URL
const List = ({ token }) => {

      const serverUrl = import.meta.env.VITE_BACKEND_URL

      const [list, setList] = useState([]);
      const [loading, setLoading] = useState(false)

      const fetchProductList = async () => {
            try {
                  setLoading(true)
                  const res = await axios.get(serverUrl + '/api/product/list')
                  const data = res.data
                  if (data?.success) {
                        setList(data?.products)
                  } else {
                        toast.error(data.message)
                  }

            } catch (error) {
                  console.log('Product list fetching Error', error)
                  toast.error(error?.message)
            } finally {
                  setLoading(false)
            }
      }
      useEffect(() => {
            fetchProductList()
      }, [])


      // List Product Deleted
      const handleDelete = async (item) => {
            const confrimDelete = window.confirm(`Are you sure you want to remove this user?`)
            if (confrimDelete) {
                  try {
                        setLoading(true)
                        const res = await axios.post(serverUrl + "/api/product/remove",
                              {
                                    _id: item?._id,
                              },
                              {
                                    headers: token
                              }

                        );
                        const data = res?.data

                        if (data?.success) {
                              toast.success(data?.message)
                              await fetchProductList()
                        } else {
                              toast.error(data?.message)
                        }

                  } catch (error) {
                        console.log("Delete user error", error);
                        toast.error("Error: " + error.message);
                  } finally {
                        setLoading(false);
                  }
            }

      };




      return (
            <div className="md:pr-10">
                  {
                        loading ?
                              (
                                    <div>
                                          <Loader />
                                    </div>
                              )
                              :
                              (
                                    <>
                                          <div className="flex items-center justify-between ">
                                                <h1 className="lg:text-xl text-sm text-gray-600 font-medium mt-4 mb-4 tracking-wide">Product List</h1>
                                                <Link className="hover:text-blue-600 md:text-xl text-sm text-gray-600 hoverEffect py-4" to={"/add"}>
                                                      Add Products +
                                                </Link>
                                          </div>
                                          <div>
                                                {
                                                      list?.length > 0 ?
                                                            (
                                                                  <div>
                                                                        <div className="flex flex-col gap-2 mt-5">
                                                                              <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] font-medium items-center py-3 px-2 border text-gray-800 border-gray-300 gap-3 lg:text-[18px] bg-gray-100 text-xs">
                                                                                    <p>Iamge</p>
                                                                                    <p>Name</p>
                                                                                    <p className="hidden md:inline-block">Category</p>
                                                                                    <p>Price</p>
                                                                                    <p>Action</p>
                                                                                    <p>Edit</p>
                                                                              </div>
                                                                              {
                                                                                    list?.map((item) => (
                                                                                          <div key={item?._id} className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] font-medium items-center py-2 px-2 border border-gray-300 gap-3 lg:text-[18px] bg-gray-100 text-xs">
                                                                                                <img src={item.image[0]} alt="ProductImage" className="lg:w-16 lg:h-16 w-10 h-10 bg-white" />
                                                                                                <p className="font-medium text-gray-600">{item?.name}</p>
                                                                                                <p className="font-medium hidden md:inline-block text-gray-600">{item?.category}</p>

                                                                                                <PriceFomate amount={item?.price} className={"text-gray-600"} />
                                                                                                <div>
                                                                                                      <RiDeleteBin6Line onClick={() => handleDelete(item)} size={20} className="text-gray-600 hover:text-red-600  hoverEffect" />
                                                                                                </div>
                                                                                                <div>
                                                                                                      <FaRegEdit size={20} className="text-gray-600 hover:text-green-800  hoverEffect" />
                                                                                                </div>
                                                                                          </div>
                                                                                    ))
                                                                              }
                                                                        </div>
                                                                  </div>

                                                            )
                                                            :
                                                            (
                                                                  <div>
                                                                        <p className="mb-5 text-red-500 tracking-wide font-medium">You have no products in your database</p>
                                                                        <Link to={"/add"} className="bg-black/80 text-white py-2 px-4  hover:bg-black hoverEffect">
                                                                              Add Products
                                                                        </Link>
                                                                  </div>
                                                            )
                                                }
                                          </div>
                                    </>
                              )
                  }
            </div>
      );
};

export default List;