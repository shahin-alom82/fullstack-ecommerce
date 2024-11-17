import React, { useEffect, useState } from 'react';
import ProductBanner from './ProductBanner';
import Pagination from './Pagination';
import Loader from './Loader';

const PaginationProductsList = () => {
      const [itemPerPage, setItemPerPage] = useState(4);
      const [product, setProducts] = useState([]);
      const [loading, setLoading] = useState(false);
      const [total, setTotal] = useState(0);

      useEffect(() => {
            const serverUrl = import.meta.env.VITE_BACKEND_URL;
            const fetchData = async () => {
                  try {
                        setLoading(true);
                        const res = await fetch(`${serverUrl}/api/product/list`);
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

      const itemPerPageFormBanner = (value) => {
            setItemPerPage(value);
      };

      return (
            <div className='flex flex-col gap-10 w-full'>
                  {/* ProductBanner */}
                  <ProductBanner itemPerPageFormBanner={itemPerPageFormBanner} />

                  {loading ? (
                        <div>
                              <Loader />
                        </div>
                  ) : (
                        <>
                              {/* Pagination */}
                              <Pagination product={product} itemPerPage={itemPerPage} />
                        </>
                  )}
            </div>
      );
};

export default PaginationProductsList;
