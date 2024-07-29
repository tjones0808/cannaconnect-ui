import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { checkMobile } from '../../utils/checkDevice';
const HowtoBuyStyle = styled.div`
  background-color: #084025;
  padding-top: 64px;
  padding-bottom: 64px;
  .title {
    font-size: 64px;
    color: #fff;
    font-weight: 700;
    text-align: center;
    margin-bottom: 42px;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    &-item {
      flex: 1;
      padding: 20px;
      border-radius: 24px;
      background-color: #fff;
      &-title {
        display: flex;
        gap: 6px;
        align-items: center;
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 10px;
        height: 66px;
        img {
          width: 48px;
          height: 48px;
        }
      }
      &-des {
        font-size: 18px;
        color: #154428;
      }
    }
  }
`;
const HomeOneMinting = () => {
  return (
    <HowtoBuyStyle>
      <div className="uk-container" id="how_to_buy">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="images/divider-02.png" />
        </div>
        <h3 className="uk-h3 uk-h1@m uk-text-center">How to buy?</h3>
        {checkMobile() ? (
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className="content-item">
                <div className="content-item-title">
                  <img src="images/connect-wallet-icon.svg" />
                  <div>Connect Wallet</div>
                </div>
                <div className="content-item-des">
                  Start by connecting your wallet to the CannaConnect website.
                  This ensures you can securely manage your tokens and NFTs
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content-item">
                <div className="content-item-title">
                  <img src="images/connect-wallet-icon.svg" />
                  <div>Buy Tokens</div>
                </div>
                <div className="content-item-des">
                  Purchase the desired amount of CannaConnect tokens. These
                  tokens can be used to acquire Founder NFTs, empowering the
                  entire ecosystem.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content-item">
                <div className="content-item-title">
                  <img src="images/connect-wallet-icon.svg" />
                  <div>Select and Buy NFTs</div>
                </div>
                <div className="content-item-des">
                  Choose the number of Founder NFTs you want to purchase. These
                  NFTs grant you rights to profits from the entire cultivation
                  process.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content-item">
                <div className="content-item-title">
                  <img src="images/connect-wallet-icon.svg" />
                  <div>Receive your tokens</div>
                </div>
                <div className="content-item-des">
                  After the pre -sale, you will receive your tokens/NFTs.
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        ) : (
          <div className="content">
            <div className="content-item">
              <div className="content-item-title">
                <img src="images/connect-wallet-icon.svg" />
                <div>Connect Wallet</div>
              </div>
              <div className="content-item-des">
                Start by connecting your wallet to the CannaConnect website.
                This ensures you can securely manage your tokens and NFTs
              </div>
            </div>

            <div className="content-item">
              <div className="content-item-title">
                <img src="images/buy-token-icon.svg" />
                <div>Buy Tokens</div>
              </div>
              <div className="content-item-des">
                Purchase the desired amount of CannaConnect tokens. These tokens
                can be used to acquire Founder NFTs, empowering the entire
                ecosystem.
              </div>
            </div>
            <div className="content-item">
              <div className="content-item-title">
                <img src="images/select-nft-icon.svg" />
                <div>Select and Buy NFTs</div>
              </div>
              <div className="content-item-des">
                Choose the number of Founder NFTs you want to purchase. These
                NFTs grant you rights to profits from the entire cultivation
                process
              </div>
            </div>
            <div className="content-item">
              <div className="content-item-title">
                <img src="images/recieve-token-icon.svg" />
                <div>Receive your tokens</div>
              </div>
              <div className="content-item-des">
                After the pre -sale, you will receive your tokens/NFTs.
              </div>
            </div>
          </div>
        )}
      </div>
    </HowtoBuyStyle>
  );
};
export default HomeOneMinting;
