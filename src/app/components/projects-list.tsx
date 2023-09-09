import Project from './project';

export default function Projects() {
    let project = {
        name: "Serene",
        lang: "Python, Scala, Javascript",
        desc: "A random forest classifier built to integrate Workday client data into database schema. Uses semantic labeling to predict mappings.",
        link: "https://github.com/bkinaan/serere-python-client",
        pos: "tl",
    }

    let project2 = {
        name: "Darktime",
        lang: "Java",
        desc: "A synchronous discussion management platform built using Java GUI. Lets instructors and students collaborate in real time.",
        link: "https://kinaan.wixsite.com/darktime",
        pos: "tr",
    }

    let project3 = {
        name: "Shell",
        lang: "C, C++, Flex, Bison",
        desc: "Complete working shell. Parses inputs and exectutes commands. Click for a live demo.",
        link: "https://replit.com/@mannow7/shell#.ccls-cache/@@home@runner@C/@nix@store@4m98bsvjh538p292pr4604313mjmnpc5-clang-12.0.1-lib@lib@clang@12.0.1@include@stdarg.h",
        pos: "m",
    }

    let project4 = {
        name: "Web Server",
        lang: "C++",
        desc: "Serves files to a browser. Also uses built in authentication.",
        link: "#",
        pos: "m",
    }

    let project5 = {
        name: "Pokemon Database",
        lang: "Javascript, HTML, CSS",
        desc: "Displays Pokemon as cards from PokeAPI. Users can create custom teams which get stored on Firebase.",
        link: "https://github.com/bkinaan/software-saturdays-final-project",
        pos: "bl",
    }

    let project6 = {
        name: "Portfolio",
        lang: "Typescript, HTML, CSS",
        desc: "This project. Createad using Next.js and TailwindCSS. Hosted on GitHub Pages.",
        link: "https://github.com/bkinaan/bkinaan.github.io",
        pos: "br",
    }

    return (
    <div>
        <div className='text-white text-4xl md:text-6xl text-center pb-10 font-ss3 font-black'>Notable Projects</div>
        <div className='grid grid-cols-2 gap-7'>
            <Project name={project.name} lang={project.lang} desc={project.desc} link={project.link} pos={project.pos}></Project>
            <Project name={project2.name} lang={project2.lang} desc={project2.desc} link={project2.link} pos={project2.pos} ></Project>
            <Project name={project3.name} lang={project3.lang} desc={project3.desc} link={project3.link} pos={project3.pos}></Project>
            <Project name={project4.name} lang={project4.lang} desc={project4.desc} link={project4.link} pos={project4.pos}></Project>
            <Project name={project5.name} lang={project5.lang} desc={project5.desc} link={project5.link} pos={project5.pos}></Project>
            <Project name={project6.name} lang={project6.lang} desc={project6.desc} link={project6.link} pos={project6.pos}></Project>
        </div>
    </div>
    );
}