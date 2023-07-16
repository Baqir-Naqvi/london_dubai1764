import Image from "next/image";
import Animation from "../components/Animation";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Member from "@/components/Member";
import WorldWide from "@/components/WorldWide";
import FAQs from "@/components/FAQs";
import Membership from "@/components/Membership";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main>
      {/* <div className="flex border bg-white min-h-screen flex-col items-center justify-center p-24">
        <Animation />
      </div> */}
      <Navbar />
        <HeroSection />
        <AboutUs />
        <Member/>
        <WorldWide/>
        <FAQs/>
        <Membership/>
        <Team/>
    </main>
  );
}
