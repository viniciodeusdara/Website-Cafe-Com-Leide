import Navbar from "@/app/components/Navbar";
import Line from "@/app/patterns/Line"
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
      <Line />
      <Boulangerie />
      <Products />
      <Line />
      <Production />
      <Line />
      <Contact />
      <Footer />
    </div>
  );
}
