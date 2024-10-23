import Container from "./Container";
import { FaFacebook, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { payment } from "../assets";

const Footer = () => {
      return (
            <div className="bg-primary py-6 lg:py-16">
                  <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-4 mx-auto gap-6 lg:gap-16">
                              {/* Left side */}
                              <div>
                                    <h1 className="text-gray-100 text-xl tracking-wide">More about Orebi Shop</h1>
                                    <p className="text-gray-100 mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint ab ullam, numquam nesciunt in.</p>
                                    <div className="flex items-center gap-4 mt-8">
                                          <span className="border border-gray-100 py-1.5 px-1.5 text-gray-100 rounded-full">
                                                <FaFacebook size={20} />
                                          </span>
                                          <span className="border border-gray-100 py-1.5 px-1.5 text-gray-100 rounded-full">
                                                <FaGithub size={20} />
                                          </span>
                                          <span className="border border-gray-100 py-1.5 px-1.5 text-gray-100 rounded-full">
                                                <FaYoutube size={20} />
                                          </span>
                                          <span className="border border-gray-100 py-1.5 px-1.5 text-gray-100 rounded-full">
                                                <FaLinkedinIn size={20} />
                                          </span>
                                          <span className="border border-gray-100 py-1.5 px-1.5 text-gray-100 rounded-full">
                                                <TfiEmail size={20} />
                                          </span>
                                    </div>
                              </div>
                              {/* Middle */}
                              <div>
                                    <h1 className="text-gray-100 text-xl tracking-wide">Shop</h1>
                                    <div className="mt-6 text-lightext space-y-2">
                                          <h1>Accesories</h1>
                                          <h1>Clothes</h1>
                                          <h1>Electronics</h1>
                                          <h1>Home appliances</h1>
                                          <h1>New Arrivals</h1>
                                    </div>
                              </div>
                              {/* Middle */}
                              <div>
                                    <h1 className="text-gray-100 text-xl tracking-wide">Your account</h1>
                                    <div className="mt-6 text-lightext space-y-2">
                                          <h1>Profile</h1>
                                          <h1>Orders</h1>
                                          <h1>Addresses</h1>
                                          <h1>Account Details</h1>
                                          <h1>Payment Options</h1>
                                    </div>
                              </div>
                              {/* Right side */}
                              <div>
                                    <h1 className="text-gray-100 text-xl tracking-wide">Subscribe to our newsletter.</h1>
                                    <div>
                                          <h1 className="text-lightext mt-6">A at pellentesque et mattis porta enim elementum.</h1>
                                          <img src={payment} alt="" className="mt-6 h-7" />
                                    </div>
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default Footer;