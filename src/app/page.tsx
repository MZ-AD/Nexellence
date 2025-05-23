import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Team from "@/components/Team";
import Intro from "@/components/Intro"
import Whatsapp from "@/components/Whatsapp";
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "This is Home",
  // other metadata
};

export default function Home() {
  return (
    <>
     
      <ScrollUp />
      <Whatsapp />
      <Hero />
      <Intro />
      <Features />
      <Team />
      <Video />
       {/* <Brands />  */}
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
