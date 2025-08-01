import Job from "./job";

export default function Jobs() {
  let fdm = {
    role: "IT Operations Consultant",
    company: "FDM Group",
    time: "Jun. 2025 - Jul. 2025",
    desc: "Under the IT Operations Pratice I trained to support business-critical responsibilities and specialist areas such as infrastructure and security. I worked to be placed with a client contributing to enhancing key system reliability through integration and deployment, leading to long-term operational success. Through this training I learned how to be prepared to take on roles such as DevOps, System Admin, Production Support Engineer or Site Reliability Engineer.",
    link: "https://www.fdmgroup.com/us/",
    pos: "r",
  };

  let ver = {
    role: "Production Support Engineer",
    company: "Verition Fund Management",
    time: "Jul. 2025 - current",
    desc: "As a Level 1 Production Support Engineer at Verition I monitor and support internal production systems to ensure high availablity, reliability, and performance for traders. Alongside a global team, I proactively identify, troubleshoot, and escalate technical issues, minimizing downtime and mitigating operational risk. I collaborate with trading, development, and infrastructure teams to drive quick resolutions and maintain system integrity. Through effective communication and coordination, I help ensure critical trading operations run smoothly in a fast-paced, high pressure environment.",
    link: "https://verition.com",
    pos: "l",
  };

  return (
    <div className="mb-36">
      <div className="text-white text-4xl md:text-6xl text-center pb-10 font-ss3 font-black">
        Relevant Work
      </div>
      <div className="grid grid-cols-2 gap-7">
        <Job
          role={ver.role}
          company={ver.company}
          time={ver.time}
          desc={ver.desc}
          link={ver.link}
          pos={ver.pos}
        ></Job>
        <Job
          role={fdm.role}
          company={fdm.company}
          time={fdm.time}
          desc={fdm.desc}
          link={fdm.link}
          pos={fdm.pos}
        ></Job>
      </div>
    </div>
  );
}
