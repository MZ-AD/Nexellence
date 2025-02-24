import AboutTaxOne from "@/components/taxation1/AboutTaxOne";
import AboutTaxTwo from "@/components/taxation1/AboutTaxTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounting & Taxation Services",
  description: "",
  // other metadata
};

const TaxPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Accounting and Taxation Services"
        description="Expert accounting and taxation services tailored to help businesses and individuals optimize their financial processes, maximize tax savings, and ensure compliance. Let our professionals handle your taxes and accounting needs for long-term success."/>
      <AboutTaxOne />
     
    </>
  );
};

export default TaxPage;
