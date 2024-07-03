import React from "react";
import { Header } from "../../../components";
import ContentSubHeader2 from "./components/ContentSubHeader2/ContentSubHeader2";
import Direction from "../../../components/Direction/Direction";
import Menu from "./components/Menu/Menu";
import Footer from "../../../components/Footer/Footer";

const TeasMenu = () => {
  return (
    <div className="container">
      <Header />
      <ContentSubHeader2 />
      <Direction />
      <Menu />
      <Footer />
    </div>
  );
};

export default TeasMenu;