import Divider from '../../components/Divider';
import styled from 'styled-components';
const NFTstruct = styled.div`
  background-color: #e3ffef;
  padding-top: 50px;
  padding-bottom: 50px;
  .nft-struct {
    &-item {
      display: flex;
      gap: 12px;
      font-size: 16px;
      margin-top: 24px;
    }
  }
`;
const HomeOneAbout = () => {
  return (
    <NFTstruct>
      <Divider />
      <div id="NFT-struct" className="uni-about uk-panel">
        <div className="uk-container">
          <div className="uk-grid-margin uk-first-column mb-32">
            <div className="uk-panel">
              <div className="uk-grid uk-grid-3xlarge@m uk-flex-middle uk-child-width-1-2@m">
                <div>
                  <div
                    className="uk-panel uk-image-middle uk-overflow-hidden uk-radius uk-radius-large@m"
                    data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
                  >
                    <img
                      src="images/NFT-struct.svg"
                      alt="CannaConnect 
                      NFT’s Structure"
                    />
                  </div>
                </div>
                <div className="uk-flex-first@m">
                  <div
                    className="uk-panel"
                    data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 400;"
                  >
                    <h3 className="uk-h3 uk-h1@m text-primary">
                      CannaConnect <br />
                      NFT’s Structure
                    </h3>
                    <p
                      style={{
                        fontWeight: 400,
                        fontSize: '18px',
                      }}
                    >
                      Participants can engage in democratized real-world
                      cultivation and benefit from it. NFTs represent
                      cultivation spots within the system, and participants earn
                      profits in Cannatokens and USDT based on the number of
                      tokens they have staked
                    </p>
                    <p className="mt-2">
                      <i>
                        <b>Spots NFTs:</b> These NFTs represent real-world
                        cultivation locations. By purchasing a Spots NFT,
                        participants will gain the right to earnings from these
                        spots in CannaConnect tokens and USDT, based on the
                        minimum amount staked.
                      </i>
                    </p>
                    <p className="mt-2">
                      <i>
                        <b>Cultivation NFTs:</b> These NFTs encompass various
                        stages of the cannabis lifecycle:
                      </i>
                    </p>
                    <div className="nft-struct">
                      <div className="nft-struct-item">
                        <img
                          src="images/seed-icon.svg"
                          className="nft-struct-item-img"
                        />
                        <div className="nft-struct-item-content">
                          <b>Seeds:</b> From seeds to shares!
                        </div>
                      </div>
                      <div className="nft-struct-item">
                        <img
                          src="images/mother-plant-icon.svg"
                          className="nft-struct-item-img"
                        />
                        <div className="nft-struct-item-content">
                          <b>Mother plant:</b> Earn from cuttings!
                        </div>
                      </div>
                      <div className="nft-struct-item">
                        <img
                          src="images/clone-icon.svg"
                          className="nft-struct-item-img"
                        />
                        <div className="nft-struct-item-content">
                          <b>Clones:</b> Grow your clones and sell them to
                          flower spots!
                        </div>
                      </div>
                      <div className="nft-struct-item">
                        <img
                          src="images/flowering-icon.svg"
                          className="nft-struct-item-img"
                        />
                        <div className="nft-struct-item-content">
                          <b>Flowering:</b> Develop buds and earn!
                        </div>
                      </div>
                      <div className="nft-struct-item">
                        <img
                          src="images/recycling-icon.svg"
                          className="nft-struct-item-img"
                        />
                        <div className="nft-struct-item-content">
                          <b>Processing & Recycling:</b> Don’t waste and earn!
                        </div>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="uk-button uk-button-medium@m uk-button-default mt-6 m-0 uk-button-gradient"
                        >
                          <span>Whitepaper</span>
                          <i className="uk-icon-small unicon-arrow-right uk-text-bold"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NFTstruct>
  );
};
export default HomeOneAbout;
