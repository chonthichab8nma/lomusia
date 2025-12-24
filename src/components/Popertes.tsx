
import { Leaf , Sparkle , Fire} from "phosphor-react";
import "./Style.css";
function Popertes() {
  

  return (
    <>
        <header className="mt-8 b-6">
           <h1 className="text-[40px] font-bold text-center pt-[50px] text-greentext">คุณสมบัติ</h1>
        </header>

       <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6 p-6 ">
            
          <div className="bg-white rounded-xl p-6 shadow hover:-translate-y-1 transition text-center ">
            <div className="flex justify-center items-center ">
            <Leaf 
                className="w-16 h-16 text-red mb-[20px]" /></div>
            <h2 className="text-xl font-bold mb-[10px]">ส่วนประกอบ</h2>
            <p>วัตถุดิบเกรดพรีเมียม ปลอดภัยต่อคุณและโลก</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow hover:-translate-y-1 transition text-center">
            <div className="flex justify-center items-center">
            <Sparkle
                className="w-16 h-16 text-red mb-[20px]"/></div>
            <h2 className="text-xl font-bold mb-[10px]">การกระจายกลิ่น</h2>
            <p>กลิ่นชัด กระจายตัวดีเยี่ยม ทั่วทุกมุมห้อง</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow hover:-translate-y-1 transition text-center">
            <div className="flex justify-center items-center">
            <Fire
               className="w-16 h-16 text-red mb-[20px]"/></div>
            <h2 className="text-xl font-bold mb-[10px]">การเผาไหม้</h2>
            <p>หน้าเทียนเรียบสวย ไร้เขม่ากวนใจ</p>
          </div>

        </div>

    </>
  )
}

export default Popertes
