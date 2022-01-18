import "./styles.css";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Recommended from "./components/Recommended";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommended />
      <Testimonial />
      <Footer />
    </>
  );
}
