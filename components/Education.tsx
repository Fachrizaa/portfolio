import {
  GraduationCap,
  MapPin,
  BookOpen,
  Award,
} from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="
        border-x-[3px]
        border-b-[3px]
        border-black
        bg-white
      "
    >
      {/* ================= HEADER ================= */}

      <div
        className="
          flex
          items-center
          gap-3
          border-b-[3px]
          border-black
          bg-white
          px-6
          py-5
          sm:px-10
        "
      >
        <GraduationCap
          size={22}
          strokeWidth={3}
        />

        <h2
          className="
            font-mono
            text-sm
            font-black
            uppercase
            sm:text-base
          "
        >
          Education
        </h2>
      </div>

      {/* ================= CONTENT ================= */}

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-[0.75fr_1.25fr]
        "
      >
        {/* ================= LEFT ================= */}

        <div
          className="
            relative
            flex
            min-h-[400px]
            flex-col
            justify-between
            overflow-hidden
            border-b-[3px]
            border-black
            bg-pink-400
            p-8

            sm:p-10

            lg:border-b-0
            lg:border-r-[3px]
            lg:p-12
          "
        >
          {/* DECORATION */}

          <div
            className="
              absolute
              -right-12
              -top-12
              h-40
              w-40
              rotate-12
              border-[3px]
              border-black
              bg-yellow-300
            "
          />

          <div
            className="
              absolute
              bottom-[8%]
              right-[8%]
              h-16
              w-16
              -rotate-12
              border-[3px]
              border-black
              bg-violet-600
            "
          />

          {/* LABEL */}

          <div
            className="
              relative
              z-10
              w-fit
              border-[3px]
              border-black
              bg-white
              px-4
              py-2
              font-mono
              text-xs
              font-black
              uppercase
              shadow-[4px_4px_0_#000]
            "
          >
            Academic Journey
          </div>

          {/* GPA */}

          <div className="relative z-10">
            <p
              className="
                mb-2
                font-mono
                text-xs
                font-black
                uppercase
                tracking-[0.2em]
              "
            >
              Current GPA
            </p>

            <div className="flex items-end gap-3">
              <span
                className="
                  text-8xl
                  font-black
                  leading-[0.8]
                  tracking-[-0.08em]
                  sm:text-9xl
                "
              >
                3.76
              </span>

              <span
                className="
                  mb-1
                  font-mono
                  text-sm
                  font-black
                "
              >
                / 4.00
              </span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <div
          className="
            flex
            flex-col
            justify-center
            bg-[#f5f5f0]
            px-7
            py-12
            sm:px-10
            lg:px-14
          "
        >
          {/* UNIVERSITY */}

          <div>
            <p
              className="
                font-mono
                text-xs
                font-black
                uppercase
                tracking-[0.18em]
                text-violet-600
              "
            >
              University
            </p>

            <h3
              className="
                mt-3
                max-w-[750px]
                text-3xl
                font-black
                uppercase
                leading-[0.95]
                tracking-[-0.04em]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Universitas Logistik
              <br />
              dan Bisnis Internasional
            </h3>
          </div>

          {/* DEGREE */}

          <div
            className="
              mt-8
              border-[3px]
              border-black
              bg-white
              p-5
              shadow-[6px_6px_0_#000]
            "
          >
            <div
              className="
                flex
                items-start
                gap-4
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  border-[3px]
                  border-black
                  bg-lime-300
                "
              >
                <BookOpen
                  size={22}
                  strokeWidth={3}
                />
              </div>

              <div>
                <p
                  className="
                    font-mono
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.15em]
                    text-neutral-500
                  "
                >
                  Degree
                </p>

                <h4
                  className="
                    mt-1
                    text-xl
                    font-black
                    uppercase
                    sm:text-2xl
                  "
                >
                  Bachelor of Informatics
                  Engineering
                </h4>
              </div>
            </div>
          </div>

          {/* ================= DETAILS ================= */}

          <div
            className="
              mt-7
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
            "
          >
            {/* LOCATION */}

            <div
              className="
                flex
                items-center
                gap-3
                border-[3px]
                border-black
                bg-yellow-300
                px-4
                py-3
              "
            >
              <MapPin
                size={18}
                strokeWidth={3}
              />

              <div>
                <p
                  className="
                    font-mono
                    text-[9px]
                    font-black
                    uppercase
                    text-neutral-600
                  "
                >
                  Location
                </p>

                <p
                  className="
                    mt-1
                    font-mono
                    text-xs
                    font-black
                  "
                >
                  Bandung, Indonesia
                </p>
              </div>
            </div>

            {/* GPA */}

            <div
              className="
                flex
                items-center
                gap-3
                border-[3px]
                border-black
                bg-lime-300
                px-4
                py-3
              "
            >
              <Award
                size={18}
                strokeWidth={3}
              />

              <div>
                <p
                  className="
                    font-mono
                    text-[9px]
                    font-black
                    uppercase
                    text-neutral-600
                  "
                >
                  Academic Performance
                </p>

                <p
                  className="
                    mt-1
                    font-mono
                    text-xs
                    font-black
                  "
                >
                  GPA 3.76 / 4.00
                </p>
              </div>
            </div>
          </div>

          {/* ================= TAGS ================= */}

          <div
            className="
              mt-7
              flex
              flex-wrap
              gap-2
            "
          >
            {[
              "Informatics",
              "Software Development",
              "Web Development",
              "Technology",
            ].map((item) => (
              <span
                key={item}
                className="
                  border-2
                  border-black
                  bg-white
                  px-3
                  py-2
                  font-mono
                  text-[10px]
                  font-black
                  uppercase
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}