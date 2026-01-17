import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F4C7D0]">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <HeroSection />
      </div>
    </main>
  );
}
