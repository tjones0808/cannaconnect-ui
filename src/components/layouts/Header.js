import Link from "next/link";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Logo from "../common/Logo";
import ConnectWallet from "./ConnectWallet";
import MobileMenu from "./MobileMenu";
import AccountDropdown from "./AccountDropdown";
import { useAppState } from "../../store/app/hooks";
import { setAppState } from "../../store/app";

const Header = ({ headerSetting = {} }) => {
  const { address: account } = useAccount();
  const { isOpenConnectWallet } = useAppState();
  const dispatch = useDispatch();

  const setIsOpen = (isOpen) => {
    dispatch(setAppState({ isOpenConnectWallet: isOpen }));
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".uni-header-navbar");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("uk-sticky-fixed")
      : header.classList.remove("uk-sticky-fixed");
  };
  return (
    <>
      <MobileMenu />
      {isOpenConnectWallet ? (
        <ConnectWallet onClose={() => setIsOpen(false)} />
      ) : null}
      <header className="uni-header uk-position-top">
        <div
          className="uni-header-navbar"
          data-uk-sticky="top: 70; show-on-up: false; animation: uk-animation-slide-top"
          data-anime="opacity:[0, 1]; translateY:[-24, 0]; onview: true; delay: 0;"
        >
          <div className="uk-container">
            <nav className="uk-navbar uk-navbar-container uk-navbar-transparent">
              <div className="uk-navbar-top">
                <div className="uk-navbar-left">
                  <Link
                    href="/"
                    className="uk-logo uk-navbar-item uk-h4 uk-h3@m uk-margin-remove"
                  >
                    <Logo />
                  </Link>
                </div>
                <div className="uk-navbar-right uk-flex-1 uk-flex-right">
                  <ul
                    className="uk-navbar-nav dark:uk-text-gray-10 uk-visible@m"
                    data-uk-scrollspy-nav="closest: li; scroll: true; offset: 80"
                    data-uk-navbar-bound
                  >
                    <li>
                      <a href="#what-is-cannaconnect">About</a>
                    </li>
                    <li>
                      <a href="#NFT-struct">Structure</a>
                    </li>
                    <li>
                      <a href="#uni_roadmap">Road map</a>
                    </li>
                    <li>
                      <a href="#uni_tokenomics">Tokenomic</a>
                    </li>
                    <li>
                      <a href="#uni_faq">FAQ</a>
                    </li>
                  </ul>
                  <div className="uk-navbar-item">
                    <ul className="uk-subnav uk-subnav-small uk-visible@m">
                      <li>
                        <Link href="#">
                          <i className="uk-icon unicon-logo-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="uk-icon unicon-logo-discord"></i>
                        </Link>
                      </li>
                    </ul>
                    {account ? (
                      <AccountDropdown account={account} />
                    ) : (
                      <button
                        className="uk-button uk-button-medium@m uk-margin-left uk-visible@l button-secondary"
                        onClick={() => setIsOpen(true)}
             
                      >
                        <span>Connect Wallet</span>
                      </button>
                    )}
                  </div>

                  <div className="md:hidden">
                    {account ? (
                      <AccountDropdown account={account} isMobile />
                    ) : (
                      <button
                        className="uk-button uk-button-medium@m button-secondary uk-margin-left"
                        onClick={() => setIsOpen(true)}
                      >
                        <span>Connect Wallet</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
