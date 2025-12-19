import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

import facebookLogo from "@/assets/facebook.svg";
import instagramLogo from "@/assets/instagram.svg";
import youtubeLogo from "@/assets/youtube.svg";

/**
 * ContactCard - Displays company contact information and social links
 */
const ContactCard = ({ contact, socialLinks }) => (
  <div className="bg-white/10 rounded-xl p-4 border border-white/15">
    <h4 className="font-semibold mb-2">Contacto</h4>
    <div className="grid gap-2 text-sm">
      <div className="text-sm tracking-widest uppercase opacity-90">
        {contact.company}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Mail className="w-4 h-4" />
        <a
          href={`mailto:${contact.email}?&subject=Solicitud%20de%20información&body=Hola%20quiero%20recibir%20información%20del%20servicio%20de%20...`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {contact.email}
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Phone className="w-4 h-4" />
        <a
          href={`https://api.whatsapp.com/send?phone=${contact.whatsapp}&text=Hola%20Focalis%20Stratega%20Group,%20me%20gustaría%20recibir%20más%20información%20sobre%20sus%20servicios.`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir chat de Whatsapp con Focalis Stratega Group"
        >
          {contact.phone}
        </a>
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4" />
        <span>{contact.location}</span>
      </div>
    </div>

    <h4 className="font-semibold mt-2 mb-2">Redes</h4>
    <div className="grid gap-2 text-sm">
      <div className="flex items-center gap-2">
        <a href="https://www.facebook.com/FocalisGroup" target="_blank" rel="noopener noreferrer">
          <img
            src={facebookLogo.src}
            width="28"
            height="28"
            alt="Focalis Facebook Profile"
            title="Focalis Facebook Profile"
          />
        </a>
        <a href="https://www.instagram.com/focalis_stratega_group/" target="_blank" rel="noopener noreferrer">
          <img
            src={instagramLogo.src}
            width="28"
            height="28"
            alt="Focalis Instagram Profile"
            title="Focalis Instagram Profile"
          />
        </a>
        <a href="https://www.youtube.com/@FocalisStrategaGroup" target="_blank" rel="noopener noreferrer">
          <img
            src={youtubeLogo.src}
            width="35"
            height="28"
            alt="Focalis Youtube Channel"
            title="Focalis Youtube Channel"
          />
        </a>
      </div>
    </div>
  </div>
);

export default ContactCard;
