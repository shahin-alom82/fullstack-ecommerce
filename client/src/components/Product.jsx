



import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import Badge from "./Badge";
import PriceContainer from "./PriceContainer";
import { twMerge } from "tailwind-merge";

const Product = ({ item, className }) => {
      return (
            <div className={twMerge("w-full relative group pr-4", className)}>
                  {/* Product Image Section */}
                  <div className="h-80 overflow-hidden relative border-l border-r border-t  border-gray-300">
                        <div className="w-full h-full overflow-hidden">
                              <Link to={`/product/${item?._id}`}>
                                    <img
                                          src={item?.image[0]}
                                          alt="productImage"
                                          className="w-full h-full hover:scale-110 duration-300 cursor-pointer"
                                    />
                              </Link>
                        </div>

                        {/* Sale Badge */}
                        {item?.offer && (
                              <div className="absolute top-2 right-2">
                                    <Badge title="Sale" />
                              </div>
                        )}
                  </div>

                  {/* Product Name and Price */}
                  <div className="border border-gray-300 px-4 py-4">
                        <p className="text-lg  text-gray-800">{item?.name}</p>
                        <PriceContainer item={item} />
                        <AddToCartButton item={item} />
                  </div>
            </div>
      );
};

export default Product;
