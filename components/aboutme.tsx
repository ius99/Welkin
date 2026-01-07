import Image from "next/image";
import TextGifCanvas from "@/parts/ascii";

export default function AboutMe() {
    return (
        <section className="w-full h-screen bg-white py-32 relative text-black ">
            <div className="grid grid-cols-24">
                <div className="col-start-2 col-end-7 h-full flex flex-col gap-2 justify-center items-start">
                    <span className="uppercase text-xl bg-[#39FF14] px-2">About</span>
                    <div className="text-6xl mt-12 font-light leading-tight text-black">
                        <span className="petit-formal">Shivansh</span>
                        <h1 className="petit-formal">Yadav</h1>
                        <div>
                            <Image
                                src="/Sshivansh.jpg"
                                alt="Profile Picture"
                                width={320}
                                height={320}
                                className="mt-8"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-start-7 col-end-11 h-full">
                    <div className="flex flex-col gap-14">
                        <span className="uppercase text-xl bg-[#39FF14] w-fit px-2">bio</span>
                        <p className="text-gray-700 text-md">
                            Born in Gurugram, India, I am a multidisciplinary designer and developer with a strong interest in technology and creativity.
                            <br /><br />
                            Since I was a child, I have always had a deep curiosity, which gradually transformed into a passion for design, programming, and building interactive experiences.
                            <br /><br />
                            Curiosity and the desire to create have shaped me into what I define as a multifaceted individual.
                        </p>

                    </div>
                </div>
                <div className="col-start-12 col-end-17 h-full">
                    <span className="text-xl uppercase bg-[#39FF14] px-2">CAREER</span>

                    <div className="flex flex-col gap-2 mt-10">
                        <div className="flex flex-col text-md text-gray-700">
                            <span>Sept 2025 – Present</span>
                            <h1>Member, Space Concordia Rovers Team</h1>
                            <h1>Concordia University, Montreal</h1>
                        </div>


                        <div className="mt-10 flex flex-col text-md text-gray-700">
                            <span>May 2023 – Aug 2024</span>
                            <h1>Software Developer Intern</h1>
                            <h1>Siscom India Pvt. Ltd.</h1>
                        </div>

                        <div className="mt-10 flex flex-col text-md text-gray-700">
                            <span>2023–2024</span>
                            <h1>Backend & Systems Projects</h1>
                            <h1>Independent / Open Source</h1>
                        </div>
                    </div>
                </div>

                <div className="col-start-18 col-end-22 h-full">
                    <span className="uppercase text-xl bg-[#39FF14] px-2">Education</span>
                    <div className="flex flex-col gap-10 mt-20">
                        <div>
                            <span>2011-2022</span>
                            <p>Amity International school, Gurugram, India</p>
                        </div>
                        <div>
                            <span>2022-present</span>
                            <p>Concordia University, Montreal, Canada</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fixed Marquee Section */}
            <div className="absolute bottom-0 h-[100px] w-full overflow-hidden bg-white  flex items-center ">
                <div className="absolute bottom-0 h-[100px] w-full overflow-hidden bg-white text-xl flex items-center">
                    <div className="flex animate-marquee whitespace-nowrap bg-[#39FF14]">
                        {/* First set of programming topics */}
                        <div className="flex items-center gap-16 min-w-max text-xl">
                            <h1 className="text-2xl font-medium">C++</h1>
                            <h1 className="text-2xl font-medium">VHDL</h1>
                            <h1 className="text-2xl font-medium">JavaScript</h1>
                            <h1 className="text-2xl font-medium">React</h1>
                            <h1 className="text-2xl font-medium">Next.js</h1>
                            <h1 className="text-2xl font-medium">TypeScript</h1>
                            <h1 className="text-2xl font-medium">Python</h1>
                            <h1 className="text-2xl font-medium">Tailwind CSS</h1>
                            <h1 className="text-2xl font-medium">Node.js</h1>
                            <h1 className="text-2xl font-medium">Git</h1>
                            <h1 className="text-2xl font-medium">REST APIs</h1>
                            <h1 className="text-2xl font-medium">MongoDB </h1>
                        </div>

                        {/* Second set with different programming topics */}
                        <div className="flex items-center gap-16 min-w-max">
                            <h1 className="text-2xl font-medium">HTML5</h1>
                            <h1 className="text-2xl font-medium">CSS3</h1>
                            <h1 className="text-2xl font-medium">Express.js</h1>
                            <h1 className="text-2xl font-medium">PostgreSQL</h1>
                            <h1 className="text-2xl font-medium">Docker</h1>
                            <h1 className="text-2xl font-medium">AWS</h1>
                            <h1 className="text-2xl font-medium">GraphQL</h1>
                            <h1 className="text-2xl font-medium">Redux</h1>
                            <h1 className="text-2xl font-medium">Java</h1>
                            <h1 className="text-2xl font-medium">C#</h1>
                            <h1 className="text-2xl font-medium">Swift</h1>
                            <h1 className="text-2xl font-medium">Kotlin</h1>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}