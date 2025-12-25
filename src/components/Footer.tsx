import {FacebookLogo ,TiktokLogo , MapPinLine} from "phosphor-react";
import { useTranslation } from "react-i18next";
type MenuItem = {
  label: string;
  id: string;
};

type FooterProps = {
  menuItems: MenuItem[];
  scrollToSection: (id: string) => void;
};

function Footer({ menuItems, scrollToSection }: FooterProps) {
    const { t } = useTranslation();

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
                        {t("address")}<br />
                       
                    </p>
             </div>

             <div>
                <h3 className="font-semibold mb-4 text-white">{t("Quick")}</h3>
                <ul className="space-y-2 text-white/70 ">
                {menuItems.map((item) => (
                    <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-green transition"
                >
                  {t(item.label)}

                </button>
              </li>))}
                </ul>
            </div>

            <div>
                <h3 className="font-semibold mb-4 text-white">{t("contact")}</h3>
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
                <h3 className="font-semibold mb-4 text-white">{t("Follow")}</h3>
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
        <div className="mx-auto px-6 text-white/70 text-center">
            <p>&copy; 2025 บริษัท Lomosia สงวนลิขสิทธิ์</p>

        </div>         
            </footer>
      
        </>
    )
}

export default Footer;



