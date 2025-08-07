"use client";

import Projects from "./components/projects-list";
import Top from "./components/top";
import Skills from "./components/skills-section";
import Experiences from "./components/experiences-list";
import Involvements from "./components/involvements-list";
import Education from "./components/education";
import Job from "./components/job-list";
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
          <video
            className="z-0"
            autoPlay
            muted
            playsInline
            onEnded={(e) => {
              const videoElement = e.currentTarget;
              videoElement.src = "assets/name_cont_cropped.mp4"; // TODO: make this video longer
              videoElement.loop = true;
              videoElement.play();
            }}
          >
            <source src="assets/name_cropped.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="mb-36"></div>
        <Job />
        <Education />
        <div className="mb-48"></div>
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
