import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast"
import Loader from "../ui/Loader";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from 'sweetalert2'

import { FiEdit } from "react-icons/fi";

import.meta.env.VITE_BACKEND_URL

const Users = ({ token }) => {
      const [userList, setuserList] = useState([])
      const [isLoading, setLoading] = useState(false)
      const [selectUser, setSelectUser] = useState(null)
      const [isModalOpen, setModalOpen] = useState(false);
      const [isAddModalOpen, setAddModalOpen] = useState(false);

      // Server Url + getUser
      const serverUrl = import.meta.env.VITE_BACKEND_URL

      // User Get
      const getUserList = async () => {
            try {
                  setLoading(true)
                  const res = await axios.get(serverUrl + "/api/user/users", {
                        headers: {
                              token,
                              "Content-Type": "application/json"
                        }

                  });

                  const data = res.data
                  if (data.success) {
                        setuserList(data?.users)
                  } else {
                        toast.error(data?.message)
                  }


            } catch (error) {
                  console.log('User list fatching error', error)
                  toast.error(error?.message)

            } finally {
                  setLoading(false)
            }
      }

      useEffect(() => {
            getUserList()
      }, [])

      

      // User Deleted
      const handleDelete = async (_id) => {

            const confrimDelete = window.confirm("Are you sure you want to remove this user?")
            if (confrimDelete) {
                  setLoading(true)
                  try {
                        const res = await axios.post(serverUrl + "/api/user/remove", {
                              _id,
                        });
                        const data = res?.data

                        if (data?.success) {
                              toast.success(data?.message)
                              await getUserList()
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


      // User Updated
      const handleUpdate = async (e, _id) => {
            e.preventDefault();
            const updatedUser = {
                  _id: selectUser._id,
                  name: e.target.name.value,
                  email: e.target.email.value,
                  password: e.target.password.value,
            };

            try {
                  const response = await axios.put(
                        `${serverUrl}/api/user/update/${_id}`,
                        updatedUser,
                        {
                              headers: {
                                    "Content-Type": "application/json"
                              },
                        }
                  );
                  const data = response.data;
                  if (data.success) {
                        toast.success("User updated successfully!");
                        getUserList();
                        setModalOpen(false)
                  } else {
                        toast.error(data.message);
                  }
            } catch (error) {
                  console.log("Update user error", error);
                  toast.error("Error" + error.message);
            }
      };


      // User Add
      const handleAdd = async (e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const email = e.target.email.value;
            const password = e.target.password.value;
            const formData = { name, email, password };

            try {
                  const response = await axios.post(
                        `${serverUrl}/api/user/register`,
                        formData,
                        {
                              headers: { "Content-Type": "application/json" },
                        }
                  );
                  const result = response.data;
                  if (result.success) {
                        toast.success("User added successfully!");
                        getUserList();
                        setAddModalOpen(false)
                  } else {
                        toast.error(result.message);
                  }
            } catch (error) {
                  console.log(error);
                  toast.error("Error" + error.message);
            }
      };



      return <div>
            {isLoading ? (<Loader />
            ) : (
                  <div>
                        <div className="max-w-4xl flex justify-between items-center">
                              <h1 className="uppercase font-semibold text-gray-700">User List : {userList.length}</h1>
                              <button
                                    onClick={() => {
                                          setSelectUser(null);
                                          setAddModalOpen(true);
                                    }}
                                    className="flex items-center border border-gray-300 text-sm bg-gray-100 hover:bg-gray-200 gap-2 py-2 px-4  cursor-pointer duration-300 rounded mt-4"><IoMdAdd />Add User</button>
                        </div>

                        <div>
                              {userList?.length > 0 ?
                                    (
                                          <div className="mt-4 max-w-4xl flex flex-col gap-2">
                                                {/* Top Heading */}
                                                <div className="grid grid-cols-[2fr_1fr_1fr] md:grid-cols-[2fr_2fr_1fr_1fr_1fr] items-center py-2 px-2 border bg-gray-100">
                                                      <h1 className="hidden md:inline-block">Name</h1>
                                                      <h1>Email</h1>
                                                      <h1 className="hidden md:inline-block">Admin</h1>
                                                      <h1 className="text-center">Action</h1>
                                                      <h1 className="text-center">Edit</h1>
                                                </div>
                                                {/* User List */}
                                                <div>
                                                      {
                                                            userList.map((item) => (
                                                                  <div key={item?._id} className="grid grid-cols-[2fr_1fr_1fr] md:grid-cols-[2fr_2fr_1fr_1fr_1fr] items-center py-2 px-2 border bg-gray-100 mt-4">
                                                                        <p className="hidden md:inline-block font-medium lg:text-sm text-xs">{item?.name}</p>
                                                                        <p className="font-medium lg:text-sm text-xs">{item?.email}</p>
                                                                        <p className={item?.isAdmin ? "font-medium lg:text-sm text-xs hidden md:inline-block" : "text-gray-600 font-medium lg:text-sm text-xs hidden md:inline-block"}>{item?.isAdmin ? "Admin" : "User"}</p>
                                                                        <RiDeleteBin6Line onClick={() => handleDelete(item?._id)} className="cursor-pointer hover:text-red-500 duration-300 ease-in-out w-full lg:text-sm text-xs" />
                                                                        <FiEdit
                                                                              onClick={() => {
                                                                                    setSelectUser(item);
                                                                                    setModalOpen(true)
                                                                              }}
                                                                              className="cursor-pointer hover:text-green-600 duration-300 ease-in-out w-full lg:text-sm text-xs" />

                                                                  </div>
                                                            ))
                                                      }
                                                </div>

                                          </div>

                                    ) : (
                                          <div className="mt-2">
                                                <p className="mt-3">You have no user in your database</p>
                                          </div>
                                    )
                              }



                              {/* Modal for Update User Start */}
                              {isModalOpen && (
                                    <div className="fixed inset-0 flex items-center justify-center shadow-lg bg-black bg-opacity-50 lg:px-0 px-4">
                                          <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
                                                <h2 className="text-xl text-gray-700 font-semibold mb-4">Edit User</h2>
                                                <form onSubmit={handleUpdate}>

                                                      <input
                                                            type="text"
                                                            name="name"
                                                            required
                                                            defaultValue={selectUser?.name}
                                                            placeholder="Name"
                                                            className="w-full border px-3 py-2 mb-4 rounded" />
                                                      <input
                                                            type="email"
                                                            name="email"
                                                            required
                                                            defaultValue={selectUser?.email}
                                                            placeholder="Email"
                                                            className="w-full border px-3 py-2 mb-4 rounded" />
                                                      <input
                                                            type="password"
                                                            name="password"
                                                            required
                                                            placeholder="New Password"
                                                            className="w-full border px-3 py-2 mb-4 rounded" />

                                                      <div className="flex justify-end gap-2">
                                                            <button
                                                                  type="button"
                                                                  onClick={() => setModalOpen(false)}
                                                                  className="px-4 py-2 bg-gray-300 rounded">
                                                                  Cancel
                                                            </button>
                                                            <button
                                                                  type="submit"
                                                                  className="px-4 py-2 bg-blue-600 text-white rounded">
                                                                  Update
                                                            </button>
                                                      </div>

                                                </form>
                                          </div>
                                    </div>
                              )}

                              {/* Modal for Update User End */}


                              {/* Modal for Add User Start*/}
                              {isAddModalOpen && (
                                    <div className="fixed inset-0 flex items-center justify-center shadow-lg bg-black bg-opacity-50 lg:px-0 px-4">
                                          <div className="bg-white p-6 rounded shadow-md max-w-md w-full ">
                                                <h2 className="text-xl text-gray-700 font-semibold mb-4">
                                                      Add New User
                                                </h2>
                                                <form onSubmit={handleAdd}>
                                                      <input
                                                            type="text"
                                                            name="name"
                                                            placeholder="Name"
                                                            className="w-full border px-3 py-2 mb-4 rounded"
                                                            required
                                                      />
                                                      <input
                                                            type="email"
                                                            name="email"
                                                            placeholder="Email"
                                                            className="w-full border px-3 py-2 mb-4 rounded"
                                                            required
                                                      />
                                                      <input
                                                            type="password"
                                                            name="password"
                                                            placeholder="Password"
                                                            className="w-full border px-3 py-2 mb-4 rounded"
                                                            required
                                                      />

                                                      <div className="flex justify-end gap-2">

                                                            <button
                                                                  type="button"
                                                                  onClick={() => setAddModalOpen(false)}
                                                                  className="px-4 py-2 bg-gray-300 rounded"
                                                            >
                                                                  Cancel
                                                            </button>

                                                            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                                                                  Add User
                                                            </button>
                                                      </div>

                                                </form>
                                          </div>
                                    </div>
                              )}
                              {/* Modal for Add User End*/}



                        </div>

                  </div>
            )}
      </div>

};

export default Users;
















