import { useSelector } from "react-redux";
import Container from "../Container";
import { empty } from "../../assets";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";


const CartProduct = () => {
      const { products } = useSelector((state) => state.orebi)
      return (
            <div className="py-10">
                  <Container>
                        {
                              products.length > 0 ?

                                    <div className="">
                                          {
                                                products.map((item) => (
                                                      <div>
                                                            <Link to={`/product/${item?._id}`}>
                                                                  <img src={item.image[0]} alt="img" className="h-28 border mt-4 border-gray-400 w-28 py-2" />
                                                            </Link>
                                                      </div>
                                                ))
                                          }
                                    </div> :
                                    <div className="mt-10 mb-4 mx-auto items-center justify-center text-center ">
                                          <img src={empty} alt="img" className="mx-auto" />
                                          <div>
                                                <h1 className="md:text-2xl text-xl uppercase text-gray-700 mt-4 font-medium">Your Cart feels lonely</h1>
                                                <p className="mt-4 text-gray-900 tracking-wide">Your Shopping Cart to serve. Give it purpose - fill it with <br /> books, electronics, videos. etc. and make it happy</p>
                                                <Link to={"/shop"}>
                                                      <button className="flex items-center gap-2 mx-auto py-2 px-4 bg-[#112240] text-white tracking-wide mt-4 hover:bg-black duration-300 ease-in-out">Continue Shopping <FiShoppingCart size={18} className="mt-0.5"/>
                                                      </button>
                                                </Link>
                                          </div>
                                    </div>
                        }
                  </Container>
            </div>
      );
};

export default CartProduct;