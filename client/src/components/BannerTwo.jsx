import { saleOne, saleThree, saleTwo } from "../assets";
import Container from "./Container";

const BannerTwo = () => {
      return (
            <div className="py-10">
                  <Container className={"flex flex-col lg:flex-row items-center gap-6"}>
                        <div className="relative">
                              <div className="group overflow-hidden">
                                    <img
                                          src={saleOne}
                                          alt="saleImage"
                                          className="lg:h-[550px] opacity-85 bg-black group-hover:scale-x-110 duration-500 ease-in-out"
                                    />
                              </div>
                              <div className="absolute lg:top-56 lg:right-28 top-32 right-14 text-center">
                                    <h1 className="lg:text-[22px] text-white font-medium">10% sales ongoing on phone</h1>
                                    <h1 className="lg:text-xl text-white font-medium">Offers on limited time</h1>
                                    <button className="bg-gray-300 px-4 py-1.5 text-gray-700 mt-3 rounded">Shop Now</button>
                              </div>
                        </div>
                        <div className="flex flex-col gap-6 relative">
                              <div className="group overflow-hidden">
                                    <img
                                          src={saleTwo}
                                          alt="saleImage"
                                          className="lg:h-[260px] lg:w-[800px] opacity-85 bg-black group-hover:scale-x-110 duration-500 ease-in-out"
                                    />
                              </div>
                              <div className="group overflow-hidden">
                                    <img
                                          src={saleThree}
                                          alt="saleImage"
                                          className="lg:h-[260px] lg:w-[800px] opacity-85 bg-black group-hover:scale-x-110 duration-500 ease-in-out"
                                    />
                              </div>
                              <div className="absolute lg:top-20 lg:right-[420px] top-6 right-24">
                                    <h1 className="lg:text-[22px] text-gray-700 font-medium">10% sales ongoing on phone</h1>
                                    <h1 className="lg:text-xl text-gray-700 font-medium mt-2">Offers on limited time</h1>
                                    <button className="bg-gray-300 px-4 py-1.5 text-gray-700 mt-3 rounded">Shop Now</button>
                              </div>
                              <div className="absolute lg:top-[350px] lg:right-[420px] top-[190px] right-24">
                                    <h1 className="lg:text-[22px] text-gray-700 font-medium">10% sales ongoing on phone</h1>
                                    <h1 className="lg:text-xl text-gray-700 font-medium mt-2">Offers on limited time</h1>
                                    <button className="bg-gray-300 px-4 py-1.5 text-gray-700 mt-3 rounded">Shop Now</button>
                              </div>
                        </div>
                  </Container>
            </div>

      );
};

export default BannerTwo;