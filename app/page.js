import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Testimonials from "./_components/Testimonials";
import Footer from "./_components/Footer";
import AboutUs from "./_components/AboutUs";

export default function Home() {
  return (
   <div>
      <Header/>
      <Hero/>
      <Features/>
      <AboutUs/>
      <Testimonials/>
      <Footer/>


      
   </div>
  );
}
