import { Envelope, Phone, Clock ,CheckCircle } from "phosphor-react";

function Contact() {
    return (
        <>
        <header className="text-center mt-8 b-6 ">
            <h2 className="text-[40px] font-bold text-centerpt-[50px]">ติดต่อเรา</h2>
            <p>"ให้เราช่วยคิดค้นหากลิ่นที่บอกเล่าเรื่องราวของคุณ...<br/>
            ทักมาปรึกษาที่เเลือกกลิ่นที่ใช่ในสไตล์ที่เป็นคุณได้เลยค่ะ"
            </p>
        </header>        
     <main className="max-w-6xl mx-auto grid grid-cols-2 gap-6 p-6">

    <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 ">
        <h2 className="text-xl font-bold">ส่งข้อความถึงเรา</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="flex flex-col gap-1">
                <label>ชื่อ-นามสกุล*</label>
                <input
                    type="text"
                    placeholder="กรอกชื่อ-นามสกุล"
                    className="border border-gray-300 bg-gray-100 rounded w-full outline-none p-[5px]"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label>อีเมล*</label>
                <input
                    type="email"
                    placeholder="กรอกอีเมล"
                    className="border border-gray-300 bg-gray-100 rounded w-full outline-none p-[5px]"
                />
            </div>
        </div>
        <label>เบอร์โทรศัพท์</label>
        <input
                    type="text"
                    placeholder="xxx-xxxxxxx"
                    className="border border-gray-300 bg-gray-100 rounded w-full outline-none p-[5px]"
                />
        <label>ข้อความ</label>
            <textarea          
                className="border border-gray-300 bg-gray-100 rounded w-full outline-none p-[5px] h-32 resize-none"
            ></textarea>
        <button className="bg-red text-white rounded px-4 py-2 hover:bg-green-800 hover:scale-105 duration-400 ease-in-out">
            ส่งข้อความ
        </button>
        </div>



        <div className="grid grid-rows-2 gap-6">
            <div className="bg-white rounded-xl shadow p-6   ">
                <div>
                    <h2 className="text-xl font-bold">ช่องทางติดต่อ</h2> 
                </div>
                 
                <div className="flex items-center gap-4 mt-4">
                    <Envelope size={32} className="text-red" />
                    <h1>Lomosia@gmail.com</h1>
                </div>
                 <div className="flex items-center gap-4 mt-4">
                    <Phone size={32} className="text-red" />
                    <h1>090-9999999</h1>
                </div>
                 <div className="flex items-center gap-4 mt-4">
                    <Clock size={32} className="text-red" />
                    <h1>9.00-18.00</h1>
                </div>
                

            </div>

            <div className="bg-white rounded-xl shadow p-6  ">
                <div>
                    <h2 className="text-xl font-bold">ทำไมเลือก Lomosia</h2>
                </div>
                
                <div className="flex items-center gap-4 mt-4">
                    <CheckCircle size={32} className="text-red" />
                    <h1>วัตถุดิบพรีเมียม ปลอดภัยต่อสุขภาพ</h1>
                </div>    
                  <div className="flex items-center gap-4 mt-4">
                    <CheckCircle size={32} className="text-red" />
                    <h1>กลิ่นที่ออกแบบมาเพื่อ “ความรู้สึก</h1>
                </div>  
                  <div className="flex items-center gap-4 mt-4">
                    <CheckCircle size={32} className="text-red" />
                    <h1>ดีไซน์เรียบหรู เหมาะกับทุกพื้นที่d</h1>
                </div>  
            </div>
        </div>

        </main>
       



        </>
    )
}
export default Contact