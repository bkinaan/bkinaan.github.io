import Experience from "./experience";

export default function Experiences() {
  let saxbys = {
    role: "Shift Lead",
    company: "Saxbys Coffee",
    time: "Feb. 2024 - current",
    description:
      "As a shift lead for Saxbys, I manage and run the cafe alongside our SCEO. I am in charge of leading a group of team members to create various beverage and food items up to Saxbys standards. I also monitor the cafe for prep and delegate tasks to team members to maintain readiness for guests. In addition to working at the cafe, I am also enrolled in Saxbys Experiential Learning Platform. I am working on a number of badge courses to expand my skills both in and out of the cafe.",
    link: "https://saxbyscoffee.com",
    pos: "tl",
  };
  let sk = {
    role: "Seasonal Lead Counselor",
    company: "Steve and Kate's Camp",
    time: "May 2021 - Aug. 2024",
    description:
      "I worked as a lead counselor in a varying number of roles. I led the media lab that included animation iPads and programming applications. I also led the robotics studio that included Sphero and Vex robotics. I was also tasked with running two daily all-camp activities that included 200+ campers where I managed other counselors.",
    link: "https://steveandkatescamp.com",
    pos: "tr",
  };
  let library = {
    role: "Library Page",
    company: "Menlo Park Public Library",
    time: "Oct. 2018 - May 2020",
    description:
      "I worked first as an intern and then as a library helper where I shelved books and ensuring library services ran efficently. I also operated opening and closing procedures to ensure that the library was ready for patrons.",
    link: "https://menlopark.gov/Government/Departments/Library-and-Community-Services/Library",
    pos: "bl",
  };
  return (
    <div className="mb-10 pt-36">
      <div className="text-white text-4xl md:text-6xl text-center pb-10 font-ss3 font-black">
        Work Experience
      </div>
      <div className="grid grid-cols-2 gap-7">
        <Experience
          role={saxbys.role}
          company={saxbys.company}
          time={saxbys.time}
          description={saxbys.description}
          link={saxbys.link}
          pos={saxbys.pos}
        />
        <Experience
          role={sk.role}
          company={sk.company}
          time={sk.time}
          description={sk.description}
          link={sk.link}
          pos={sk.pos}
        />
        <Experience
          role={library.role}
          company={library.company}
          time={library.time}
          description={library.description}
          link={library.link}
          pos={library.pos}
        />
      </div>
    </div>
  );
}
