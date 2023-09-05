import Project from './project';

export default function Projects() {
    let project = {
        name: "Serene",
        time: "Oct. 2022 - Dec. 2022",
        desc: "A random forest classifier built to integrate Workday client data into database schema. Uses semantic labeling to predict mappings.",
        link: "https://github.com/bkinaan/serere-python-client",
        pos: "tl",
    }

    let project2 = {
        name: "Darktime",
        time: "Oct. 2021 - Dec. 2021",
        desc: "A synchronous discussion management platform built using Java GUI. Lets instructors and students collaborate in real time.",
        link: "https://kinaan.wixsite.com/darktime",
        pos: "tr",
    }

    let project3 = {
        name: "Shell",
        time: "Mar. 2023 - Apr. 2022",
        desc: "Complete working shell. Parses inputs and exectutes commands. Click for a live demo.",
        link: "https://replit.com/@mannow7/shell#.ccls-cache/@@home@runner@C/@nix@store@4m98bsvjh538p292pr4604313mjmnpc5-clang-12.0.1-lib@lib@clang@12.0.1@include@stdarg.h",
        pos: "m",
    }

    let project4 = {
        name: "Web Server",
        time: "May 2023",
        desc: "Serves files to a browser. Also uses built in authentication.",
        link: "#",
        pos: "m",
    }

    let project5 = {
        name: "Pokemon Database",
        time: "Mar. 2023",
        desc: "Displays Pokemon data from PokeAPI. Users can create teams which get stored on Firebase.",
        link: "https://github.com/bkinaan/software-saturdays-final-project",
        pos: "bl",
    }

    let project6 = {
        name: "Portfolio",
        time: "Jun. 2023 - Sept. 2023",
        desc: "This project. Createad using NextJS and TailwindCSS. Hosted on GitHub Pages.",
        link: "https://github.com/bkinaan/bkinaan.github.io",
        pos: "br",
    }

    return (
    <div>
        <div className='text-6xl text-center pb-10 font-ss3 font-black'>Notable Projects</div>
        <div className='grid grid-cols-2 gap-7'>
            <Project name={project.name} time={project.time} desc={project.desc} link={project.link} pos={project.pos}></Project>
            <Project name={project2.name} time={project2.time} desc={project2.desc} link={project2.link} pos={project2.pos} ></Project>
            <Project name={project3.name} time={project3.time} desc={project3.desc} link={project3.link} pos={project3.pos}></Project>
            <Project name={project4.name} time={project4.time} desc={project4.desc} link={project4.link} pos={project4.pos}></Project>
            <Project name={project5.name} time={project5.time} desc={project5.desc} link={project5.link} pos={project5.pos}></Project>
            <Project name={project6.name} time={project6.time} desc={project6.desc} link={project6.link} pos={project6.pos}></Project>
        </div>
    </div>
    );
}