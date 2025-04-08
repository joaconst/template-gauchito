'use client';

import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, Map, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-8 rounded-t-4xl mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:justify-items-center">
          <div className="col-span-1">
            <h3 className="text-white text-2xl font-bold">Redes Sociales</h3>
            <ul className="space-y-4 mt-4 text-white">
              <li>
                <Link href="/">
                  <Instagram />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Facebook />
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white text-2xl font-bold">Contacto</h3>
            <ul className="space-y-4 mt-4 text-white">
              <li>
                <Link href="/">
                  <Phone />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Mail />
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white text-2xl font-bold">Ubicación y horarios</h3>
            <ul className="space-y-4 mt-4 text-white">
              <li>
                <Link href="/">
                  <Map />
                </Link>
              </li>
              <li>
                <Clock />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
