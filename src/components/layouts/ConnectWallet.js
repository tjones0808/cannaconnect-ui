import { toast } from "react-toastify";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

import {
  WalletConnectorNotFoundError,
  WalletSwitchChainError,
} from "../../utils";
import useAuth from "../../hooks/useAuth";
import { createWallets } from "../../config/wallet";
import { setAppState } from "../../store/app";

const ConnectWallet = ({ onClose }) => {
  const { login } = useAuth();
  const dispatch = useDispatch();

  const wallets = useMemo(() => createWallets(), []);

  const connectWallet = (wallet) => {
    if (wallet.installed !== false) {
      login(wallet.connectorId)
        .then((v) => {
          if (v) {
            dispatch(setAppState({ wallet: wallet.title }));
            onClose();
          }
        })
        .catch((err) => {
          if (err instanceof WalletConnectorNotFoundError) {
            toast.error("No Provider Found");
          } else if (err instanceof WalletSwitchChainError) {
            toast.error(err.message);
          } else {
            toast.error("Error connecting, please authorize wallet to access.");
          }
        });
    }
  };

  return (
    <div
      id="uni_connect_wallet"
      className="uk-modal-full uk-modal uk-open block"
    >
      <div className="uk-modal-dialog">
        <div
          className="uk-position-top uk-position-z-index-negative"
          data-uk-height-viewport=""
        >
          <div
            className="uk-position-cover uk-background-cover uk-opacity-10 dark:uk-hidden"
            style={{ backgroundImage: 'url("images/gradient-01.png")' }}
          ></div>
          <div
            className="uk-position-cover uk-background-cover uk-opacity-20 uk-hidden dark:uk-visible"
            style={{ backgroundImage: 'url("images/gradient-01.png")' }}
          ></div>
        </div>
        <a
          className="uk-modal-close-full uk-close-large uk-position-small"
          onClick={() => onClose()}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              fill="none"
              stroke="#fff"
              strokeWidth="1.4"
              x1="1"
              y1="1"
              x2="19"
              y2="19"
            ></line>
            <line
              fill="none"
              stroke="#fff"
              strokeWidth="1.4"
              x1="19"
              y1="1"
              x2="1"
              y2="19"
            ></line>
          </svg>
        </a>
        <div className="uk-container h-screen">
          <div className="uk-grid uk-flex-center uk-flex-middle uk-child-width-1-2@m uk-section">
            <div>
              <div className="uk-panel uk-text-center">
                <h2 className="uk-h5 uk-h3@s uk-h2@l uk-margin-remove">
                  Connect your wallet
                </h2>

                <div className="uk-grid uk-grid-xsmall uk-grid-small@m uk-child-width-1-2@m uk-margin-medium-top uk-margin-large-top@m">
                  {wallets.map((wallet, idx) => (
                    <div
                      key={idx}
                      className="uk-grid-margin uk-first-column"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        onClose();
                        connectWallet(wallet);
                        if (wallet.deepLink && wallet.installed === false) {
                          window.open(wallet.deepLink);
                        }
                      }}
                    >
                      <div className="uk-panel uk-card uk-card-small uk-card-medium@m uk-card-border uk-radius-medium uk-radius-large@m uk-box-shadow-hover-small hover:uk-border-primary flex flex-col items-center">
                        <img src={wallet.icon} alt={wallet.title} style={{width:'80px'}}/>
                        <h4 className="uk-text-bold uk-h5@m uk-margin-small-top uk-margin-medium-top@m">
                          {wallet.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConnectWallet;
