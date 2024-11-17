import AddToCartButton from "./AddToCartButton";
import PriceContainer from "./PriceContainer";

const ProductInfo = ({ product }) => {
      return (
            <div className="flex-col md:justify-center flex  gap-5 mt-6">
                  <h1 className="md:text-xl text-2xl text-gray-600 tracking-wide">{product?.name}</h1>
                  <div className="flex gap-2 items-center">
                        <PriceContainer item={product} />
                        {/* <PriceFomate amount={product?.price + (product?.discountPercentage * product?.price) / 100} className={'text-sm font-medium text-gray-600 line-through'} />
                        <PriceFomate amount={product?.price} className={'text-sm font-medium text-gray-800 text-[16px]'} /> */}
                  </div>
                  <h1 className="text-gray-600 tracking-wide">{product?.description}</h1>
                  <p className="text-xl text-gray-700">Be the first to leave.</p>
                  <div className="flex flex-col gap-4">
                        <p className="text-gray-600 tracking-wide"><span className="text-gray-700">Category : </span>{product?.category}</p>
                        <p className="text-gray-600 tracking-wide"><span className="text-gray-700">Brand : </span>{product
                              ?.brand}</p>
                  </div>
                  <AddToCartButton item={product} />
            </div>
      );
};

export default ProductInfo;