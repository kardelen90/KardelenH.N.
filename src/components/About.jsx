import React from 'react';

function About() {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justifcenter w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-600">About</p>
                </div>
                <p className="text-xl mt-20">
                Hello! I'm Kardelen Kaya, an experienced Full Stack Developer. I started my journey in the
                software world by working on various projects, continuously enhancing my full-stack
                development skills along the way. I have expertise in languages such as Python, JavaScript,
                ReactJS, and Django, enabling me to provide unique and innovative solutions for each project.
                I value teamwork and continuously strengthen my problem-solving skills. Thanks to my focus
                on continuous learning and development, I expand my knowledge base through specific
                certifications and training programs.
                </p>
                <br />
                <p className="text-xl">Thank you!</p>
            </div>

        </div>
    )
}

export default About;
