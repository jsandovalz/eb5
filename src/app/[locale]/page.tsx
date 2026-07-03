import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import InvestmentSecurity from "@/components/InvestmentSecurity";
import VisaProcess from "@/components/VisaProcess";
import Trust from "@/components/Trust";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <InvestmentSecurity />
        <VisaProcess />
        <Trust />
        <FAQSection />
        <LeadForm />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
