import Link from 'next/link';
import Copyright from '../Copyright';
import ScrollUp from './ScrollUp';

const Footer = () => {
  return (
    <footer
      className="uni-footer uk-section uk-section-xlarge@m"
      style={{ backgroundColor: '#084025' }}
    >
      <div className="uk-container">
        <div className="uk-panel">
          <div className="uk-grid uk-flex-center uk-text-center">
            <div className="uk-width-large@m">
              <div className="uk-panel">
                <a href="landing-01.html" className="uk-logo">
                  <img width="100" src="images/logo-2.svg" alt="Nerko" />
                </a>
                <p
                  className="uk-text-xlarge@m uk-margin-medium-top@m"
                  style={{ color: '#fff' }}
                >
                  We make it easy to Discover, Invest and manage all your NFTs
                  at one place.
                </p>
                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    justifyContent: 'center',
                    marginTop: '24px',
                  }}
                >
                  <img src="images/x-icon.svg" />
                  <img src="images/telegram-icon.svg" />
                  <img src="images/discord-icon.svg" />
                </div>
              </div>
            </div>
          </div>
          <hr className="uk-margin-medium uk-margin-3xlarge-top@m" />
          <div className="uk-panel uk-text-small">
            <div className="uk-grid uk-child-width-auto@m uk-flex-center uk-flex-between@m uk-text-center uk-text-left@m">
              <div>
                <ul className="uk-subnav uk-subnav-small uk-text-muted uk-flex-center">
                  <li>
                    <Link href="#">contact@cannaconnect.io</Link>
                  </li>
                  <li className="uk-margin-small-left">
                    <ScrollUp />
                  </li>
                </ul>
              </div>
              <div className="uk-flex-first@m uk-flex-center">
                <Copyright />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
