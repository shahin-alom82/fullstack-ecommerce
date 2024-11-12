import { useEffect, useState } from "react";
import Container from "./Container";
import Slider from "react-slick";
import Product from "./Product";
import Loader from "./Loader";

const NewArrival = () => {
      const [products, setProducts] = useState([]);
      const [loading, setLoading] = useState(false);
      const [total, setTotal] = useState(0);

      useEffect(() => {
            const fetchData = async () => {
                  try {
                        setLoading(true);
                        const res = await fetch("http://localhost:8000/api/product/list");
                        const data = await res.json();
                        if (data?.success) {
                              setProducts(data?.products);
                              setTotal(data?.total);
                        } else {
                              console.log("Product fetching error");
                        }
                  } catch (error) {
                        console.log("error", error);
                  } finally {
                        setLoading(false);
                  }
            };
            fetchData();
      }, []);

      const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                  {
                        breakpoint: 1024,
                        settings: {
                              slidesToShow: 3,
                              slidesToScroll: 1,
                        },
                  },
                  {
                        breakpoint: 768,
                        settings: {
                              slidesToShow: 2,
                              slidesToScroll: 1,
                        },
                  },
                  {
                        breakpoint: 480,
                        settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1,
                        },
                  },
            ],
            appendDots: (dots) => (
                  <div className="flex justify-center mx-auto py-4">
                        <ul className="flex space-x-2"> {dots} </ul>
                  </div>
            ),
            customPaging: (i) => (
                  <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
            ),
      };

      return (
            <div className="py-10">
                  <Container>
                        <h1 className="md:text-2xl text-xl text-gray-600 tracking-wide uppercase">
                              New Arrivals
                        </h1>
                        <div className="py-10">
                              <Slider {...settings}>
                                    {
                                          loading ?
                                                <div><Loader/></div>
                                                :
                                                products.map((item) => (
                                                      <Product key={item?._id} item={item} />
                                                ))
                                    }
                              </Slider>
                        </div>
                  </Container>
            </div>
      );
};

export default NewArrival;
