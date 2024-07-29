import Link from 'next/link';

const HomeOneCta = () => {
  return (
    <>
      <div className="uni-cta uk-section uk-section-2xlarge@m uk-panel uk-overflow-hidden px-3">
        <div
          className="uk-container"
          style={{
            backgroundColor: '#154428',
            position: 'relative',
            borderRadius: '32px',
            padding: '100px 0px',
          }}
        >
          <img
            className="uk-cover uk-opacity-10"
            src="images/collection-cta.png"
            alt="arrow"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          />
          <div className="uk-card uk-flex-center uk-text-center">
            <div
              className="uk-panel uk-width-xlarge@m uk-position-z-index"
              data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
            >
              <img
                className="uk-position-top-left"
                width="24"
                src="images/objects/circle-01.png"
                alt="Object"
                style={{ top: '0%', left: '-16%' }}
              />
              <img
                className="uk-position-bottom-right"
                width="24"
                src="images/objects/x.png"
                alt="Object"
                style={{ bottom: '16%', right: '4%' }}
              />
              <img
                className="uk-position-top-right"
                width="40"
                src="images/objects/ethereum-02.png"
                alt="Object"
                style={{ top: '0%', right: '-16%' }}
              />
              <img
                className="uk-position-bottom-left"
                width="48"
                src="images/objects/bitcoin-01.png"
                alt="Object"
                style={{ bottom: '16%', left: '-8%' }}
              />
              <h3 className="uk-h3 uk-h1@m uk-text-center">Join Our community</h3>
              <div
                style={{
                  fontSize: '18px',
                  color: '#fff',
                  fontWeight: 400,
                  marginTop: '24px',
                }}
              >
                We're Building Together
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  justifyContent: 'center',
                  marginTop:'24px'
                }}
              >
                <img src="images/x-icon.svg" />
                <img src="images/telegram-icon.svg" />
                <img src="images/discord-icon.svg" />
              </div>
              <Link
                href="#"
                className="uk-button  uk-button-medium@m uk-margin-small-top button-secondary"
              >
                Buy CannaConnect
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOneCta;
