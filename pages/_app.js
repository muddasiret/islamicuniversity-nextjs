import App from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/social.css";
import "../styles/header.css";
import "../components/Carousel/carousel.css";
import { createContext, useEffect } from "react";
import { fetchAPI } from "../lib/api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NextSeo } from "next-seo";
import { getStrapiMedia } from "../lib/media";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;
  const shareImage = global.attributes.defaultSeo.shareImage.data
    ? global.attributes.defaultSeo.shareImage.data.attributes.url
    : "";
  useEffect(() => {}, []);
  return (
    <>
      <NextSeo noindex={true} nofollow={true} />
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
        {shareImage && <meta property="og:image" content={shareImage} />}
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={false}
          pauseOnVisibilityChange
          closeOnClick
          pauseOnHover
        />
      </GlobalContext.Provider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
      title_image: "*",
      title_image_individual: {
        populate: "*",
      },
      page_subtitles: {
        populate: "*",
      },
    },
  });
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;
