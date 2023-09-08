import Projects from './components/projects-list';
import Top from './components/top';
import Skills from './components/skills-list';
import Experiences from './components/experiences-list';
import Involvements from './components/involvements-list';
import Head from 'next/head';

export default function Home() {
    return (
        <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
            <main className="flex min-h-screen flex-col items-center justify-between bg-black">
                <Top />
                <div className="text-black bg-white text-2xl md:text-4xl p-2 mt-36 rounded-lg font-ss3 font-semibold text-center z-10">Hello, there! I&apos;m...</div>
                <div className='pb-10'>
                    <video className="z-0" autoPlay muted playsInline>
                        <source src="assets/name_cropped.mp4" type="video/mp4"/>
                    </video>
                </div>
                    <div className='z-20 py-5 mb-36 px-2 text-lg lg:text-2xl xl:text-2xl 2xl:text-4xl font-ss3 font-bold text-center text-black bg-white rounded-lg'>Junior | Honors | Machine Intelligence | Computer Science @ Purdue Univeristy</div>
                <div className='z-30'>
                    <Projects />
                </div>
                <div className='mb-48'></div>
                <Skills />
                <Experiences />
                <Involvements />
                <a href='https://github.com/bkinaan/bkinaan.github.io'>
                    <div className='text-white p-2 mt-5 border-2 rounded-md shadow-md shadow-slate-100 hover:translate-y-2 hover:shadow-sm hover:shadow-slate-100 hover:text-black hover:bg-white transition duration-300 ease-in-out'>Made by Brandon Kinaan | Code on GitHub</div>
                </a>
                <div className='pt-5'></div>
            </main>
        </div>
    );
}