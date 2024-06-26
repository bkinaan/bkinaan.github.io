import { StaticImageData } from "next/image";

export default function Project(props: {
  name: string;
  lang: string;
  desc: string;
  link: string;
  pos: string;
}) {
  /* Positioning of elements:
        - tl => top left
        - tr => top right
        - m => middle
        - bl => bottom left
        - br => bottom right
    */
  let type = "";
  if (props.pos == "c") {
    type = `border-4 rounded-lg max-w-md shadow-lg shadow-white hover:translate-y-2 hover:shadow-md hover:shadow-white transition duration-300 ease-in-out`;
  } else if (props.pos != "m") {
    type = `border-4 rounded-${props.pos}-lg max-w-md shadow-lg shadow-white hover:translate-y-2 hover:shadow-md hover:shadow-white transition duration-300 ease-in-out`;
  } else {
    type =
      "border-4 max-w-md shadow-lg shadow-white hover:translate-y-2 hover:shadow-md hover:shadow-white transition duration-300 ease-in-out";
  }

  return (
    <div className={type}>
      <div className="opacity-0 rounded-tr-lg"></div>
      <div className="opacity-0 rounded-tl-lg"></div>
      <div className="opacity-0 rounded-br-lg"></div>
      <div className="opacity-0 rounded-bl-lg"></div>
      {/* <div className="border-4 max-w-md shadow-lg shadow-white hover:translate-y-2 hover:shadow-md hover:shadow-white transition duration-300 ease-in-out"> */}
      <div className="pl-3 pb-5 pr-3">
        <a href={props.link} target="_blank">
          <div className="text-white text-3xl md:text-5xl pt-3 font-ss3 font-bold">
            {props.name}
          </div>
          <div className="text-white font-ss3 font-thin pb-3">{props.lang}</div>
          <div className="text-white font-ss3">{props.desc}</div>
          {/* <div className="font-ss3 font-extralight">Check it out <a href={props.link}>here</a></div>   */}
        </a>
      </div>
    </div>
  );
}
