import "./Style.css";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <section
      id="home"
      className="pt-20px min-h-[90vh] flex items-center bg-[--color-cream]"
    >
      <div className="max-w-300 mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <p className="font-prompt-bold text-greenold uppercase tracking-[0.3em] text-sm mb-4">
              Scented Candles
            </p>
            <div className="mb-4">
              <span className="font-family-great-vibes text-5xl md:text-7xl text-red leading-[0.8] md:leading-[0.9] mb-4">
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
              <p className="font-prompt font-light text-greenold text-base md:text-xl leading-relaxed max-w-150 opacity-90">
                {t("p1")}
              </p>
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2 w-full max-w-125 md:max-w-none">
            <div className="relative flex justify-center">
              <img
                src="/image/b6.png"
                alt="Christmas Scented Candle"
                className="w-full h-auto max-h-125 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
