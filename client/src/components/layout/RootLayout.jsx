import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import FooterTwo from "../FooterTwo";
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux'
import { store } from "../../redux/store";

const RootLayout = () => {
      return (
            <Provider store={store}>
                  <div className="font-bodyFont">
                        <Header />
                        <ScrollRestoration />
                        <Outlet />
                        <ScrollRestoration />
                        <FooterTwo />
                        <Footer />
                        <Toaster
                              position="bottom-right"
                              reverseOrder={false}
                        />
                  </div>
            </Provider>

      );
};

export default RootLayout;