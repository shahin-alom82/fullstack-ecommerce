
const ProductBanner = ({ itemPerPageFormBanner }) => {
      return (
            <div className='flex flex-col md:flex-row gap-6 md:items-center justify-between'>
                  <div>
                        <h1>Sorting Filter</h1>
                  </div>
                  <div className='flex items-center text-black'>
                        <label htmlFor="countries" className='text-gray-800 border border-gray-400 px-2 py-[1px] bg-gray-200'>Show</label>
                        <select onChange={(e) => itemPerPageFormBanner(e.target.value)} className='w-16 md:w-14 border border-gray-400 px-2 py-1 text-gray-800 focus-within:outline-none'>
                              <option value="4">4</option>
                              <option value="8">8</option>
                              <option value="12">12</option>
                              <option value="16">16</option>
                        </select>
                  </div>
            </div>
      );
};

export default ProductBanner;