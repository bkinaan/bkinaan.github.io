import Projects from './components/projects-list';
import Top from './components/top';
import Skills from './components/skills-list';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Top />
            <div className="text-black bg-white text-4xl p-2 mt-36 rounded-lg font-ss3 font-semibold text-center z-10">Hello there! I'm...</div>
            <div>
                <video className="z-0" autoPlay muted>
                    <source src="assets/name.MP4" type="video/mp4"/>
                </video>
            </div>
            <div className='z-20 mb-36 py-5 px-2 text-4xl font-ss3 font-bold text-center text-black bg-white rounded-lg scale-125'>Junior | Honors | Computer Science @ Purdue Univeristy</div>
            <div className='z-30'>
                <Projects />
            </div>
            <div className='mb-48'></div>
            <Skills />
            <a href='https://github.com/bkinaan/bkinaan.github.io'>
                <div className='text-white p-2 border-2 rounded-md shadow-md shadow-slate-100 hover:translate-y-2 hover:shadow-sm hover:shadow-slate-100 hover:text-black hover:bg-white transition duration-300 ease-in-out'>Made By Brandon Kinaan | Code on GitHub</div>
            </a>
            <div className='pt-10'></div>
        </main>
    );
}