import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { Header } from "./components/binaa/Header";
import { Hero } from "./components/binaa/Hero";
import { Services } from "./components/binaa/Services";
import { Works } from "./components/binaa/Works";
import { Pricing } from "./components/binaa/Pricing";
import { Contact } from "./components/binaa/Contact";

function MainContent() {
  const { dir } = useLanguage();

  return (
    <div
      className="min-h-screen bg-black text-white font-body selection:bg-[#7df56e] selection:text-black transition-colors duration-300"
      dir={dir}
    >
      <Header />
      <main>
        <Hero />
        <Services />
        <Works />
        <Pricing />
        <Contact />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
