import { twMerge } from "tailwind-merge";
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreseQuantity, increseQuantity } from "../redux/orebiSlice";
import { useEffect, useState } from "react";
import { TiPlusOutline } from "react-icons/ti";
import { TiMinusOutline } from "react-icons/ti";

const AddToCartButton = ({ item, className }) => {
      const [cartProduct, setCartProduct] = useState(null)
      const { products } = useSelector((state) => state.orebi)
      const dispatch = useDispatch()

      
      const handleAddToCart = () => {
            dispatch(addToCart(item))
            toast.success(`${item?.name}, added successfully!`)
      }
      
      useEffect(() => {
            const existingProduct = products.find((product) => product?._id === item?._id)
            setCartProduct(existingProduct)
      }, [item, products])


      // Increment quantity
      const handlePlus = () => {
            if (cartProduct) {
                  dispatch(increseQuantity(cartProduct._id));
                  toast.success("Increased quantity  successfully!");
            }
      };

      // Decrement quantity
      const handleMinus = () => {
            if (cartProduct?.quantity > 1) {
                  dispatch(decreseQuantity(cartProduct._id));
                  toast.success("Decreased Quantity successfully!");
            } else {
                  toast.error("Minimum quantity is 1");
            }
      };
      return (
            <div className="h-12">
                  {
                        cartProduct ?
                              (
                                    <div className="py-6">
                                          <div className="flex items-center gap-6">


                                                <span onClick={handleMinus}                                  
                                                      className="border border-gray-400 py-1 px-1  hover:bg-black hover:text-white duration-300 cursor-pointer">
                                                      <TiMinusOutline />
                                                </span>
                                                <span onClick={handleMinus} className="text-green-600 font-medium">{cartProduct?.quantity}</span>
                                                <span onClick={handlePlus} className="border border-gray-400 py-1 px-1 hover:bg-black hover:text-white duration-300 cursor-pointer">
                                                      <TiPlusOutline />
                                                </span>
                                          </div>
                                    </div>
                              )
                              :
                              (
                                    <button onClick={handleAddToCart} className={twMerge('bg-[#112240] hover:bg-black text-white w-full py-2 text-sm rounded-full hoverEffect tracking-wide mt-4', className)}>Add To Cart</button>
                              )

                  }
            </div>
      );
};

export default AddToCartButton;