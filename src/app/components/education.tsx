export default function Education() {
  return (
    <div>
      <div className="text-white text-4xl md:text-6xl text-center pb-10 font-ss3 font-black">
        Education
      </div>
      <div className="border-4 rounded-lg max-w-md shadow-lg shadow-white hover:translate-y-2 hover:shadow-md hover:shadow-white transition duration-300 ease-in-out">
        <div className="opacity-0 rounded-tr-lg"></div>
        <div className="opacity-0 rounded-tl-lg"></div>
        <div className="opacity-0 rounded-br-lg"></div>
        <div className="opacity-0 rounded-bl-lg"></div>
        <div className="pl-3 pb-5 pr-3">
          <a
            href="https://www.cs.purdue.edu/undergraduate/index.html"
            target="_blank"
          >
            <div className="text-white text-3xl md:text-5xl pt-3 font-ss3 font-bold">
              B.S. Computer Science
            </div>
            <div className="text-white font-ss3 font-thin pb-3">
              Purdue University, Aug. 2021 - May 2025
            </div>
            <div className="text-white font-ss3">
              Earned a Bachelor of Science in Computer Science with a
              concentration in Machine Intelligence and a certificate in Applied
              Data Science from Purdue University's Main Campus.
            </div>
            {/* <div className="font-ss3 font-extralight">Check it out <a href={props.link}>here</a></div>   */}
          </a>
        </div>
      </div>
    </div>
  );
}
