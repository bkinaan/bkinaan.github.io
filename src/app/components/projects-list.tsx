import Project from "./project";

export default function Projects() {
  let project = {
    name: "Serene",
    lang: "Python, Scala, JavaScript",
    desc: "A random forest classifier built to integrate Workday client data into database schema. Uses semantic labeling to predict mappings.",
    link: "https://github.com/bkinaan/serere-python-client",
    pos: "tl",
  };

  let project2 = {
    name: "Darktime",
    lang: "Java",
    desc: "A synchronous discussion management platform built using Java GUI. Lets instructors and students collaborate in real time.",
    link: "https://kinaan.wixsite.com/darktime",
    pos: "tr",
  };

  let project3 = {
    name: "Shell",
    lang: "C, C++, Flex, Bison",
    desc: "Complete working shell. Parses inputs and exectutes commands. Click for a live demo.",
    link: "https://replit.com/@mannow7/shell#.ccls-cache/@@home@runner@C/@nix@store@4m98bsvjh538p292pr4604313mjmnpc5-clang-12.0.1-lib@lib@clang@12.0.1@include@stdarg.h",
    pos: "m",
  };

  let project4 = {
    name: "Neural Network",
    lang: "Python",
    desc: "Currently following Andrej Karpathy's video series 'Zero to Hero' creating a deep neural network by hand.",
    link: "https://github.com/bkinaan/nn-karpathy",
    pos: "m",
  };

  let project5 = {
    name: "Pokemon Database",
    lang: "JavaScript, HTML, CSS",
    desc: "Displays Pokemon as cards from PokeAPI. Users can create custom teams which get stored on Firebase. Click for a live demo.",
    link: "https://www.kinaan.me/software-saturdays-final-project/",
    pos: "bl",
  };

  let project6 = {
    name: "Portfolio",
    lang: "TypeScript, HTML, CSS",
    desc: "This project. Created using Next.js and TailwindCSS. Hosted on GitHub Pages.",
    link: "https://github.com/bkinaan/bkinaan.github.io",
    pos: "br",
  };

  let current1 = {
    name: "Database Server",
    lang: "JavaScript",
    desc: "A custom REST API built using Express, SQLite, and Sequelize with JWT authentication.",
    link: "https://github.com/bkinaan/purdue-cmfk-database-server",
    pos: "l",
  };

  let current2 = {
    name: "Database Client",
    lang: "TypeScript, JavaScript",
    desc: "A database client that lets users securely interact with a custom REST API. Tailored to each user individually.",
    link: "https://github.com/bkinaan/purdue-cmfk-database-client",
    pos: "r",
  };

  return (
    <div>
      <div className="pb-32">
        <div className="text-white text-4xl md:text-6xl text-center pb-10 font-ss3 font-black">
          {`What I'm Working On`}
        </div>
        <div className="grid grid-cols-2 gap-7">
          <Project
            name={current1.name}
            lang={current1.lang}
            desc={current1.desc}
            link={current1.link}
            pos={current1.pos}
          ></Project>
          <Project
            name={current2.name}
            lang={current2.lang}
            desc={current2.desc}
            link={current2.link}
            pos={current2.pos}
          ></Project>
        </div>
      </div>
      <div className="text-white text-4xl md:text-6xl text-center pb-10 font-ss3 font-black">
        Notable Projects
      </div>
      <div className="grid grid-cols-2 gap-7">
        <Project
          name={project.name}
          lang={project.lang}
          desc={project.desc}
          link={project.link}
          pos={project.pos}
        ></Project>
        <Project
          name={project2.name}
          lang={project2.lang}
          desc={project2.desc}
          link={project2.link}
          pos={project2.pos}
        ></Project>
        <Project
          name={project3.name}
          lang={project3.lang}
          desc={project3.desc}
          link={project3.link}
          pos={project3.pos}
        ></Project>
        <Project
          name={project4.name}
          lang={project4.lang}
          desc={project4.desc}
          link={project4.link}
          pos={project4.pos}
        ></Project>
        <Project
          name={project5.name}
          lang={project5.lang}
          desc={project5.desc}
          link={project5.link}
          pos={project5.pos}
        ></Project>
        <Project
          name={project6.name}
          lang={project6.lang}
          desc={project6.desc}
          link={project6.link}
          pos={project6.pos}
        ></Project>
      </div>
    </div>
  );
}
