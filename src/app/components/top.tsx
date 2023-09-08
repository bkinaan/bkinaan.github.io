import TopButton from "./top-button";

export default function Top() {
    return(
        <div className="fixed bottom-0 right-0 z-50 pr-5 pt-5">
            <TopButton link="https://drive.google.com/file/d/18Z9dqORrvedFBLMUAjV9arA9NQeeEA6n/view?usp=drive_link" img="assets/resume_logo.png" label="Resume"/>
            <div></div>
            <TopButton link="https://github.com/bkinaan" img="assets/github_logo.png" label="GitHub"/>
            <div></div>
            <TopButton link="https://linkedin.com/in/brandonkinaan" img="assets/linkedin_logo.png" label="Linkedin"/>
        </div>
    );
}