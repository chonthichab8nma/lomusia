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
  return (
    <div className="bg-cream relative">
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
        <section id="home" className="min-h-screen pt-[70px]">
          <Home />
        </section>

        <section id="features" className="py-20">
          <Popertes />
        </section>

        <section id="pricing" className="py-20">
          <Price />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>

        <footer id="footer" className="bg-red">
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export default App;
