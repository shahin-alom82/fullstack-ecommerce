import { useDispatch, useSelector } from "react-redux";
import Container from "../Container";
import { empty } from "../../assets";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import CartProducts from "./CartProducts";
import { resetProducts } from "../../redux/orebiSlice";
import PriceFomate from "../PriceFomate";
import { useEffect, useState } from "react";

const CartProduct = () => {
      const { products } = useSelector((state) => state.orebi);
      const dispatch = useDispatch();

      const handleReset = () => {
            const confirmed = window.confirm("Are you sure to reset your cart?");
            if (confirmed) {
                  dispatch(resetProducts());
            }
      };

      const [subTotal, setSubTotal] = useState(0);
      const [total, setTotal] = useState(0);

      useEffect(() => {

            let price = 0
            let discountPrice = 0
            products.map((item) => {
                  price += item?.price * item?.quantity + ((item?.discountPercentage * item?.price) / 100) * item?.quantity
                  discountPrice += item?.price * item?.quantity
                  return price, discountPrice
            })
            setSubTotal(price)
            setTotal(discountPrice)
      }, [products]);

      return (
            <div className="py-10">
                  <Container>
                        {products.length > 0 ? (
                              <div>
                                    <div className="hidden bg-[#112240] py-2 px-4 tracking-wide text-white lg:grid text-xl font-medium grid-cols-5 justify-between w-full">
                                          <p className="col-span-2">Product</p>
                                          <p>Price</p>
                                          <p>Quantity</p>
                                          <p>Subtotal</p>
                                    </div>
                                    <div className="mt-6">
                                          {products.map((item) => (
                                                <CartProducts key={item?._id} products={item} />
                                          ))}
                                    </div>
                                    <div className="flex flex-col lg:flex-row justify-between ">
                                          <div>
                                                <button
                                                      onClick={handleReset}
                                                      className="bg-red-600 tracking-wide text-white px-4 py-1.5 mt-6"
                                                >
                                                      Reset Cart
                                                </button>
                                          </div>
                                          <div className="flex flex-col md:flex-row gap-4 mt-6">
                                                <div>
                                                      <h1 className="md:text-xl font-medium text-sm uppercase text-gray-700">
                                                            Cart Totals
                                                      </h1>
                                                      <div className="mt-4 border border-gray-300">
                                                            <p className="text-gray-700 tracking-wide border border-gray-300 py-1 px-2 flex items-center justify-between gap-40 font-medium text-sm">
                                                                  SubTotal <PriceFomate amount={subTotal} />
                                                            </p>
                                                            <p className="text-gray-700 tracking-wide border border-gray-300 py-1 px-2 flex items-center justify-between gap-40 font-medium text-sm border-l border-r">
                                                                  Discount <PriceFomate amount={subTotal - total} />
                                                            </p>
                                                            <p className="text-gray-700 tracking-wide border border-gray-300 py-1 px-2 flex items-center justify-between gap-40 font-medium border-r border-l border-b">
                                                                  Total <PriceFomate amount={total} />
                                                            </p>
                                                      </div>
                                                      <button className="bg-[#112240] hover:bg-black duration-300 ease-in-out py-2 w-full text-white tracking-wide">
                                                            Proceed to Checkout
                                                      </button>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        ) : (
                              <div className="mt-10 mb-4 mx-auto items-center justify-center text-center ">
                                    <img src={empty} alt="Empty Cart" className="mx-auto" />
                                    <div>
                                          <h1 className="md:text-2xl text-xl uppercase text-gray-700 mt-4 font-medium">
                                                Your Cart feels lonely
                                          </h1>
                                          <p className="mt-4 text-gray-900 tracking-wide">
                                                Your Shopping Cart to serve. Give it purpose - fill it with <br /> books,
                                                electronics, videos. etc. and make it happy
                                          </p>
                                          <Link to={"/shop"}>
                                                <button className="flex items-center gap-2 mx-auto py-2 px-4 bg-[#112240] text-white tracking-wide mt-4 hover:bg-black duration-300 ease-in-out">
                                                      Continue Shopping <FiShoppingCart size={18} className="mt-0.5" />
                                                </button>
                                          </Link>
                                    </div>
                              </div>
                        )}
                  </Container>
            </div>
      );
};

export default CartProduct;
