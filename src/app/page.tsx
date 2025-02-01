import React from "react";
import ClientComponents from "../components/client-compontents";  
import ServerComponents from "../components/server-compontents";

export default function Home() {
  return (
    <>
        <ClientComponents>
          <ServerComponents/>
        </ClientComponents>
    </>
  );
}
