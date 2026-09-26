"use client";

import { useState } from "react";
import Image from "next/image";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  FolderCode,
  Globe,
  Lock,
} from "lucide-react";

import { projects } from "@/data/projects";

const projectColors = [
  "bg-violet-500",
  "bg-yellow-300",
  "bg-cyan-300",
  "bg-pink-400",
  "bg-lime-300",
  "bg-orange-300",
  "bg-blue-300",
];

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((current) =>
      current === projects.length - 1 ? 0 : current + 1,
    );
  };

  const previousProject = () => {
    setCurrentProject((current) =>
      current === 0 ? projects.length - 1 : current - 1,
    );
  };

  const project = projects[currentProject];

  const isDeployed = project.status === "finished" && project.link !== "-";

  return (
    <section
      id="projects"
      className="
        border-x-[3px]
        border-b-[3px]
        border-black
        bg-[#f5f5f0]
      "
    >
      {/* ========================================
          HEADER
      ======================================== */}

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
          <FolderCode size={21} strokeWidth={3} />

          <h2
            className="
              font-mono
              text-sm
              font-black
              uppercase
              sm:text-base
            "
          >
            Featured Projects
          </h2>
        </div>

        {/* NAVIGATION */}

        <div className="flex self-stretch">
          <button
            onClick={previousProject}
            aria-label="Previous project"
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
            onClick={nextProject}
            aria-label="Next project"
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
            <ArrowRight size={22} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* ========================================
          PROJECT
      ======================================== */}

      <div
        key={project.project_id}
        className="
          grid
          grid-cols-1
          lg:grid-cols-[1.25fr_0.75fr]
        "
      >
        {/* ========================================
            PROJECT IMAGE
        ======================================== */}

        <div
          className={`
            ${projectColors[currentProject % projectColors.length]}

            relative
            flex
            min-h-[420px]
            items-center
            justify-center
            overflow-hidden
            border-b-[3px]
            border-black
            p-8

            sm:p-12

            lg:min-h-[560px]
            lg:border-b-0
            lg:border-r-[3px]
          `}
        >
          {/* DECORATION */}

          <div
            className="
              absolute
              left-[8%]
              top-[10%]
              h-[100px]
              w-[100px]
              rotate-12
              border-[3px]
              border-black
              bg-lime-300
            "
          />

          <div
            className="
              absolute
              bottom-[8%]
              right-[8%]
              h-[70px]
              w-[70px]
              -rotate-12
              border-[3px]
              border-black
              bg-yellow-300
            "
          />

          {/* SCREENSHOT */}

          <div
            className="
              relative
              z-10
              w-full
              max-w-[720px]
              rotate-[-2deg]
              overflow-hidden
              border-[4px]
              border-black
              bg-white
              shadow-[12px_12px_0_#000]
              transition-all
              duration-300

              hover:rotate-0
              hover:scale-[1.01]
            "
          >
            {/* FAKE BROWSER BAR */}

            <div
              className="
                flex
                h-10
                items-center
                gap-2
                border-b-[3px]
                border-black
                bg-white
                px-4
              "
            >
              <span className="h-3 w-3 rounded-full border-2 border-black bg-red-400" />

              <span className="h-3 w-3 rounded-full border-2 border-black bg-yellow-300" />

              <span className="h-3 w-3 rounded-full border-2 border-black bg-lime-300" />

              <div
                className="
                  ml-3
                  h-5
                  flex-1
                  border-2
                  border-black
                  bg-neutral-100
                "
              />
            </div>

            {/* IMAGE */}

            <div className="relative aspect-[16/9]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>
          </div>
        </div>

        {/* ========================================
            PROJECT INFORMATION
        ======================================== */}

        <div
          className="
            flex
            flex-col
            justify-center
            bg-white
            px-7
            py-10
            sm:px-10
            lg:px-12
          "
        >
          {/* PROJECT NUMBER */}

          <div className="flex items-center gap-3">
            <span
              className="
                border-[3px]
                border-black
                bg-lime-300
                px-3
                py-2
                font-mono
                text-xs
                font-black
                shadow-[3px_3px_0_#000]
              "
            >
              {String(currentProject + 1).padStart(2, "0")}
            </span>

            <span
              className="
                font-mono
                text-xs
                font-black
                uppercase
              "
            >
              / {project.type}
            </span>
          </div>

          {/* TITLE */}

          <h3
            className="
              mt-7
              text-4xl
              font-black
              uppercase
              leading-[0.95]
              tracking-[-0.04em]
              sm:text-5xl
            "
          >
            {project.title}
          </h3>

          {/* TECHNOLOGY */}

          <div
            className="
              mt-5
              flex
              items-center
              gap-2
              font-mono
              text-xs
              font-black
              uppercase
            "
          >
            <Code2 size={17} strokeWidth={3} />

            {project.language}
          </div>

          {/* DESCRIPTION */}

          <p
            className="
              mt-6
              font-mono
              text-sm
              font-medium
              leading-7
              text-neutral-700
            "
          >
            {project.description}
          </p>

          {/* STATUS */}

          <div className="mt-7">
            {isDeployed ? (
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  border-[3px]
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
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-black
                  "
                />
                Live Project
              </span>
            ) : (
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  border-[3px]
                  border-black
                  bg-neutral-200
                  px-3
                  py-2
                  font-mono
                  text-[10px]
                  font-black
                  uppercase
                "
              >
                <Lock size={13} strokeWidth={3} />
                Not Deployed
              </span>
            )}
          </div>

          {/* BUTTON */}

          <div className="mt-8">
            {isDeployed ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  w-fit
                  items-center
                  gap-3
                  border-[3px]
                  border-black
                  bg-violet-600
                  px-6
                  py-3
                  font-mono
                  text-xs
                  font-black
                  uppercase
                  text-white
                  shadow-[5px_5px_0_#000]
                  transition-all

                  hover:translate-x-[2px]
                  hover:translate-y-[2px]
                  hover:shadow-[2px_2px_0_#000]
                "
              >
                <Globe size={16} strokeWidth={3} />
                View Project
                <ArrowUpRight size={17} strokeWidth={3} />
              </a>
            ) : (
              <div
                className="
                  flex
                  w-fit
                  cursor-not-allowed
                  items-center
                  gap-3
                  border-[3px]
                  border-black
                  bg-neutral-200
                  px-6
                  py-3
                  font-mono
                  text-xs
                  font-black
                  uppercase
                  text-neutral-500
                "
              >
                <Lock size={15} strokeWidth={3} />
                No Live Demo
              </div>
            )}
          </div>

          {/* ========================================
              COUNTER
          ======================================== */}

          <div
            className="
              mt-10
              border-t-[3px]
              border-black
              pt-5
            "
          >
            <div className="flex items-center justify-between">
              <span
                className="
                  font-mono
                  text-xs
                  font-black
                "
              >
                PROJECT
              </span>

              <span
                className="
                  font-mono
                  text-xs
                  font-black
                "
              >
                {String(currentProject + 1).padStart(2, "0")}
                {" / "}
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            {/* DOT INDICATOR */}

            <div className="mt-4 flex gap-2">
              {projects.map((item, index) => (
                <button
                  key={item.project_id}
                  onClick={() => setCurrentProject(index)}
                  aria-label={`Go to ${item.title}`}
                  className={`
                    h-3
                    border-2
                    border-black
                    transition-all

                    ${
                      currentProject === index
                        ? "w-8 bg-violet-600"
                        : "w-3 bg-white hover:bg-lime-300"
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
