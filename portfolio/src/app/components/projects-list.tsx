import Project from './project';

export default function Projects() {
    let test = {
        name: "Serene",
        time: "Oct. 2022 - Dec. 2022",
        desc: "A random forest classifier built to integrate Workday client data into database schema. Uses semantic labeling to predict mappings.",
        link: "https://github.com/bkinaan/serere-python-client",
        pos: "tl",
    }

    let test2 = {
        name: "Darktime",
        time: "Oct. 2021 - Dec. 2021",
        desc: "A synchronous discussion management platform built using Java GUI. Lets instructors and students collaborate in real time.",
        link: "https://kinaan.wixsite.com/darktime",
        pos: "tr",
    }

    let test3 = {
        name: "Shell",
        time: "Mar. 2023 - Apr. 2022",
        desc: "Complete working shell. Parses inputs and exectutes commands. Click for a live demo.",
        link: "https://replit.com/@mannow7/shell#.ccls-cache/@@home@runner@C/@nix@store@4m98bsvjh538p292pr4604313mjmnpc5-clang-12.0.1-lib@lib@clang@12.0.1@include@stdarg.h",
        pos: "m",
    }

    let test4 = {
        name: "Web Server",
        time: "May 2023",
        desc: "Serves files to a browser. Also uses built in authentication.",
        link: "#",
        pos: "m",
    }

    let test5 = {
        name: "Pokemon Database",
        time: "Mar. 2023",
        desc: "Displays Pokemon data from PokeAPI. Users can create teams which get stored on Firebase.",
        link: "https://github.com/bkinaan/software-saturdays-final-project",
        pos: "bl",
    }

    let test6 = {
        name: "Portfolio",
        time: "Jun. 2023 - Sept. 2023",
        desc: "This project. Createad using NextJS and TailwindCSS. Hosted on GitHub Pages.",
        link: "",
        pos: "br",
    }

    return (
    <div>
        <div className='text-6xl text-center pb-10 font-ss3 font-black'>Notable Projects</div>
        <div className='grid grid-cols-2 gap-7'>
            <Project name={test.name} time={test.time} desc={test.desc} link={test.link} pos={test.pos}></Project>
            <Project name={test2.name} time={test2.time} desc={test2.desc} link={test2.link} pos={test2.pos} ></Project>
            <Project name={test3.name} time={test3.time} desc={test3.desc} link={test3.link} pos={test3.pos}></Project>
            <Project name={test4.name} time={test4.time} desc={test4.desc} link={test4.link} pos={test4.pos}></Project>
            <Project name={test5.name} time={test5.time} desc={test5.desc} link={test5.link} pos={test5.pos}></Project>
            <Project name={test6.name} time={test6.time} desc={test6.desc} link={test6.link} pos={test6.pos}></Project>
        </div>
    </div>
    );
}