import Footer from "./Footer";
import Header from "./Header";
import { useEffect } from "react";

const Layout = ({
  layoutSettings = { header: "", footer: "" },
  children,
  showFooter = true,
}) => {
  useEffect(() => {
    window.localStorage.setItem("theme", "dark");
    const html = document.querySelector("Html");
    html.classList.add("uk-dark");
  }, []);

  return (
    <div className="wrap">
      {showFooter && <Header headerSetting={layoutSettings.header} />}
      {children}
      {showFooter && <Footer footerSetting={layoutSettings.footer} />}
    </div>
  );
};

export default Layout;
