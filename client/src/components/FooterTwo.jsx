import { MdOutlineLocalShipping, MdPayment } from "react-icons/md";
import { TbCurrencyDollar } from "react-icons/tb";
import { FaHeadphones } from "react-icons/fa6";
import Container from "./Container";

const FooterTwo = () => {
      return (
            <div className="bg-cyan-100 py-8">
                  <Container>
                        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                              <div className="flex items-center gap-4">
                                    <span className="text-blue-800 border-2 border-blue-800 py-2 px-2 rounded-full"><MdOutlineLocalShipping size={30} /></span>
                                    <div>
                                          <h1 className="text-xl font-semibold text-gray-800">Free delivery</h1>
                                          <h1 className="text-gray-700">Free shipping on all order</h1>
                                    </div>
                              </div>
                              <div className="flex items-center gap-4">
                                    <span className="text-blue-800 border-2 border-blue-800 py-2 px-2 rounded-full"><TbCurrencyDollar size={30} /></span>
                                    <div>
                                          <h1 className="text-xl font-semibold text-gray-800">Returns</h1>
                                          <h1 className="text-gray-700">Back guarantee under 7 days</h1>
                                    </div>
                              </div>
                              <div className="flex items-center gap-4">
                                    <span className="text-blue-800 border-2 border-blue-800 py-2 px-2 rounded-full"><FaHeadphones size={30} /></span>
                                    <div>
                                          <h1 className="text-xl font-semibold text-gray-800">Support 24/7</h1>
                                          <h1 className="text-gray-700">Support online 24 hours a day</h1>
                                    </div>
                              </div>
                              <div className="flex items-center gap-4">
                                    <span className="text-blue-800 border-2 border-blue-800 py-2 px-2 rounded-full"><MdPayment size={30} /></span>
                                    <div>
                                          <h1 className="text-xl font-semibold text-gray-800">Payments</h1>
                                          <h1 className="text-gray-700">100% payment security</h1>
                                    </div>
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default FooterTwo;