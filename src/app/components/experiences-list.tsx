import Experience from "./experience";

export default function Experiences() {
    let sk = {
        role: "Seasonal Lead Counselor",
        company: "Steve and Kate's Camp",
        time: "May 2021 - Aug. 2023",
        description: "I worked as a lead counselor in a variying number of roles. I led the media lab that included animation iPads and programming applications. I also led the robotics studio that included Sphero and Vex robotics. I was also tasked with running two daily all-camp activities that included 200+ campers where I managed other counselors.",
        link: "https://steveandkatescamp.com",
        pos: "l"
    }
    let library = {
        role: "Library Page",
        company: "Menlo Park Public Library",
        time: "Oct. 2018 - May 2020",
        description: "I worked first as an intern and then as a library helper where I shelved books and ensuring library services ran efficently. I also operated opening and closing procedures to ensure that the library was ready for patrons.",
        link: "https://menlopark.gov/Government/Departments/Library-and-Community-Services/Library",
        pos: "r"
    }
    return (
    <div className="mb-10 pt-36">
            <div className='text-white text-4xl md:text-6xl text-center pb-10 font-ss3 font-black'>Experience</div>
            <div className="grid grid-cols-2 gap-7">
                <Experience role={sk.role} company={sk.company} time={sk.time} description={sk.description} link={sk.link} pos={sk.pos}/>
                <Experience role={library.role} company={library.company} time={library.time} description={library.description} link={library.link} pos={library.pos}/>
            </div>
    </div>
    );
}