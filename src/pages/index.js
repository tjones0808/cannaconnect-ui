'use client';

import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import HeroBannerOne from '../components/banners/HeroBannerOne';
import Divider from '../components/Divider';
import HomeOneMinting from '../components/minting/HomeOneMinting';
import HomeOneCta from '../components/cta/HomeOneCta';
import HomeOneNumber from '../components/number/HomeOneNumber';
import HomeOneAbout from '../components/about/HomeOneAbout';
import FaqOne from '../components/faq/FaqOne';
import HomeTowRoadMap from '../components/roadmap/HomeTwoRoadMap';
import ChoseUs from '../components/choseus/ChoseUS';
import dynamic from 'next/dynamic';
import HomeTwoAbout from '../components/about/HomeTwoAbout';

const HomeTokenomics = dynamic(() => import('../components/HomeTokenomics'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>
          CannaConnect - Transforming the Cannabis Industry with Blockchain
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="CannaConnect is a pioneering blockchain platform transforming the global cannabis industry, offering investors direct involvement in cannabis cultivation through decentralized financial instruments. Join us to invest in the future of sustainable and innovative agricultural technologies."
        />
        <meta
          name="keywords"
          content="CannaConnect, blockchain, cannabis industry, decentralized finance, agriculture, sustainable technologies, investment platform"
        />
        <meta name="author" content="CannaConnect" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#084025" />
        <meta
          property="og:title"
          content="CannaConnect - Transforming the Cannabis Industry with Blockchain"
        />
        <meta
          property="og:description"
          content="Invest in the future of sustainable cannabis cultivation with CannaConnect, the pioneering blockchain platform."
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/your-image.jpg"
        />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta
          name="twitter:title"
          content="CannaConnect - Transforming the Cannabis Industry with Blockchain"
        />
        <meta
          name="twitter:description"
          content="Invest in the future of sustainable cannabis cultivation with CannaConnect, the pioneering blockchain platform."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/your-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="http://example.com/favicon.png"></link>
      </Head>
      <Layout>
        <HeroBannerOne />
        <Divider />

        <HomeOneAbout />

        <HomeTwoAbout />
        <Divider />

        <ChoseUs />
        
        <HomeOneMinting />
        <Divider />

        <HomeOneNumber />
        <Divider />

 

        <HomeTowRoadMap />
        <Divider />

        <HomeTokenomics />
      
        <FaqOne />

        <HomeOneCta />
      </Layout>
    </>
  );
}
