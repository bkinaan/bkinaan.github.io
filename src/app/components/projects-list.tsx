import Item from "./item";
import Title from "./section-title";

export default function Projects() {
  let serene = {
    ttl: "Serene",
    subsubttl: "Python, Scala, JavaScript",
    desc: (
      <>
        A random forest classifier built to integrate Workday client data into
        database schema. Uses semantic labeling to predict mappings.
      </>
    ),
    link: "https://github.com/bkinaan/serere-python-client",
    pos: "m",
  };

  let darktime = {
    ttl: "Darktime",
    subsubttl: "Java",
    desc: (
      <>
        A synchronous discussion management platform built using Java GUI. Lets
        instructors and students collaborate in real time.
      </>
    ),
    link: "https://kinaan.wixsite.com/darktime",
    pos: "m",
  };

  let shell = {
    ttl: "Shell",
    subsubttl: "C, C++, Flex, Bison",
    desc: (
      <>
        Complete working shell. Parses inputs and exectutes commands. Live demo
        coming soon.
      </>
    ),
    link: "https://github.com/bkinaan/crunit",
    pos: "m",
  };

  let nn = {
    ttl: "Neural Network",
    subsubttl: "Python",
    desc: (
      <>
        Currently following Andrej Karpathy&apos;s video series &apos;Zero to
        Hero&apos; creating a deep neural network by hand.
      </>
    ),
    link: "https://github.com/bkinaan/nn-karpathy",
    pos: "m",
  };

  let poke = {
    ttl: "Pokemon Database",
    subsubttl: "JavaScript, HTML, CSS",
    desc: (
      <>
        Displays Pokemon as cards from PokeAPI. Users can create custom teams
        which get stored on Firebase. Click for a live demo.
      </>
    ),
    link: "https://www.kinaan.me/software-saturdays-final-project/",
    pos: "bl",
  };

  let portfolio = {
    ttl: "Portfolio",
    subsubttl: "TypeScript, HTML, CSS",
    desc: (
      <>
        This project. Created from scratch using Next.js and TailwindCSS. Hosted
        on GitHub Pages.
      </>
    ),
    link: "https://github.com/bkinaan/bkinaan.github.io",
    pos: "br",
  };

  let dbserver = {
    ttl: "Database Server",
    subsubttl: "JavaScript",
    desc: (
      <>
        A custom REST API built using Express, SQLite, and Sequelize with JWT
        authentication.
      </>
    ),
    link: "https://github.com/bkinaan/purdue-cmfk-database-server",
    pos: "tl",
  };

  let dbclient = {
    ttl: "Database Client",
    subsubttl: "TypeScript, JavaScript",
    desc: (
      <>
        A database client that lets users securely interact with a custom REST
        API. Tailored to each user individually.
      </>
    ),
    link: "https://github.com/bkinaan/purdue-cmfk-database-client",
    pos: "tr",
  };

  let scm = {
    ttl: "Secure Contact Manager",
    subsubttl: "Python",
    desc: (
      <>
        A secure contact manager that includes advanced python topics. See the
        complete list of these topics in the checklist file.
      </>
    ),
    link: "https://github.com/bkinaan/scm",
    pos: "c",
  };

  return (
    <div>
      <div className="pb-32">
        <Title title="What I'm Working On" />
        <div className=" flex justify-center">
          <Item data={scm} />
        </div>
      </div>
      <Title title="Notable Projects" />
      <div className="grid grid-cols-2 gap-7">
        <Item data={dbserver} />
        <Item data={dbclient} />
        <Item data={serene} />
        <Item data={darktime} />
        <Item data={shell} />
        <Item data={nn} />
        <Item data={poke} />
        <Item data={portfolio} />
      </div>
    </div>
  );
}
