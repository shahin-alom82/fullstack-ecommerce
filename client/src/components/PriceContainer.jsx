import { twMerge } from "tailwind-merge";
import PriceFomate from "./PriceFomate";

const PriceContainer = ({ item, className }) => {
      return (
            <div className={twMerge('flex items-center gap-3 mt-2', className)}>
                  <PriceFomate amount={item?.price + (item?.discountPercentage * item?.price) / 100} className={'text-sm font-medium text-gray-600 line-through'} />
                  <PriceFomate amount={item?.price} className={"text-gray-800 text-sm"} />
            </div>
      );
};

export default PriceContainer;