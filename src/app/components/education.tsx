import Item from "./item";
import Title from "./section-title";

export default function Education() {
  let purdue = {
    ttl: "B.S. Computer Science",
    subsubttl: "Purdue University, Aug. 2021 - May 2025",
    desc: "Earned a Bachelor of Science in Computer Science with a concentration in Machine Intelligence and a certificate in Applied Data Science from Purdue University's Main Campus.",
    link: "https://www.cs.purdue.edu/undergraduate/index.html",
    pos: "m",
  };
  return (
    <div>
      <Title title="Education" />
      <div className=" flex justify-center">
        <Item data={purdue} />
      </div>
    </div>
  );
}
