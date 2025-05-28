import Job from "./job";

export default function Jobs() {
  let fdm = {
    role: "IT Operations Consultant",
    company: "FDM Group",
    time: "Jun. 2025 - current",
    desc: "I am currently being trained under the IT Operations Pratice to support business-critical responsibilities and specialist areas such as infrastructure and security. I will be trained and placed with a client contributing to enhancing key system reliability through integration and deployment. These efforts will lead to long-term operational success for the client. I will be able to take on roles like DevOps, System Admin, or Site Reliability Engineer.",
    link: "https://www.fdmgroup.com/us/",
    pos: "c",
  };

  return (
    <div>
      <div className="text-white text-4xl md:text-6xl text-center pb-10 font-ss3 font-black">
        Relevant Work
      </div>
      <div className="grid grid-cols-2 gap-7">
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
