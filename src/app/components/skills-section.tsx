import Title from "./section-title";
import SkillList from "./skill-list";

export default function Skills() {
  const lang = [
    "Java",
    "Python",
    "C",
    "C++",
    "Javascript",
    "Typescript",
    "Bash",
    "HTML",
    "CSS",
    "SQL",
  ];

  const framelibs = [
    "React",
    "Next.js",
    "TailwindCSS",
    "Swing",
    "Express",
    "SQLite",
    "Sequelize",
  ];

  const tools = [
    "Git",
    "GitHub",
    "VS Code",
    "IntelliJ",
    "Vim",
    "GDB",
    "Firebase",
    "Flex",
    "Bison",
  ];
  return (
    <div className="mb-10">
      <Title title="Technical Skills" />
      <div className="grid grid-cols-1">
        <div className="border-4 border-white pl-3 rounded-t-lg mb-10">
          <div className="text-white text-ss3 text-3xl md:text-5xl font-bold pt-3">
            Languages
          </div>
          <SkillList items={lang} />
        </div>

        <div className="border-4 border-white pl-3 mb-10">
          <div className="text-white text-ss3 text-3xl md:text-5xl font-bold pt-3">
            Frameworks/Libraries
          </div>
          <SkillList items={framelibs} />
        </div>

        <div className="border-4 border-white pl-3 rounded-b-lg">
          <div className="text-white text-ss3 text-3xl md:text-5xl font-bold pt-3">
            Developer Tools
          </div>
          <SkillList items={tools} />
        </div>
      </div>
    </div>
  );
}
