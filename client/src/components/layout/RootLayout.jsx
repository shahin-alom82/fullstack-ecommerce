import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import FooterTwo from "../FooterTwo";
import { Toaster } from 'react-hot-toast';

const RootLayout = () => {
      return (
            <div className="font-bodyFont">
                  <Header />
                  <Outlet />
                  <ScrollRestoration />
                  <FooterTwo />
                  <Footer />
                  <Toaster
                        position="bottom-right"
                        reverseOrder={false}
                  />
            </div>
      );
};

export default RootLayout;