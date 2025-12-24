import React from "react";
import "./Style.css";

const Home = () => {
  return (
    <section
      id="home"
      className="pt-20px min-h-[90vh] flex items-center bg-[--color-cream]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <p className="font-prompt-bold text-greenold uppercase tracking-[0.3em] text-sm mb-4">
              Scented Candles
            </p>
            <div className="mb-4">
              <span className="font-great-vibes text-5xl md:text-7xl text-red leading-[0.8] md:leading-[0.9] mb-4">
                Unwrap the magic of the season
              </span>
            </div>
            <h1 className="font-prompt text-l md:text-2xl text-greenold leading-tight mb-6">
              The Magic of Home <br />
              <span className="font-prompt text-2xl md:text-3xl block mt-2 text-red">
                Christmas & New Year Specials !
              </span>
            </h1>
            <div className="mt-4 md:mt-6">
              <p className="font-prompt font-light text-greenold text-base md:text-xl leading-relaxed max-w-[600px] opacity-90">
                ให้กลิ่นหอมที่คุณหลงรักเป็นผู้นำทางย้อนกลับไปสู่ความทรงจำแสนอบอุ่น{" "}
                <br className="hidden md:block" />
                สร้างดินแดนแห่งความสุขที่เปลี่ยนทุกมุมบ้านให้กลายเป็นพื้นที่{" "}
                <br className="hidden md:block" />
                แห่งการเฉลิมฉลองอันมหัศจรรย์และพิเศษกว่าปีไหนๆ
              </p>
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2 w-full max-w-[500px] md:max-w-none">
            <div className="relative flex justify-center">
              <img
                src="/image/b6.png"
                alt="Christmas Scented Candle"
                className="w-full h-auto max-h-[500px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
