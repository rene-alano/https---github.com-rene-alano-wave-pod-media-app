import NavBar from "./components/nav/index";
import HeroSection from "./components/hero";
import HowItWorksSection from "./components/how_it_works";
import BenefitsSection from "./components/benefits";
import PricingSection from "./components/pricing";
import AboutUsSection from "./components/about_us";
import FooterSection from "./components/footer";

export default function App() {
  return (
    <div>
      <div>
        <NavBar />
        <HeroSection />

        <HowItWorksSection />
        <BenefitsSection />
        <PricingSection />
        <AboutUsSection />
        <FooterSection />
      </div>
    </div>
  );
}
