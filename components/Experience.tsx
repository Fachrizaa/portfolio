"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Code2,
  MapPin,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    position: "Junior Frontend Developer",
    company: "BPKAD Jawa Barat",
    location: "Bandung, West Java",
    period: "Sep 2025 — Dec 2025",
    type: "Internship",

    description:
      "Contributed to the development and quality assurance of the BPKAD Jawa Barat website, focusing on frontend development, API integration, and application functionality.",

    responsibilities: [
      "Developed a landing page website using Vue.js.",
      "Integrated backend data fetching via API.",
      "Conducted quality assurance testing to ensure functionality and performance.",
    ],

    technologies: [
      "Vue.js",
      "REST API",
      "JavaScript",
      "QA Testing",
      "Git",
    ],
  },

  {
    id: 2,
    position: "Fullstack Developer",
    company: "Independent Projects",
    location: "Remote",
    period: "Jan 2025 — Feb 2025",
    type: "Freelance",

    description:
      "Developed a warehouse management system covering authentication, product management, inventory transactions, and stock calculations.",

    responsibilities: [
      "Developed a warehouse management website using Laravel and SQL.",
      "Implemented user authentication including login, registration, and user dashboard.",
      "Built product CRUD functionality and user activity log tracking.",
      "Managed transaction processing and implemented moving average calculations for inventory stock.",
      "Deployed and hosted the application on DomCloud.",
    ],

    technologies: [
      "Laravel",
      "PHP",
      "SQL",
      "CRUD",
      "DomCloud",
    ],
  },

  {
    id: 3,
    position: "Frontend Developer",
    company: "MyEdisi",
    location: "Remote",
    period: "Jan 2024 — Feb 2024",
    type: "Freelance",

    description:
      "Worked on frontend development for MyEdisi by implementing web pages based on provided UI designs and mockups.",

    responsibilities: [
      "Developed library, magazine, and yearbook pages using HTML and CSS.",
      "Implemented designs based on the provided mockups.",
    ],

    technologies: [
      "HTML",
      "CSS",
      "Responsive Design",
    ],
  },
];

const experienceColors = [
  "bg-lime-300",
  "bg-yellow-300",
  "bg-pink-400",
];

