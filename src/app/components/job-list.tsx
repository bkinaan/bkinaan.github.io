import Item from "./item";
import Title from "./section-title";

export default function Jobs() {
  let fdm = {
    ttl: "IT Operations Consultant",
    subttl: "FDM Group",
    subsubttl: "Jun. 2025 - current",
    desc: "Under the IT Operations Pratice I trained to support business-critical responsibilities and specialist areas such as infrastructure and security. I worked to be placed with a client contributing to enhancing key system reliability through integration and deployment, leading to long-term operational success. Through this training I learned how to be prepared to take on roles such as DevOps, System Admin, Production Support Engineer or Site Reliability Engineer.",
    link: "https://www.fdmgroup.com/us/",
    pos: "r",
  };

  let ver = {
    ttl: "Production Support Engineer",
    subttl: "Verition Fund Management",
    subsubttl: "Jul. 2025 - current",
    desc: "As a Level 1 Production Support Engineer at Verition I monitor and support internal production systems to ensure high availablity, reliability, and performance for traders. Alongside a global team, I proactively identify, troubleshoot, and escalate technical issues, minimizing downtime and mitigating operational risk. I collaborate with trading, development, and infrastructure teams to drive quick resolutions and maintain system integrity. Through effective communication and coordination, I help ensure critical trading operations run smoothly in a fast-paced, high pressure environment.",
    link: "https://verition.com",
    pos: "l",
  };

  return (
    <div className="mb-36">
      <Title title="Relevant Work" />
      <div className="grid grid-cols-2 gap-7">
        <Item data={ver} />
        <Item data={fdm} />
      </div>
    </div>
  );
}
