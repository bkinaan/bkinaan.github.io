import Experience from "./experience";

export default function Involvements() {
  let cmfk2 = {
    role: "President",
    company: "College Mentors for Kids",
    time: "May 2024 - current",
    description:
      "As President of College Mentors for Kids I operate and lead a 200+ organization of mentors, one of the largest chapters in the nation. I work alongside a team of 10 executive board members and a national office located in Indianapolis. My goal as President is to improve overall community engagement and fundraising of our chapter. My team and I have started working on new initiatives for improvement including a more streamlined communication system and rewarding point metrics for overall engagement across the club.",
    link: "https://collegementors.org",
    pos: "tl",
  };

  let cmfk = {
    role: "Vice President of Programming",
    company: "College Mentors for Kids",
    time: "Aug. 2021 - May 2024",
    description:
      "As one of five VP of Programming, I was in charge of a dynamic team of 50+ mentors and general managers on a weekly basis, guiding them in mentoring children from the Greater Lafayette area. My role involved not only ensuring the seamless execution of activities but also collaborating with the executive board to enhance the overall club experience. I was consistently engaged in maintaining a comprehensive database encompassing every individual within the organization, ensuring streamlined operations and a well-organized structure.",
    link: "https://collegementors.org",
    pos: "tr",
  };
  let launchpad = {
    role: "Project Mentor",
    company: "Launchpad",
    time: "Sept. 2023 - Dec. 2023",
    description:
      "As part of Launchpad, I was the mentor for a freshman in Computer Science, and we  dedicated weekly meetings to diving into a project together. Our connection goes beyond just academics – we attended social events that aim to build a strong sense of community within the computer science and data science circles. This commitment isn't just about our project; it's about creating a supportive and inclusive environment where we can all learn from each other's experiences and grow together in the field.",
    link: "https://www.instagram.com/launchpadpurdue/",
    pos: "m",
  };
  let pase = {
    role: "Board of Directors Member",
    company: "Purdue Alumni Student Experience",
    time: "Dec. 2021 - Dec. 2022",
    description:
      "In my role within the Campus Traditions committee, I orchestrated and executed events created for the engagement of over 8,000 members within the organization and resonated across the entirety of Purdue's campus. Notable highlights among these events included the celebration of John Purdue's birthday, March Madness festivities, and the Finals Study Lounge.",
    link: "https://www.purdueforlife.org/connect/pase/",
    pos: "bl",
  };

  let ih = {
    role: "Technical Mentor",
    company: "Innovate Her Hackathon",
    time: "March 2024",
    description:
      "As a technical mentor for the Innovate Her hackathon, I had the privilege of guiding and empowering aspiring female innovators. My role involved providing hands-on support, sharing technical insights, and offering strategic advice to help participants overcome challenges and realize their ideas. Through my mentorship, these talented individuals gained valuable skills and confidence, setting them on a path for success in the ever-evolving realm of technology and innovation. It was incredibly rewarding to contribute to a more diverse and inclusive industry landscape through this role.",
    link: "https://www.innovate-her.com/",
    pos: "m",
  };
  return (
    <div className="mb-10 pt-36">
      <div className="font-ss3 pb-10 text-center text-4xl font-black text-white md:text-6xl">
        Campus Involvement
      </div>
      <div className="grid grid-cols-2 gap-7">
        <Experience
          role={cmfk2.role}
          company={cmfk2.company}
          time={cmfk2.time}
          description={cmfk2.description}
          link={cmfk2.link}
          pos={cmfk2.pos}
        />
        <Experience
          role={cmfk.role}
          company={cmfk.company}
          time={cmfk.time}
          description={cmfk.description}
          link={cmfk.link}
          pos={cmfk.pos}
        />
        <Experience
          role={ih.role}
          company={ih.company}
          time={ih.time}
          description={ih.description}
          link={ih.link}
          pos={ih.pos}
        />
        <Experience
          role={launchpad.role}
          company={launchpad.company}
          time={launchpad.time}
          description={launchpad.description}
          link={launchpad.link}
          pos={launchpad.pos}
        />
        <Experience
          role={pase.role}
          company={pase.company}
          time={pase.time}
          description={pase.description}
          link={pase.link}
          pos={pase.pos}
        />
      </div>
    </div>
  );
}
