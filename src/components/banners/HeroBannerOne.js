import BuyTokenForm from '../BuyTokenForm';
import styled from 'styled-components';
const BannerStyle = styled.div`
  #uni_hero {
    background-color: #084025;
    .banner-title {
      font-size: 52px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 25px;
      line-height: normal;
      text-transform: uppercase;
    }
    .banner-description {
      font-size: 30px;
      font-weight: 400;
      color: #fff;
      line-height: normal;
      margin-bottom: 15px;
    }
  }
  @media (max-width: 480px) {
    #uni_hero {
      .banner-title {
        font-size: 32px;
      }
      .banner-description {
        font-size: 16px;
      }
    }
  }
`;
const HeroBannerOne = () => {
  return (
    <BannerStyle>
      <div
        id="uni_hero"
        className="uni-hero uk-section uk-section-xlarge uk-panel"
      >
        <div
          className="uk-position-top uk-position-z-index-negative uk-overflow-hidden uk-blend-overlay"
          data-uk-height-viewport=""
        ></div>
        <div
          className="uk-position-top uk-position-z-index-negative"
          data-uk-height-viewport=""
        ></div>
        <div className="uk-panel uk-position-z-index">
          <div className="uk-container">
            <div className="uk-panel">
              <div
                className="uk-grid uk-grid-2xlarge uk-flex-middle uk-flex-between"
                data-uk-grid
                data-uk-height-viewport="offset-top: true; offset-bottom: 20;"
              >
                <div className="uk-width-8-12@m">
                  <div
                    className="uk-panel uk-position-z-index uk-text-center uk-text-left@m"
                    data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
                  >
                    <div className="banner-title">
                      From seeds to shares with CannaConnect
                    </div>
                    <p className="banner-description">
                      Your gateway to a new era of cultivation
                    </p>
                    <a
                      href="#"
                      className="uk-button  uk-button-medium@m uk-margin-small-top button-secondary"
                    >
                      <span>Whitepaper</span>
                      <i className="uk-icon-small unicon-arrow-right uk-text-bold"></i>
                    </a>
                  </div>
                </div>
                <div className="uk-width-4-12@m uk-flex-center">
                  <BuyTokenForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="images/background-icon-1.svg"
          style={{ position: 'absolute', bottom: 0, left: 0 }}
        />
        <img
          src="images/background-icon-2.svg"
          style={{ position: 'absolute', bottom: 0, right: 0 }}
        />
      </div>
    </BannerStyle>
  );
};

export default HeroBannerOne;
