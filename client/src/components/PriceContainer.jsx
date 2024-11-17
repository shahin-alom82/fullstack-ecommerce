import { twMerge } from "tailwind-merge";
import PriceFomate from "./PriceFomate";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const PriceContainer = ({ item, className }) => {
      const { products } = useSelector((state) => state.orebi);
      const [cartProduct, setCartProduct] = useState(null);

      useEffect(() => {
            const existingProduct = products.find((product) => product?._id === item?._id);
            setCartProduct(existingProduct);
      }, [item, products]);

      // Calculate the regular price
      const disCountPrice = cartProduct
            ? cartProduct?.quantity * item?.price
            : item?.price;

      const regularPrice = cartProduct ?
            item.price * cartProduct.quantity + (item?.discountPercentage * (item?.price * cartProduct?.quantity)) / 100
            :
            item.price + (item?.discountPercentage * item?.price) / 100

      return (
            <div className={twMerge('flex items-center gap-3 mt-2', className)}>
                  {/* Original price with discount */}
                  <PriceFomate
                        amount={regularPrice}
                        className="text-sm font-medium text-gray-600 line-through"
                  />
                  {/* Regular price */}
                  <PriceFomate
                        amount={disCountPrice}
                        className="text-gray-800 text-sm"
                  />
            </div>
      );
};

export default PriceContainer;
