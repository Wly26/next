import React from "react";
import imagesrc from "../../../../../public/webpages4.jpg";
import Hero from "../components/hero"
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "scale",
};
export default function page() {
  return (
    <Hero imgurl={imagesrc} altTxl="scale" content="Professional Cloud Hosting" />
  );
}
