import { contact } from "../assets";


const Contact = () => {
      return (
            <div className="py-10 max-w-screen-md mx-auto lg:px-0 px-4">
                  <h1 className="lg:text-2xl text-xl uppercase text-center text-gray-600 font-medium">Contact <span className='text-gray-900'>us</span></h1>
                  <div className="mt-10 flex flex-col lg:flex-row gap-16">
                        <img className="h-[330px] w-[330px]" src={contact} alt="img" />
                        <div className="lg:mt-2">
                              <h1 className="lg:text-[20px] font-medium text-gray-700 text-xl">OUR OFFICE</h1>
                              <h1 className="mt-4">00000 Willms Station <br />
                                    Suite 000, Washington, USA</h1>
                              <h1 className="mt-4">Tel: (000) 000-0000 <br />
                                    Email: greatstackdev@gmail.com</h1>
                              <h1 className="mt-6 lg:text-[20px] font-medium text-gray-700 text-xl">CAREERS AT PRESCRIPTO</h1>
                              <h1 className="mt-4">Learn more about our teams and job openings.</h1>
                              <button className='border border-black text-gray-700 text-sm px-4 py-2 mt-4'>Explore Jobs</button>
                        </div>
                  </div>

            </div>
      );
};

export default Contact;