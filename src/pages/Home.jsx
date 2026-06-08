import { Hero } from "../components/Hero.jsx";
import { Categories } from "../components/Categories.jsx";
import { ProductCards } from "../components/ProductCards.jsx";
import { Testimonials } from "../components/Testimonials.jsx";
import { About } from "../pages/About.jsx";
import { Contact } from "../pages/Contact.jsx";

export function Home() {
  return (
    <>
      <Hero/>
      <Categories/>
      <ProductCards/>
      <Testimonials/>
      <About/>
      <Contact/>
    </>
  );
}