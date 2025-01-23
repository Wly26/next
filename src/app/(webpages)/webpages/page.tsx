import React from "react";
import imagesrc from "../../../../public/webpages1.jpg";
import Hero from "./components/hero";
import Header from "./components/header";
import { Metadata } from "next";


export const metadata : Metadata = {
  title: "Home",
};
export default function page() {
  return (
    <>
      <Header/>
      <Hero imgurl={imagesrc} altTxl="Home" content="Professional Cloud Hosting" />
    </>

  );
}
