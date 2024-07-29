const BrandTwo = () => {
  return (
    <div
      className="uni-brands uk-section uk-section-xlarge@m uk-panel uk-overflow-hidden"
      data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;"
    >
      <div className="uk-container">
        <div className="uk-panel uk-text-center dark:uk-text-white">
          <header className="uk-panel uk-flex-center uk-flex-middle uk-text-center">
            <span className="uk-text-overline uk-text-bold">
              Powered by amazing investors:
            </span>
          </header>
          <div
            className="uk-grid uk-child-width-1-2 uk-child-width-expand@m uk-flex-middle uk-flex-center uk-grid uk-margin-medium-top"
            data-uk-grid
          >
            <div>
              <div className="uk-panel uk-overflow-hidden uk-card uk-card-small uk-card-medium@m uk-card-border uk-box-shadow-xsmall uk-radius-medium uk-radius-large@m dark:uk-background-white">
                <img
                  className="uk-width-xsmall uk-text-gray-60 dark:uk-text-gray-20"
                  src="images/wallets/wallet-01.svg"
                  alt="Metamask"
                />
              </div>
            </div>
            <div>
              <div className="uk-panel uk-overflow-hidden uk-card uk-card-small uk-card-medium@m uk-card-border uk-box-shadow-xsmall uk-radius-medium uk-radius-large@m dark:uk-background-white">
                <img
                  className="uk-width-xsmall uk-text-gray-60 dark:uk-text-gray-20"
                  src="images/wallets/wallet-02.svg"
                  alt="BitGo"
                />
              </div>
            </div>
            <div>
              <div className="uk-panel uk-overflow-hidden uk-card uk-card-small uk-card-medium@m uk-card-border uk-box-shadow-xsmall uk-radius-medium uk-radius-large@m dark:uk-background-white">
                <img
                  className="uk-width-xsmall uk-text-gray-60 dark:uk-text-gray-20"
                  src="images/wallets/wallet-03.svg"
                  alt="Coinbase"
                />
              </div>
            </div>
            <div>
              <div className="uk-panel uk-overflow-hidden uk-card uk-card-small uk-card-medium@m uk-card-border uk-box-shadow-xsmall uk-radius-medium uk-radius-large@m dark:uk-background-white">
                <img
                  className="uk-width-xsmall uk-text-gray-60 dark:uk-text-gray-20"
                  src="images/wallets/wallet-04.svg"
                  alt="Trust Wallet"
                />
              </div>
            </div>
            <div>
              <div className="uk-panel uk-overflow-hidden uk-card uk-card-small uk-card-medium@m uk-card-border uk-box-shadow-xsmall uk-radius-medium uk-radius-large@m dark:uk-background-white">
                <img
                  className="uk-width-xsmall uk-text-gray-60 dark:uk-text-gray-20"
                  src="images/wallets/wallet-05.svg"
                  alt="Exodus"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrandTwo;
