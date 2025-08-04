import Item from "./item";
import Title from "./section-title";

export default function Involvements() {
  let cmfk_pres = {
    ttl: "President",
    subttl: "College Mentors for Kids",
    subsubttl: "May 2024 - Apr. 2025",
    desc: (
      <>
        <ul className="list-disc pl-5">
          <li>
            Led a 200+ member chapter, the largest in the national organization,
            alongside 11 executive board members
          </li>
          <li>
            Increased member engagement and strengthened community building
            initiatives across the chapter
          </li>
          <li>
            Drove fundraising success, reaching 50% of the annual goal by
            mid-year, a milestone not met in 5 years
          </li>
          <li>
            Recognized as Chapter President of the Year; chapter also awarded
            2nd place for Overall Chapter of the Year
          </li>
          <li>
            Partnered with the national office to align chapter initiatives with
            broader organizational goals
          </li>
        </ul>
      </>
    ),
    link: "https://collegementors.org",
    pos: "tl",
  };

  let cmfk_vp = {
    ttl: "Vice President of Programming",
    subttl: "College Mentors for Kids",
    subsubttl: "Aug. 2021 - May 2024",
    desc: (
      <>
        <ul className="list-disc pl-5">
          <li>
            Directed weekly operations for 50+ mentors and general managers
            mentoring local youth
          </li>
          <li>
            Oversaw execution of mentoring activities, ensuring quality
            engagement for children in the Greater Lafayette area
          </li>
          <li>
            Collaborated with the executive board to improve programming and
            mentor support
          </li>
          <li>
            Maintained a comprehensive membership database, streamlining
            operations and ensuring organizational efficiency
          </li>
        </ul>
      </>
    ),
    link: "https://collegementors.org",
    pos: "tr",
  };
  let launchpad = {
    ttl: "Project Mentor",
    subttl: "Launchpad",
    subsubttl: "Sept. 2023 - Dec. 2023",
    desc: (
      <>
        <ul className="list-disc pl-5">
          <li>
            Mentored a freshman Computer Science student through weekly
            project-based meetings
          </li>
          <li>
            Built a supportive mentor-mentee relationship extending beyond
            academics through community events
          </li>
          <li>
            Encouraged growth in both technical and interpersonal skills within
            the Computer Science and Data Science community
          </li>
          <li>
            Contributed to a welcoming and inclusive environment that supported
            peer learning and professional development
          </li>
        </ul>
      </>
    ),
    link: "https://launchpadpurdue.com/",
    pos: "m",
  };
  let pase = {
    ttl: "Board of Directors Member",
    subttl: "Purdue Alumni Student Experience",
    subsubttl: "Dec. 2021 - Dec. 2022",
    desc: (
      <>
        <ul className="list-disc pl-5">
          <li>
            Planned and executed large-scale campus events reaching 8,000+
            student participants
          </li>
          <li>
            Coordinated signature programs including John Purdue&apos;s
            Birthday, March Madness festivities, and the Finals Study Lounge
          </li>
          <li>
            Enhanced campus engagement by designing inclusive events that foster
            school spirit and community connection
          </li>
          <li>
            Collaborated with committee members to ensure smooth event
            operations and high student participation
          </li>
        </ul>
      </>
    ),
    link: "https://www.purdueforlife.org/connect/pase/",
    pos: "br",
  };

  let ih = {
    ttl: "Technical Mentor",
    subttl: "InnovateHer",
    subsubttl: "Mar. 2024, Jan. 2025",
    desc: (
      <>
        <ul className="list-disc pl-5">
          <li>
            Mentored aspiring female innovators by providing technical support,
            strategic advice, and hands-on guidance
          </li>
          <li>
            Helped participants overcome project challenges and develop
            innovative solutions in a competitive environment
          </li>
          <li>
            Fostered inclusivity and diversity in technology by empowering
            underrepresented voices in innovation
          </li>
          <li>
            Contributed to participants&apos; skill development and confidence,
            supporting their growth in STEM fields
          </li>
        </ul>
      </>
    ),
    link: "https://innovateherhacks.org/",
    pos: "m",
  };

  let bgr = {
    ttl: "Team Leader",
    subttl: "Boiler Gold Rush",
    subsubttl: "Aug. 2022, 2023",
    desc: (
      <>
        <ul className="list-disc pl-5">
          <li>
            Completed multi-day training to develop skills in leadership,
            collaboration, and facilitation
          </li>
          <li>
            Guided a group of 12 new students through orientation activities to
            ease their transition to college life
          </li>
          <li>
            Introduced incoming students to Purdue&apos;s campus, resources, and
            community to foster academic and social readiness
          </li>
          <li>
            Built lasting connections with students and peers, strengthening
            engagement within the orientation program
          </li>
        </ul>
      </>
    ),
    link: "https://www.purdue.edu/orientation/bgr/index.html",
    pos: "bl",
  };
  return (
    <div className="section-spacing">
      <Title title="Leadership & Involvement" />
      <div className="grid-layout">
        <Item data={cmfk_pres} />
        <Item data={cmfk_vp} />
        <Item data={ih} />
        <Item data={launchpad} />
        <Item data={bgr} />
        <Item data={pase} />
      </div>
    </div>
  );
}
