"use client";
import Home_Body from "./(Home_Body)/Home_Body";
import Footer from "./(Footer)/Footer";
import { Signup_data } from "../Redux-store/Redux-action";
import { useSelector } from "react-redux";
import Aadi from "./(Aadi_Special)/aadi";
import Script from "next/script";

export default function Home() {
  const Signup = useSelector(Signup_data);
  return (
    <main
      className={`w-full    ${
        Signup ? " h-[940px] overflow-hidden" : "  h-screen "
      }   `}
    >
      <Home_Body />
      <Footer />
      <div className="z-20">

      <Script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></Script>
      <Script src="https://mediafiles.botpress.cloud/6c0b34ce-2bb0-46c8-b54c-b010c7f76dac/webchat/config.js" defer></Script>
      </div>
    </main>
  );
}
