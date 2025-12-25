import { Envelope, Phone, Clock, CheckCircle } from "phosphor-react";
import { useTranslation } from "react-i18next";
function Contact() {
  const { t } = useTranslation();
  return (
    <div>
      <header className="text-center mt-1 b-6 ">
        <h2 className="text-[40px] font-bold text-centerpt-[50px] font-prompt text-greenold">
          {t("contact")}
        </h2>
        <p className="text-greenold font-prompt whitespace-pre-line">
          {t("p7")}
        </p>
      </header >
      <main className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 p-6 ">
        <div className="bg-white rounded-3xl shadow p-6 flex flex-col gap-4 font-prompt  ">
          <h2 className="text-xl font-bold">{t("sendmessage")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-prompt ">
            <div className="flex flex-col gap-1">
              <label>{t("fullname")}</label>
              <input
                type="text"
                placeholder={t("namePlaceholder")}
                className="border border-gray-300 bg-gray-100 rounded w-full outline-none p-1.25"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>{t("email")}</label>
              <input
                type="email"
                placeholder={t("email")}
                className="border border-gray-300 bg-gray-100 rounded w-full outline-none p-1.25"
              />
            </div>
          </div>
          <label>{t("phonenumber")}</label>
          <input
            type="text"
            placeholder="xxx-xxxxxxx"
            className="border border-gray-300 bg-gray-100 rounded w-full outline-none p-1.25"
          />
          <label>{t("text")}</label>
          <textarea className="border border-gray-300 bg-gray-100 rounded w-full outline-none p-1.25 h-32 resize-none"></textarea>
          <button className="bg-red text-white rounded px-4 py-2 hover:bg-green-800 hover:scale-105 duration-400 ease-in-out">
            {t("submit")}
          </button>
        </div>

        <div className="grid grid-rows-2 gap-6 font-prompt">
          <div className="bg-white rounded-3xl shadow p-6   ">
            <div>
              <h2 className="text-xl font-bold">{t("contact")}</h2>
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

          <div className="bg-white rounded-3xl shadow p-6  ">
            <div>
              <h2 className="text-xl font-bold">{t("why")}</h2>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <CheckCircle size={32} className="text-red" />
              <h1>{t("p8")}</h1>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <CheckCircle size={32} className="text-red" />
              <h1>{t("p9")}</h1>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <CheckCircle size={32} className="text-red" />
              <h1>{t("p10")}</h1>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
export default Contact;
