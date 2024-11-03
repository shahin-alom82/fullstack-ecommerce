import { useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { LuLoader2 } from "react-icons/lu";
import toast from "react-hot-toast"
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import.meta.env.VITE_BACKEND_URL

const Add = ({ token }) => {
      // Server Url + getUser
      const serverUrl = import.meta.env.VITE_BACKEND_URL
      const [loading, setLoading] = useState(false)



      const [formData, setFormData] = useState({
            name: "",
            description: "",
            brand: "",
            price: "",
            discountPercentage: "",
            _type: "",
            category: "",
            offer: false,
            isAvailable: true,
            tags: [],
            badge: false,
            discountPercentage: "",
            image1: null,
            image2: null,

      });

      const navigate = useNavigate();

      const handleImageChange = (e) => {
            const { id, files } = e.target;
            setFormData({
                  ...formData,
                  [id]: files[0]
            });

      }

      const handleChange = (e) => {
            const { name, value, type, checked } = e.target
            if (type === "checkbox") {
                  setFormData({
                        ...formData, [name]: checked
                  })

            } else {
                  setFormData({ ...formData, [name]: value })
            }
      }


      const handleUploadProduct = async (e) => {
            e.preventDefault();
            try {
                  setLoading(true);
                  const data = new FormData();
                  Object.entries(formData).forEach(([key, value]) => {
                        data.append(key, value);
                  });


                  const res = await axios.post(serverUrl + '/api/product/add', data, {

                        headers: {
                              token,
                              "Content-Type": "multipart/form-data",
                        }
                  })

                  const resData = await res?.data;
                  if (resData?.success) {
                        toast.success(resData?.message)
                        navigate('/list')
                  } else {
                        toast.error(resData?.error)
                  }


            } catch (error) {
                  console.error('Product data uploading error:', error);
                  toast.error(error.message || 'An error occurred while uploading the product');
            } finally {
                  setLoading(false);
            }
      };


      return (
            <div>
                  <form onSubmit={handleUploadProduct} className="flex flex-col  gap-4 w-full">
                        <h1 className="lg:text-2xl text-sm text-gray-600 font-medium mt-4 tracking-wide">Upload product to database</h1>
                        {/* Image Upload */}
                        <label htmlFor="" className="md:text-sm text-xs text-gray-600 font-medium  tracking-wide">image Upload</label>
                        <div className="flex flex-wrap items-center gap-5">
                              {["image1", "image2"].map((imageId) => (
                                    <label htmlFor={imageId} key={imageId}>
                                          <div className="text-gray-600 border-2 border-dashed border-gray-500 py-2 px-3 hover:border-black ease-in-out duration-300 cursor-pointer rounded">
                                                {
                                                      formData[imageId] ?
                                                            (
                                                                  <img src={URL.createObjectURL(formData[imageId])} alt="preview" className="w-14 h-10 mb-2" />
                                                            )
                                                            :
                                                            (
                                                                  <IoMdCloudUpload className="text-gray-600 text-3xl hover:border-black ease-in-out duration-300 w-full" />
                                                            )
                                                }
                                                <input
                                                      hidden
                                                      id={imageId}
                                                      type="file"
                                                      onChange={handleImageChange}
                                                />
                                                <p className="text-sm">{formData[imageId] ? "Change" : "Upload"}</p>
                                          </div>
                                    </label>
                              ))}
                        </div>

                        {/* Product Form */}
                        <div>
                              {/* Product Name */}
                              <div className="mt-4 w-full max-w-md flex flex-col gap-2">

                                    <label htmlFor="name" className="md:text-sm text-xs text-gray-600 font-medium  tracking-wide">Product Name</label>
                                    <input
                                          className="border px-4 py-2 border-gray-500 rounded  outline-none placeholder:text-sm text-sm text-gray-600 tracking-wide"
                                          type="text"
                                          placeholder="Type product name here..."
                                          name="name"
                                          onChange={handleChange}
                                    />
                              </div>
                              {/* Product description */}
                              <div className="mt-4 w-full max-w-md flex flex-col gap-2">
                                    <label htmlFor="description" className="md:text-sm text-xs text-gray-600 font-medium  tracking-wide">Product Description</label>
                                    <textarea
                                          className="border px-4 py-2 border-gray-500 rounded  outline-none placeholder:text-sm text-sm text-gray-600 tracking-wide resize-none"
                                          type="text"
                                          rows={2}
                                          name="description"
                                          onChange={handleChange}
                                          placeholder="Type product description..."
                                    />
                              </div>
                              {/* Product  Brand*/}
                              <div className="mt-4 w-full max-w-md flex flex-col gap-2">
                                    <label htmlFor="brand" className="md:text-sm text-xs text-gray-600 font-medium  tracking-wide">Product Brand</label>
                                    <input
                                          className="border px-4 py-2 border-gray-500 rounded  outline-none placeholder:text-sm text-sm text-gray-600 tracking-wide"
                                          type="text"
                                          placeholder="Type product brand here..."
                                          name="brand"
                                          onChange={handleChange}
                                    />
                              </div>
                              {/* Price Section */}
                              <div className="flex flex-col md:flex-row max-w-md lg:gap-4">
                                    {/* Product Discount*/}
                                    <div className="mt-4 w-full flex flex-col gap-2">
                                          <label htmlFor="price" className="md:text-sm text-xs text-gray-600 font-medium  tracking-wide">Product Price</label>
                                          <input
                                                className="border px-4 py-2 border-gray-500 rounded  outline-none placeholder:text-sm text-sm text-gray-600 tracking-wide"
                                                type="number"
                                                placeholder="Enter Price"
                                                name="price"
                                                onChange={handleChange}
                                          />
                                    </div>
                                    {/* Product Discount Persentage*/}
                                    <div className="mt-4 w-full flex flex-col gap-2">
                                          <label htmlFor="discountPercentage" className="md:text-sm text-xs text-gray-600 font-medium  tracking-wide">Product Discount Percentage</label>
                                          <input
                                                className="border px-4 py-2 border-gray-500 rounded  outline-none placeholder:text-sm text-sm text-gray-600 tracking-wide"
                                                type="number"
                                                placeholder="Type product brand here..."
                                                name="discountPercentage"
                                                onChange={handleChange}
                                          />
                                    </div>
                              </div>

                              <div className="flex flex-col md:flex-row max-w-md lg:gap-4">
                                    {/* Product Type */}
                                    <div className="mt-4 w-full flex flex-col gap-2 relative">
                                          <label htmlFor="_type" className="md:text-sm text-xs text-gray-600 font-medium tracking-wide">
                                                Product Type
                                          </label>
                                          <div className="relative w-full">
                                                <select
                                                      name="_type"
                                                      onChange={handleChange}
                                                      className="border px-4 py-2 border-gray-500 rounded appearance-none outline-none w-full"
                                                >
                                                      <option value="">Select Type</option>
                                                      <option value="new_arrivals">New Arrivals</option>
                                                      <option value="best_arrivals">Best Arrivals</option>
                                                      <option value="special_offers">Special Offers</option>
                                                      <option value="promotions">Promotions</option>
                                                </select>
                                                <FaArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 pointer-events-none" />
                                          </div>
                                    </div>

                                    {/* Product Category */}
                                    <div className="mt-4 w-full flex flex-col gap-2 relative">
                                          <label htmlFor="category" className="md:text-sm text-xs text-gray-600 font-medium tracking-wide">
                                                Product Category
                                          </label>
                                          <div className="relative w-full">
                                                <select
                                                      name="category"
                                                      onChange={handleChange}
                                                      className="border px-4 py-2 border-gray-500 rounded appearance-none outline-none w-full"
                                                >
                                                      <option value="">Select Category</option>
                                                      <option value="men">Men</option>
                                                      <option value="women">Women</option>
                                                      <option value="kids">Kids</option>
                                                      <option value="others">Others</option>
                                                </select>
                                                <FaArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 pointer-events-none" />
                                          </div>
                                    </div>
                              </div>


                              <div className="flex flex-col md:flex-row max-w-md lg:gap-4">
                                    {/* Product Offer */}
                                    <div className="mt-4 w-full flex flex-col gap-2 relative">
                                          <label htmlFor="offer" className="md:text-sm text-xs text-gray-600 font-medium tracking-wide">
                                                Product Offer
                                          </label>
                                          <div className="relative w-full">
                                                <select
                                                      name="offer"
                                                      onChange={handleChange}
                                                      className="border px-4 py-2 border-gray-500 rounded appearance-none outline-none w-full"
                                                >
                                                      <option value="false">False</option>
                                                      <option value="true">True</option>

                                                </select>
                                                <FaArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 pointer-events-none" />
                                          </div>
                                    </div>
                                    {/* Product isAvailable */}
                                    <div className="mt-4 w-full flex flex-col gap-2 relative">
                                          <label htmlFor="isAvailable" className="md:text-sm text-xs text-gray-600 font-medium tracking-wide">
                                                Product isAvailable
                                          </label>
                                          <div className="relative w-full">
                                                <select
                                                      name="isAvailable"
                                                      onChange={handleChange}
                                                      className="border px-4 py-2 border-gray-500 rounded appearance-none outline-none w-full"
                                                >
                                                      <option value="true">True</option>
                                                      <option value="false">False</option>
                                                </select>
                                                <FaArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 pointer-events-none" />
                                          </div>
                                    </div>
                                    {/* Product isAvailable */}
                                    <div className="mt-4 w-full flex flex-col gap-2 relative">
                                          <label htmlFor="isAvailable" className="md:text-sm text-xs text-gray-600 font-medium tracking-wide">
                                                Product Badge
                                          </label>
                                          <div className="relative w-full">
                                                <select
                                                      name="badge"
                                                      onChange={handleChange}
                                                      className="border px-4 py-2 border-gray-500 rounded appearance-none outline-none w-full"
                                                >
                                                      <option value="false">False</option>
                                                      <option value="true">True</option>
                                                </select>
                                                <FaArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 pointer-events-none" />
                                          </div>
                                    </div>
                              </div>

                              {/*Product checkbox  */}
                              <div className="mt-4">
                                    <label htmlFor="tags" className="md:text-sm text-xs text-gray-600 font-medium  tracking-wide">Tags</label>
                                    <div className="flex flex-col gap-1 items-start">
                                          {['Fashion', 'Electronics', 'Sports', 'Accessories', 'Others'].map((tag) => (
                                                <div key={tag} className="flex items-center gap-2 space-y-2">
                                                      <input
                                                            type="checkbox"
                                                            id={tag.toLocaleLowerCase()}
                                                            name="tags"
                                                            value={tag}
                                                            className="cursor-pointer mt-1.5"
                                                            onChange={(e) => {
                                                                  if (e.target.checked) {
                                                                        setFormData((prevData) => ({
                                                                              ...prevData,
                                                                              tags: [...prevData.tags, tag]
                                                                        }));
                                                                  } else {
                                                                        setFormData((prevData) => ({
                                                                              ...prevData,
                                                                              tags: prevData.tags.filter((t) => t !== tag)
                                                                        }))
                                                                  }
                                                            }}
                                                      />

                                                      <p className="text-sm tracking-wide font-medium text-gray-600">{tag}</p>
                                                </div>
                                          ))}
                                    </div>

                              </div>
                              <button
                                    disabled={loading}
                                    type="submit"
                                    className="bg-[#112240] text-white py-2 mt-4 px-8 uppercase font-medium flex items-center gap-1 justify-center tracking-wide hover:bg-black hoverEffect disabled:bg-gray-500 disabled:cursor-not-allowed w-full max-w-md rounded">
                                    Add
                                    {loading ? (<span className="animate-spin text-white"><LuLoader2 /></span>)
                                          : (<FiPlus />)}

                              </button>
                        </div>
                  </form>
            </div>
      );
};

export default Add;