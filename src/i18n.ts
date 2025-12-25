import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    th: {
      translation: {
        home: "หน้าหลัก",
        features: "คุณสมบัติ",
        pricing: "ราคา",
        contact: "ติดต่อเรา",
        why: "ทำไมต้อง Lomosia",
        ingredient: "ส่วนประกอบ",
        p1: "ให้กลิ่นหอมที่คุณหลงรักเป็นผู้นำทางย้อนกลับไปสู่ความทรงจำแสนอบอุ่นสร้างดินแดนแห่งความสุขที่เปลี่ยนทุกมุมบ้านให้กลายเป็นพื้นที่แห่งการเฉลิมฉลองอันมหัศจรรย์และพิเศษกว่าปีไหนๆ",
        Ingredients:"ส่วนประกอบ",
        p2:"วัตถุดิบเกรดพรีเมียม ปลอดภัยต่อคุ3ณและโลก",
        smell:"การกระจายกลิ่น",
        p3:"กลิ่นชัด กระจายตัวดีเยี่ยม ทั่วทุกมุมห้อง",
        fire:"การเผาไหม้",
        p4:"หน้าเทียนเรียบสวย ไร้เขม่ากวนใจ",
        Special:"ราคาพิเศษ",
        p5:"คอลเลกชันพิเศษสำหรับเทศกาลแห่งความสุข",  
        Recommended:"แนะนำ",
        buyy:"ซื้อเลย",
        comment:"ความคิดเห็นจากลูกค้า",
        p6:"ลูกค้าของเราพูดถึงเราอย่างไรบ้าง",
        address:"228/99 หมู่ที่ 7 ตำบลท่าโพธิ์ อำเภอเมืองพิษณุโลก จังหวัดพิษณุโลก 65000",
        Quick:"ลิงก์ด่วน",
        Follow:"ติดตามเรา",
        p8:"วัตถุดิบพรีเมียม ปลอดภัยต่อสุขภาพ",
        p9:"กลิ่นที่ออกแบบมาเพื่อความรู้สึก",
        p10:"ดีไซน์เรียบหรู เหมาะกับทุกพื้นที่",
        submit:"ส่งข้อความ",
        fullname:"ชื่อ-นามสกุล*",
        



        p7:"ให้เราช่วยคิดค้นหากลิ่นที่บอกเล่าเรื่องราวของคุณ...\nทักมาปรึกษาที่เเลือกกลิ่นที่ใช่ในสไตล์ที่เป็นคุณได้เลยค่ะ",
        sendmessage:"ส่งข้อความถึงเรา",
        email:"กรอกอีเมล",
        namePlaceholder:"กรอกชื่อ-นามสกุล",
        phonenumber:"เบอร์โทรศัพท์",
        pnumber:"xxx-xxxxxxx",
        text:"ข้อความ",
        sentbutton:"ส่งข้อความ",
      },
    },
    en: {
      translation: {
        home: "HOME",
        features: "FEATURES",
        pricing: "PRICING",
        contact: "CONTACT",
        why: "WHY LOMOSIA",
        ingredient: "Ingredients",
        p1: "Let the beloved fragrance guide you back to warm memories, creating a land of happiness that transforms every corner of your home into a magical and special celebration space like no other year.",
        Ingredients:"Ingredients",
        p2:"Premium grade ingredients, safe for you and the planet",
        smell :"Excellent Scent Throw",
        p3:"Clear scent, excellent diffusion throughout the room",
        fire:"Burning",
        p4:"Smooth candle surface, no annoying soot",
        Special:"Special Price",
        p5:"Special collection for the festive season",
        Recommended:"Recommended",
        buyy:"Buy Now",
        comment:"Customer Reviews",
        p6:"What our customers are saying about us",
        address:"228/99 Moo 7, Tha Pho Subdistrict Mueang Phitsanulok District, Phitsanulok Province 65000",
        Quick:"Quick Links",
        Follow:"Follow Us",
        p8:"Premium ingredients, safe for health",
        p9:"Scents designed for feelings",
        p10:"Elegant design, suitable for all spaces",
        submit:"Submit Message",

        p7:"Discover a scent that captures your story. \nMessage us for a personal consultation to find the right fragrance in your own style.",
        sendmessage:"SEND US A MESSAGE",
        email:"Email",
        namePlaceholder:"Full Name",
        fullname:"Full Name",
        phonenumber:"Phone Number",
        pnumber:"xxx-xxxxxxx",
        text:"Text",
        sentbutton:"Sent Message",
        
        
      },
    },
  },
  lng: "th", // ภาษาเริ่มต้น
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
