import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import FooterTwo from "../FooterTwo";
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux'
import { persistor, store } from "../../redux/store";
import { PersistGate } from "redux-persist/integration/react";

const RootLayout = () => {
      return (
            <Provider store={store}>
                  <PersistGate loading={null} persistor={persistor}>
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
                  </PersistGate>
            </Provider>

      );
};

export default RootLayout;