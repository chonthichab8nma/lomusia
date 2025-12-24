import React from 'react';

const Heme = () => {
  return (
    <section id="home" className="pt-[70px] min-h-[90vh] flex items-center">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* --- ฝั่งซ้าย: แคปชันและข้อความ --- */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <span className="inline-block px-4 py-1 rounded-full text-white font-bold text-sm mb-4">
              เฉลิมฉลองเทศกาลแห่งความสุข พร้อมดีลพิเศษส่งท้ายปี
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              เปลี่ยนบ้านให้เป็นดินแดนมหัศจรรย์ <br /> 
              <span className="text-white">Christmas & New Year</span> <br />
              Scented Candles.
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              สร้างความทรงจำแสนพิเศษในเทศกาลปีใหม่ ด้วยกลิ่นหอมที่คุณหลงรัก
            </p>
            
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg- text-white px-8 py-4 rounded-full font-bold hover:bg-[#a52a2c] transition-all shadow-lg hover:-translate-y-1">
                ช้อปเลยตอนนี้
              </button>
              <button className="border-2 border-[#3f5739] text-[#3f5739] px-8 py-4 rounded-full font-bold hover:bg-[#3f5739] hover:text-white transition-all">
                ดูคอลเลกชันทั้งหมด
              </button>
            </div> */}
          </div>

          {/* --- ฝั่งขวา: รูปภาพ --- */}
          <div className="flex-1 order-1 md:order-2 w-full max-w-[500px] md:max-w-none">
            <div className="relative">
              {/* ตกแต่งพื้นหลังรูปนิดหน่อย */}
              {/* <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#f1c4ab] rounded-2xl z-0"></div> */}
              
              <img 
                src="/image/b6.png" 
                alt="Christmas Scented Candle" 
                // className="relative z-10 w-full h-auto rounded-2xl shadow-2xl object-cover min-h-[400px]"
              />

              {/* ป้ายวงกลมโปรโมชั่น */}
              {/* <div className="absolute -bottom-6 -left-6 bg-[#3f5739] text-white w-24 h-24 rounded-full flex flex-col items-center justify-center z-20 shadow-xl border-4 border-white rotate-12">
                <span className="text-xs">ลดสูงสุด</span>
                <span className="text-xl font-bold">50%</span>
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Heme;