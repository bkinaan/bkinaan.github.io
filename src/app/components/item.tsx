"use client";

import { useEffect, useState } from "react";

type ItemProps = {
  ttl: string;
  subttl?: string;
  subsubttl?: string;
  desc: JSX.Element;
  link: string;
  pos: string;
};

export default function Item({ data }: { data: ItemProps }) {
  /* Positioning of elements:
        - tl => top left
        - tr => top right
        - m => middle
        - bl => bottom left
        - br => bottom right
    */
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let type = "";
  if (data.pos == "c" || isMobile) {
    type = `border-4 rounded-lg max-w-md shadow-lg shadow-white hover:translate-y-2 hover:shadow-md hover:shadow-white transition duration-300 ease-in-out mx-4w`;
  } else if (data.pos != "m") {
    type = `border-4 rounded-${data.pos}-lg max-w-md shadow-lg shadow-white hover:translate-y-2 hover:shadow-md hover:shadow-white transition duration-300 ease-in-out`;
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
      <div className="opacity-0 rounded-l-lg"></div>
      <div className="opacity-0 rounded-r-lg"></div>
      <div className="pl-3 pb-5 pr-3">
        <a href={data.link} target="_blank">
          <div className="text-white font-ss3 text-2xl md:text-5xl font-bold pt-3">
            {data.ttl}
          </div>
          <div className="text-white font-ss3 text-xl font-medium">
            {data.subttl}
          </div>
          <div className="text-white `font-ss3 font-thin pb-3">
            {data.subsubttl}
          </div>
          <div className="text-white font-ss3 whitespace-pre-line">
            {data.desc}
          </div>
        </a>
      </div>
    </div>
  );
}
