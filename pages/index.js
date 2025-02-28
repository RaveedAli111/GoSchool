import React from "react";
import Banner from "./layouts/Fashion/Components/Banner";
import CollectionBanner from "./layouts/Fashion/Components/Collection-Banner";
import TopCollection from "../components/common/Collections/Collection3";
import Parallax from "./layouts/Fashion/Components/Parallax";
import SpecialProducts from "../components/common/Collections/TabCollection1";
import ServiceLayout from "../components/common/Service/service4";
import Blog from "../components/common/Blog/blog1";
import Instagram from "../components/common/instagram/instagram1";
import LogoBlock from "../components/common/logo-block";
import HeaderOne from "../components/headers/header-one";
import { Product4 } from "../services/script";
import Paragraph from "../components/common/Paragraph";
import Paragraph2 from "../components/common/Paragraph2";
import ModalComponent from "../components/common/Modal";
import Helmet from "react-helmet";
import MasterFooter from "../components/footers/common/MasterFooter";
import Category from "../pages/layouts/Tools/component/Category";
import ReviewSection from "../components/common/Service/MasterReview";

const Fashion = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/x-icon"
          href={"/assets/images/favicon/1.png"}
        />
      </Helmet>
      <ModalComponent />
      <HeaderOne logoName={"logo.png"} topClass="top-header" />
      <Banner />
      <Category />
      <SpecialProducts
        type="fashion"
        backImage={true}
        productSlider={Product4}
        line={true}
        title="title1 section-t-space"
        inner="title-inner1"
        designClass="section-b-space p-t-0 ratio_asos"
        noSlider="true"
        cartClass="cart-info cart-wrap"
      />
      {/* <CollectionBanner /> */}
      <div className="schools2">
        <Paragraph
          title="title1 section-t-space"
          inner="title-inner1"
          hrClass={false}
        />
        <TopCollection
          noTitle="null"
          backImage={true}
          type="fashion"
          title="top collection"
          subtitle="special offer"
          productSlider={Product4}
          designClass="section-b-space p-t-0 ratio_asos px-2"
          noSlider="false"
          cartClass="cart-info cart-wrap"
        />
      </div>
      {/* <Parallax /> */}
      {/* <SpecialProducts
        type="fashion"
        backImage={true}
        productSlider={Product4}
        line={true}
        title="title1 section-t-space"
        inner="title-inner1"
        designClass="section-b-space p-t-0 ratio_asos"
        noSlider="true"
        cartClass="cart-info cart-wrap"
      /> */}
      <Paragraph2
        title="title1 section-t-space"
        inner="title-inner1"
        hrClass={false}
      />
      <ServiceLayout sectionClass="border-section small-section" />
      <div className="blog-post">
        <Blog type="fashion" title="title1" inner="title-inner1" />
      </div>
      <Instagram type="fashion" />
      <ReviewSection />
      {/* <div className="section-b-space">
        <LogoBlock />
      </div> */}
      <MasterFooter
        footerClass={`footer-light`}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
        logoName={"logo.png"}
      />
    </>
  );
};

export default Fashion;
