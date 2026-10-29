import { BeforeScene } from "./components/BeforeScene";
import { Developers } from "./components/Developers";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Journey } from "./components/Journey";
import { MgwLine } from "./components/MgwLine";
import { Nav } from "./components/Nav";
import { Variants } from "./components/Variants";
import { VideoReviews } from "./components/VideoReviews";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MgwLine />
        <BeforeScene />
        <Journey />
        <VideoReviews />
        <Variants />
        <Developers />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
