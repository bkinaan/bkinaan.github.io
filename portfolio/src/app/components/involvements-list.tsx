import Experience from "./experience";

export default function Involvements() {
    let cmfk = {
        role: "Vice President of Programming",
        company: "College Mentors for Kids",
        time: "Aug. 2021 - current",
        description: "I currently lead 50+ mentors and general managers every week as they mentor kids from the Greater Lafayette area. I ensure that activity runs smoothly and work to improve the overall club experience alongside the rest of the executive board. I have also developed algorithms for managing a ticket tracking system and am continously maintaining a database of everyone in the organization.",
        link: "https://collegementors.org",
        pos: "tl"
    }
    let mlp = {
        role: "Operations Officer",
        company: "Machine Learning @ Purdue",
        time: "June 2023 - current",
        description: "I develop and execute social events for a club of over 1000 members. These social events help to build community and prepare members for post-undergraduate experiences in machine learning and other computer science related fields.",
        link: "https://ml-purdue.github.io/",
        pos: "tr"
    }
    let pase = {
        role: "Board of Directors Member",
        company: "Purdue Alumni Student Experience",
        time: "Dec. 2021 - Dec. 2022",
        description: "As part of the Campus Traditions committee I planned and directed events for a 8000+ member organization as well as the entire Purdue campus. These events promoted community building and socialization between a diverse set of students. Some of these events included John Purdue's birthday, March Madness and Finals Study Lounge.",
        link: "https://www.purdueforlife.org/connect/pase/",
        pos: "bl"
    }
    return (
    <div className="mb-10 pt-36">
            <div className='text-6xl text-center pb-10 font-ss3 font-black'>Campus Involvement</div>
            <div className="grid grid-cols-2 gap-7">
                <Experience role={cmfk.role} company={cmfk.company} time={cmfk.time} description={cmfk.description} link={cmfk.link} pos={cmfk.pos}/>
                <Experience role={mlp.role} company={mlp.company} time={mlp.time} description={mlp.description} link={mlp.link} pos={mlp.pos}/>
                <Experience role={pase.role} company={pase.company} time={pase.time} description={pase.description} link={pase.link} pos={pase.pos}/>
            </div>
    </div>
    );
}