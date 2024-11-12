import { time } from "../assets";
import Container from "./Container";
import { LuMoveRight } from "react-icons/lu";

const BannerThree = () => {
      return (
            <div>
                  <Container className={"relative mb-10"}>
                        <img src={time} alt="productImage" className="lg:h-[500px] w-full" />
                        <div className="absolute top-36 left-20 hidden md:block">
                              <h1 className="lg:text-4xl text-xl uppercase font-semibold">Product of the year</h1>
                              <p className="mt-4">Product of the Year is an innovative solution designed to revolutionize everyday life. With cutting-edge <br /> features and unparalleled performance, it delivers exceptional value to consumers. Experience <br /> the future of technology with this groundbreaking product!</p>
                              <button className="flex items-center gap-2 border-2 border-gray-800 font-medium lg:px-4 lg:text-[16px] rounded text-xs lg:py-2 lg:mt-6 px-2 py-1 mt-4">Shop Now <LuMoveRight />
                              </button>
                        </div>
                  </Container>
            </div>
      );
};

export default BannerThree; 