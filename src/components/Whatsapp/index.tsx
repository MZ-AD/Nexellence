"use client";

import '@fortawesome/fontawesome-free/css/all.min.css';


export default function WhatsAppButton() {
  const redirectToWhatsApp = () => {
    const phoneNumber = "+923355286695"; 
    const message = "Hello Nexellence!"; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-8 left-8 z-[99]">
      <div
        onClick={redirectToWhatsApp}
        aria-label="Chat with us on WhatsApp"
        className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition duration-300 ease-in-out hover:bg-green-600 hover:shadow-xl"
      >
        <i className="fab fa-whatsapp text-xl"></i>
      </div>
    </div>
  );
}
