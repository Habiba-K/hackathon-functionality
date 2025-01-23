import Image from "next/image";
import HeroSection from "./HeroSection/HeroSection";
import EditorPick from "./Components/EditorPick";
import Universe from "./Components/Universe";
import Neutraluniverse from "./Components/neutraluniverse";
import CardSection from "./Components/CardSection";
import Topbar from "./Components/topbar";
import Navbar from "./Navbar/Navbar";
import DisplayedProductsHome from "./HomeProduct/displayproducts";
export default function Home() {
  return (
    <div className="">
      <Topbar bgColor="bg-[#252B42]" />
      <Navbar />
      <HeroSection />
      <EditorPick></EditorPick>
      < DisplayedProductsHome/>
      <Universe />
      <Neutraluniverse />
      <CardSection></CardSection>
    </div>
  );
}
