import Projects from "./components/projects-list";
import Top from "./components/top";
import Skills from "./components/skills-list";
import Experiences from "./components/experiences-list";
import Involvements from "./components/involvements-list";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Head>
        <meta
          name="google-site-verification"
          content="t0SUXRnA4CiotCvE58frOTKz2deLrIiYz_kmDzi2ZI8"
        />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between bg-black">
        <Top />
        <div className="text-black bg-white text-2xl md:text-4xl px-1 mb-4 md:p-2 mt-36 rounded-lg font-ss3 font-semibold text-center z-10">
          Hello, there! I&apos;m
        </div>
        <div className="pb-10">
          <video className="z-0" autoPlay muted playsInline>
            <source src="assets/name_cropped.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="z-20 py-1 md:py-5 mb-36 px-2 text-lg lg:text-2xl xl:text-2xl 2xl:text-4xl font-ss3 font-bold text-center text-black bg-white rounded-lg">
          Senior | Applied Data Science | Machine Intelligence | Computer
          Science @ Purdue University
        </div>
        <div className="z-30">
          <Projects />
        </div>
        <div className="mb-48"></div>
        <Skills />
        <Experiences />
        <Involvements />
        <a href="https://github.com/bkinaan/bkinaan.github.io" target="_blank">
          <div className="text-white p-2 mt-5 border-2 rounded-md shadow-md shadow-white hover:translate-y-2 hover:shadow-sm hover:shadow-white hover:text-black hover:bg-white transition duration-300 ease-in-out">
            Made by Brandon Kinaan | Code on GitHub
          </div>
        </a>
        <div className="pt-5"></div>
      </main>
    </div>
  );
}
