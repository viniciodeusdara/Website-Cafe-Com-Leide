import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Banner from "@/app/components/Banner";
import About from "@/app/components/About";
import Boulangerie from "@/app/components/Boulangerie";
import Products from "@/app/components/Products";
import Production from "@/app/components/Production";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <About />
      <Boulangerie />
      <Products />
      <Production />
      <Contact />
      <Footer />
    </div>
  );
}
