import React from "react";
import QrCodeFocalis from "@/assets/qrcodefocalis.png";

/**
 * QRCodeCard - Displays QR code for quick contact
 */
const QRCodeCard = ({ description = "Escanea para conocer casos y metodologías" }) => (
  <div className="bg-white/10 rounded-xl p-4 border border-white/15 flex items-center justify-center">
    <div className="text-center">
      <div className="mx-auto w-32 h-32 rounded-xl bg-white/90 text-slate-900 flex items-center justify-center">
        <img
          className="p-1"
          src={QrCodeFocalis.src}
          width="148"
          height="148"
          alt="QrCode Focalis WhatsApp"
          id="qrcodefocalis"
        />
      </div>
      <div className="mt-2 text-xs opacity-90">
        {description}
      </div>
    </div>
  </div>
);

export default QRCodeCard;
