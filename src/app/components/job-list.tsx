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
            while on site with a client
          </li>
        </ul>
      </>
    ),
    link: "https://www.fdmgroup.com/us/",
    pos: "r",
  };

  let ver = {
    ttl: "Production Support Analyst",
    subttl: "Verition Fund Management (Consulted through FDM Group)",
    subsubttl: "Jul. 2025 - current",
    desc: (
      <>
        <ul className="list-disc pl-5">
          <li>
            Investigate data discrepancies across all production systems by
            querying and cross-referencing multiple sources to determine root
            cause, resolving approximately 20 issues per month
          </li>
          <li>
            Translate operational needs into requirements and prioritize the
            backlog for an internal trade workflow management platform, driving
            delivery of 60+ features in 8 months
          </li>
          <li>
            Build internal Python and Bash scripting tools to automate
            investigation steps
          </li>
          <li>
            Serve as subject-matter expert across industry-standard and internal
            production systems, partnering with numerous departments to
            proactively identify and drive improvements
          </li>
          <li>
            Facilitate collaboration across support, development, and business
            teams to resolve cross-departmental issues faster, reducing repeat
            escalations
          </li>
          <li>
            Use Claude AI to analyze relevant data during investigations, draft
            postmortems, and cut review time with all outputs verified manually
          </li>
        </ul>
      </>
    ),
    link: "https://verition.com",
    pos: "c",
  };

  return (
    <div className="mb-36">
      <Title title="Relevant Work" />
      <div className="">
        <Item data={ver} />
      </div>
    </div>
  );
}
