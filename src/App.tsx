import Popertes from "./components/Popertes";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-cream">
      <section className="flex flex-col">
        <Navbar />

        <div>
          <Navbar />

          {/* ส่วนเนื้อหาต่างๆ */}
          <section id="home" className="h-screen pt-20">
            <Home />
          </section>

          <section id="features" className=" mt-20">
            <Popertes />
          </section>

          <section id="pricing" className="h-screen pt-20">
            <Price />
          </section>

          <section id="contact" className="mt-20">
            <Contact />
          </section>
        </div>
      </section>
    </div>
  );
}

export default App;
