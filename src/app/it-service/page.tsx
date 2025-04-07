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
        description=""/>
     
      <NewSection />
     
    </>
  );
};

export default TaxPage;
