import Image from "next/image";
import Navbar from "@/Components/Navbar";

import Profile from "@/Components/Profile";
import GrowthStack from "@/Components/GrowthStack";
import GozenDo from "@/Components/GozenDo"
import AboutGozen from "@/Components/AboutGozen";
import FilterCards from "@/Components/FilterCards"
import FilteringCards from "@/Components/FilteringCards";
import ZenSuite from "@/Components/ZenSuite";
import Premium from "@/Components/Premium";
import Tools from "@/Components/Tools"
import Footer from "@/Components/Footer"


export default function Home() {
  return (
   <>
   <Navbar/>

   <Profile/>
   <GrowthStack/>


   <GozenDo/>

   <AboutGozen/>
   {/* <FilterCards/> */}
   <FilteringCards/>
   <ZenSuite/>
   <Premium/>
   <Tools/>
   <Footer/>
   </>
  );
}
