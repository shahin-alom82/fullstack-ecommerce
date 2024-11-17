import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from './Product';



function Items({ currentItems }) {
      return (
            <>
                  {
                        currentItems && currentItems?.map((item) => <Product className="w-full" key={item?._id} item={item} />)
                  }
            </>
      )
}


const Pagination = ({ product, itemPerPage }) => {
      const [itemOfset, setItemOfset] = useState(0)
      const [itemStart, setItemStart] = useState(1)
      const endOfset = itemOfset + itemPerPage
      const currentItems = product.slice(itemOfset, endOfset)
      const pageCount = Math.ceil(product.length / itemPerPage)
      const handlePageClick = (event) => {
            const newOfset = (event.selected * itemPerPage) % product.length
            setItemOfset(newOfset)
            setItemStart(newOfset)
      }
      return (
            <div>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        <Items currentItems={currentItems} />
                  </div>
                  <div className='flex flex-col md:flex-row gap-6 mt-6 justify-center md:justify-between items-center md:items-start'>
                        <ReactPaginate
                              nextAriaLabel=''
                              onPageChange={handlePageClick}
                              pageRangeDisplayed={3}
                              marginPagesDisplayed={2}
                              pageCount={pageCount}
                              previousLabel=""
                              pageLinkClassName='w-9 h-9 border border-gray-300 hover:border-black hover:bg-black hover:text-white duration-300 flex items-center justify-center text-gray-800 cursor-pointer'
                              pageClassName='mr-4'
                              containerClassName='flex items-center justify-center'
                        />
                        <p className='text-gray-700 mt-4 md:mt-0 text-sm tracking-wide'>
                              Products From {itemPerPage === 0 ? 1 : itemStart} to {endOfset} of {product?.length}
                        </p>
                  </div>

            </div>
      );
};

export default Pagination;