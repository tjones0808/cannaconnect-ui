import styled from 'styled-components';
const ItemStyled = styled.div`
  .item {
    transition: all 0.3s;
    color: #154428;
    cursor: pointer;
    &-number {
      font-weight: 700;
      font-size: 56px;
      letter-spacing: 5px;
    }
    &-title {
      font-weight: 700;
      font-size: 32px;
    }
  }
  .item:hover {
    background-color: #084025 !important;
    color: #fff !important;
    .uk-text-gradient {
      color: #fff !important;
    }
  }
`;
const ChoseUs = () => {
  return (
    <ItemStyled>
      <div id="uni_whyus" className="uni-whyus uk-panel">
        <div className="uk-container">
          <header
            className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-grid"
            data-uk-grid
          >
            <div className="uk-panel uk-text-center">
              <h3 className="uk-h3 uk-h1@m text-primary">
                Why Invest in Our Pre-sale?
              </h3>
            </div>
          </header>
          <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m">
            <div
              className="uk-grid uk-child-width-1-4@s"
              data-uk-grid="masonry: true;"
            >
              <div>
                <div className="item uk-panel uk-card uk-card-small uk-padding-medium-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                  <span className="item-number">01.</span>
                  <div className="uk-panel">
                    <div className="item-title">Exclusive Founder's NFT</div>
                    <p className="item-des">
                      During the presale, investors have the unique opportunity
                      to purchase a Founder's NFT. This NFT grants rights to a
                      percentage of the profits from all activities revenue from
                      the NFT structure of mother plants, clones, flowering,
                      processing, and recycling.
                    </p>
                  </div>
                </div>
              </div>
              <div className='uk-margin-large-top@m'>
                <div className="item uk-panel uk-card uk-card-small uk-padding-medium-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                  <span className="item-number">02.</span>
                  <div className="uk-panel">
                    <div className="item-title">
                      Burn Mechanism for Sustainability
                    </div>
                    <p className="item-des">
                      All coins purchased during the presale can be exchanged
                      for a Founder's Edition NFT. This is not mandatory;
                      investors can choose to do so. The coins received by
                      CannaConnect will be 100% burned immediately. This burn
                      mechanism ensures a deflationary model, increasing the
                      value of the remaining tokens over time.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="item uk-panel uk-card uk-card-small uk-padding-medium-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                  <span className="item-number">03.</span>
                  <div className="uk-panel">
                    <div className="item-title">
                      Revenue Sharing Opportunities
                    </div>
                    <p className="item-des">
                      Founder's NFT holders will benefit from revenue sharing
                      across all aspects of the CannaConnect ecosystem. This
                      includes profits generated from the cultivation and sale
                      of cannabis products, paid out in both Cannatokens/USDT.
                    </p>
                  </div>
                </div>
              </div>
              <div className='uk-margin-large-top@m'>
                <div className="item uk-panel uk-card uk-card-small uk-padding-medium-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                  <span className="item-number">04.</span>
                  <div className="uk-panel">
                    <div className="item-title">Priority Access to NFTs</div>
                    <p className="item-des">
                      NFT Founders Edition holders will have priority access to
                      purchase NFTs representing various stages of the
                      cultivation process, from Mother Plant NFTs to Clone and
                      Flowering NFTs. Early access ensures investors can secure
                      assets before they are available to the general market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="images/background-icon-3.png" />
      </div>
    </ItemStyled>
  );
};

export default ChoseUs;
