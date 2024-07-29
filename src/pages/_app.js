import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Providers from "../Providers";
import { persistor, useStore } from "../store";

import "react-toastify/dist/ReactToastify.css";

import "../assets/js/app-head.js";
import "../assets/js/uikit-components.js";
import "../assets/js/data-attr-helper.js";
import "../assets/js/anime-helper.js";
import "../assets/js/swiper-helper.js";
import "../assets/js/typed-helper.js";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../assets/css/uikit.min.css";
import "../assets/css/theme/main.css";
import "./index.css";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = async () => {
      // Simulate a delay (e.g., 2000 milliseconds)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Set loading to false after the delay
      setLoading(false);
    };

    // Call the delay function
    delay();
  }, []);

  const Preloader = () => {
    return (
      <div className="nerko-loader">
        <div className="loader-inner"></div>
      </div>
    );
  };

  return (
    <>
      {loading && <Preloader />}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Providers dehydratedState={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Providers>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
