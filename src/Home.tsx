import React from 'react';

const Home: React.FC = () => {
    return (
        <>
            {/* INTRODUCTION */}
            <div className="Introduction text-left mt-20 space-y-6">
                <h1>Welcome to My Portfolio</h1>
                <h1 className="nowrap">
                    My name is <span className="text-cyan-500 font-bold text-3xl">James Bragg</span> I am an aspiring software developer
                </h1>
            </div>

            {/* DESCRIPTION + IMAGE ROW */}
            <div className="Picture flex flex-col md:flex-row items-start gap-8 mt-10 mb-20">

                {/* DESCRIPTION BOX */}
                <div className="Description border border-gray-700 bg-gray-700 p-6 rounded-lg text-white flex-1">
                <p> <span className="text-cyan-500 font-bold text-3xl">Greetings!</span> I am a dedicated and passionate software developer with a strong foundation in computer science and a deep interest in building innovative applications. 
                    My journey into coding began during my school years, where I quickly developed a love for problem-solving and creating efficient, elegant solutions. 
                </p> 
                <p className="mt-4"> Over the following years, I continued to refine my skills through college and university, earning a First-Class BSc in Computer Science from the University of Bedfordshire. 
                    During this time, I gained hands-on experience with a wide range of programming languages, tools, and frameworks, 
                    further strengthening both my technical abilities and my passion for software development. 
                </p>
                </div>

                {/* IMAGE — pushed far right */}
                <div className="md:ml-auto">
                    <img
                        src="/Favicon.jpeg"
                        alt="Jb Picture"
                        className="w-80 h-100 object-cover border border-gray-700 rounded-lg"
                    />
                </div>

            </div>
        </>
    );
};

export default Home;
