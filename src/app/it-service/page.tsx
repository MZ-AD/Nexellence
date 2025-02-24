import NewSection from "@/components/IT1/NewSection";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Machine Learning",
  description: "",
  // other metadata
};

const TaxPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="AI & Machine Learning Solutions for Your Business"
        description="Unlock the potential of Artificial Intelligence and Machine Learning with our cutting-edge IT services. At Nexellence and Co, we specialize in delivering tailored AI solutions that enhance decision-making, automate processes, and boost operational efficiency. From predictive analytics to intelligent automation, our expert team integrates advanced AI technologies to help your business stay ahead in an ever-evolving digital landscape. Explore how we can revolutionize your business strategy with powerful AI-driven insights and machine learning capabilities."/>
      <NewSection />
     
    </>
  );
};

export default TaxPage;
