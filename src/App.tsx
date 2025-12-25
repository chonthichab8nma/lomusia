import "./components/Style.css";
import Popertes from "./components/Popertes";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Snowfall from "react-snowfall";
import ChristmasAudio from "./components/ChristmasAudio";

function App() {

  const menuItems = [
    { label: "home", id: "home" },
    { label: "features", id: "features" },
    { label: "pricing", id: "pricing" },
    { label: "contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
    {/* <img className="w-16 md:w-32 lg:w-48 mt-100" src="/image/b2.png" /> */}
    <div className="bg-cream relative ">
      
      <Snowfall
        color="#ffffff"
        snowflakeCount={80}
        radius={[0.5, 2.5]}
        speed={[0.5, 1.5]}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />
      <Snowfall
        color="#3f5739"
        snowflakeCount={70}
        radius={[0.5, 2.0]}
        speed={[0.8, 2.0]}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />
      <Navbar />
      <ChristmasAudio />
      <main>
        <section id="home" className="min-h-screen pt-17.5">
          <Home />
        </section>

        <section id="features">
          <Popertes />
        </section>

        <section id="pricing">
          <Price />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>

        <Footer menuItems={menuItems} scrollToSection={scrollToSection} />
      </main>
    </div>
    </>
  );
}

export default App;
