import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
  Link,
  Bot
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        border-x-[3px]
        border-b-[3px]
        border-black
      "
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
        {/* ================= LEFT ================= */}

        <div
          className="
            relative
            overflow-hidden
            border-b-[3px]
            border-black
            bg-violet-600
            px-7
            py-14
            text-white

            sm:px-10
            sm:py-16

            lg:min-h-[570px]
            lg:border-b-0
            lg:border-r-[3px]
            lg:px-14
            lg:py-16
          "
        >
          {/* DECORATIONS */}

          <div
            className="
              absolute
              -right-10
              top-10
              h-32
              w-32
              rotate-12
              border-[3px]
              border-black
              bg-lime-300
            "
          />

          <div
            className="
              absolute
              bottom-10
              right-[8%]
              h-16
              w-16
              -rotate-12
              border-[3px]
              border-black
              bg-pink-400
            "
          />

          <div
            className="
              absolute
              bottom-[30%]
              right-[25%]
              h-8
              w-8
              rotate-45
              border-[3px]
              border-black
              bg-yellow-300
            "
          />

          {/* AVAILABLE BADGE */}

          <div
            className="
              relative
              z-10
              inline-flex
              items-center
              gap-2
              border-[3px]
              border-black
              bg-lime-300
              px-4
              py-2
              font-mono
              text-xs
              font-black
              uppercase
              text-black
              shadow-[4px_4px_0_#000]
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-black
              "
            />

            Available For Opportunities
          </div>

          {/* TITLE */}

          <div className="relative z-10 mt-10">
            <p
              className="
                mb-4
                font-mono
                text-xs
                font-black
                uppercase
                tracking-[0.2em]
                text-lime-300
              "
            >
              Have a project in mind?
            </p>

            <h2
              className="
                max-w-[750px]
                text-6xl
                font-black
                uppercase
                leading-[0.82]
                tracking-[-0.06em]

                sm:text-7xl
                lg:text-8xl
              "
            >
              Let&apos;s
              <br />
              Work
              <br />
              Together.
            </h2>
          </div>

          {/* DESCRIPTION */}

          <p
            className="
              relative
              z-10
              mt-9
              max-w-[600px]
              font-mono
              text-sm
              font-medium
              leading-7
              text-neutral-200
            "
          >
            I&apos;m open to opportunities, collaborations,
            freelance projects, and conversations about building
            useful digital products.
          </p>
        </div>

        {/* ================= RIGHT ================= */}

        <div
          className="
            flex
            flex-col
            justify-between
            bg-lime-300
            px-7
            py-12

            sm:px-10

            lg:min-h-[570px]
            lg:px-12
            lg:py-14
          "
        >
          <div>
            {/* TITLE */}

            <p
              className="
                font-mono
                text-xs
                font-black
                uppercase
                tracking-[0.2em]
              "
            >
              Get In Touch ↓
            </p>

            <h3
              className="
                mt-4
                text-3xl
                font-black
                uppercase
                leading-none
                tracking-[-0.04em]
                sm:text-4xl
              "
            >
              Don&apos;t be shy.
              <br />
              Say hello!
            </h3>

            {/* ================= EMAIL ================= */}

            <div className="mt-9">
              <p
                className="
                  font-mono
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.15em]
                "
              >
                Email
              </p>

              <a
                href="mailto:fachrizafarhan03@gmail.com"
                className="
                  mt-2
                  block
                  break-all
                  text-xl
                  font-black
                  underline
                  decoration-[3px]
                  underline-offset-4
                  sm:text-2xl
                "
              >
                fachrizafarhan03@gmail.com
              </a>
            </div>

            {/* LOCATION */}

            <div className="mt-7">
              <p
                className="
                  font-mono
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.15em]
                "
              >
                Based In
              </p>

              <div
                className="
                  mt-2
                  flex
                  items-center
                  gap-2
                  font-mono
                  text-sm
                  font-black
                "
              >
                <MapPin
                  size={17}
                  strokeWidth={3}
                />

                Bandung, Indonesia
              </div>
            </div>

            {/* ================= SOCIAL ================= */}

            <div
              className="
                mt-9
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
              "
            >
              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/m-fachriza-farhan-8572502a8"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-[3px]
                  border-black
                  bg-white
                  px-4
                  py-4
                  shadow-[4px_4px_0_#000]
                  transition-all

                  hover:translate-x-[2px]
                  hover:translate-y-[2px]
                  hover:shadow-[2px_2px_0_#000]
                "
              >
                <div className="flex items-center gap-3">
                  <Link
                    size={19}
                    strokeWidth={3}
                  />

                  <span
                    className="
                      font-mono
                      text-xs
                      font-black
                      uppercase
                    "
                  >
                    LinkedIn
                  </span>
                </div>

                <ArrowUpRight
                  size={17}
                  strokeWidth={3}
                />
              </a>

              {/* Github */}
              <a
                href="https://github.com/Fachrizaa"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-[3px]
                  border-black
                  bg-white
                  px-4
                  py-4
                  shadow-[4px_4px_0_#000]
                  transition-all

                  hover:translate-x-[2px]
                  hover:translate-y-[2px]
                  hover:shadow-[2px_2px_0_#000]
                "
              >
                <div className="flex items-center gap-3">
                  <Bot
                    size={19}
                    strokeWidth={3}
                  />

                  <span
                    className="
                      font-mono
                      text-xs
                      font-black
                      uppercase
                    "
                  >
                    Github
                  </span>
                </div>

                <ArrowUpRight
                  size={17}
                  strokeWidth={3}
                />
              </a>
            </div>
          </div>

          {/* ================= EMAIL BUTTON ================= */}

          <a
            href="mailto:fachrizafarhan03@gmail.com"
            className="
              mt-12
              flex
              w-full
              items-center
              justify-between
              border-[3px]
              border-black
              bg-white
              px-6
              py-5
              text-white
              shadow-[7px_7px_0_#fff]
              transition-all

              hover:translate-x-[3px]
              hover:translate-y-[3px]
              hover:shadow-[3px_3px_0_#fff]
            "
          >
            <div className="flex items-center gap-3">
              <Send
                size={19}
                strokeWidth={3}
              />

              <span
                className="
                  font-mono
                  text-sm
                  font-black
                  uppercase
                "
              >
                Send Me A Message
              </span>
            </div>

            <ArrowUpRight
              size={20}
              strokeWidth={3}
            />
          </a>
        </div>
      </div>
    </section>
  );
}