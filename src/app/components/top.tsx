export default function Top() {
    return(
        <div className="fixed bottom-0 right-0 z-50 pr-5 pt-5">
            <a href="https://drive.google.com/file/d/18Z9dqORrvedFBLMUAjV9arA9NQeeEA6n/view?usp=drive_link">
            {/* <button className="bg-white rounded-full w-20 mb-4 max-w-md shadow-md shadow-slate-100 hover:translate-y-2 hover:shadow-md hover:shadow-slate-100 transition duration-300 ease-in-out"> */}
            <button className="bg-white rounded-full w-10 md:w-20 mb-4 max-w-md shadow-md shadow-slate-100 hover:translate-y-1 hover:shadow-sm hover:shadow-slate-100 transition duration-300 ease-in-out">
                <img className='' src="assets/resume_logo.png" alt="resume button" />
                {/* <div className="text-black pt-7">TEST</div> */}
            </button>
            </a>
            <div></div>
            <a href="https://github.com/bkinaan">
            <button className="bg-white rounded-full w-10 md:w-20 mb-4 max-w-md shadow-md shadow-slate-100 hover:translate-y-1 hover:shadow-sm hover:shadow-slate-100 transition duration-300 ease-in-out">
                <img src='assets/github_logo.png' alt="github button"></img>
            </button>
            </a>
            <div></div>
            <a href="https://linkedin.com/in/brandonkinaan">
            <button className="bg-white rounded-full w-10 md:w-20 mb-4 max-w-md shadow-md shadow-slate-100 hover:translate-y-1 hover:shadow-sm hover:shadow-slate-100 transition duration-300 ease-in-out">
            <img src='assets/linkedin_logo.png' alt="linkedin button"></img>
            </button>
            </a>
        </div>
    );
}