import {
  Code2,
  Database,
  GitBranch,
  Server,
  Braces,
  Wrench,
  Globe,
  Plug,
  Boxes,
  Terminal,
} from "lucide-react";

const skillGroups = [
  {
    title: "Tech",
    icon: Code2,
    skills: [
      { name: "Node.js", icon: Server, bg: "bg-green-300" },
      { name: "Golang", icon: Braces, bg: "bg-cyan-300" },
      { name: "Laravel", icon: Code2, bg: "bg-red-300" },
      { name: "PHP", icon: Braces, bg: "bg-violet-300" },
      { name: "Vue.js", icon: Code2, bg: "bg-emerald-300" },
    ],
  },
  {
    title: "Technical Skills",
    icon: Wrench,
    skills: [
      {
        name: "Web Development",
        icon: Globe,
        bg: "bg-yellow-300",
      },
      {
        name: "API Integration",
        icon: Plug,
        bg: "bg-pink-300",
      },
    ],
  },
  {
    title: "Tools",
    icon: Boxes,
    skills: [
      {
        name: "Visual Studio Code",
        icon: Code2,
        bg: "bg-blue-300",
      },
      {
        name: "Postman",
        icon: Plug,
        bg: "bg-orange-300",
      },
      {
        name: "GitHub",
        icon: GitBranch,
        bg: "bg-neutral-200",
      },
      {
        name: "XAMPP",
        icon: Server,
        bg: "bg-orange-200",
      },
      {
        name: "MongoDB",
        icon: Database,
        bg: "bg-green-300",
      },
      {
        name: "Supabase",
        icon: Database,
        bg: "bg-emerald-300",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        border-x-[3px]
        border-b-[3px]
        border-black
        bg-lime-300
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
          px-6
          py-5
          sm:px-8
        "
      >
        <div className="flex items-center gap-3">
          <Terminal size={22} strokeWidth={3} />

          <h2
            className="
              font-mono
              text-lg
              font-black
              uppercase
              tracking-tight
            "
          >
            Skills
          </h2>
        </div>

        <span
          className="
            hidden
            font-mono
            text-[10px]
            font-black
            uppercase
            tracking-[0.15em]
            sm:block
          "
        >
          Tech Stack & Tools
        </span>
      </div>

      {/* ================= SKILL GROUPS ================= */}

      <div className="divide-y-[3px] divide-black">
        {skillGroups.map((group) => {
          const GroupIcon = group.icon;

          return (
            <div
              key={group.title}
              className="
                grid
                grid-cols-1
                lg:grid-cols-[220px_1fr]
              "
            >
              {/* CATEGORY */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  border-b-[3px]
                  border-black
                  bg-black
                  px-6
                  py-5
                  text-white

                  lg:border-b-0
                  lg:border-r-[3px]
                "
              >
                <GroupIcon
                  size={19}
                  strokeWidth={3}
                  className="text-lime-300"
                />

                <h3
                  className="
                    font-mono
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.12em]
                  "
                >
                  {group.title}
                </h3>
              </div>

              {/* ITEMS */}

              <div
                className="
                  flex
                  gap-4
                  overflow-x-auto
                  bg-lime-300
                  px-6
                  py-5

                  sm:px-8
                "
              >
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className={`
                        ${skill.bg}

                        flex
                        min-w-fit
                        cursor-default
                        items-center
                        gap-3
                        whitespace-nowrap
                        border-[3px]
                        border-black
                        px-4
                        py-3
                        shadow-[4px_4px_0_#000]
                        transition-all
                        duration-150

                        hover:translate-x-[2px]
                        hover:translate-y-[2px]
                        hover:shadow-[2px_2px_0_#000]
                      `}
                    >
                      <Icon
                        size={21}
                        strokeWidth={2.7}
                        className="shrink-0"
                      />

                      <span
                        className="
                          font-mono
                          text-xs
                          font-black
                        "
                      >
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}