import Community from "@/components/Community";
import Developer from "@/components/Developer";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Developer />
      <Community />
      <Footer />
    </div>
  )
}
