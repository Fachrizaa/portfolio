"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "CERTIFICATIONS", href: "#certifications" },
  ];

  return (
    <header className="w-full border-[3px] border-black bg-white">
      <nav className="flex h-[70px] items-stretch">
        
        {/* LOGO */}
        <a
          href="#home"
          className="
            flex items-center
            border-r-[3px] border-black
            bg-lime-300
            px-6
            font-mono 
            text-sm
            font-black
            tracking-wide
            transition-colors
            hover:bg-lime-400
          "
        >
          <span className="mr-2">&lt;/&gt;</span>
          REZA DEV
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden flex-1 items-center justify-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                relative
                font-mono
                text-xs
                font-black
                tracking-wide
                text-black
                transition-all
                after:absolute
                after:-bottom-2
                after:left-0
                after:h-[3px]
                after:w-0
                after:bg-black
                after:transition-all
                hover:after:w-full
              "
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CONTACT BUTTON */}
        <a
          href="#contact"
          className="
            hidden
            items-center
            gap-3
            border-l-[3px] border-black
            bg-violet-600
            px-7
            font-mono
            text-xs
            font-black
            tracking-wide
            text-white
            transition-colors
            hover:bg-violet-700
            lg:flex
          "
        >
          CONTACT ME
          <ArrowRight size={17} strokeWidth={3} />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            ml-auto
            flex
            w-[70px]
            items-center
            justify-center
            border-l-[3px]
            border-black
            bg-violet-600
            text-white
            lg:hidden
          "
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <X size={27} strokeWidth={3} />
          ) : (
            <Menu size={27} strokeWidth={3} />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="border-t-[3px] border-black bg-white lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="
                block
                border-b-[3px]
                border-black
                px-6
                py-4
                font-mono
                text-sm
                font-black
                transition-colors
                hover:bg-lime-300
              "
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="
              flex
              items-center
              justify-between
              bg-violet-600
              px-6
              py-4
              font-mono
              text-sm
              font-black
              text-white
            "
          >
            CONTACT ME
            <ArrowRight size={18} strokeWidth={3} />
          </a>
        </div>
      )}
    </header>
  );
}