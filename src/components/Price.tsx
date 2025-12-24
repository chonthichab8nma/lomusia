import React from "react";

const Price = () => {
  const products = [
    {
      id: 1,
      name: "Classic Pine",
      price: "990",
      img: "/image/b6.png",
    },
    {
      id: 2,
      name: "Christmas Rose",
      price: "1,290",
      img: "/image/b6.png",
      recommend: true,
    },
    {
      id: 3,
      name: "Midnight Scent",
      price: "990",
      img: "/image/b6.png",
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
            Special Pricing
          </h2>
          <p className="text-red font-light">
            คอลเลกชันพิเศษสำหรับเทศกาลแห่งความสุข
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-stretch">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative flex flex-col bg-cream rounded-[45px] p-8 shadow-sm border border-gray-100 hover:border-red/30 transition-all duration-500 hover:shadow-xl group"
            >
              {/* ป้ายแนะนำตาม Sketch */}
              {product.recommend && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-red text-white text-xs px-6 py-1.5 rounded-full shadow-lg font-bold">
                    แนะนำ
                  </span>
                </div>
              )}

              {/* ส่วนรูปภาพ - ใช้ flex-grow เพื่อดันเนื้อหาด้านล่าง */}
              <div className="relative w-full aspect-square mb-8 flex items-center justify-center flex-grow">
                <img
                  src={product.img}
                  alt={product.name}
                  className="max-h-[200px] w-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              

              {/* ข้อมูลสินค้า */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-greentext mb-2">
                  {product.name}
                </h3>
                <p className="text-2xl md:text-3xl font-light text-red mb-8">
                  ฿{product.price}
                </p>
                

                {/* --- เพิ่มปุ่มซื้อเลย ตรงนี้ครับ --- */}
                <button className="w-full py-3.5 border-2 border-green text-green rounded-full font-bold text-lg hover:bg-green hover:text-white transition-all duration-300 mb-2">
                  ซื้อเลย
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
