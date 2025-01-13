import Image from "next/image";
import Navbar from "@/components/Navbar";
import WelcomeSection from "@/components/WelcomeSection";
import Category from "@/components/Category";

export default function Home() {
  return (
    <div>
      <section>
        <Navbar />
        <WelcomeSection />
      </section>
      <section>
        <Category />
      </section>
    </div>
  );
}
