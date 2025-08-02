import Item from "./item";
import Title from "./section-title";

export default function Jobs() {
  let fdm = {
    ttl: "IT Operations Consultant",
    subttl: "FDM Group",
    subsubttl: "Jun. 2025 - current",
    desc: (
      <>
        <ul className="list-disc pl-5">
          <li>
            Completed intensive training under the IT Operations Practice at
            FDM, focusing on infrastructure, security, and production support
            for business-critical system
          </li>
          <li>
            Gained hands-on experience with system integration, deployment, and
            reliability engineering to ensure long-term operational success
          </li>
          <li>
            Developed skills to support infrastructure management, DevOps
            practices, and incident response in high-availability environments
          </li>
        </ul>
      </>
    ),
    link: "https://www.fdmgroup.com/us/",
    pos: "r",
  };

  let ver = {
    ttl: "Production Support Engineer",
    subttl: "Verition Fund Management",
    subsubttl: "Jul. 2025 - current",
    desc: (
      <>
        <ul className="list-disc pl-5">
          <li>
            Monitor and support production systems to ensure high availability,
            reliability, and performance for traders
          </li>
          <li>
            Troubleshoot and resolve real-time incidents, escalating complex
            issues to development or infrastructure teams as needed
          </li>
          <li>
            Conduct root cause analysis and document resolutions to prevent
            recurring issues
          </li>
          <li>
            Contribute to process improvements and automation to enhance
            efficiency and reduce downtime`,
          </li>
        </ul>
      </>
    ),
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
