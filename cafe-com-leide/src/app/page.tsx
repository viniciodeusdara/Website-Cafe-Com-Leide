import Banner from "@/app/components/sections/Banner";
import About from "@/app/components/sections/About";
import Boulangerie from "@/app/components/sections/Boulangerie";
import Products from "@/app/components/sections/Products";
import Production from "@/app/components/sections/Production";
import Contact from "@/app/components/sections/Contact";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <About />
      <Boulangerie />
      <Products />
      <Production />
      <Contact />
    </div>
  );
}
