import React from "react";
import { useTranslation } from "react-i18next";

interface Product {
  id: number;
  name: string;
  price: string;
  img: string;
  recommend?: boolean;
}

interface Review {
  name: string;
  shop: string;
  text: string;
}

const Price: React.FC = () => {
  const { t } = useTranslation();
  const products: Product[] = [
    { id: 1, name: "Holiday Spirit", price: "990", img: "/image/pkg2.png" },
    {
      id: 2,
      name: "Warm Wishes",
      price: "1,290",
      img: "/image/pkg1.png",
      recommend: true,
    },
    { id: 3, name: "Winter Bliss", price: "990", img: "/image/pkg3.png" },
  ];

  const reviews: Review[] = [
    {
      name: "คุณสมชาย ใจดี",
      shop: "Lumosia Fan",
      text: "กลิ่นหอมฟุ้งกระจายดีมากครับ แพ็คเกจจิ้งสวยหรูมาก ซื้อเป็นของขวัญเพื่อนชอบทุกคนเลยครับ ประทับใจจริงๆ",
    },
    {
      name: "คุณมาลี สวยมาก",
      shop: "Verified Buyer",
      text: "ใช้งานง่าย กลิ่นหอมฟุ้งกระจายดีมากครับ แพ็คเกจจิ้งสวยหรูมาก ซื้อเป็นของขวัญเพื่อนชอบทุกคนเลยครับ",
    },
    {
      name: "คุณวิชัย ประสบการณ์",
      shop: "Candle Lover",
      text: "ตอนแรกกังวลเรื่องการจัดส่ง แต่ทีมงานดูแลดีมาก แพ็คของมาแน่นหนา กลิ่นหอมตั้งแต่ยังไม่เปิดกล่องเลยครับ",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative py-16 md:py-24 overflow-hidden font-prompt"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-greenold mb-4">
             {t("Special")}
          </h2>
          <p className="text-red font-light">
            {t("p5")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-stretch">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative flex flex-col bg-cream rounded-[45px] p-8 shadow-sm border border-gray-100 hover:border-red/30 transition-all duration-500 hover:shadow-xl group"
            >
              {product.recommend && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-red text-white text-xs px-6 py-1.5 rounded-full shadow-lg font-bold">
                    {t("Recommended")}
                  </span>
                </div>
              )}
              <div className="relative w-full aspect-square mb-8 flex items-center justify-center grow">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-contain rounded-3xl transition-transform duration-500 "
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-greentext mb-2 font-prompt">
                  {product.name}
                </h3>
                <p className="text-2xl md:text-3xl font-light text-red mb-8">
                  ฿{product.price}
                </p>
                <button className="w-full py-3.5 border-2 border-green text-green rounded-full font-bold text-lg hover:bg-green hover:text-white transition-all duration-300 mb-2">
                  {t("buyy")}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 pb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-greenold mb-4">
              {t("comment")}
            </h2>
            <p className="text-greentext text-lg font-light">
              {t("p6")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-cream p-8 rounded-[45px] shadow-sm border border-gray-100 flex flex-col h-full hover:border-red/30 transition-all duration-500 hover:shadow-xl group"
              >
                <div className="flex text-red mb-6 text-xl">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="text-greenold font-light leading-relaxed mb-8 grow">
                  "{review.text}"
                </p>

                <div className="w-full h-px bg-gray-200/50 mb-6"></div>

                <div>
                  <h4 className="font-bold text-lg text-greenold">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">
                    {review.shop}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
