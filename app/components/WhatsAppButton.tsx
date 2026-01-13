"use client";

export default function WhatsAppButton() {
  const phoneNumber = "+22956259632"; // Replace with actual WhatsApp number
  const message = encodeURIComponent("Bonjour Lafia, je viens de votre portfolio et j'aimerais discuter d'un projet.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50  text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group flex items-center justify-center"
      aria-label="Contact via WhatsApp"
    >
      <img 
        src="/whatsapp-icon.svg" 
        alt="WhatsApp" 
        className="w-20 h-20"
      />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Contactez-moi sur WhatsApp
      </span>
    </a>
  );
}
