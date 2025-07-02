// app/page.jsx
import Hero from "./components/Hero";
import ExperienceStats from "./components/ExperienceStats";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQSection";
import MapPage from "./components/Mappage";
import GetInTouchForm from "./components/GetIntouchForm";
import ScheduleConsultation from "./components/ScheduleConsultation";
import DelayedModal from "./components/DelayedModal";

export default function HomePage() {
  return (
    <>
      <DelayedModal />
      <Hero />
      <ExperienceStats />
      <ServicesSection />
      <AboutSection />
      <ScheduleConsultation />
      <FAQSection />
      <MapPage />
      <GetInTouchForm />
    </>
  );
}

