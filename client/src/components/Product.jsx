// import Badge from "./Badge";
// import PriceContainer from "./PriceContainer";

// const Product = ({ item }) => {
//       return (
//             <div className="w-full relative group pr-4">
//                   {/* Product Image Section */}
//                   <div className="h-80 overflow-hidden relative">
//                         <div className="w-full h-full overflow-hidden">
//                               <img src={item?.image[0]} alt="productImage" className="w-full h-full hover:scale-110 duration-300 cursor-pointer rounded-t-md" />
//                         </div>
//                         <div className="absolute top-2 right-2">
//                               {
//                                     !item?.offer && <p><Badge className={"rounded"} title='Sale' /></p>
//                               }
//                         </div>
//                         <div className="mt-2">
//                               <p>{item?.name}</p>
//                               <PriceContainer item={item} />
//                         </div>
//                   </div>
//             </div>
//       );
// };

// export default Product;





import AddToCartButton from "./AddToCartButton";
import Badge from "./Badge";
import PriceContainer from "./PriceContainer";

const Product = ({ item }) => {
      return (
            <div className="w-full relative group pr-4">
                  {/* Product Image Section */}
                  <div className="h-80 overflow-hidden relative">
                        <div className="w-full h-full overflow-hidden">
                              <img
                                    src={item?.image[0]}
                                    alt="productImage"
                                    className="w-full h-full hover:scale-110 duration-300 cursor-pointer rounded-t-md"
                              />
                        </div>

                        {/* Sale Badge */}
                        {item?.offer && (
                              <div className="absolute top-2 right-2">
                                    <Badge title="Sale" />
                              </div>
                        )}
                  </div>

                  {/* Product Name and Price */}
                  <div className="border border-gray-400 px-4 py-4">
                        <p className="text-lg  text-gray-800">{item?.name}</p>
                        <PriceContainer item={item} />
                        <AddToCartButton item={item} />
                  </div>
            </div>
      );
};

export default Product;
