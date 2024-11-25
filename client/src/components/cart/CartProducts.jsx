import { RiCloseLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast'
import PriceContainer from "../PriceContainer";
import AddToCartButton from "../AddToCartButton";
import PriceFomate from "../PriceFomate";
import { productDelete } from "../../redux/orebiSlice";


const CartProducts = ({ products }) => {

      const dispatch = useDispatch()

      return (


            
            <div className="w-full grid grid-cols-5 border border-gray-300 gap-2 mt-4 py-6 px-4">
                  <div className="flex col-span-5 md:col-span-2 items-center gap-4">
                        <div>
                              <RiCloseLine onClick={() => { dispatch(productDelete(products?._id)), toast.success(`${products?.name.slice(0, 12)} is deleted successfully!`) }} size={25} className="text-gray-700" />
                        </div>
                        <img className="h-32 w-36 hover:scale-110 duration-300 col-span-2" src={products?.image[0]} alt="" />
                        <h1 className="md:text-xl text-sm">{products?.name}</h1>
                  </div>
                  <div className="col-span-5 md:col-span-3 flex items-center justify-between">
                        <div className="flex w-1/3 items-center">
                              <PriceContainer item={products} />
                        </div>
                        <div className="flex w-1/3 items-center">
                              <AddToCartButton item={products} />
                        </div>
                        <div className="flex w-1/3 items-center">
                              <PriceFomate amount={products?.price * products.quantity} />
                        </div>
                  </div>
            </div>


      );
};

export default CartProducts;