export default function Experience(props: {role: string, company: string, time: string, description: string, link: string}) {
    return (
        <div className="border-4 max-w-md shadow-lg shadow-slate-100 hover:translate-y-2 hover:shadow-md hover:shadow-slate-100 transition duration-300 ease-in-out">
            <div className="pl-3 pb-5 pr-3">
                <a href={props.link}>
                    <div className="text-white font-ss3 text-5xl font-bold pt-3">{props.role}</div>
                    <div className="text-white font-ss3 text-xl font-medium">{props.company}</div>
                    <div className="text-white `font-ss3 font-thin pb-3">{props.time}</div>
                    <div className="text-white font-ss3">{props.description}</div>
                </a>
            </div>
        </div>

    );
}