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

        {/* ================= RIGHT / PHOTO ================= */}

        <div
          className="
    relative
    flex
    min-h-[480px]
    items-center
    justify-center
    overflow-hidden
    border-t-[3px]
    border-black
    bg-pink-400
    px-6
    py-12

    sm:min-h-[520px]
    sm:p-10

    lg:min-h-[520px]
    lg:border-l-[3px]
    lg:border-t-0
  "
        >
          {/* ================= GREEN BACKGROUND ================= */}

          <div
            className="
      absolute
      left-[15%]
      top-[12%]
      h-[250px]
      w-[220px]
      rotate-[-6deg]
      border-[3px]
      border-black
      bg-lime-300

      sm:left-[20%]
      sm:h-[290px]
      sm:w-[260px]

      lg:left-[12%]
      lg:h-[280px]
      lg:w-[280px]
    "
          />

          {/* ================= YELLOW DECORATION ================= */}

          <div
            className="
      absolute
      right-[8%]
      top-[10%]
      h-10
      w-10
      rotate-12
      border-[3px]
      border-black
      bg-yellow-300

      sm:h-12
      sm:w-12

      lg:right-[10%]
      lg:top-[15%]
    "
          />

          {/* ================= SMALL DECORATION ================= */}

          <div
            className="
      absolute
      bottom-[25%]
      left-[8%]
      h-8
      w-8
      -rotate-12
      border-[3px]
      border-black
      bg-violet-600
    "
          />

          {/* ================= PROFILE PHOTO ================= */}

          <div
            className="
      relative
      z-10
      -translate-y-8
      rotate-[3deg]

      sm:-translate-y-10
    "
          >
            <div
              className="
        h-[280px]
        w-[220px]
        overflow-hidden
        border-[4px]
        border-black
        bg-white
        shadow-[7px_7px_0_#000]

        sm:h-[330px]
        sm:w-[270px]

        lg:h-[330px]
        lg:w-[270px]
      "
            >
              <Image
                src="/image/profile.jpeg"
                alt="Reza - Software Developer"
                width={270}
                height={330}
                className="
          h-full
          w-full
          object-cover
          object-top
        "
                priority
              />
            </div>
          </div>

          {/* ================= CODE CARD ================= */}

          <div
            className="
      absolute
      bottom-[25px]
      left-1/2
      z-20
      w-[85%]
      max-w-[340px]
      -translate-x-1/2
      rotate-[-2deg]
      border-[3px]
      border-black
      bg-violet-600
      p-4
      font-mono
      text-[10px]
      text-white
      shadow-[6px_6px_0_#000]

      sm:bottom-[30px]
      sm:max-w-[350px]
      sm:p-5
      sm:text-xs

      lg:bottom-[35px]
    "
          >
            {/* HEADER */}

            <div
              className="
        mb-3
        flex
        items-center
        justify-between
        border-b
        border-violet-400
        pb-2
      "
            >
              <span className="font-bold">developer.ts</span>

              <div className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-300" />
                <span className="h-2 w-2 rounded-full bg-lime-300" />
              </div>
            </div>

            {/* CODE */}

            <div className="space-y-1">
              <p>
                <span className="text-pink-300">const</span> developer = {"{"}
              </p>

              <p className="pl-4">
                name:{" "}
                <span className="text-lime-300">&quot;Fachriza&quot;</span>,
              </p>

              <p className="pl-4">
                role:{" "}
                <span className="text-lime-300">
                  &quot;Software Developer&quot;
                </span>
                ,
              </p>

              <p className="pl-4">
                passion:{" "}
                <span className="text-lime-300">
                  &quot;Building Things&quot;
                </span>
              </p>

              <p>{"};"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
