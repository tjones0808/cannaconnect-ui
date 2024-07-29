import styled from 'styled-components';
const RoadmapStyle = styled.div`
  #uni_roadmap {
    padding-top: 64px;
    padding-bottom: 64px;
    background-color: #084025;
    header {
      margin-top: 50px;
    }
    .phase-count {
      color: #37dd7a;
      font-weight: 700;
      font-size: 18px;
    }
    .phase-title {
      color: #154428;
      font-weight: 700;
      margin-top: 10px;
      font-size: 32px;
    }
  }
`;
const HomeTowRoadMap = () => {
  return (
    <RoadmapStyle>
      <div id="uni_roadmap" className=" uk-panel uk-overflow-hidden">
        <div className="uk-container uk-container-small">
          <header
            className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-text-center uk-child-width-auto@m uk-grid"
            data-uk-grid
          >
            <div className="uk-panel">
              <h2 className="uk-h3 uk-h1@m">CannaConnect's Roadmap</h2>
            </div>
          </header>
          <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m z-10">
            <div
              className="uk-grid-column-large uk-grid-row-collapse@m uk-grid-divider uk-child-width-1-2@m uk-grid"
              data-uk-grid=""
            >
              <div>
                <div className="uni-phase uk-panel uk-card uk-card-small uk-card-medium@m uk-radius uk-radius-xlarge@m uk-box-shadow-xsmall dark:uk-background-white">
                  <span className="uni-phase-progress uk-text-small uk-text-bold uk-position-top-right uk-position-small uk-text-white uk-background-gradient">
                    <span>0</span>%
                  </span>
                  <div className="uk-panel">
                    <span className="phase-count">Phase 01</span>
                    <div className="phase-title">Preparation</div>
                    <ul className="uni-phase-description uk-text-large@m mt-3 list-disc ml-8">
                      <li>
                        Project and Concept Development, Strategic Milestones
                      </li>
                      <li>Preparation of Real World Assets</li>
                      <li>Development of Partnerships</li>
                      <li>Operational marketing plan</li>
                      <li>Lending page, Wallets setup, smart contracts</li>
                      <li>Smart Contract Audit and Implementation</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="uk-visible@m">
                <canvas height="245"></canvas>
              </div>
              <div className="uk-visible@m">
                <canvas height="245"></canvas>
              </div>
              <div>
                <div className="uni-phase uk-panel uk-card uk-card-small uk-card-medium@m uk-radius uk-radius-xlarge@m uk-box-shadow-xsmall dark:uk-background-white uni-phase-even">
                  <span className="uni-phase-progress uk-text-small uk-text-bold uk-position-top-right uk-position-small uk-text-white uk-background-gradient">
                    <span>25</span>%
                  </span>
                  <div className="uk-panel">
                    <span className="phase-count">Phase 02</span>
                    <div className="phase-title">Presale</div>
                    <ul className="uni-phase-description uk-text-large@m mt-3 list-disc ml-8">
                      <li>NFT/Tokensale</li>
                      <li>
                        Implementation of Staking Contract: Enabling token
                        staking
                      </li>
                      <li>
                        NFT Minting: Minting of NFTs that represent production
                        spots
                      </li>
                      <li>
                        DEX Listing: Listing of coins on decentralized exchanges
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="uni-phase uk-panel uk-card uk-card-small uk-card-medium@m uk-radius uk-radius-xlarge@m uk-box-shadow-xsmall dark:uk-background-white">
                  <span className="uni-phase-progress uk-text-small uk-text-bold uk-position-top-right uk-position-small uk-text-white uk-background-gradient">
                    <span>50</span>%
                  </span>
                  <div className="uk-panel">
                    <span className="phase-count">Phase 03</span>
                    <div className="phase-title">Launch</div>
                    <ul className="uni-phase-description uk-text-large@m mt-3 list-disc ml-8">
                      <li>Start of the first medical cannabis facility</li>
                      <li>Start Development of CanaApp</li>
                      <li>Exploring setting Up FenoHunting Location</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="uk-visible@m">
                <canvas height="245"></canvas>
              </div>
              <div className="uk-visible@m">
                <canvas height="245"></canvas>
              </div>
              <div>
                <div className="uni-phase uk-panel uk-card uk-card-small uk-card-medium@m uk-radius uk-radius-xlarge@m uk-box-shadow-xsmall dark:uk-background-white">
                  <span className="uni-phase-progress uk-text-small uk-text-bold uk-position-top-right uk-position-small uk-text-white uk-background-gradient">
                    <span>75</span>%
                  </span>
                  <div className="uk-panel">
                    <span className="phase-count">Phase 04</span>
                    <div className="phase-title">Growth</div>
                    <ul className="uni-phase-description uk-text-large@m mt-3 list-disc ml-8">
                      <li>Global Expansion</li>
                      <li>Intensification of Expertise</li>
                      <li>Tokenization of Crossed Strains</li>
                      <li>Launch of CanaApp</li>
                      <li>Strengthening Market Position</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="uni-phase uk-panel uk-card uk-card-small uk-card-medium@m uk-radius uk-radius-xlarge@m uk-box-shadow-xsmall dark:uk-background-white">
                  <span className="uni-phase-progress uk-text-small uk-text-bold uk-position-top-right uk-position-small uk-text-white uk-background-gradient">
                    <span>100</span>%
                  </span>
                  <div className="uk-panel">
                    <span className="phase-count">Phase 05</span>
                    <div className="phase-title">
                      Sustainability and Innovation
                    </div>
                    <ul className="uni-phase-description uk-text-large@m mt-3 list-disc ml-8">
                      <li>Sustainable Operations</li>
                      <li>R&D Support</li>
                      <li>Expansion of Partner Ecosystem</li>
                      <li>Community-say</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="uk-visible@m">
                <canvas height="245"></canvas>
              </div>
            </div>
          </div>
        </div>
        <img
          src="images/background-icon-4.svg"
          style={{ position: 'absolute', left: 0, top: 0, zIndex: 0 }}
        />
        <img
          src="images/background-icon-5.svg"
          style={{ position: 'absolute', right: 0, bottom: 0, zIndex: 0 }}
        />
      </div>
    </RoadmapStyle>
  );
};
export default HomeTowRoadMap;
