import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="bg-[#070508] text-white">
     <Navbar />
<Hero />
<About />
<Climb />
<Hearts />
<Tokenomics />
<Roadmap />
<FAQ />
<Footer />
    </main>
  );
}
import About from "@/components/About";
import Climb from "@/components/Climb";
import Hearts from "@/components/Hearts";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";