import React from "react";
import imagesrc from "../../../../../public/webpages3.jpg";
import Hero from "../../webpages/components/hero"
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "reliabilty",
};
export default function page() {
  return (
    <Hero imgurl={imagesrc} altTxl="reliabilty" content="Professional Cloud Hosting" />
  );
}
