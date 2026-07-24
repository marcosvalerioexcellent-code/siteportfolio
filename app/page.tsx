import { Footer, Navbar } from "@/components/layout";
import {
  About,
  Contact,
  Cta,
  Hero,
  Portfolio,
  Process,
  Services,
  Stats,
  Team,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Stats />
        <Process />
        <Team />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