export default function Experience() {
  const [currentExperience, setCurrentExperience] = useState(0);

  const nextExperience = () => {
    setCurrentExperience((current) =>
      current === experiences.length - 1
        ? 0
        : current + 1
    );
  };

  const previousExperience = () => {
    setCurrentExperience((current) =>
      current === 0
        ? experiences.length - 1
        : current - 1
    );
  };

  const experience = experiences[currentExperience];

  return (
    <section
      id="experience"
      className="
        border-x-[3px]
        border-b-[3px]
        border-black
        bg-[#f5f5f0]
      "
    >
      {/* ================= HEADER ================= */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b-[3px]
          border-black
          bg-white
        "
      >
        {/* TITLE */}

        <div
          className="
            flex
            items-center
            gap-3
            px-6
            py-5
            sm:px-10
          "
        >
          <BriefcaseBusiness
            size={21}
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
            Work Experience
          </h2>
        </div>

        {/* ARROW NAVIGATION */}

        <div className="flex self-stretch">
          <button
            onClick={previousExperience}
            aria-label="Previous experience"
            className="
              flex
              w-[60px]
              items-center
              justify-center
              border-l-[3px]
              border-black
              bg-yellow-300
              transition-colors
              hover:bg-yellow-400
              sm:w-[70px]
            "
          >
            <ArrowLeft
              size={22}
              strokeWidth={3}
            />
          </button>

          <button
            onClick={nextExperience}
            aria-label="Next experience"
            className="
              flex
              w-[60px]
              items-center
              justify-center
              border-l-[3px]
              border-black
              bg-lime-300
              transition-colors
              hover:bg-lime-400
              sm:w-[70px]
            "
          >
            <ArrowRight
              size={22}
              strokeWidth={3}
            />
          </button>
        </div>
      </div>

      {/* ================= EXPERIENCE ================= */}

      <div
        key={experience.id}
        className="
          grid
          grid-cols-1
          lg:grid-cols-[0.8fr_1.2fr]
        "
      >
        {/* ================= LEFT ================= */}

        <div
          className={`
            ${
              experienceColors[
                currentExperience %
                  experienceColors.length
              ]
            }

            relative
            flex
            min-h-[430px]
            flex-col
            overflow-hidden
            border-b-[3px]
            border-black
            p-8

            sm:p-10

            lg:min-h-[580px]
            lg:border-b-0
            lg:border-r-[3px]
            lg:p-12
          `}
        >
          {/* DECORATION */}

          <div
            className="
              absolute
              -right-10
              -top-10
              h-40
              w-40
              rotate-12
              border-[3px]
              border-black
              bg-violet-600
            "
          />

          <div
            className="
              absolute
              bottom-[63%]
              right-[10%]
              h-16
              w-16
              -rotate-12
              border-[3px]
              border-black
              bg-white
            "
          />

          {/* NUMBER */}

          <div
            className="
              relative
              z-10
              flex
              h-16
              w-16
              items-center
              justify-center
              border-[3px]
              border-black
              bg-white
              font-mono
              text-lg
              font-black
              shadow-[5px_5px_0_#000]
            "
          >
            {String(
              currentExperience + 1
            ).padStart(2, "0")}
          </div>

          {/* POSITION */}

          <div className="relative z-10">
            <p
              className="
                mb-4
                mt-5    
                font-mono
                text-xs
                font-black
                uppercase
                tracking-[0.15em]
              "
            >
              {experience.type}
            </p>

            <h3
              className="
                text-4xl
                font-black
                uppercase
                leading-[0.9]
                tracking-[-0.05em]
                sm:text-5xl
                lg:text-6xl
              "
            >
              {experience.position}
            </h3>

            <div
              className="
                mt-7
                inline-block
                rotate-[-2deg]
                border-[3px]
                border-black
                bg-white
                px-5
                py-3
                shadow-[5px_5px_0_#000]
              "
            >
              <p
                className="
                  font-mono
                  text-sm
                  font-black
                  uppercase
                "
              >
                {experience.company}
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <div
          className="
            flex
            min-h-[580px]
            flex-col
            justify-center
            bg-white
            px-7
            py-10
            sm:px-10
            lg:px-14
          "
        >
          {/* META INFORMATION */}

          <div
            className="
              flex
              flex-wrap
              gap-3
            "
          >
            {/* DATE */}

            <div
              className="
                flex
                items-center
                gap-2
                border-[3px]
                border-black
                bg-yellow-300
                px-3
                py-2
                font-mono
                text-xs
                font-black
              "
            >
              <CalendarDays
                size={15}
                strokeWidth={3}
              />

              {experience.period}
            </div>

            {/* LOCATION */}

            <div
              className="
                flex
                items-center
                gap-2
                border-[3px]
                border-black
                bg-[#f5f5f0]
                px-3
                py-2
                font-mono
                text-xs
                font-black
              "
            >
              <MapPin
                size={15}
                strokeWidth={3}
              />

              {experience.location}
            </div>
          </div>

          {/* COMPANY */}

          <div className="mt-7">
            <p
              className="
                font-mono
                text-xs
                font-black
                uppercase
                tracking-[0.15em]
                text-violet-600
              "
            >
              {experience.company}
            </p>

            <h3
              className="
                mt-2
                text-3xl
                font-black
                uppercase
                tracking-[-0.03em]
                sm:text-4xl
              "
            >
              {experience.position}
            </h3>
          </div>

          {/* DESCRIPTION */}

          <p
            className="
              mt-5
              max-w-[750px]
              font-mono
              text-sm
              font-medium
              leading-7
              text-neutral-700
            "
          >
            {experience.description}
          </p>

          {/* ================= RESPONSIBILITIES ================= */}

          <div
            className="
              mt-7
              border-[3px]
              border-black
              bg-[#f5f5f0]
              p-5
              shadow-[6px_6px_0_#000]
            "
          >
            <p
              className="
                mb-4
                font-mono
                text-xs
                font-black
                uppercase
              "
            >
              What I Did ↓
            </p>

            <div className="space-y-3">
              {experience.responsibilities.map(
                (responsibility) => (
                  <div
                    key={responsibility}
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >
                    <div
                      className="
                        mt-[2px]
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        border-2
                        border-black
                        bg-lime-300
                      "
                    >
                      <Check
                        size={12}
                        strokeWidth={4}
                      />
                    </div>

                    <p
                      className="
                        font-mono
                        text-xs
                        font-semibold
                        leading-5
                        sm:text-sm
                      "
                    >
                      {responsibility}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* ================= TECHNOLOGY ================= */}

          <div className="mt-7">
            <div
              className="
                mb-3
                flex
                items-center
                gap-2
              "
            >
              <Code2
                size={16}
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
                Tech / Skills
              </span>
            </div>

            <div
              className="
                flex
                flex-wrap
                gap-2
              "
            >
              {experience.technologies.map(
                (technology) => (
                  <span
                    key={technology}
                    className="
                      border-2
                      border-black
                      bg-lime-300
                      px-3
                      py-2
                      font-mono
                      text-[10px]
                      font-black
                      uppercase
                    "
                  >
                    {technology}
                  </span>
                )
              )}
            </div>
          </div>

          {/* ================= COUNTER ================= */}

          <div
            className="
              mt-9
              border-t-[3px]
              border-black
              pt-5
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
              "
            >
              <span
                className="
                  font-mono
                  text-xs
                  font-black
                  uppercase
                "
              >
                Experience
              </span>

              <span
                className="
                  font-mono
                  text-xs
                  font-black
                "
              >
                {String(
                  currentExperience + 1
                ).padStart(2, "0")}
                {" / "}
                {String(
                  experiences.length
                ).padStart(2, "0")}
              </span>
            </div>

            {/* DOT NAVIGATION */}

            <div className="mt-4 flex gap-2">
              {experiences.map(
                (item, index) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      setCurrentExperience(index)
                    }
                    aria-label={`Go to ${item.company}`}
                    className={`
                      h-3
                      border-2
                      border-black
                      transition-all

                      ${
                        currentExperience ===
                        index
                          ? "w-8 bg-violet-600"
                          : "w-3 bg-white hover:bg-lime-300"
                      }
                    `}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}