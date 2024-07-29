import styled from 'styled-components';
const HomeStyle = styled.div`
  .cannaconnect-content {
    margin-top: 24px;
    &-section {
      margin-top: 14px;
      &-title {
        display: flex;
        gap: 12px;
        font-weight: 700;
        font-size: 24px;
      }
      &-des {
        margin-top: 6px;
        font-weight: 300;
        font-size: 16px;
      }
    }
  }
`;
const HomeOneAbout = () => {
  return (
    <>
      <div id="what-is-cannaconnect" className="uni-about uk-panel">
        <div className="uk-container">
          <div className="uk-grid-margin uk-first-column mb-32">
            <div className="uk-panel">
              <div className="uk-grid uk-grid-3xlarge@m uk-flex-middle uk-child-width-1-2@m">
                <div className="uk-flex-first@m">
                  <div
                    className="uk-panel uk-image-middle uk-overflow-hidden uk-radius uk-radius-large@m"
                    data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
                  >
                    <img
                      src="images/what-is-cannaconnect.png"
                      alt="What is CannaConnect"
                    />
                    {/* <div className="uk-grid uk-grid-large@m uk-grid-match uk-child-width-1-2@m uk-margin-medium-top uk-margin-large-top@m">
                      <div>
                        <div className="uk-panel">
                          <div className="uk-grid uk-grid-xsmall uk-grid-small@m">
                            <div>
                              <div className="uk-card uk-card-xsmall uk-radius-medium uk-radius-large@m uk-background-gradient uk-flex-middle uk-flex-center">
                                <i className="uk-icon-small uk-icon-medium@m unicon-select-02 uk-text-white"></i>
                              </div>
                            </div>
                            <div className="uk-width-expand">
                              <span className="uk-text-small@m">
                                Collections Indexed <br />
                                every 5mins.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="uk-panel gap-about">
                          <div className="uk-grid uk-grid-xsmall uk-grid-small@m">
                            <div>
                              <div className="uk-card uk-card-xsmall uk-radius-medium uk-radius-large@m uk-background-gradient uk-flex-middle uk-flex-center">
                                <i className="uk-icon-small uk-icon-medium@m unicon-select-window uk-text-white"></i>
                              </div>
                            </div>
                            <div className="uk-width-expand">
                              <span className="uk-text-small@m">
                                Difference in Floor & <br />
                                Estimated Value
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div>
                  <div
                    className="uk-panel"
                    data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 400;"
                  >
                    <h3 className="uk-h3 uk-h1@m text-primary">
                      What is <br />
                      CannaConnect
                    </h3>
                    <p
                      style={{
                        fontWeight: 300,
                        fontSize: '16px',
                      }}
                    >
                      <i>
                        CannaConnect is a platform designed for the agricultural
                        sector that utilizes unique NFTs to tokenize the entire
                        cultivation chain – from seeds to shares. Powered by the
                        CannaConnect token, this innovative approach allows you
                        to directly participate in the real world cultivation
                        process and share in the profits from each stage.
                      </i>
                    </p>
                    <HomeStyle>
                      <div className="cannaconnect-content">
                        <div className="cannaconnect-content-section">
                          <div className="cannaconnect-content-section-title">
                            <img src="images/gateway-icon.svg" />
                            <p>Gateway and Connector</p>
                          </div>
                          <div className="cannaconnect-content-section-des">
                            CannaConnect is a central conduit that connects
                            cultivators, investors, and partners to create a
                            seamless collaborative ecosystem
                          </div>
                        </div>
                        <div className="cannaconnect-content-section">
                          <div className="cannaconnect-content-section-title">
                            <img src="images/cloud-icon.svg" />
                            <p>NFT Structure</p>
                          </div>
                          <div className="cannaconnect-content-section-des">
                            Cannaconnect tokenizes the entire cannabis
                            cultivation process, ensuring transparent and secure
                            transactions. Participants can engage in the
                            ecosystem through three types of NFTs; Founders
                            NFTs, Spots NFTs and Cultivation NFTs.
                          </div>
                        </div>
                        <div className="cannaconnect-content-section">
                          <div className="cannaconnect-content-section-title">
                            <img src="images/blockchain-icon.svg" />
                            <p>Blockchain and IoT Integration</p>
                          </div>
                          <div className="cannaconnect-content-section-des">
                            Blockchain ensures transparent and immutable
                            transactions, while IoT integration provides
                            real-time data and insights, optimizing growth and
                            traceability
                          </div>
                        </div>
                        <div className="cannaconnect-content-section">
                          <div className="cannaconnect-content-section-title">
                            <img src="images/comunity-icon.svg" />
                            <p>Global Collaboration</p>
                          </div>
                          <div className="cannaconnect-content-section-des">
                            CannaConnect partners with certified producers and
                            experts worldwide, ensuring high-quality standards
                            and sustainable practices in cultivation
                          </div>
                        </div>
                        <div className="cannaconnect-content-section">
                          <div className="cannaconnect-content-section-title">
                            <img src="images/sustainable-icon.svg" />
                            <p>Sustainable Growth</p>
                          </div>
                          <div className="cannaconnect-content-section-des">
                            The platform's commitment to community development
                            and environmental sustainability is evident through
                            its recycling programs and reinvestment in local
                            ecosystems and non-profits
                          </div>
                        </div>
                      </div>
                    </HomeStyle>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeOneAbout;
