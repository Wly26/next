import React from "react";
import imagesrc from "../../../../../public/webpages2.jpg";
import Hero from "../components/hero"
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "performace",
};
export default function page() {
  return (
    <Hero imgurl={imagesrc} altTxl="performace" content="Professional Cloud Hosting" />
  );
}
