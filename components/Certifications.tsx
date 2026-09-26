"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  ExternalLink,
} from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Frontend Development",
    issuer: "Dicoding Indonesia",
    year: "2025",
    credential: "#",
  },
  {
    id: 2,
    title: "Web Development",
    issuer: "Dicoding Indonesia",
    year: "2025",
    credential: "#",
  },
  {
    id: 3,
    title: "Quality Assurance",
    issuer: "Professional Certification",
    year: "2026",
    credential: "#",
  },
];

const cardColors = [
  "bg-yellow-300",
  "bg-pink-400",
  "bg-cyan-300",
  "bg-lime-300",
];

export default function Certifications() {
  const [current, setCurrent] = useState(0);

  const nextCertificate = () => {
    setCurrent((prev) =>
      prev === certifications.length - 1 ? 0 : prev + 1
    );
  };

  const previousCertificate = () => {
    setCurrent((prev) =>
      prev === 0 ? certifications.length - 1 : prev - 1
    );
  };

  const certificate = certifications[current];

  return (
    <section
      id="certifications"
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
          justify-between
          border-b-[3px]
          border-black
        "
      >
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
          <Award size={21} strokeWidth={3} />

          <h2
            className="
              font-mono
              text-sm
              font-black
              uppercase
              sm:text-base
            "
          >
            Certifications
          </h2>
        </div>

        {/* ARROWS */}

        <div className="flex self-stretch">
          <button
            onClick={previousCertificate}
            aria-label="Previous certificate"
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
            <ArrowLeft size={22} strokeWidth={3} />
          </button>

          <button
            onClick={nextCertificate}
            aria-label="Next certificate"
            className="
              flex
              w-[60px]
              items-center
              justify-center
              border-l-[3px]
              border-black
              bg-violet-600
              text-white
              transition-colors
              hover:bg-violet-700
              sm:w-[70px]
            "
          >
            <ArrowRight size={22} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-[0.8fr_1.2fr]
        "
      >
        {/* LEFT SIDE */}

        <div
          className="
            flex
            flex-col
            justify-center
            border-b-[3px]
            border-black
            bg-violet-600
            px-7
            py-12
            text-white

            sm:px-10

            lg:min-h-[430px]
            lg:border-b-0
            lg:border-r-[3px]
          "
        >
          <span
            className="
              mb-5
              font-mono
              text-xs
              font-black
              uppercase
              tracking-widest
              text-lime-300
            "
          >
            Keep Learning.
          </span>

          <h3
            className="
              text-4xl
              font-black
              uppercase
              leading-[0.95]
              tracking-[-0.04em]

              sm:text-5xl
              lg:text-6xl
            "
          >
            Always
            <br />
            Learning.
          </h3>

          <p
            className="
              mt-6
              max-w-[400px]
              font-mono
              text-sm
              leading-7
              text-neutral-200
            "
          >
            Continuous learning is part of my journey as a
            developer. These certifications represent the
            skills and knowledge I&apos;ve developed along
            the way.
          </p>

          {/* COUNTER */}

          <div className="mt-10 font-mono text-xs font-black">
            {String(current + 1).padStart(2, "0")}
            {" / "}
            {String(certifications.length).padStart(2, "0")}
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div
          className="
            relative
            flex
            min-h-[430px]
            items-center
            justify-center
            overflow-hidden
            bg-[#f5f5f0]
            p-8
            sm:p-12
          "
        >
          {/* DECORATION */}

          <div
            className="
              absolute
              left-[8%]
              top-[12%]
              h-16
              w-16
              rotate-12
              border-[3px]
              border-black
              bg-pink-400
            "
          />

          <div
            className="
              absolute
              bottom-[10%]
              right-[8%]
              h-20
              w-20
              -rotate-6
              border-[3px]
              border-black
              bg-lime-300
            "
          />

          {/* CERTIFICATE CARD */}

          <div
            key={certificate.id}
            className={`
              ${cardColors[current % cardColors.length]}

              relative
              z-10
              w-full
              max-w-[560px]
              rotate-[-2deg]
              border-[4px]
              border-black
              p-7
              shadow-[10px_10px_0_#000]
              transition-all
              duration-300

              hover:rotate-0
            `}
          >
            {/* TOP */}

            <div
              className="
                flex
                items-start
                justify-between
                border-b-[3px]
                border-black
                pb-6
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  border-[3px]
                  border-black
                  bg-white
                  shadow-[3px_3px_0_#000]
                "
              >
                <Award size={27} strokeWidth={3} />
              </div>

              <span
                className="
                  border-[3px]
                  border-black
                  bg-white
                  px-3
                  py-2
                  font-mono
                  text-xs
                  font-black
                "
              >
                {certificate.year}
              </span>
            </div>

            {/* INFORMATION */}

            <div className="pt-7">
              <p
                className="
                  font-mono
                  text-xs
                  font-black
                  uppercase
                  tracking-wider
                "
              >
                Certificate Of Completion
              </p>

              <h4
                className="
                  mt-3
                  text-3xl
                  font-black
                  uppercase
                  leading-none
                  tracking-[-0.03em]
                  sm:text-4xl
                "
              >
                {certificate.title}
              </h4>

              <p
                className="
                  mt-5
                  font-mono
                  text-sm
                  font-black
                "
              >
                {certificate.issuer}
              </p>

              {/* CREDENTIAL */}

              {certificate.credential !== "#" && (
                <a
                  href={certificate.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-2
                    border-[3px]
                    border-black
                    bg-black
                    px-5
                    py-3
                    font-mono
                    text-xs
                    font-black
                    uppercase
                    text-white
                    shadow-[4px_4px_0_#fff]
                  "
                >
                  View Credential

                  <ExternalLink
                    size={15}
                    strokeWidth={3}
                  />
                </a>
              )}
            </div>
          </div>

          {/* DOTS */}

          <div
            className="
              absolute
              bottom-5
              left-1/2
              z-20
              flex
              -translate-x-1/2
              gap-2
            "
          >
            {certifications.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrent(index)}
                aria-label={`Go to ${item.title}`}
                className={`
                  h-3
                  border-2
                  border-black
                  transition-all

                  ${
                    current === index
                      ? "w-8 bg-violet-600"
                      : "w-3 bg-white"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}