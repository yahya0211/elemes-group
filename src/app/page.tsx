import Navbar from "@/components/Navbar";
import WelcomeSection from "@/components/WelcomeSection";
import Category from "@/components/Category";
import Trending from "@/components/Trending";
import Footer from "@/components/Footer";

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
      <section>
        <Trending />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
