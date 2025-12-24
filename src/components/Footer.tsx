import {FacebookLogo ,TiktokLogo , MapPinLine} from "phosphor-react";

function Footer(){
    return (
        <>
          <footer className=" py-16 bg-red">
             <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                 <div className="space-y-4">
                 <img
                    src="/image/logo1.png"
                    alt="Logo"
                    className="h-20 md:h-22 w-auto"
                    />
                      <button className="inline-flex items-center gap-2 border text-white px-4 py-2 rounded-full ">
                           <MapPinLine/> Lomosia 4289
                    </button>
                     <p className="text-white/70  leading-relaxed">
                        Lomosia 4289 <br />
                        228/99 หมู่ที่ 7 ตำบลท่าโพธิ์<br />
                        อำเภอเมืองพิษณุโลก<br />
                        จังหวัดพิษณุโลก 65000
                    </p>
             </div>

             <div>
                <h3 className="font-semibold mb-4 text-white">ลิงก์ด่วน</h3>
                <ul className="space-y-2 text-white/70 ">
                    <li>หน้าแรก</li>
                    <li>คุณสมบัติ</li>
                    <li>ราคา</li>
                    <li>ติดต่อเรา</li>
                </ul>
            </div>

            <div>
                <h3 className="font-semibold mb-4 text-white">ติดต่อเรา</h3>
                <ul className="space-y-3  ">
                    <li className="flex items-center gap-2 text-white/70">
                    090-9999999
                    </li>
                    <li className="flex items-center gap-2 text-white/70">
                    Lomosia@hmail.com
                    </li>
                </ul>
            </div>

            <div>
                <h3 className="font-semibold mb-4 text-white">ติดตามเรา</h3>
                <div className="flex gap-4">
                    <div >
                    <FacebookLogo size={50} color="#fff" weight="fill"/>
                    </div>
                    <div>
                    <TiktokLogo size={50} color="#fff" weight="fill"/>
                    </div>
                </div>
                </div>
                </div>
         <div className="my-10 flex justify-center">
            <div className="w-2/3 h-px bg-white/10"></div>
        </div>
        <div className="mx-auto px-6 text-white/70">
            <p>&copy; 2025 บริษัท Lomosia สงวนลิขสิทธิ์</p>

        </div>         
            </footer>
      
        </>
    )
}

export default Footer;