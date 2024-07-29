const BrandOne = () => {
  return (
    <>
      <div
        className="uni-brands uk-padding-3xlarge-top uk-padding-medium-bottom uk-padding-remove-top@m uk-padding-xlarge-bottom@m uk-panel uk-overflow-hidden"
        data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;"
      >
        <div className="uk-container uk-container-small rounded-[24px] py-[43px]">
          <div className="uk-panel uk-text-center dark:uk-text-white">
            <header className="uk-panel uk-flex-center uk-flex-middle uk-text-center">
              <span className="uk-text-overline uk-text-bold uk-text-muted">
                CannaConnect GOES MULTICHAIN GOES MULTICHAIN
              </span>
            </header>
            <div className="uk-margin-medium-top grid grid-cols-3 md:grid-cols-6 gap-4">
              <div className="bran-item flex justify-center">
                <img
                  src="/images/chains/eth.svg"
                  alt="eth"
                  className="w-[90px] h-[90px]"
                />
              </div>
              <div className="bran-item flex justify-center">
                <img
                  src="/images/chains/bnb.svg"
                  alt="bnb"
                  className="w-[90px] h-[90px]"
                />
              </div>
              <div className="bran-item flex justify-center">
                <img
                  src="/images/chains/polygon.svg"
                  alt="polygon"
                  className="w-[90px] h-[90px]"
                />
              </div>
              <div className="bran-item flex justify-center">
                <img
                  src="/images/chains/AVAX.svg"
                  alt="AVAX"
                  className="w-[90px] h-[90px]"
                />
              </div>
              <div className="bran-item flex justify-center">
                <img
                  src="/images/chains/BASE.svg"
                  alt="BASE"
                  className="w-[90px] h-[90px]"
                />
              </div>
              <div className="bran-item flex justify-center">
                <img
                  src="/images/chains/sol-about.svg"
                  alt="sol"
                  className="w-[90px] h-[90px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandOne;
