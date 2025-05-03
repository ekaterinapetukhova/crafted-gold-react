import "./App.css";
import { Hero } from "./components/content/Hero";
import { Header } from "./components/header/Header";
import { History } from "./components/content/History.tsx";
import { Special } from "./components/content/special/Special.tsx";
import { Discover } from "./components/content/discover/Discover.tsx";
import { Footer } from "./components/footer/Footer.tsx";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <History />
        <Special />
        <Discover />
      </main>
      <Footer />
    </>
  );
}
