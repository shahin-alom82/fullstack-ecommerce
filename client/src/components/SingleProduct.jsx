import { useParams } from "react-router-dom";
import Container from "./Container";
import { useEffect, useState } from "react";
import axios from 'axios';
import ProductInfo from "./ProductInfo";
import Loader from "./Loader";

const SingleProduct = () => {
      const serverUrl = import.meta.env.VITE_BACKEND_URL;
      const { id } = useParams();
      const [product, setProduct] = useState(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const res = await axios.get(`${serverUrl}/api/product/single?_id=${id}`);
                        const data = res.data;
                        if (data.success) {
                              setProduct(data.product);
                        } else {
                              console.log('Product fetching error', data?.message);
                        }
                  } catch (error) {
                        console.log('Product fetching error', error);
                  } finally {
                        setLoading(false);
                  }
            };
            fetchData();
      }, [id, serverUrl]);

      if (loading) {
            return (
                  <div>
                        <Loader />
                  </div>
            );
      }

      return (
            <div className="py-10 mt-10">
                  <Container className={'flex flex-col md:flex-row gap-10'}>
                        <div className="w-full max-h-[500px] group overflow-hidden">
                              <img
                                    src={product?.image[0]}
                                    alt="singleImage"
                                    className="w-full h-full group-hover:scale-110 duration-300 ease-in-out cursor-pointer transition-transform"
                              />
                        </div>
                        <div>
                              <ProductInfo product={product} />
                        </div>
                  </Container>
            </div>
      );
};

export default SingleProduct;
