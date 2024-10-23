

import { LuMoveRight } from "react-icons/lu";
import Container from "./Container";
import { about } from "../assets";

const About = () => {
      return (
            <div className="py-10">
                  <Container>
                        {/* About Section start */}
                        <div>
                              <div>
                                    <h1 className="uppercase lg:text-2xl text-xl text-center font-semibold "><span className="text-gray-500">About</span> <span className="text-gray-800">Us</span></h1>
                              </div>
                              <div className="py-10 flex  flex-col lg:flex-row gap-16">
                                    <img className="h-[380px] w-[330px]" src={about} alt="img" />
                                    <div className="mt-6 text-sm">
                                          <h1 className="text-gray-700 tracking-wide">
                                                E-commerce refers to the buying and selling of goods or services online, allowing businesses and consumers to transact without physical stores. It involves online.</h1>
                                          <h1 className="text-gray-700 tracking-wide mt-2">stores, payment gateways, shipping, and customer support. Popular models include B2C, B2B, C2C, and C2B. E-commerce offers convenience, variety, and global reach but faces challenges like security and logistics. As technology advances, e-commerce continues to grow with innovations like mobile shopping and AI-driven personalization.</h1>
                                          <div className="mt-4">
                                                <h1 className="text-[18px] font-semibold text-gray-600 uppercase">Our Visit</h1>
                                                <h1 className="text-gray-700 tracking-wide mt-3">
                                                      A website visit refers to when a user accesses a website by typing its URL, clicking a link, or finding it through search engines. During the visit, users can browse pages, interact with content, and engage with features like shopping, forms, or media.</h1>
                                                <h1 className="text-gray-700 tracking-wide mt-2">Website visits are tracked using analytics tools to measure user activity, such as time spent, pages viewed, and actions taken. High-quality visits often result in conversions like purchases or sign-ups. The overall goal is to provide users with a seamless experience that meets their needs.</h1>
                                          </div>
                                          <button className="flex items-center gap-2 border border-gray-400 text-gray-700 lg:px-4 lg:text-[16px] text-sm lg:py-2 lg:mt-6 px-2 py-1 mt-4">Explore Now <LuMoveRight />
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default About;