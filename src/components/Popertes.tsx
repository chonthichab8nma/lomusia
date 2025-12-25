
import { Leaf , Sparkle , Fire} from "phosphor-react";
import "./Style.css";
import { useTranslation } from "react-i18next";
function Popertes() {
  const { t } = useTranslation();
  

  return (

    <>
        <header>
           <h1 className="text-[40px] font-bold text-center pt-12.5 text-greentext font-prompt">{t("features")}</h1>
        </header>

       <div className="max-w-6xl mx-auto grid min-[600px]:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
            
          <div className="bg-white rounded-3xl p-6 shadow hover:-translate-y-1 transition text-center  ">
            <div className="flex justify-center items-center  ">
            <Leaf 
                className="w-16 h-16 text-red mb-5" /></div>
            <h2 className="text-xl font-bold mb-2.5 font-prompt">{t("Ingredients")}</h2>
            <p className="font-prompt">{t("p2")}</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow hover:-translate-y-1 transition text-center">
            <div className="flex justify-center items-center">
            <Sparkle
                className="w-16 h-16 text-red mb-5"/></div>
            <h2 className="text-xl font-bold mb-2.5 font-prompt">{t("smell")}</h2>
            <p className="font-prompt">{t("p3")}</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow hover:-translate-y-1 transition text-center">
            <div className="flex justify-center items-center">
            <Fire
               className="w-16 h-16 text-red mb-5"/></div>
            <h2 className="text-xl font-bold mb-2.5 font-prompt">{t("fire")}</h2>
            <p className="font-prompt">{t("p4")}</p>
          </div>

        </div>

    </>
  )
}

export default Popertes
