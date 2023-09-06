import Projects from './components/projects-list';
import Top from './components/top';
import Skills from './components/skills-list';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Top />
            <div className="text-white pt-24 pb-0 text-4xl font-ss3 font-semibold text-center z-10">Hello there! I'm</div>
            <div>
                <video className="relative -mt-24 z-0" autoPlay muted>
                    <source src="assets/name.MP4" type="video/mp4"/>
                </video>
                <div className='z-20 relative -mt-48 mb-36 text-white pb-10 text-2xl italic font-ss3 font-light text-center'>A Junior studying Computer Science with a minor in Psychology at Purdue University.</div>
            </div>
            <div className='z-30'>
                <Projects />
            </div>
            <div className='mb-48'></div>
            <Skills />
            <a href='https://github.com/bkinaan/bkinaan.github.io'>
            <div className='text-white mt-16 mb-8 p-2 border-2 rounded-md shadow-md shadow-slate-100 hover:translate-y-2 hover:shadow-sm hover:shadow-slate-100 hover:text-black hover:bg-white transition duration-300 ease-in-out'>Made By Brandon Kinaan | Code on GitHub</div></a>
        </main>
    );
}