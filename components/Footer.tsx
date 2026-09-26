import {
  ArrowUp,
  Code2,
  Heart,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        border-x-[3px]
        border-b-[3px]
        border-black
        bg-black
        text-white
      "
    >
      {/* ================= MAIN FOOTER ================= */}

      <div
        className="
          flex
          flex-col
          gap-8
          px-7
          py-10

          sm:px-10

          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:px-12
        "
      >
        {/* ================= LEFT ================= */}

        <div>
          <div className="flex items-center gap-3">
            {/* LOGO */}

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                border-[3px]
                border-white
                bg-lime-300
                text-black
              "
            >
              <Code2
                size={22}
                strokeWidth={3}
              />
            </div>

            {/* NAME */}

            <div>
              <p
                className="
                  text-lg
                  font-black
                  uppercase
                  leading-none
                "
              >
                Fachriza
              </p>

              <p
                className="
                  mt-1
                  font-mono
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-neutral-400
                "
              >
                Software Developer
              </p>
            </div>
          </div>

          <p
            className="
              mt-5
              max-w-[420px]
              font-mono
              text-xs
              leading-6
              text-neutral-400
            "
          >
            Building useful digital experiences through
            clean code, thoughtful interfaces, and continuous
            learning.
          </p>
        </div>

        {/* ================= CENTER NAVIGATION ================= */}

        <nav
          className="
            flex
            flex-wrap
            gap-x-6
            gap-y-3
          "
        >
          {[
            {
              name: "Home",
              href: "#home",
            },
            {
              name: "Skills",
              href: "#skills",
            },
            {
              name: "Projects",
              href: "#projects",
            },
            {
              name: "Experience",
              href: "#experience",
            },
            {
              name: "Contact",
              href: "#contact",
            },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                font-mono
                text-[11px]
                font-black
                uppercase
                tracking-[0.08em]
                text-neutral-300
                transition-colors

                hover:text-lime-300
              "
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* ================= BACK TO TOP ================= */}

        <a
          href="#home"
          aria-label="Back to top"
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            border-[3px]
            border-white
            bg-lime-300
            text-black
            shadow-[4px_4px_0_#fff]
            transition-all

            hover:translate-x-[2px]
            hover:translate-y-[2px]
            hover:shadow-[2px_2px_0_#fff]
          "
        >
          <ArrowUp
            size={20}
            strokeWidth={3}
          />
        </a>
      </div>

      {/* ================= BOTTOM BAR ================= */}

      <div
        className="
          flex
          flex-col
          gap-3
          border-t-[3px]
          border-white
          px-7
          py-4

          sm:px-10

          md:flex-row
          md:items-center
          md:justify-between

          lg:px-12
        "
      >
        {/* COPYRIGHT */}

        <p
          className="
            font-mono
            text-[10px]
            font-bold
            uppercase
            tracking-[0.08em]
            text-neutral-400
          "
        >
          © {currentYear} Fachriza. All Rights Reserved.
        </p>

        {/* MADE WITH */}

        <div
          className="
            flex
            items-center
            gap-2
            font-mono
            text-[10px]
            font-bold
            uppercase
            tracking-[0.08em]
            text-neutral-400
          "
        >
          <span>Built with</span>

          <Heart
            size={13}
            strokeWidth={3}
            className="text-pink-400"
          />

          <span>Next.js & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}