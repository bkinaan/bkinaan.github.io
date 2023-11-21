import Experience from "./experience";

export default function Involvements() {
    let cmfk = {
        role: "Vice President of Programming",
        company: "College Mentors for Kids",
        time: "Aug. 2021 - current",
        description: "I am currently in charge of a dynamic team of 50+ mentors and general managers on a weekly basis, guiding them in mentoring children from the Greater Lafayette area. My role involves not only ensuring the seamless execution of activities but also collaborating with the executive board to enhance the overall club experience. Furthermore, I am consistently engaged in maintaining a comprehensive database encompassing every individual within the organization, ensuring streamlined operations and a well-organized structure.",
        link: "https://collegementors.org",
        pos: "tl"
    }
    let mlp = {
        role: "Mentor",
        company: "Launchpad",
        time: "Sept. 2023 - current",
        description: "I have taken on the role of mentoring a freshman in computer science, dedicating weekly meetings to collaboratively delve into a project. Our interactions extend beyond the academic realm, as we actively participate in social events aimed at fostering a sense of community within the computer science and data science spheres. This commitment not only enhances our project work but also contributes to a supportive and inclusive environment while sharing learning experiences among fellow members in the field.",
        link: "https://ml-purdue.github.io/",
        pos: "tr"
    }
    let pase = {
        role: "Board of Directors Member",
        company: "Purdue Alumni Student Experience",
        time: "Dec. 2021 - Dec. 2022",
        description: "In my role within the Campus Traditions committee, I orchestrated and executed events that captivated the engagement of over 8,000 members within the organization and resonated across the entirety of Purdue's campus. Notable highlights among these events included the celebration of John Purdue's birthday, the electrifying March Madness festivities, and the Finals Study Lounge.",
        link: "https://www.purdueforlife.org/connect/pase/",
        pos: "bl"
    }
    return (
    <div className="mb-10 pt-36">
            <div className='text-white text-4xl md:text-6xl text-center pb-10 font-ss3 font-black'>Campus Involvement</div>
            <div className="grid grid-cols-2 gap-7">
                <Experience role={cmfk.role} company={cmfk.company} time={cmfk.time} description={cmfk.description} link={cmfk.link} pos={cmfk.pos}/>
                <Experience role={mlp.role} company={mlp.company} time={mlp.time} description={mlp.description} link={mlp.link} pos={mlp.pos}/>
                <Experience role={pase.role} company={pase.company} time={pase.time} description={pase.description} link={pase.link} pos={pase.pos}/>
            </div>
    </div>
    );
}