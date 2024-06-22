import Image from "next/image";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import About from "./components/About";
import Noted from "./components/Noted";
import Howto from "./components/Howto";
import { Lamp } from "./ui/Lamp";
import { GoogleGeminiEffectDemo } from "./components/Connect";
import { MotionValue } from "framer-motion/dom";
import { VortexDemo } from "./components/VortexComp";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <About />
      <GoogleGeminiEffectDemo />
      <Feature />
      <VortexDemo />

      <Howto />
      <Footer />
    </main>
  );
}
