import { ArrowDown, ArrowUpRight, Mail, Bot, Link } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-[520px]
        border-x-[3px]
        border-b-[3px]
        border-black
        bg-white
      "
    >
      <div
        className="
          grid
          min-h-[520px]
          grid-cols-1
          lg:grid-cols-2
        "
      >
        {/* ================= LEFT HERO ================= */}
        <div
          className="
            flex
            flex-col
            justify-center
            bg-[linear-gradient(#dedede_1px,transparent_1px),linear-gradient(90deg,#dedede_1px,transparent_1px)]
            bg-[size:24px_24px]
            px-6
            py-14
            sm:px-10
            lg:border-r-[3px]
            lg:border-black
            lg:px-12
          "
        >
          {/* INTRO BADGE */}
          <div className="mb-5">
            <span
              className="
                inline-block
                border-[3px]
                border-black
                bg-violet-600
                px-4
                py-2
                font-mono
                text-xs
                font-black
                tracking-wider
                text-white
                shadow-[4px_4px_0_#000]
              "
            >
              HEY, I&apos;M REZA 👋
            </span>
          </div>

          {/* TITLE */}
          <h1
            className="
              max-w-[600px]
              text-5xl
              font-black
              uppercase
              leading-[0.95]
              tracking-[-0.04em]
              text-black
              sm:text-6xl
              lg:text-7xl
            "
          >
            Software
            <br />
            Developer
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6
              max-w-[500px]
              font-mono
              text-sm
              font-medium
              leading-7
              text-neutral-700
              sm:text-base
            "
          >
            I build scalable web applications and turn ideas into impactful
            products with clean, efficient code.
          </p>

          {/* BUTTONS */}
          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="
                flex
                items-center
                gap-3
                border-[3px]
                border-black
                bg-lime-300
                px-5
                py-3
                font-mono
                text-xs
                font-black
                uppercase
                shadow-[4px_4px_0_#000]
                transition-all
                hover:translate-x-[2px]
                hover:translate-y-[2px]
                hover:shadow-[2px_2px_0_#000]
              "
            >
              View My Work
              <ArrowUpRight size={17} strokeWidth={3} />
            </a>

            <a
              href="/resume/Web Developer- M Fachriza Farhan.pdf"
              target="_blank"
              className="
                flex
                items-center
                gap-3
                border-[3px]
                border-black
                bg-white
                px-5
                py-3
                font-mono
                text-xs
                font-black
                uppercase
                shadow-[4px_4px_0_#000]
                transition-all
                hover:translate-x-[2px]
                hover:translate-y-[2px]
                hover:shadow-[2px_2px_0_#000]
              "
            >
              Download Resume
              <ArrowDown size={17} strokeWidth={3} />
            </a>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="mt-8">
            <p
              className="
                mb-3
                font-mono
                text-xs
                font-black
                uppercase
                tracking-wide
              "
            >
              Connect With Me
            </p>

            <div className="flex gap-3">
              <a
                href="https://github.com/Fachrizaa"
                target="_blank"
                aria-label="Github"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border-[3px]
                  border-black
                  bg-white
                  shadow-[3px_3px_0_#000]
                  transition-all
                  hover:-translate-y-1
                  hover:bg-lime-300
                "
              >
                <Bot size={19} strokeWidth={2.5} />
              </a>

              <a
                href="https://www.linkedin.com/in/m-fachriza-farhan-8572502a8"
                aria-label="Link"
                target="_blank"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border-[3px]
                  border-black
                  bg-white
                  shadow-[3px_3px_0_#000]
                  transition-all
                  hover:-translate-y-1
                  hover:bg-lime-300
                "
              >
                <Link size={19} strokeWidth={2.5} />
              </a>

              <a
                href="mailto:emailkamu@example.com"
                aria-label="Email"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border-[3px]
                  border-black
                  bg-white
                  shadow-[3px_3px_0_#000]
                  transition-all
                  hover:-translate-y-1
                  hover:bg-lime-300
                "
              >
                <Mail size={19} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        {/* ================= RIGHT HERO ================= */}
        <div
          className="
    relative
    hidden
    min-h-[520px]
    items-center
    justify-center
    overflow-hidden
    bg-pink-400
    p-10
    lg:flex
  "
        >
          {/* BACKGROUND DECORATION */}
          <div
            className="
      absolute
      left-[12%]
      top-[12%]
      h-[280px]
      w-[280px]
      rotate-[-6deg]
      border-[3px]
      border-black
      bg-lime-300
    "
          />

          {/* SMALL DECORATION */}
          <div
            className="
      absolute
      right-[10%]
      top-[15%]
      h-12
      w-12
      rotate-12
      border-[3px]
      border-black
      bg-yellow-300
    "
          />

          {/* PHOTO WRAPPER */}
          <div
            className="
            relative
            z-10
            -translate-y-6
            rotate-[3deg]
            transition-transform
            hover:-translate-y-3
            hover:rotate-0
            "
          >
            <div
              className="
                h-[330px]
                w-[270px]
                overflow-hidden
                border-[4px]
                border-black
                bg-white
                shadow-[8px_8px_0_#000]
            "
            >
              <Image
                src="/image/profile.jpeg"
                alt="Reza - Software Developer"
                width={270}
                height={330}
                className="h-full w-full object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* CODE CARD */}
          <div
            className="
                absolute
                bottom-[35px]
                left-1/2
                z-20
                w-[350px]
                -translate-x-1/2
                rotate-[-2deg]
                border-[3px]
                border-black
                bg-violet-600
                p-5
                font-mono
                text-xs
                text-white
                shadow-[7px_7px_0_#000]
                transition-transform
                hover:-translate-y-1
                hover:rotate-0
              "
          >
            <p>
              <span className="text-yellow-300">const</span>{" "}
              <span className="text-white">developer</span> = {"{"}
            </p>

            <p className="pl-5">
              name: <span className="text-lime-300">&quot;Reza&quot;</span>,
            </p>

            <p className="pl-5">
              role:{" "}
              <span className="text-lime-300">
                &quot;Software Developer&quot;
              </span>
              ,
            </p>

            <p className="pl-5">
              passion:{" "}
              <span className="text-lime-300">
                &quot;Building Great Products&quot;
              </span>
            </p>

            <p>{"}"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
