import Item from "./item";
import Title from "./section-title";

export default function Experiences() {
  let saxbys = {
    ttl: "Shift Lead",
    subttl: "Saxbys Coffee",
    subsubttl: "Feb. 2024 - May 2025",
    desc: "As a shift lead for Saxbys, I manage and run the cafe alongside our SCEO. I am in charge of leading a group of team members to create various beverage and food items up to Saxbys standards. I also monitor the cafe for prep and delegate tasks to team members to maintain readiness for guests. In addition to working at the cafe, I am also enrolled in Saxbys Experiential Learning Platform. I have completed a number of badge courses to expand my skills both in and out of the cafe. These include Strategic Marketing, Supply Chain Management, Training & Development, and Corporate Sustainability.",
    link: "https://saxbyscoffee.com",
    pos: "tl",
  };
  let sk = {
    ttl: "Seasonal Lead Counselor",
    subttl: "Steve and Kate's Camp",
    subsubttl: "May 2021 - Aug. 2024",
    desc: "I worked as a lead counselor in a varying number of roles. I led the media lab that included animation iPads and programming applications. I also led the robotics studio that included Sphero and Vex robotics. I was also tasked with running two daily all-camp activities that included 200+ campers where I managed other counselors.",
    link: "https://steveandkatescamp.com",
    pos: "tr",
  };
  let library = {
    ttl: "Library Page",
    subttl: "Menlo Park Public Library",
    subsubttl: "Oct. 2018 - May 2020",
    desc: "I worked first as an intern and then as a library helper where I shelved books and ensured library services ran efficiently. I also operated opening and closing procedures to ensure that the library was ready for patrons.",
    link: "https://menlopark.gov/Government/Departments/Library-and-Community-Services/Library",
    pos: "bl",
  };
  return (
    <div className="mb-10 pt-36">
      <Title title="Work Experience" />
      <div className="grid grid-cols-2 gap-7">
        <Item data={saxbys} />
        <Item data={sk} />
        <Item data={library} />
      </div>
    </div>
  );
}
