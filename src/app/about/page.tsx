import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Nexellence and Co"
        description="expert accounting, taxation, and cutting-edge AI solutions to optimize your business financial and technological strategies"
      />
      
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
