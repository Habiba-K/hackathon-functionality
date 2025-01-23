import React from "react";
import NavAfterLogin from "../NavAfterLogin/page";
import PricingHeader from "./PricingHeader";
import Pakages from "./Pakages";
import Clients from "../Components/Clients";
import Freetrial from "../Components/freetrial";
import Faqs from "./Faqs";

const page = () => {
  return (
    <div>
      <NavAfterLogin></NavAfterLogin>
      <br /> <br />
      <PricingHeader></PricingHeader>
      <Pakages></Pakages>
      <p className="bg-252B42 text-md sm:text-xl text-center mt-5">
        Trusted By Over 4000 Big Companies
      </p>
      <Clients></Clients>
      <Faqs></Faqs>
    <Freetrial></Freetrial>
      </div>
  );
};

export default page;
