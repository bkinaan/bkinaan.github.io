export default function Skills() {
    const langauges = [
        {
            name: "Java"
        },
        {
            name: "Python"
        },
        {
            name: "C"
        },
        {
            name: "C++"
        },
        {
            name: "Javascript"
        },
        {
            name:"Typescript"
        },
        {
            name: "Bash"
        },
        {
            name: "HTML"
        },
        {
            name: "CSS"
        },
        {
            name: "SQL"
        },
    ];

    const framebraries = [
        {
            name: "React"
        },
        {
            name: "Next.js"
        },
        {
            name: "TailwindCSS"
        },
        {
            name: "Swing"
        },
    ];

    const tools = [
        {
            name: "Git"
        },
        {
            name: "GitHub"
        },
        {
            name: "VS Code"
        },
        {
            name: "IntelliJ"
        },
        {
            name: "Vim"
        },
        {
            name: "GDB"
        },
        {
            name: "Firebase"
        },
        {
            name: "Flex"
        },
        {
            name: "Bison"
        },
    ];
    return (
        <div className="mb-10">
            <div className='text-white text-6xl text-center pb-10 font-ss3 font-black'>Technical Skills</div>
            <div className="border-4 border-white pl-3 rounded-t-lg mb-10">
                <div className="text-white text-ss3 text-5xl font-bold pt-3">Languages</div>
                <div className="grid grid-cols-6 text-center gap-3 py-3 pr-3">
                    {langauges.map((item, index) => (
                        <div key={index}>
                            <div className="text-white text-ss3 border-2 px-3 py-1 rounded-full">{item.name}</div>
                        </ div>
                    ))}
                </div>
            </div>

            <div className="border-4 border-white pl-3 mb-10">
                <div className="text-white text-ss3 text-6xl font-bold pt-3">Frameworks/Libraries</div>
                <div className="grid grid-cols-6 text-center gap-3 py-3 pr-3">
                    {framebraries.map((item, index) => (
                        <div key={index}>
                            <div className="text-white text-ss3 border-2 px-3 py-1 rounded-full">{item.name}</div>
                        </ div>
                    ))}
                </div>
            </div>

            <div className="border-4 border-white pl-3 rounded-b-lg">
                <div className="text-white text-ss3 text-5xl font-bold pt-3">Developer Tools</div>
                <div className="grid grid-cols-6 text-center gap-3 py-3 pr-3">
                    {tools.map((item, index) => (
                        <div key={index}>
                            <div className="text-white text-ss3 border-2 px-3 py-1 rounded-full">{item.name}</div>
                        </ div>
                    ))}
                </div>
            </div>

        </div>
    );
}