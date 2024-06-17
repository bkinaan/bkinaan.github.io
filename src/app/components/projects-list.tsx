import Project from "./project";

export default function Projects() {
  let serene = {
    name: "Serene",
    lang: "Python, Scala, JavaScript",
    desc: "A random forest classifier built to integrate Workday client data into database schema. Uses semantic labeling to predict mappings.",
    link: "https://github.com/bkinaan/serere-python-client",
    pos: "m",
  };

  let darktime = {
    name: "Darktime",
    lang: "Java",
    desc: "A synchronous discussion management platform built using Java GUI. Lets instructors and students collaborate in real time.",
    link: "https://kinaan.wixsite.com/darktime",
    pos: "m",
  };

  let shell = {
    name: "Shell",
    lang: "C, C++, Flex, Bison",
    desc: "Complete working shell. Parses inputs and exectutes commands. Click for a live demo.",
    link: "https://replit.com/@mannow7/shell#.ccls-cache/@@home@runner@C/@nix@store@4m98bsvjh538p292pr4604313mjmnpc5-clang-12.0.1-lib@lib@clang@12.0.1@include@stdarg.h",
    pos: "m",
  };

  let nn = {
    name: "Neural Network",
    lang: "Python",
    desc: "Currently following Andrej Karpathy's video series 'Zero to Hero' creating a deep neural network by hand.",
    link: "https://github.com/bkinaan/nn-karpathy",
    pos: "m",
  };

  let poke = {
    name: "Pokemon Database",
    lang: "JavaScript, HTML, CSS",
    desc: "Displays Pokemon as cards from PokeAPI. Users can create custom teams which get stored on Firebase. Click for a live demo.",
    link: "https://www.kinaan.me/software-saturdays-final-project/",
    pos: "bl",
  };

  let portfolio = {
    name: "Portfolio",
    lang: "TypeScript, HTML, CSS",
    desc: "This project. Created using Next.js and TailwindCSS. Hosted on GitHub Pages.",
    link: "https://github.com/bkinaan/bkinaan.github.io",
    pos: "br",
  };

  let dbserver = {
    name: "Database Server",
    lang: "JavaScript",
    desc: "A custom REST API built using Express, SQLite, and Sequelize with JWT authentication.",
    link: "https://github.com/bkinaan/purdue-cmfk-database-server",
    pos: "tl",
  };

  let dbclient = {
    name: "Database Client",
    lang: "TypeScript, JavaScript",
    desc: "A database client that lets users securely interact with a custom REST API. Tailored to each user individually.",
    link: "https://github.com/bkinaan/purdue-cmfk-database-client",
    pos: "tr",
  };

  return (
    <div>
      <div className="pb-32">
        {/* <div className="text-white text-4xl md:text-6xl text-center pb-10 font-ss3 font-black">
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
        </div> */}
      </div>
      <div className="text-white text-4xl md:text-6xl text-center pb-10 font-ss3 font-black">
        Notable Projects
      </div>
      <div className="grid grid-cols-2 gap-7">
        <Project
          name={dbserver.name}
          lang={dbserver.lang}
          desc={dbserver.desc}
          link={dbserver.link}
          pos={dbserver.pos}
        ></Project>
        <Project
          name={dbclient.name}
          lang={dbclient.lang}
          desc={dbclient.desc}
          link={dbclient.link}
          pos={dbclient.pos}
        ></Project>
        <Project
          name={serene.name}
          lang={serene.lang}
          desc={serene.desc}
          link={serene.link}
          pos={serene.pos}
        ></Project>
        <Project
          name={darktime.name}
          lang={darktime.lang}
          desc={darktime.desc}
          link={darktime.link}
          pos={darktime.pos}
        ></Project>
        <Project
          name={shell.name}
          lang={shell.lang}
          desc={shell.desc}
          link={shell.link}
          pos={shell.pos}
        ></Project>
        <Project
          name={nn.name}
          lang={nn.lang}
          desc={nn.desc}
          link={nn.link}
          pos={nn.pos}
        ></Project>
        <Project
          name={poke.name}
          lang={poke.lang}
          desc={poke.desc}
          link={poke.link}
          pos={poke.pos}
        ></Project>
        <Project
          name={portfolio.name}
          lang={portfolio.lang}
          desc={portfolio.desc}
          link={portfolio.link}
          pos={portfolio.pos}
        ></Project>
      </div>
    </div>
  );
}
