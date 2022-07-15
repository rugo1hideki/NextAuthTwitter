import "../styles/globals.css";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Navbar />
      <Component {...pageProps} />
    </UserProvider>
  );
}
