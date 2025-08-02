import Item from "./item";
import Title from "./section-title";

export default function Experiences() {
  let saxbys = {
    ttl: "Shift Lead",
    subttl: "Saxbys Coffee",
    subsubttl: "Feb. 2024 - May 2025",
    desc: (
      <>
        <ul className="list-disc pl-5">
          <li>
            Co-led daily café operations alongside the SCEO, ensuring efficient
            service and high-quality guest experiences
          </li>
          <li>
            Supervised and guided team members in preparing beverages and food
            items to meet Saxbys' standards
          </li>
          <li>
            Oversaw café readiness by monitoring prep levels and delegating
            tasks to maintain smooth operations
          </li>
          <li>
            Completed Saxbys Experiential Learning Platform badge courses in
            Strategic Marketing, Supply Chain Management, Training &
            Development, and Corporate Sustainability
          </li>
        </ul>
      </>
    ),
    link: "https://saxbyscoffee.com",
    pos: "tl",
  };
  let sk = {
    ttl: "Seasonal Lead Counselor",
    subttl: "Steve and Kate's Camp",
    subsubttl: "May 2021 - Aug. 2024",
    desc: (
      <>
        <ul className="list-disc pl-5">
          <li>
            Directed the Media Lab, leading animation and programming activities
            using iPads and coding applications
          </li>
          <li>
            Managed the Robotics Studio, guiding campers in hands-on projects
            with Sphero and VEX robotics
          </li>
          <li>
            Organized and led two daily all-camp activities for 200+ campers,
            supervising and coordinating other counselors
          </li>
        </ul>
      </>
    ),
    link: "https://steveandkatescamp.com",
    pos: "tr",
  };
  let library = {
    ttl: "Library Page",
    subttl: "Menlo Park Public Library",
    subsubttl: "Oct. 2018 - May 2020",
    desc: (
      <>
        <ul className="list-disc pl-5">
          <li>
            Shelved and organized books to maintain an efficient and accessible
            library system
          </li>
          <li>
            Supported daily library operations, including opening and closing
            procedures to ensure readiness for patrons
          </li>
          <li>
            Assisted with providing smooth library services to enhance the
            patron experience
          </li>
        </ul>
      </>
    ),
    link: "https://menlopark.gov/Government/Departments/Library-and-Community-Services/Library",
    pos: "bl",
  };
  return (
    <div className="mb-10 pt-36">
      <Title title="Work Experience" />
      <div className="grid grid-cols-2 gap-7">
        <Item data={saxbys} />
        <Item data={sk} />
        {/* <Item data={library} /> */}
      </div>
    </div>
  );
}
