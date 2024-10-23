import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { bannerData } from "../constans";
import Container from "./Container";

const Banner = () => {
      const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            appendDots: dots => (
                  <div className="flex justify-center mx-auto py-4">
                        <ul className="flex space-x-2"> {dots} </ul>
                  </div>
            ),
            customPaging: i => (
                  <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
            ),
      };

      return (
            <div className="w-full relative">
                  <Slider {...settings}>
                        {bannerData?.map((item, index) => (
                              <div key={index} className="relative">
                                    <img className="w-full h-[200px] md:h-[550px]" src={item?.image} alt="bannerImage" />
                                    <div className="absolute inset-0 flex lg:items-center">
                                          <Container className="md:text-left lg:bottom-48 lg:ml-40 p-4 md:p-0">
                                                <h1 className="text-xs md:text-sm font-medium bg-red-500 text-white rounded-md py-1 px-2 inline-block">{item?.button}</h1>
                                                <h1 className="text-sm md:text-4xl font-bold w-full md:w-[550px] tracking-wide mt-2 text-gray-600">{item?.title}</h1>
                                                <h1 className="mt-3 text-sm md:text-lg font-medium text-gray-600">{item?.discount}</h1>
                                                <h1 className="mt-1 text-sm md:text-lg text-gray-600">{item?.price}</h1>
                                                <button className="bg-primary text-white lg:py-2 py-1 px-4 md:px-6 mt-4 hover:bg-opacity-90 rounded text-center lg:text-[16px] text-[12px]">
                                                      Shop Now
                                                </button>
                                          </Container>
                                    </div>
                              </div>
                        ))}
                  </Slider>
            </div>
      );
};

export default Banner;
