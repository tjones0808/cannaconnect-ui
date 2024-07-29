import Link from 'next/link';
import styled from 'styled-components';
import Divider from '../../components/Divider';
const FaqStyle = styled.div`
  #uni_faq {
    background-color: #ecfdf3;
    padding: 50px 0;
    .title {
      font-size: 64px;
      font-weight: 700;
      color: #154428;
    }
    .uk-accordion-title {
      color: #154428;
      font-size: 22px;
      font-weight: bold;
      padding-top: 20px;
    }
    .uk-text-small {
      font-size: 18px;
      color: #154428;
      font-weight: 500;
    }
    .section {
      border-top: 1px solid #82d4a2;
      padding-top: 20px;
      padding-bottom: 20px;
      margin: 0;
      .uk-accordion-title {
        padding: 0;
      }
    }
    .uk-accordion-title::before {
      background-color: #fff;
      border-radius: 20px;
      border: 1px solid #82d4a2;
      padding: 5px 25px;
    }
  }
`;

const FaqOne = () => {
  return (
    <FaqStyle>
      <div id="uni_faq">
        <div className="uk-container">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Divider />
          </div>
          <header
            className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-text-center uk-child-width-auto@m uk-grid"
            data-uk-grid
            data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
          >
            <div className="uk-panel">
              <h3 className="uk-h3 uk-h1@m text-primary">FAQs</h3>
            </div>
          </header>
          <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m">
            <ul
              className="uk-card uk-card-small uk-card-large@m uk-radius uk-radius-large@m uk-width-2xlarge@m uk-margin-auto dark:uk-background-white-5"
              data-uk-accordion="collapsible: false"
              data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
            >
              <li className="section">
                <Link className="uk-accordion-title uk-h5@m" href="#">
                  What are CannatoWhat are CannaConnect tokens?
                </Link>
                <div className="uk-accordion-content uk-padding-small-bottom">
                  <p className="uk-text-small uk-text-large@m">
                    CannaConnect Tokens (CCT) powers the entire CannaConnect
                    ecosystem, facilitating seamless transactions and
                    interactions. Built on blockchain technology, CCTs ensure
                    transparency, security, and immutability. They are used for
                    staking rewards, purchasing NFTs, governance voting, and
                    paying transaction fees. The tokenomics are designed to make
                    participation more challenging over time, increasing the
                    token's value. For investors, CCTs offer multiple engagement
                    and profit opportunities, making them a strategic asset for
                    long-term growth.
                  </p>
                </div>
              </li>
              <li className="section">
                <Link className="uk-accordion-title uk-h5@m" href="#">
                  What is the minimum staking requirement to participate?
                </Link>
                <div className="uk-accordion-content uk-padding-small-bottom">
                  <p className="uk-text-small uk-text-large@m">
                    The minimum staking requirement to participate in
                    CannaConnect varies based on the specific NFTs or investment
                    opportunities you are interested in. For example, different
                    cultivation spots or stages in the process may have unique
                    staking requirements. Typically, a minimum amount of
                    CannaConnect Tokens (CCT) must be staked to activate
                    participation and earn a share of the profits in Cannatokens
                    and USDT. Specific details on the minimum staking amounts
                    will be provided in the platform's guidelines.
                  </p>
                </div>
              </li>
              <li className="section">
                <Link className="uk-accordion-title uk-h5@m" href="#">
                  Who does CannaConnect partner with?
                </Link>
                <div className="uk-accordion-content uk-padding-small-bottom">
                  <ul
                    style={{
                      listStyleType: 'initial',
                      marginLeft: '10px',
                      listStylePosition: 'inside',
                    }}
                  >
                    <li>High-Tech Facility Builders</li>
                    <li>Grower Partnerships</li>
                    <li>Certified Producers</li>
                    <li>Blockchain Developers and Experts</li>
                    <li>IoT Technology Providers</li>
                    <li>Logistics and Supply Chain Experts</li>
                  </ul>
                </div>
              </li>
              <li className="section">
                <Link className="uk-accordion-title uk-h5@m" href="#">
                  How can I track the progress of my NFT cultivation spots?
                </Link>
                <div className="uk-accordion-content uk-padding-small-bottom">
                  <p className="uk-text-small uk-text-large@m ">
                    CannaConnect uses IoT integration to provide real-time data
                    and insights into the cultivation process. You can track the
                    growth, health, and status of your NFTs directly through the
                    platform’s dashboard.
                  </p>
                </div>
              </li>
              <li className="section">
                <Link className="uk-accordion-title uk-h5@m" href="#">
                  Can I trade my NFTs on other platforms?
                </Link>
                <div className="uk-accordion-content uk-padding-small-bottom">
                  <p className="uk-text-small uk-text-large@m ">
                    While CannaConnect primarily facilitates NFT trading on its
                    own platform, the NFTs are based on standard blockchain
                    protocols, allowing potential interoperability with other
                    NFT marketplaces. Always check the compatibility and
                    transfer guidelines before attempting to trade on external
                    platforms.
                  </p>
                </div>
              </li>
              <li className="section">
                <Link className="uk-accordion-title uk-h5@m" href="#">
                  Are there any fees associated with buying and selling NFTs on
                  CannaConnect?
                </Link>
                <div className="uk-accordion-content uk-padding-small-bottom">
                  <p className="uk-text-small uk-text-large@m ">
                    Yes, there will be transaction fees for buying, selling, or
                    transferring NFTs on the CannaConnect platform. These fees
                    cover blockchain transaction costs and platform maintenance.
                    Detailed fee structures can be found in the platform’s
                    documentation.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FaqStyle>
  );
};

export default FaqOne;
