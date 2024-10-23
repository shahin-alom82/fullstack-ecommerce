import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import FooterTwo from "../FooterTwo";

const RootLayout = () => {
      return (
            <div className="font-bodyFont">
                  <Header />
                  <Outlet />
                  <ScrollRestoration />
                  <FooterTwo />
                  <Footer />
            </div>
      );
};

export default RootLayout;