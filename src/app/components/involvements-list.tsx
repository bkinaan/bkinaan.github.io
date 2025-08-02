import Item from "./item";

export default function Involvements() {
  let cmfk_pres = {
    ttl: "President",
    subttl: "College Mentors for Kids",
    subsubttl: "May 2024 - Apr. 2025",
    desc: "As President of College Mentors for Kids I operate and lead a 200+ member organization. I work alongside a team of 11 executive board members and a national office. My aim as President was to create a more engaging community and improve fundraising efforts of our chapter. This chapter is the largest in the nation, making up about ten percent of the entire national organization. Since my time as President has begun, there have been successful improvements in member engagement and community building. We have also made overwhelmingly positive strides in fundraising and hit the halfway point on our fundraising goal by the end of the fall semester. This is a goal not obtained by this chapter for five years. I won Chapter President of the Year and we have also won second place for overall Chapter of the Year.",
    link: "https://collegementors.org",
    pos: "tl",
  };

  let cmfk_vp = {
    ttl: "Vice President of Programming",
    subttl: "College Mentors for Kids",
    subsubttl: "Aug. 2021 - May 2024",
    desc: "As one of five VP of Programming, I was in charge of a dynamic team of 50+ mentors and general managers on a weekly basis, guiding them in mentoring children from the Greater Lafayette area. My role involved not only ensuring the seamless execution of activities but also collaborating with the executive board to enhance the overall club experience. I was consistently engaged in maintaining a comprehensive database encompassing every individual within the organization, ensuring streamlined operations and a well-organized structure.",
    link: "https://collegementors.org",
    pos: "tr",
  };
  let launchpad = {
    ttl: "Project Mentor",
    subttl: "Launchpad",
    subsubttl: "Sept. 2023 - Dec. 2023",
    desc: "As part of Launchpad, I was the mentor for a freshman in Computer Science, and we  dedicated weekly meetings to diving into a project together. Our connection goes beyond just academics as we attended social events that aim to build a strong sense of community within the computer science and data science circles. This commitment isn't just about our project; it's about creating a supportive and inclusive environment where we can all learn from each other's experiences and grow together in the field.",
    link: "https://launchpadpurdue.com/",
    pos: "m",
  };
  let pase = {
    ttl: "Board of Directors Member",
    subttl: "Purdue Alumni Student Experience",
    subsubttl: "Dec. 2021 - Dec. 2022",
    desc: "In my role within the Campus Traditions committee, I orchestrated and executed events created for the engagement of over 8,000 members within the organization and resonated across the entirety of Purdue's campus. Notable highlights among these events included the celebration of John Purdue's birthday, March Madness festivities, and the Finals Study Lounge.",
    link: "https://www.purdueforlife.org/connect/pase/",
    pos: "br",
  };

  let ih = {
    ttl: "Technical Mentor",
    subttl: "InnovateHer",
    subsubttl: "Mar. 2024, Jan. 2025",
    desc: "As a technical mentor for the 2024 and 2025 InnovateHer hackathons, I had the privilege of guiding and empowering aspiring female innovators. My role involved providing hands-on support, sharing technical insights, and offering strategic advice to help participants overcome challenges and realize their ideas. Through my mentorship, these talented individuals gained valuable skills and confidence, setting them on a path for success in the ever-evolving realm of technology and innovation. It was incredibly rewarding to contribute to a more diverse and inclusive industry landscape through this role.",
    link: "https://innovateherhacks.org/",
    pos: "m",
  };

  let bgr = {
    ttl: "Team Leader",
    subttl: "Boiler Gold Rush",
    subsubttl: "Aug. 2022, 2023",
    desc: "As a Team Leader, I worked with Purdue’s Orientation programs to introduce new students to campus and get them ready and situated for life in college. Before the week of the event kicked off I had a multi-day long training with a group of other TLs. I gained invaluable friendships and learned a number of useful skills I could apply even outside of the program including leadership, collaboration and facilitation. During the week-of, I led a group of about 12 new students through a series of events and activities that aimed to prepare them not only for further education but also a more independent life away from home.",
    link: "https://www.purdue.edu/orientation/bgr/index.html",
    pos: "bl",
  };
  return (
    <div className="mb-10 pt-36">
      <div className="font-ss3 pb-10 text-center text-4xl font-black text-white md:text-6xl">
        Leadership & Involvement
      </div>
      <div className="grid grid-cols-2 gap-7">
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
