import { twMerge } from "tailwind-merge";
import toast from 'react-hot-toast'
const AddToCartButton = ({ item, className }) => {
      return (
            <div>
                  <button onClick={() => toast.success(item?.name)} className={twMerge('bg-[#112240] hover:bg-black text-white w-full py-2 text-sm rounded-full hoverEffect tracking-wide mt-4', className)}>Add To Cart</button>
            </div>
      );
};

export default AddToCartButton;